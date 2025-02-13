export const dynamic = "force-dynamic";

import SanityClient from "@/sanity/sanity.client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      console.error("❌ User ID is missing in the request");
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    console.log("📢 Fetching cart data for user:", userId);

    // Fixing the query to correctly extract products from the cart
    const userQuery = `*[_type == "user" && userId == $userId][0].cart[]{product->{_id, title, price, "imageUrl": productImage.asset->url}, quantity}`;
    const cartItems = await SanityClient.fetch(userQuery, { userId });

    console.log("🛒 Fetched cart items:", JSON.stringify(cartItems, null, 2));

    if (!cartItems || cartItems.length === 0) {
      console.warn("⚠️ No items found in cart for user:", userId);
      return NextResponse.json([]);
    }

    return NextResponse.json(cartItems);
  } catch (error) {
    console.error("❌ Error fetching cart data:", error);
    return NextResponse.json({ error: "Failed to fetch cart data" }, { status: 500 });
  }
}
