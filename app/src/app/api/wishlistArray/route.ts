export const dynamic = "force-dynamic"; // ✅ Forces dynamic execution


import SanityClient from "@/sanity/sanity.client";
import { NextRequest, NextResponse } from "next/server";

interface WishlistItem {
  _ref: string;
}

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("userId"); // ✅ Next.js recommended method

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Fetch user's wishlist (contains references)
    const userQuery = `*[_type == "user" && userId == $userId][0].wishlist`;
    const wishlistRefs: WishlistItem[] = await SanityClient.fetch(userQuery, { userId });

    if (!wishlistRefs || wishlistRefs.length === 0) {
      return NextResponse.json([]);
    }

    // Fetch full product details based on referenced product IDs
    const productIds = wishlistRefs.map((item) => item._ref);
    const productQuery = `*[_type == "product" && _id in $productIds]{
      _id,
      productId,
      title,
      price,
      "imageUrl": productImage.asset->url,
      "slug": slug.current
    }`;

    const wishlistItems = await SanityClient.fetch(productQuery, { productIds });

    return NextResponse.json(wishlistItems || []);
  } catch (error) {
    console.error("❌ Error fetching wishlist data:", error);
    return NextResponse.json({ error: "Failed to fetch wishlist data" }, { status: 500 });
  }
}
