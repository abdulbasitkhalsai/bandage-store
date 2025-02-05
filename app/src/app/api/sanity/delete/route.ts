import { NextResponse } from "next/server";

export async function POST() {
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
    const token = process.env.SANITY_API_TOKEN;

    if (!projectId || !dataset || !token) {
      console.error("Missing environment variables");
      return NextResponse.json({ error: "Missing environment variables" }, { status: 500 });
    }

    const mutationPayload = {
      mutations: [
        {
          delete: { id: "5u5qSfeSP8Fhinu4Rzrsxg" }
        },
        {
          delete: { id: "fXfXrckA9x0nloknWUf53y" }
        }
      ]
    };

    const response = await fetch(
      `https://${projectId}.api.sanity.io/v2022-03-07/data/mutate/${dataset}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(mutationPayload)
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
    console.error("Error deleting user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
