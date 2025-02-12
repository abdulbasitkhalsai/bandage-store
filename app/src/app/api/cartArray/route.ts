export const dynamic = "force-dynamic";

import SanityClient from "@/sanity/sanity.client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Fetch user's cart (contains references)
    const userQuery = `*[_type == "user" && userId == $userId][0].cart`;
    const cartRefs = await SanityClient.fetch(userQuery, { userId });

    if (!cartRefs || cartRefs.length === 0) {
      return NextResponse.json([]);
    }

    interface CartItem {
        _ref: string;
      }
      
      const productIds = cartRefs.map((item: CartItem) => item._ref);
      
    // Fetch full product details based on referenced product IDs
    // const productIds = cartRefs.map((item: any) => item._ref);
    const productQuery = `*[_type == "product" && _id in $productIds]{
      _id,
      productId,
      title,
      price,
      "imageUrl": image.asset->url
    }`;

    const cartItems = await SanityClient.fetch(productQuery, { productIds });

    return NextResponse.json(cartItems || []);
  } catch (error) {
    console.error("❌ Error fetching cart data:", error);
    return NextResponse.json({ error: "Failed to fetch cart data" }, { status: 500 });
  }
}
