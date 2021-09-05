module.exports = {
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.[tj]sx?$':'./jest.transform.js',
        '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
    },
};


// https://stackoverflow.com/questions/67124009/jest-keeps-trying-to-parse-css-module-even-after-using-identity-obj-proxy
// https://github.com/storybookjs/storybook/issues/11376#issuecomment-757417250
