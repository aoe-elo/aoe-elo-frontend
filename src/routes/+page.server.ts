import { sequelize } from "$lib/sequelize";
import { initModels } from "$lib/models/init-models";

// import models into sequelize instance
initModels(sequelize);

// const myOrders = await Order.findAll({ where: { "customerId": cust.id }, include: ['customer'] });

// const attr: OrderCreationAttributes = {
//     customerId: cust.id,
//     orderDate: new Date(),
//     orderNumber: "ORD123",
//     totalAmount: 223.45
// };
// const newOrder = await Order.create(attr);


try {
    await sequelize.authenticate();


    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}