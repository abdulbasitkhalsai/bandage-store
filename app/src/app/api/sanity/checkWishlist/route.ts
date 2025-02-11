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

    // Fetch user wishlist
    const user = await sanityClient.fetch(
      `*[_type == "user" && userId == $userId][0]`,
      { userId }
    );

    if (!user) {
      return NextResponse.json({ isWishlisted: false, message: "User not found" }, { status: 200 });
    }

    // Check if product exists in wishlist
    const isWishlisted = user.wishlist?.some((item: { _ref: string }) => item._ref === productId);

    return NextResponse.json({ isWishlisted }, { status: 200 });
  } catch (error) {
    console.error("Error checking wishlist status:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
