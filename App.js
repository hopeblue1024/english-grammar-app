/**
 * App.js
 * ----------------------------------------------------------------
 * The entry point of the app.
 * Sets up React Navigation with a Stack Navigator.
 *
 * Screens:
 *   - ChapterList  : Shows all chapters grouped by section
 *   - ChapterDetail: Shows full content of a single chapter
 *
 * Navigation Library: @react-navigation/native
 *   - We use a native stack navigator for smooth screen transitions.
 * ----------------------------------------------------------------
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import our screens
import ChapterListScreen from './src/screens/ChapterListScreen';
import ChapterDetailScreen from './src/screens/ChapterDetailScreen';

// Create the stack navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // Hide default header — we build custom headers in each screen
        screenOptions={{ headerShown: false }}
        // First screen to show when the app opens
        initialRouteName="ChapterList"
      >
        {/* List screen — home of the app */}
        <Stack.Screen name="ChapterList" component={ChapterListScreen} />

        {/* Detail screen — opened when user taps a chapter */}
        <Stack.Screen name="ChapterDetail" component={ChapterDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
