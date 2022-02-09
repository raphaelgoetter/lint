# linter testing

## environnement et contexte

- VSCode
- (vanilla, pas d'environnement node / npm)
- extension Stylelint
- extention ESlint
- Extension Markdownlint

## constats

- Markdownlint fonctionne
- ESlint ne "peut pas formater le fichier .js"
- Stylelint ne formate ni .css ni .js (avec ou sans fichier `stylelintrc`)

## settings VSCode

```json
{
  ...
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.markdownlint": true,
    "source.fixAll.stylelint": true
  },
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false,
  "css.lint.unknownAtRules": "ignore",
  "scss.lint.unknownAtRules": "ignore",
  "eslint.format.enable": false,
  "stylelint.enable": true,
  "stylelint.validate": [
    "css",
    "less",
    "postcss",
    "scss",
    "sass"
  ],
}
```
