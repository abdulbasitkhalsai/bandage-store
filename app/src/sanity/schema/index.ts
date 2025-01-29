
import { cartSchema } from "./cart";
import { category } from "./category";
import { inventorySchema } from "./inventory";
import { orderSchema } from "./order";
import { paymentSchema } from "./payment";
import { product } from "./product";
import { userSchema } from "./user";
import { variantSchema } from "./variant";


export const schemaTypes = [product, category, inventorySchema, orderSchema, userSchema, paymentSchema, variantSchema, cartSchema ]
