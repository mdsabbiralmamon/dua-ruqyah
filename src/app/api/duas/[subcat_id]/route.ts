import { NextRequest, NextResponse } from 'next/server';
import { getDuasBySubcategory } from '@/utils/db';

export async function GET(req: NextRequest, props: { params: Promise<{ subcat_id: string }> }) {
  const params = await props.params;
  const { subcat_id } = params;

  if (!subcat_id || isNaN(Number(subcat_id))) {
    return NextResponse.json({ error: 'Invalid or missing subcat_id' }, { status: 400 });
  }

  try {
    const duas = getDuasBySubcategory(Number(subcat_id));
    return NextResponse.json(duas, { status: 200 });
  } catch (error) {
    console.error('Error fetching duas:', error);
    return NextResponse.json({ error: 'Failed to fetch duas' }, { status: 500 });
  }
}
