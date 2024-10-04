const { createCoreController } = require('@strapi/strapi').factories;
const razorpayService = require('../services/razorpay');

module.exports = createCoreController('api::order-detail.order-detail', ({ strapi }) => ({
  async create(ctx) {
    // First, create the order detail
    const { data, meta } = await super.create(ctx);
    
    // Then, create a Razorpay order
    const razorpayOrder = await razorpayService.createRazorpayOrder(data.attributes.total);
    
    // Update the order detail with the Razorpay order ID
    const updatedEntity = await strapi.entityService.update('api::order-detail.order-detail', data.id, {
      data: {
        razorpayOrderId: razorpayOrder.id
      }
    });

    return { data: updatedEntity, meta };
  },

  async updatePayment(ctx) {
    const { id } = ctx.params;
    const { razorpayPaymentId, razorpaySignature } = ctx.request.body;

    const entity = await strapi.entityService.findOne('api::order-detail.order-detail', id);

    if (!entity) {
      return ctx.throw(404, 'Order not found');
    }

    const isValid = razorpayService.verifyRazorpayPayment(
      entity.razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature
    );

    if (!isValid) {
      return ctx.throw(400, 'Invalid payment');
    }

    const updatedEntity = await strapi.entityService.update('api::order-detail.order-detail', id, {
      data: {
        razorpayPaymentId,
        razorpaySignature,
        status: 'paid' // Assuming you have a status field
      }
    });

    return this.transformResponse(updatedEntity);
  },
}));