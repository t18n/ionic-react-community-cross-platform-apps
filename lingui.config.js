module.exports = {
  locales: ['en', 'vi'], // Available locales
  fallbackLocale: 'en', // Default locale
  sourceLocale: 'en', // Add default value to English
  catalogs: [
    {
      path: '<rootDir>/src/locale/{locale}/messages',
      include: ['<rootDir>'],
      exclude: ['**/node_modules/**'],
    },
  ],
  format: 'minimal', // Use json as format to store trans
};
