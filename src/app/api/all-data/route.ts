import { NextResponse } from 'next/server';
import { getAllData, getTableNames } from '@/utils/db';


export async function GET() {
  try {
    // Step 1: Get all table names
    const tables = getTableNames();
    
    // Step 2: Fetch data from each table
    const result: Record<string, unknown[]> = {};
    
    for (const table of tables) {
      const tableName = table.name;
      // Step 3: Get all data from each table
      const tableData = getAllData(tableName);
      result[tableName] = tableData;
    }

    // Step 4: Return the structured response
    return NextResponse.json(result);

  } catch (error) {
    console.error('Error fetching tables and their data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
