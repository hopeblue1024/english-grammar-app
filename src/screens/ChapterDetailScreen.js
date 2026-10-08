/**
 * ChapterDetailScreen.js
 * ----------------------------------------------------------------
 * This screen shows the full content of a single grammar chapter.
 * It includes: overview, key concepts table, visual tip,
 * sentence patterns, common mistakes, and a mini quiz.
 *
 * Data is pulled from the chapters.js data file using the chapterId
 * passed via navigation params.
 * ----------------------------------------------------------------
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { getChapterById } from '../data/chapters';

const ChapterDetailScreen = ({ route, navigation }) => {
  // Get the chapter ID from the previous screen
  const { chapterId } = route.params;
  const chapter = getChapterById(chapterId);

  // Track which quiz answers are revealed
  const [revealedAnswers, setRevealedAnswers] = useState({});

  if (!chapter) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={{ padding: 20, color: '#ef4444' }}>Chapter not found.</Text>
      </SafeAreaView>
    );
  }

  /**
   * Toggle the visibility of a single quiz answer.
   * This gives learners a chance to think before seeing the answer.
   */
  const toggleAnswer = (index) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1e40af" />

      {/* Top Bar with back button */}
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Text style={styles.backIcon}>←</Text>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.chapterBadge}>Chapter {chapter.id}</Text>
      </View>

      {/* Scrollable content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.icon}>{chapter.icon}</Text>
          <Text style={styles.title}>{chapter.title}</Text>
          <Text style={styles.sectionName}>{chapter.section}</Text>
        </View>

        {/* Overview Box */}
        <View style={styles.overviewBox}>
          <Text style={styles.sectionLabel}>📖 Overview</Text>
          <Text style={styles.overviewText}>{chapter.overview}</Text>
        </View>

        {/* Key Concepts */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Key Concepts</Text>
          {chapter.keyConcepts.map((concept, idx) => (
            <View key={idx} style={styles.conceptRow}>
              <View style={styles.conceptLabelWrap}>
                <Text style={styles.conceptLabel}>{concept.label}</Text>
              </View>
              <View style={styles.conceptValueWrap}>
                <Text style={styles.conceptValue}>{concept.value}</Text>
                <Text style={styles.conceptExample}>"{concept.example}"</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Visual Tip */}
        <View style={styles.visualTipBox}>
          <Text style={styles.visualTipTitle}>💡 Visual Tip</Text>
          <Text style={styles.visualTipText}>{chapter.visualTip}</Text>
        </View>

        {/* Sentence Patterns */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Sentence Patterns & Examples</Text>
          {chapter.patterns.map((pattern, idx) => (
            <View key={idx} style={styles.patternBox}>
              <Text style={styles.patternStructure}>{pattern.structure}</Text>
              <View style={styles.patternExamples}>
                {pattern.examples.map((ex, i) => (
                  <Text key={i} style={styles.patternExample}>
                    • {ex}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Common Mistakes */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Common Mistakes to Avoid</Text>
          {chapter.mistakes.map((mistake, idx) => (
            <View key={idx} style={styles.mistakeBox}>
              <Text style={styles.mistakeWrong}>{mistake.wrong}</Text>
              <Text style={styles.mistakeRight}>{mistake.right}</Text>
              <Text style={styles.mistakeExplanation}>{mistake.explanation}</Text>
            </View>
          ))}
        </View>

        {/* Mini Quiz */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>🎯 Mini Quiz (Self-Check)</Text>
          <Text style={styles.quizSubtitle}>
            Test yourself! Tap "Show Answer" to check.
          </Text>
          {chapter.quiz.map((q, idx) => (
            <View key={idx} style={styles.quizItem}>
              <Text style={styles.quizNumber}>Q{idx + 1}</Text>
              <Text style={styles.quizQuestion}>{q.question}</Text>
              <TouchableOpacity
                style={styles.showAnswerBtn}
                onPress={() => toggleAnswer(idx)}
                activeOpacity={0.8}
              >
                <Text style={styles.showAnswerText}>
                  {revealedAnswers[idx] ? 'Hide Answer' : 'Show Answer'}
                </Text>
              </TouchableOpacity>
              {revealedAnswers[idx] && (
                <View style={styles.answerBox}>
                  <Text style={styles.answerLabel}>Answer:</Text>
                  <Text style={styles.answerText}>{q.answer}</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Encouragement footer */}
        <View style={styles.encouragementBox}>
          <Text style={styles.encouragementText}>
            🌟 Great job studying! Keep practicing — you're doing amazing!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  topBar: {
    backgroundColor: '#1e40af',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    color: '#ffffff',
    fontSize: 20,
    marginRight: 6,
    fontWeight: 'bold',
  },
  backText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  chapterBadge: {
    color: '#bfdbfe',
    fontSize: 13,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  titleSection: {
    backgroundColor: '#1e40af',
    paddingHorizontal: 20,
    paddingBottom: 28,
    paddingTop: 4,
  },
  icon: {
    fontSize: 42,
    marginBottom: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  sectionName: {
    fontSize: 14,
    color: '#bfdbfe',
  },
  overviewBox: {
    backgroundColor: '#f0f9ff',
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0c4a6e',
    marginBottom: 6,
  },
  overviewText: {
    fontSize: 14,
    color: '#0c4a6e',
    lineHeight: 22,
  },
  section: {
    marginTop: 28,
    paddingHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1e40af',
    marginBottom: 14,
  },
  conceptRow: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    overflow: 'hidden',
  },
  conceptLabelWrap: {
    backgroundColor: '#1e40af',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  conceptLabel: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 13,
  },
  conceptValueWrap: {
    padding: 12,
  },
  conceptValue: {
    fontSize: 14,
    color: '#1e293b',
    marginBottom: 4,
    fontWeight: '500',
  },
  conceptExample: {
    fontSize: 13,
    color: '#64748b',
    fontStyle: 'italic',
  },
  visualTipBox: {
    backgroundColor: '#fffbeb',
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
    marginHorizontal: 16,
    marginTop: 24,
    padding: 16,
    borderRadius: 8,
  },
  visualTipTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#92400e',
    marginBottom: 6,
  },
  visualTipText: {
    fontSize: 13,
    color: '#78350f',
    lineHeight: 20,
  },
  patternBox: {
    backgroundColor: '#f0fdf4',
    borderWidth: 1,
    borderColor: '#bbf7d0',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  patternStructure: {
    fontSize: 13,
    color: '#0d9488',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  patternExamples: {
    marginLeft: 8,
  },
  patternExample: {
    fontSize: 13,
    color: '#1e293b',
    lineHeight: 20,
    marginBottom: 4,
  },
  mistakeBox: {
    backgroundColor: '#fef2f2',
    borderLeftWidth: 4,
    borderLeftColor: '#ef4444',
    padding: 14,
    marginBottom: 10,
    borderRadius: 8,
  },
  mistakeWrong: {
    color: '#ef4444',
    fontSize: 13,
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  mistakeRight: {
    color: '#10b981',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  mistakeExplanation: {
    color: '#7f1d1d',
    fontSize: 12,
    lineHeight: 18,
  },
  quizSubtitle: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 14,
  },
  quizItem: {
    backgroundColor: '#faf5ff',
    borderWidth: 1,
    borderColor: '#c4b5fd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  quizNumber: {
    fontSize: 12,
    fontWeight: '700',
    color: '#7c3aed',
    marginBottom: 4,
  },
  quizQuestion: {
    fontSize: 14,
    color: '#1e293b',
    lineHeight: 22,
    marginBottom: 10,
  },
  showAnswerBtn: {
    backgroundColor: '#8b5cf6',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  showAnswerText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  answerBox: {
    marginTop: 10,
    backgroundColor: '#ecfdf5',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#6ee7b7',
  },
  answerLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#10b981',
    marginBottom: 2,
  },
  answerText: {
    fontSize: 14,
    color: '#065f46',
    fontWeight: '600',
  },
  encouragementBox: {
    marginTop: 30,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    alignItems: 'center',
  },
  encouragementText: {
    fontSize: 14,
    color: '#1e40af',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ChapterDetailScreen;
