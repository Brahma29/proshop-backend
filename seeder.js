import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './Data/users.js';
import products from './Data/products.js';
import User from './models/UserModel.js';
import Product from './models/ProductModel.js';
import Order from './models/OrderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const ImportData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((eachProduct) => {
      return { ...eachProduct, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    console.log('Data Imported');
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const DestroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed');
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  DestroyData();
} else {
  ImportData();
}
