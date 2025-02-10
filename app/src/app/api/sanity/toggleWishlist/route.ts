import { NextResponse } from "next/server";
import sanityClient from "@/sanity/sanity.client";

// Define the type for wishlist items
interface WishlistItem {
  _ref: string;
  _key: string;
}

export async function POST(req: Request) {
  console.log("toggleWishlist API Hit");
  try {
    const { userId, productId } = await req.json();
    console.log("Received userId:", userId, "productId:", productId);

    if (!userId || !productId) {
      return NextResponse.json({ error: "Missing userId or productId" }, { status: 400 });
    }

    // Fetch user by userId
    const user = await sanityClient.fetch(
      `*[_type == "user" && userId == $userId][0]`,
      { userId }
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Fetch product _id from Sanity using productId
    const product = await sanityClient.fetch(
      `*[_type == "product" && productId == $productId][0]`,
      { productId }
    );

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const productRef: WishlistItem = { _ref: product._id, _key: crypto.randomUUID() }; // Explicit typing

    let updatedWishlist: WishlistItem[] = user.wishlist || [];

    // Check if product is already in wishlist
    const exists = updatedWishlist.some((item: WishlistItem) => item._ref === product._id);

    if (exists) {
      updatedWishlist = updatedWishlist.filter((item: WishlistItem) => item._ref !== product._id);
    } else {
      updatedWishlist.push(productRef);
    }

    // Update wishlist in Sanity
    await sanityClient.patch(user._id).set({ wishlist: updatedWishlist }).commit();

    return NextResponse.json({ isWishlisted: !exists });
  } catch (error) {
    console.error("Error toggling wishlist:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
