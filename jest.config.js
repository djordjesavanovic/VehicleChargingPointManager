module.exports = {
    preset: 'react-native',
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
    ],
    setupFilesAfterEnv: [
        './jest/setup.js'
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/android/',
        '/ios/',
    ],
    globals: {
        __DEV__: true,
    },
};
