import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: false,
});

export async function POST(req: Request) {
  const { name, email, phone, address, password } = await req.json();

  try {
    // Hash the password before saving it to Sanity
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      _type: 'user',
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      role: 'user', // default role
      createdAt: new Date().toISOString(),
    };

    await client.create(newUser);

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error registering user' }, { status: 500 });
  }
}
