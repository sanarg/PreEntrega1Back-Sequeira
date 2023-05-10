import express from "express";
import productRouter from "./router/product.routes.js"
import cartRouter from "./router/carts.routes.js"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use("/api/products", productRouter)
app.use("/api/cart", productRouter)

app.listen(PORT, () =>{
    console.log(`Express server running on port ${PORT}`)
})