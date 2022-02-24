module.exports = {
    clearMocks: true,
    verbose: true,
    testEnvironment: "jsdom",
    transform: {
        '^.+\\.tsx$': 'babel-jest'
    },
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    },
};
