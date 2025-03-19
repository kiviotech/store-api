module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
 // url: env("PUBLIC_URL", "https://store.dhairyawanhsc.com"), // Base URL for your API
  admin: {
    url: env("ADMIN_URL", "/dashboard"), // Admin panel path
    auth: {
      secret: env("ADMIN_JWT_SECRET", "your-secret"),
    },
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  logger: {
    level: "debug",
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
