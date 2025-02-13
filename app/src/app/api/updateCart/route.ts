import { NextRequest, NextResponse } from "next/server";
import sanityClient from "@/sanity/sanity.client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, productId, quantity } = body;

    if (!userId || !productId || quantity === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sanityClient
      .patch(userId)
      .setIfMissing({ cart: [] })
      .set({ [`cart[_key=="${productId}"].quantity`]: quantity }) // ✅ Correct Sanity update
      .commit();

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error updating cart:", error);
    return NextResponse.json({ error: "Failed to update cart" }, { status: 500 });
  }
}
