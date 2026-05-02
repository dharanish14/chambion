import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

console.log("Testing connection to:", process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Successfully connected!");
    process.exit(0);
  })
  .catch(err => {
    console.error("Connection failed with error:");
    console.error(err);
    process.exit(1);
  });
