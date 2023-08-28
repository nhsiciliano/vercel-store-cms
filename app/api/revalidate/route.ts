import { revalidate } from 'lib/shopify';
import { NextRequest, NextResponse } from 'next/server';

// API ROUTE

export const runtime = 'edge';

export async function POST(req: NextRequest): Promise<NextResponse> {
  return revalidate(req);
}
