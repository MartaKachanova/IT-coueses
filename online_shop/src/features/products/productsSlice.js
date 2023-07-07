import { createSlice } from '@reduxjs/toolkit'
import db from "../../db";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: db.productsDb,
  },
 
})

export default productsSlice.reducer