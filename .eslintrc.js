module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    parserOptions: {
        sourceType: "module",
    },
    rules: {
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"],
            },
            { blankLine: "always", prev: "directive", next: "*" },
            { blankLine: "any", prev: "directive", next: "directive" },
            { blankLine: "always", prev: ["case", "default"], next: "*" },
        ],
        "no-empty": "warn",
        "no-else-return": "error",
    },
};
