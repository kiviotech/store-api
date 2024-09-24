// 'use strict';

// /**
//  * order-detail controller
//  */


// const Razorpay = require('razorpay');

// const instance = new Razorpay({
//     key_id: 'rzp_test_JAWNkdMtKfXiDP',
//     key_secret: 'p44bP82SY6T5EwscHpPVWCQ5'
// })

// //const { createCoreController } = require('@strapi/strapi').factories;
// import { factories } from '@strapi/strapi';
// const { createCoreController } = factories;


// export default createCoreController('api::order-detail.order-detail');




'use strict';

const Razorpay = require('razorpay');

const instance = new Razorpay({
    key_id: 'rzp_test_uDZhFEvvfY56Z1',
    key_secret: 'XlYP8hYFjCM4PcEfv2GQbkML'
});

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order-detail.order-detail', ({ strapi }) => ({
    async createOrder(ctx) {
        const { amount, currency, receipt, notes } = ctx.request.body;
        const options = {
            amount,
            currency,
            receipt,
            notes
        };
        try {
            // const response = await instance.orders.create(options);
            // return response;
            return instance.orders.create({
                "amount": 50000,
                "currency": "INR",
                "receipt": "receipt#1",
                "partial_payment": false,
                "notes": {
                  "key1": "value3",
                  "key2": "value2"
                }
               })
        } catch (error) {
            return error;
        }
    }
}));