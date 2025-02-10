export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';
import sanityClient from '@/sanity/sanity.client';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }

    const user = await sanityClient.fetch(`*[_type == "user" && userId == $userId][0]`, { userId });

    if (!user || !user.wishlist) {
      return NextResponse.json({ count: 0 });
    }

    return NextResponse.json({ count: user.wishlist.length });
  } catch (error) {
    console.error('Error fetching wishlist count:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
