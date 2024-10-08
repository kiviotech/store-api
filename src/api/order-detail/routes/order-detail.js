'use strict';

/**
 * order-detail router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::order-detail.order-detail');

// module.exports = {
//   routes: [
//     // Keep the existing routes
//     {
//       method: 'POST',
//       path: '/order-details',
//       handler: 'order-detail.create',
//       config: {
//         policies: [],
//         middlewares: [],
//       },
//     },
//     // Add this new route
//     {
//       method: 'PUT',
//       path: '/order-details/:id/payment',
//       handler: 'order-detail.updatePayment',
//       config: {
//         policies: [],
//         middlewares: [],
//       },
//     },
//   ],
// };
