module.exports = () => ({
  email: {
    config: {
      provider: '@strapi/provider-email-nodemailer',
      providerOptions: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      settings: {
        defaultFrom: process.env.SMTP_FROM,
        defaultReplyTo: process.env.SMTP_REPLY_TO,
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
