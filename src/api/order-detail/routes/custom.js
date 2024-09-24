module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/createOrder',
            handler: 'api::order-detail.order-detail.createOrder',
            config: {
                policies: [],
                auth: false
            }
        }
    ]
}