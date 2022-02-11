module.exports = {
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    'eslint:recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: ['vue', 'tailwindcss'],
  settings: {
    'tailwindcss': {
      'prependCustom': true
    }
  },
  rules: {
    // Force des espaces consistants dans les parenthèses
    'space-in-parens': ['error', 'never'],
    // pas de dernière virgule
    'comma-dangle': ['error', 'never'],
    // Force un espace avant et après un mot clé, if, else etc
    'keyword-spacing': ['error'],
    // Force un espace dans les objets
    'object-curly-spacing': ['error', 'always'],
    // imbrication des {} (if/else/try/catch/etc...) unique
    'brace-style': 'error',
    // triple = obligatoire
    eqeqeq: 'error',
    // espaces entre opérateurs
    'space-infix-ops': ['warn'],
    // Force les propriétés à être espacées Ex: { hello: 'World' } -> espace après le double point
    'key-spacing': ['error', { afterColon: true }],
    indent: ['error', 2],
    // Force les commentaires multi-lignes du type starred-block
    'multiline-comment-style': ['error', 'starred-block'],
    // Préfère les template string que les concaténations
    'prefer-template': 'error',
    curly: 'error', // {} toujours requises
    'quote-props': 'off', // controle des quotes autour des propriétés des objets
    'no-trailing-spaces': 'warn', // pas d'espaces vides
    semi: ['warn', 'never'], // pas de ";" à la fin des lignes
    'object-shorthand': 'warn'
  }
}
