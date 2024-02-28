module.exports = [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ],
  {
    settings: {
      parser: {
        enabled: true,
        multipart: true,
        formidable: {
          maxFileSize: 1 * 1024 * 1024 * 1024 // Sets the file size limit to 1GB
        }
      }
    },
};
