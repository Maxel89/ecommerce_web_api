import asyncHandler from "express-async-handler";
import conndb from "../config/db.js";

const getProductsList = async () => {
  let products = await conndb.query(
    `SELECT id FROM products;`
  );
  return products;
};

// @desc    GET univirsities
// @route   POST /api/university/getproducts
// @access  Private
const getProducts = asyncHandler(async (req, res) => {
  let productResult = await getProductsList();
  if (!productResult.length) {
    res.status(404);
    throw new Error("products not found");
  }

  res.json(productResult);
});

export { getProducts };
