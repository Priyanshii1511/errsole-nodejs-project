import dotenv from 'dotenv';
import express from "express";
import router from "./src/routes/helloRoute.js";

dotenv.config();
const app = express();
app.use("", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});