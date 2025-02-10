export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import sanityClient from "@/sanity/sanity.client";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const productId = searchParams.get("productId");

    if (!userId || !productId) {
      return NextResponse.json({ error: "Missing userId or productId" }, { status: 400 });
    }

    // Fetch user by `userId` instead of `_id`
    const user = await sanityClient.fetch(`*[_type == "user" && userId == $userId][0]`, { userId });

    if (!user) {
      return NextResponse.json({ isWishlisted: false });
    }

    // Fetch product ID from Sanity
    const product = await sanityClient.fetch(`*[_type == "product" && productId == $productId][0]`, { productId });

    if (!product) {
      return NextResponse.json({ isWishlisted: false });
    }

    // Check if product is in the wishlist
    const isWishlisted = user.wishlist?.some((item: { _ref: string }) => item._ref === product._id) || false;

    return NextResponse.json({ isWishlisted });
  } catch (error) {
    console.error("Error checking wishlist:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
