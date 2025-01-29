import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import sanityClient from '@sanity/client';

// Sanity client setup
const client = sanityClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
});

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    // Fetch user from Sanity
    const user = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Compare password (hashed in Sanity)
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
    }

    // If password is correct, return user data
    return NextResponse.json({
      userId: user.userId,
      name: user.name,
      role: user.role,
      email: user.email,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
