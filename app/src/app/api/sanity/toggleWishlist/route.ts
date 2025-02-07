// import { NextResponse } from "next/server";
// import sanityClient from "@/sanity/sanity.client";

// export async function POST(req: Request) {
//   console.log("toggleWishlist API Hit");
//   try {
//     const { userId, productId } = await req.json();
//     console.log("Received userId:", userId, "productId:", productId);

//     if (!userId || !productId) {
//       return NextResponse.json({ error: "Missing userId or productId" }, { status: 400 });
//     }

//     // Fetch the user by `userId` instead of `_id`
//     const user = await sanityClient.fetch(
//       `*[_type == "user" && userId == $userId][0]`,
//       { userId }
//     );

//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     let updatedWishlist = user.wishlist || [];

//     if (updatedWishlist.includes(productId)) {
//       updatedWishlist = updatedWishlist.filter((id: string) => id !== productId);
//     } else {
//       updatedWishlist.push(productId);
//     }

//     // Update the wishlist in Sanity
//     await sanityClient.patch(user._id).set({ wishlist: updatedWishlist }).commit();

//     return NextResponse.json({ isWishlisted: updatedWishlist.includes(productId) });
//   } catch (error) {
//     console.error("Error toggling wishlist:", error);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }
// Corrected: app/api/sanity/toggleWishlist/route.ts
// import { NextResponse } from "next/server";
// import sanityClient from "@/sanity/sanity.client";

// export async function POST(req: Request) {
//   console.log("toggleWishlist API Hit");
//   try {
//     const { userId, productId } = await req.json();
//     console.log("Received userId:", userId, "productId:", productId);

//     if (!userId || !productId) {
//       return NextResponse.json({ error: "Missing userId or productId" }, { status: 400 });
//     }

//     // Fetch user by userId instead of _id
//     const user = await sanityClient.fetch(
//       `*[_type == "user" && userId == $userId][0]`,
//       { userId }
//     );

//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     let updatedWishlist = user.wishlist || [];

//     if (updatedWishlist.includes(productId)) {
//       updatedWishlist = updatedWishlist.filter((id: string) => id !== productId);
//     } else {
//       updatedWishlist.push(productId);
//     }

//     // Update Sanity
//     await sanityClient.patch(user._id).set({ wishlist: updatedWishlist }).commit();

//     return NextResponse.json({ isWishlisted: updatedWishlist.includes(productId) });
//   } catch (error) {
//     console.error("Error toggling wishlist:", error);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }




import { NextResponse } from "next/server";
import sanityClient from "@/sanity/sanity.client";

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

    const productRef = { _ref: product._id, _key: crypto.randomUUID() }; // Sanity requires _ref

    let updatedWishlist = user.wishlist || [];

    // Check if product is already in wishlist
    const exists = updatedWishlist.some((item: any) => item._ref === product._id);

    if (exists) {
      updatedWishlist = updatedWishlist.filter((item: any) => item._ref !== product._id);
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
