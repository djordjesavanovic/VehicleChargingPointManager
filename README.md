# Vehicle Charging Point Manager

Vehicle Charging Point Manager is a React Native application built using Expo and TypeScript to manage vehicle charging points. It leverages Realm for local data storage and management, React Native Paper for UI components, and a custom context for managing modals. The application allows users to add, edit, and delete vehicle charging points.

## Table of Contents

1. [Architecture](#architecture)
2. [Important Decisions and Trade-offs](#important-decisions-and-trade-offs)
3. [Installation](#installation)
4. [Running the App](#running-the-app)
5. [Folder Structure](#folder-structure)
6. [Components](#components)
7. [Context](#context)
8. [Models](#models)
9. [Styles](#styles)
10. [Contributing](#contributing)
11. [License](#license)

## Architecture

This application follows a modular and scalable architecture, ensuring separation of concerns and maintainability. The key elements of the architecture are:

- **Components:** Reusable UI components.
- **Context:** Context providers for managing global state (e.g., modals).
- **Models:** Realm models defining the schema for the database.
- **Styles:** Theming and styling for the application.

### Key Packages

- **React Native Paper:** Provides a set of customizable and easy-to-use Material Design components.
- **Realm:** A mobile database solution for handling complex data persistence needs.
- **Expo:** A framework and a platform for universal React applications.

## Important Decisions and Trade-offs

### Using React Context for State Management

**Description:**
React's Context API is used to manage modal visibility state through the `ModalContextProvider`.

**Trade-offs:**
- **Pros:** Simplifies state management without needing additional libraries. Easy to implement.
- **Cons:** May become cumbersome as the app grows, potentially requiring a switch to a more robust state management solution like Redux.

### Using Realm for Local Data Management

**Description:**
Realm is selected for its high performance and ease of handling complex data models.

**Trade-offs:**
- **Pros:** Excellent performance and simplified data management. Integrates well with React Native.
- **Cons:** Learning curve for new developers. Complexity in integrating remote data synchronization.

### Modular Component Structure

**Description:**
The app is organized into a modular structure with clear separation of concerns.

**Trade-offs:**
- **Pros:** Enhances maintainability, readability, and reusability. Facilitates easier testing and debugging.
- **Cons:** Slower initial development. Requires familiarity with the project structure.

### Using React Native Paper for UI Components

**Description:**
React Native Paper provides pre-designed, customizable UI components following Material Design guidelines.

**Trade-offs:**
- **Pros:** Accelerates UI development and ensures a consistent look and feel. Reduces custom styling needs.
- **Cons:** Limits custom UI design flexibility. May require additional work to extend or override styles.

### Leveraging Expo for Development

**Description:**
Expo streamlines development with features like over-the-air updates and simplified build processes.

**Trade-offs:**
- **Pros:** Simplifies setup and configuration. Provides a unified development experience and easy updates.
- **Cons:** Limits access to certain native functionalities. "Ejecting" from Expo introduces additional complexity.

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn
- Expo CLI

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/djordjesavanovic/VehicleChargingPointManager.git
   cd VehicleChargingPointManager
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the App

### iOS

1. Start the Metro bundler:
   ```bash
   npm run start
   # or
   yarn start
   ```

2. Run the app on an iOS simulator:
   ```bash
   npm run ios
   # or
   yarn ios
   ```

### Android

1. Start the Metro bundler:
   ```bash
   npm run start
   # or
   yarn start
   ```

2. Run the app on an Android emulator:
   ```bash
   npm run android
   # or
   yarn android
   ```

## Folder Structure

```
VehicleChargingPointManager/
├── .expo/
├── __tests__/
├── app/
│   ├── components/
│   │   ├── ChargingPointForm/
│   │   │   ├── ChargerTypeButtons.tsx
│   │   │   ├── ChargingPointForm.tsx
│   │   │   ├── LocationInput.tsx
│   │   │   ├── StatusButtons.tsx
│   │   │   └── index.tsx
│   │   ├── ChargingPointItem.tsx
│   │   ├── ChargingPointList.tsx
│   │   ├── ChargingPointManager.tsx
│   │   ├── EmptyState.tsx
│   │   └── index.tsx
│   ├── context/
│   │   ├── ModalContextProvider.tsx
│   ├── models/
│   │   ├── ChargingPoint.ts
│   │   └── index.ts
│   ├── styles/
│   │   ├── theme.ts
│   ├── App.tsx
│   └── AppWrapper.tsx
├── assets/
├── ios/
├── jest/
├── node_modules/
├── .gitignore
├── app.json
├── babel.config.js
├── index.js
├── jest.config.js
├── LICENSE
├── metro.config.js
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

### Description

- `.expo/`: Expo configuration files.
- `__tests__/`: Test files.
- `app/`: Main application directory.
    - `components/`: Contains all reusable UI components.
    - `context/`: Contains context providers for global state management.
    - `models/`: Realm models and schema definitions.
    - `styles/`: Theming and styling.
    - `App.tsx`: Main application component.
    - `AppWrapper.tsx`: Wrapper component that includes providers.
- `assets/`: Assets like images and fonts (if any).
- `ios/`: iOS-specific files.
- `jest/`: Jest configuration and setup.
- `node_modules/`: Installed npm packages.
- `.gitignore`: Specifies files to be ignored by Git.
- `app.json`: Expo configuration.
- `babel.config.js`: Babel configuration.
- `index.js`: Entry point for the application.
- `jest.config.js`: Jest configuration.
- `LICENSE`: License file.
- `metro.config.js`: Metro bundler configuration.
- `package-lock.json`: Lockfile for npm dependencies.
- `package.json`: npm configuration file.
- `README.md`: This file.
- `tsconfig.json`: TypeScript configuration.

## Components

### ChargingPointManager

The main component that manages the list of charging points. It handles adding, editing, and deleting charging points.

### ChargingPointForm

A form component for adding and editing charging points. It includes inputs for location, charger type, and status.

### ChargingPointItem

Represents a single charging point item in the list. It displays the location, charger type, and status, and provides options to edit or delete the item.

### ChargingPointList

A list component that renders multiple `ChargingPointItem` components.

### EmptyState

A component displayed when there are no charging points.

### ChargerTypeButtons, StatusButtons, LocationInput

Subcomponents used within the `ChargingPointForm` for specific input fields.

## Context

### ModalContextProvider

Provides context for managing the visibility of a modal. It includes a provider component and a custom hook (`useModal`) to access the context.

## Models

### ChargingPoint

A Realm model that defines the schema for a charging point. It includes fields for ID, location, charger type, status, and creation date.

## Styles

### theme.js

Defines the theme for the application, including colors, fonts, and other styling options.
