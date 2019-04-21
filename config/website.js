const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Sola - Property Management', // Navigation and Site Title
  siteTitleAlt: 'Sola', // Alternative Site title for SEO
  siteTitleShort: 'Sola', // short_name for manifest
  siteHeadline: 'Creating marvelous art & blazginly fast websites', // Headline for schema.org JSONLD
  siteUrl: '', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '', // Used for SEO and manifest
  siteDescription: '',
  author: '', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '', // Twitter Username
  ogSiteName: '', // Facebook Site Name
  ogLanguage: '', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
