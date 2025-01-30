import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

let users: User[] = [];

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  // Check if user already exists
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user
  const newUser = { id: String(users.length + 1), name, email, password: hashedPassword };
  users.push(newUser);

  return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
}
