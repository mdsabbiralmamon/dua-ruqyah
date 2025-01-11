import { NextResponse } from 'next/server';
import { getAllData } from '@/utils/db';

// API to get data from the 'category' table
export async function GET() {
  try {
    // Get data from the 'category' table
    const categoryData = getAllData('dua');

    // Return the data in a structured response
    return NextResponse.json(categoryData);

  } catch (error) {
    console.error('Error fetching category data:', error);
    return NextResponse.json({ error: 'Failed to fetch category data' }, { status: 500 });
  }
}
