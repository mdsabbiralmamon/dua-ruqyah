import Database from 'better-sqlite3';
import path from 'path';

// Initialize SQLite database connection (read-only mode)
const dbPath = path.resolve(process.cwd(), 'src/database/dua.sqlite');
const db = new Database(dbPath, { readonly: true });

// Function to query all data from a table
export const getAllData = (tableName: string): unknown[] => {
  const stmt = db.prepare(`SELECT * FROM ${tableName}`);
  return stmt.all();
};

// Function to get all table names from the database
export const getTableNames = () => {
  const stmt = db.prepare("SELECT name FROM sqlite_master WHERE type='table'");
  return stmt.all() as { name: string }[];
};

// Function to query data with parameters
export const getDataWithParams = (query: string, params: unknown[]): unknown[] => {
  const stmt = db.prepare(query);
  return stmt.all(params);
};

// Function to get all Duas under a specific subcategory
export const getDuasBySubcategory = (subcatId: number): unknown[] => {
  const query = `
    SELECT * FROM dua 
    WHERE subcat_id = ?`;
  const stmt = db.prepare(query);
  return stmt.all(subcatId);
};
