import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import SanityClient from "@/sanity/sanity.client";
import { authOptions } from "@/app/api/auth/authOptions"; // Correct import

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userEmail = session.user?.email;
    const userDoc = await SanityClient.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email: userEmail }
    );

    if (!userDoc || userDoc.role !== "admin") {
      return NextResponse.json(
        { error: "Forbidden: Insufficient permissions" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { userId, updatedData } = body;

    const updatedUser = await SanityClient.patch(userId).set(updatedData).commit();

    return NextResponse.json(
      { message: "User updated successfully", updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Sanity Update Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
