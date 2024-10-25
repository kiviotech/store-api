module.exports = () => ({
  email: {
    config: {
      provider: "strapi-provider-email-sendgrid", // Ensure the correct package name
      providerOptions: {
        apiKey: "50f83f65abd3f91cee4a531874d41e00", // Replace with your actual SendGrid API key
      },
      settings: {
        defaultFrom: "juliasedefdjian@strapi.io",
        defaultReplyTo: "juliasedefdjian@strapi.io",
        testAddress: "juliasedefdjian@strapi.io",
      },
    },
  },

  
  upload: {
    config: {
      sizeLimit: 2500 * 1024 * 1024, // 256 MB in bytes
    },
  },
  bootstrap({ strapi }) {
    strapi.server.httpServer.requestTimeout = 30 * 60 * 1000; // Set request timeout to 30 minutes
  },
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
      },
    },
  },
});
