// // Delete specific user

// import { NextResponse } from "next/server";

// export async function POST() {
//   try {
//     const projectId = "syq2w7mv";
//     const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
//     const token = process.env.SANITY_API_TOKEN;

//     if (!projectId || !dataset || !token) {
//       console.error("Missing environment variables");
//       return NextResponse.json({ error: "Missing environment variables" }, { status: 500 });
//     }

//     const mutationPayload = {
//       mutations: [
//         {
//           delete: { id: "IjN4zlQEElVyYAJwt3FZax" }
//         },
//         // {
//         //   delete: { id: "fXfXrckA9x0nloknWUf53y" }
//         // }
//       ]
//     };

//     const response = await fetch(
//       `https://${projectId}.api.sanity.io/v2022-03-07/data/mutate/${dataset}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(mutationPayload)
//       }
//     );

//     const data = await response.json();
//     console.log("Sanity API Response:", data);

//     if (!response.ok) {
//       console.error("Sanity API Error:", data);
//       return NextResponse.json({ error: "Sanity API Error", details: data }, { status: response.status });
//     }

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }



// For removal of Product from wishlist array params:{
//   "userId": "USER0001",
//   "productId": "PRD000023"
// }

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, productId } = await req.json(); // Get userId & productId from request body
    const projectId = "syq2w7mv";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
    const token = process.env.SANITY_API_TOKEN;

    if (!projectId || !dataset || !token) {
      console.error("Missing environment variables");
      return NextResponse.json({ error: "Missing environment variables" }, { status: 500 });
    }

    if (!userId || !productId) {
      console.error("Missing userId or productId");
      return NextResponse.json({ error: "Missing userId or productId" }, { status: 400 });
    }

    // First, fetch the reference ID corresponding to the productId
    const productQuery = `*[_type == "product" && productId == "${productId}"]{_id}`;
    const productResponse = await fetch(
      `https://${projectId}.api.sanity.io/v2022-03-07/data/query/${dataset}?query=${encodeURIComponent(productQuery)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const productData = await productResponse.json();

    if (productData.result.length === 0) {
      console.error("Product not found");
      return NextResponse.json({ error: "Product not found" }, { status: 400 });
    }

    const productRefId = productData.result[0]._id;

    // Now, remove the product reference from the user's wishlist array
    const mutationPayload = {
      mutations: [
        {
          patch: {
            query: `*[_type == "user" && userId == "${userId}"]`,
            // Unset the reference to the productId
            unset: [`wishlist[_ref == "${productRefId}"]`],
          },
        },
      ],
    };

    const response = await fetch(
      `https://${projectId}.api.sanity.io/v2022-03-07/data/mutate/${dataset}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(mutationPayload),
      }
    );

    const data = await response.json();
    console.log("Sanity API Response:", data);

    if (!response.ok) {
      console.error("Sanity API Error:", data);
      return NextResponse.json({ error: "Sanity API Error", details: data }, { status: response.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error deleting wishlist item:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
