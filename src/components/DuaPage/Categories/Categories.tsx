'use client';

import axios from 'axios';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { SubCategory } from "@/types/types";

interface Category {
  id: number;
  cat_id: number;
  cat_name_en: string;
  cat_icon: string;
  no_of_dua: number;
  no_of_subcat: number;
  subcategories: SubCategory[];
}

interface CategoriesProps {
  onSubcategoryClick: (subcategory: SubCategory) => void;
}

const DuaCategories: React.FC<CategoriesProps> = ({ onSubcategoryClick }) => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [categoriesWithSubcategories, setCategoriesWithSubcategories] = useState<Category[]>([]);

  useEffect(() => {
    // Fetch data from /api/all-data
    axios
      .get('/api/all-data')
      .then((response) => {
        const { category, sub_category }: { category: Category[]; sub_category: SubCategory[] } = response.data;

        // Map subcategories to their parent categories
        const categories = category.map((cat) => ({
          ...cat,
          subcategories: sub_category.filter((sub) => sub.cat_id === cat.cat_id),
        }));

        setCategoriesWithSubcategories(categories);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const toggleCategory = (categoryId: number) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="w-[500px] h-[calc(100vh-180px)] flex flex-col rounded-xl shadow-xl overflow-hidden">
      <div className="bg-emerald-500 p-4 rounded-t-xl">
        <h2 className="text-white text-lg font-medium">Categories</h2>
      </div>

      <div className="bg-white flex-1 flex flex-col overflow-hidden">
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Categories"
              className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4 rounded-xl">
          {categoriesWithSubcategories.map((category) => (
            <div key={category.id} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category.cat_id)}
                className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={`/images/${category.cat_icon}.svg`}
                    alt={category.cat_name_en}
                    className="w-8 h-8"
                  />
                  <div className="text-left">
                    <h3 className="font-medium">{category.cat_name_en}</h3>
                    <p className="text-sm text-gray-500">
                      Subcategories: {category.no_of_subcat}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="font-medium">{category.no_of_dua}</span>
                    <p className="text-sm text-gray-500">Duas</p>
                  </div>
                  {expandedCategory === category.cat_id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {expandedCategory === category.cat_id && (
                <div className="border-t bg-gray-50">
                  {category.subcategories.map((subcat) => (
                    <div
                      key={subcat.id}
                      onClick={() => onSubcategoryClick(subcat)}
                      className="flex items-center gap-2 p-3 border-b last:border-b-0 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 flex-1">
                        {subcat.subcat_name_en}
                      </span>
                      <span className="text-sm text-gray-500">
                        {subcat.no_of_dua} Duas
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DuaCategories;
