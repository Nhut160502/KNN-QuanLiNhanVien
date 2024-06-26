import mongoose from "mongoose";
import "dotenv/config";

const db = {
  connect: () => {
    mongoose
      .connect(process.env.DATABASE_URL)
      .then(() => {
        console.log("Connect database successfully!");
      })
      .catch((err) => {
        console.log(err);
        // throw new Error("Connect database failed!");
      });
  },
};

export default db;
