import express from "express";
const router = express.Router();
import {
  getProducts
} from "../controllers/productsController.js";

router.route("/all").get(
  getProducts
);


export default router;
