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

    // Fetch the user by `userId` instead of `_id`
    const user = await sanityClient.fetch(
      `*[_type == "user" && userId == $userId][0]`,
      { userId }
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isWishlisted = user.wishlist?.some((item: any) => item._ref === productId) || false;

    return NextResponse.json({ isWishlisted });
  } catch (error) {
    console.error("Error checking wishlist:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
