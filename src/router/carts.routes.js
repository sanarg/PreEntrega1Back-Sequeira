import { Router } from "express";
import cartManager from "../controllers/cartManager.js";

const cartRouter = Router()
const carts = new cartManager

cartRouter.post("/", async (req, res) =>{
    res.send (await carts.addCarts())
})

cartRouter.get ('/', async (req, res) =>{
    res.send(await carts.readProducts())
})

export default cartRouter