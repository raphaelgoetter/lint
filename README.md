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
- Stylelint ne formate ni .css ni .scss (avec ou sans fichier `stylelintrc`)

Après modifications / enregistrements des fichiers .js, .css et .scss : "Aucune problème n'a été détecté dans l'espace de travail"

**IMPORTANT** : "normalement" [c'est censé marcher](https://stackoverflow.com/questions/69149058/why-the-stylelint-vscode-extension-is-not-working-on-my-computer).

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
  "eslint.format.enable": true,
  "stylelint.enable": true,
  "stylelint.config": null,
  "stylelint.validate": [
    "css",
    "less",
    "postcss",
    "scss",
    "sass"
  ],
}
```
