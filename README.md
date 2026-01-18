# Task Tracker Mobile

## App Preview

![Get Started Screen](/screenshots/get-started.png)
![Login Screen](/screenshots/login.png)

## About

Task Tracker Mobile is a cross-platform mobile application designed to help users organize their tasks, boost productivity, and achieve their goals with ease. The app provides an intuitive interface for managing daily tasks with features to track active, completed, and deleted tasks.

### Key Features

- **User Authentication**: Secure sign-up and login functionality to protect user data
- **Task Management**: Create, view, and organize tasks efficiently
- **Task Categories**: Separate views for active tasks, completed tasks, and deleted tasks
- **Modern UI**: Clean and intuitive interface with a beautiful design
- **Cross-Platform**: Works seamlessly on iOS, Android, and web platforms

## Navigation Structure

The app uses a tab-based navigation system with three main sections:

- **Tasks Tab**: View and manage your active tasks
- **Completed Tab**: Review all completed tasks
- **Deleted Tab**: Access deleted tasks with restoration options

## Built With

- **React Native** (v0.81.5) - Mobile framework
- **Expo** (v54.0.31) - Development platform
- **TypeScript** (v5.9.2) - Type-safe JavaScript
- **Expo Router** (v6.0.21) - File-based routing and navigation
- **React Navigation** - Bottom tabs and native navigation
- **Lucide React Native** - Icon library
- **Expo Haptics** - Tactile feedback
- **React Native Reanimated** - Smooth animations

### Prerequisites

Before running this project, you should have:

- Node.js (v16 or higher)
- npm or yarn package manager
- Basic knowledge of React Native and TypeScript
- Expo CLI installed globally
- For iOS development: Xcode (Mac only)
- For Android development: Android Studio and Android SDK

## Clone Project

To get a local copy up and running, follow these steps:

### Command Line Steps

```bash
# Clone the repository
git clone git@github.com:Chu29/task-tracker-mobile.git

# Navigate to the project directory
cd task-tracker-mobile/frontend

# Install dependencies
npm install
```

## Start App

### Development Mode

```bash
# Start the development server
npm start
# or
npx expo start
```

After running the start command, you'll see options to:

- Press **a** to open on Android emulator
- Press **i** to open on iOS simulator
- Press **w** to open in web browser
- Scan the QR code with Expo Go app on your physical device

### Platform-Specific Commands

```bash
# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on web
npm run web
```

## Project Structure

```
frontend/
├── app/                    # Application screens and routing
│   ├── (tabs)/            # Tab-based screens
│   │   ├── TaskScreen.tsx
│   │   ├── CompletedScreen.tsx
│   │   └── DeletedScreen.tsx
│   ├── GetStartedScreen.tsx
│   ├── LoginScreen.tsx
│   ├── SignUpScreen.tsx
│   └── _layout.tsx
├── assets/                # Images and static files
│   └── images/
├── components/            # Reusable components
│   ├── Button.tsx
│   └── Icon.tsx
├── app.json              # Expo configuration
├── package.json          # Dependencies
└── tsconfig.json         # TypeScript configuration
```

## Lint

```bash
# Run ESLint
npm run lint
```

## Author

👤 **Author**

- GitHub: [@Chu29](https://github.com/Chu29)
- Twitter: [@chu_codes](https://x.com/chu_codes)
- LinkedIn: [Chu Abumekeze M.K](https://www.linkedin.com/in/chu-abuemkeze/)

## Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/yourusername/task-tracker-mobile/issues).

## Show Your Support

Give a ⭐️ if you like this project!

## License

This project is [MIT](./LICENSE) licensed.
