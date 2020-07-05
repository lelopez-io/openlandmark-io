module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
    },
    plugins: ["ghost", "react", "@typescript-eslint"],
    extends: [
        "plugin:ghost/node",
        "plugin:ghost/ember",
        "plugin:react/recommended",
    ],
    settings: {
        react: {
            createClass: "createReactClass",
            pragma: "React",
            version: "16.0",
            flowVersion: "0.53",
        },
        propWrapperFunctions: ["forbidExtraProps"],
    },
    rules: {
        "ghost/sort-imports-es6-autofix/sort-imports-es6": "off",
        "ghost/ember/use-ember-get-and-set": "off",
        "no-console": "off",
        "no-inner-declarations": "off",
        "valid-jsdoc": "off",
        "require-jsdoc": "off",
        quotes: ["error", "backtick"],
        "consistent-return": ["error"],
        "arrow-body-style": [
            "error",
            "as-needed",
            { requireReturnForObjectLiteral: true },
        ],
        "jsx-quotes": ["error", "prefer-double"],
        semi: [2, "always"],
        "object-curly-spacing": ["error", "always"],
        "comma-dangle": [
            "error",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "ignore",
            },
        ],
        "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
        "@typescript-eslint/explicit-function-return-type": "off",
    },
    overrides: [
        // Override some TypeScript rules just for .js files
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off", //
            },
        },
    ],
};
