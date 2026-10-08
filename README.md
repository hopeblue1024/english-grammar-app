# 📘 English Grammar Guide — Android App

A mobile app version of the "English for Everyone" grammar tutorial. Built with **React Native + Expo** for cross-platform support (Android & iOS).

---

## ✨ Features

- **21 Grammar Chapters** — Present Tenses, Past Tenses, Future, Passive, Conditionals, and more
- **Chapter List View** — Browse chapters organized by section with emoji icons
- **Chapter Detail View** — Full content with key concepts, examples, and common mistakes
- **Interactive Mini Quizzes** — Test yourself with tap-to-reveal answers
- **Clean, Readable UI** — Designed for English learners (simple, clear, no clutter)
- **Works on Android & iOS** — One codebase, both platforms

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Native** | Cross-platform mobile framework |
| **Expo SDK 50** | Toolchain for easy React Native development |
| **React Navigation v6** | Screen navigation (stack navigator) |
| **JavaScript** | Programming language |

---

## 📂 Project Structure

```
GrammarApp/
├── App.js                          # Entry point — sets up navigation
├── app.json                        # Expo configuration
├── package.json                    # Dependencies and scripts
├── babel.config.js                 # Babel setup
├── .gitignore                      # Files to ignore in Git
├── assets/                         # Images, icons, splash screen
└── src/
    ├── data/
    │   └── chapters.js             # ALL chapter content (data layer)
    └── screens/
        ├── ChapterListScreen.js    # Home screen — list of chapters
        └── ChapterDetailScreen.js  # Detail screen — full chapter content
```

---

## 🚀 How to Run the App

### Prerequisites

1. Install **Node.js** (version 18 or newer) from [nodejs.org](https://nodejs.org/)
2. Install the **Expo Go** app on your Android phone (from Google Play Store)
   - *Or* set up an Android emulator (see below)

### Step 1: Install dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

This installs all required packages (React Native, Expo, Navigation, etc.).

### Step 2: Start the development server

```bash
npx expo start
```

You will see a QR code in the terminal.

### Step 3: Run on your device

**Option A — Physical Android Device (easiest):**
1. Open the **Expo Go** app on your phone
2. Tap **"Scan QR Code"**
3. Scan the QR code from your terminal
4. The app will load on your phone! 🎉

**Option B — Android Emulator:**
1. Install [Android Studio](https://developer.android.com/studio)
2. Create a virtual device (AVD) — pick any modern phone profile
3. Start the emulator
4. In your terminal (where Expo is running), press **`a`**
5. Expo will build and install the app on the emulator automatically

**Option C — iOS Simulator (Mac only):**
1. Install Xcode from the Mac App Store
2. In the terminal, press **`i`**
3. The app will open in the iOS Simulator

### Other useful commands

```bash
npx expo start            # Start the dev server
npx expo start --android  # Open directly on Android
npx expo start --ios      # Open directly on iOS (Mac only)
npx expo start --web      # Run in a web browser (for quick testing)
```

---

## 📤 How to Build a Standalone Android APK

When you want to share the app as a `.apk` file:

```bash
# Install EAS CLI (Expo Application Services)
npm install -g eas-cli

# Login with your Expo account (create one at expo.dev)
eas login

# Configure the build
eas build:configure

# Build for Android (APK)
eas build -p android --profile preview
```

You'll get a download link for your APK file!

---

## 📝 How to Add New Chapters

All chapter data lives in `src/data/chapters.js`. To add a new chapter:

1. Open `src/data/chapters.js`
2. Add a new object to the `CHAPTERS` array
3. Follow the same structure as existing chapters
4. Save — the app will automatically include it in the list

The UI reads from this data file, so no changes to screens are needed!

---

## 💡 Tips for Learning

- Start with Chapter 1 (Present Simple) and work your way through
- Try each mini quiz before tapping "Show Answer"
- Practice by writing your own example sentences
- Use the app for 10-15 minutes every day for best results

Happy learning! 🌟
