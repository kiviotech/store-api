// api/auth/controllers/send-otp.js
const crypto = require("crypto");
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = new twilio(accountSid, authToken);

module.exports = {
  async sendOtp(ctx) {
    const { phoneNumber } = ctx.request.body.data;
    console.log(ctx.request.body); // Log the request body for debugging
    if (!phoneNumber) {
      return ctx.badRequest("Phone number is required");
    }

    // Generate a 6-digit OTP
    const otp = crypto.randomInt(1000, 9999);

    try {
      await client.messages.create({
        body: `Your OTP is ${otp}`,
        from: twilioPhoneNumber,
        to: phoneNumber,
      });

      // Optionally, send the OTP in the response (not recommended for production)
      return ctx.send({ message: "OTP sent successfully", otp: otp });
    } catch (error) {
      return ctx.internalServerError("Failed to send OTP");
    }
  },


  
};
