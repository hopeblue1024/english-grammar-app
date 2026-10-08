/**
 * ChapterListScreen.js
 * ----------------------------------------------------------------
 * This screen shows a list of all grammar chapters organized by section.
 * Users can tap on any chapter to open its detail view.
 *
 * UI pattern: Section List (grouped list with section headers)
 * Navigation: Tap a chapter → ChapterDetailScreen
 * ----------------------------------------------------------------
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { CHAPTERS } from '../data/chapters';

/**
 * Build section data for the SectionList component.
 * Groups chapters by their "section" property.
 */
const buildSections = () => {
  const sectionMap = {};

  CHAPTERS.forEach((chapter) => {
    if (!sectionMap[chapter.section]) {
      sectionMap[chapter.section] = [];
    }
    sectionMap[chapter.section].push(chapter);
  });

  // Convert map to array of { title, data } objects
  return Object.keys(sectionMap).map((sectionName) => ({
    title: sectionName,
    data: sectionMap[sectionName],
  }));
};

const ChapterListScreen = ({ navigation }) => {
  const sections = buildSections();

  /**
   * Render a single chapter item in the list.
   * Wraps in TouchableOpacity so it's tappable.
   */
  const renderChapterItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chapterCard}
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate('ChapterDetail', {
          chapterId: item.id,
          title: item.title,
        })
      }
    >
      <Text style={styles.chapterIcon}>{item.icon}</Text>
      <View style={styles.chapterInfo}>
        <Text style={styles.chapterNumber}>Chapter {item.id}</Text>
        <Text style={styles.chapterTitle}>{item.title}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );

  /**
   * Render the section header (e.g., "Present Tenses", "Past Tenses").
   */
  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionBar} />
      <Text style={styles.sectionTitle}>{section.title}</Text>
      <Text style={styles.sectionCount}>{section.data.length} chapters</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1e40af" />

      {/* App Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📘 English Grammar</Text>
        <Text style={styles.headerSubtitle}>Learn grammar the easy way</Text>
      </View>

      {/* Chapter List */}
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderChapterItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

/**
 * StyleSheet — all styles for this screen.
 * Using a consistent blue theme that matches the web tutorial.
 */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#1e40af',
    paddingHorizontal: 20,
    paddingVertical: 24,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#bfdbfe',
    marginTop: 4,
  },
  listContent: {
    paddingBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 10,
    backgroundColor: '#f8fafc',
  },
  sectionBar: {
    width: 4,
    height: 20,
    backgroundColor: '#f59e0b',
    borderRadius: 2,
    marginRight: 10,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#1e40af',
  },
  sectionCount: {
    fontSize: 12,
    color: '#64748b',
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  chapterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  chapterIcon: {
    fontSize: 28,
    marginRight: 14,
    width: 40,
    textAlign: 'center',
  },
  chapterInfo: {
    flex: 1,
  },
  chapterNumber: {
    fontSize: 11,
    color: '#f59e0b',
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  chapterTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
  },
  chevron: {
    fontSize: 22,
    color: '#cbd5e1',
    fontWeight: '300',
  },
});

export default ChapterListScreen;
