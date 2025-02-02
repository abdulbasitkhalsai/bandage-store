// src/app/api/sanity/route.ts
import sanityClient from "@/sanity/sanity.client";

// Type the `req` parameter as `Request` (from the Web API)
export async function POST(req: Request) {
  try {
    const result = await sanityClient.create({
      _type: "testEntry",
      message: "Testing Sanity permissions",
    });
    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
    });
  } catch (error: unknown) {
    // Type the `error` as any or handle it with a type guard
    if (error instanceof Error) {
      console.error("Sanity write error:", error.message);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500 }
      );
    }
    // In case the error isn't an instance of Error
    console.error("Unknown error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Unknown error" }),
      { status: 500 }
    );
  }
}
