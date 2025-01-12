'use client';

import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const DuaCategories = () => {
  const [expandedCategory, setExpandedCategory] = useState(1);

  const categories = [
    {
      id: 1,
      title: "Dua's Importance",
      subcategories: [
        {
          id: 1,
          title: "The servant is dependent on his Lord",
          duaCount: 3
        },
        {
          id: 2,
          title: "The most important thing to ask Allah for",
          duaCount: 4
        },
        {
          id: 3,
          title: "Ask for paradise & protection from fire",
          duaCount: 2
        },
        {
          id: 4,
          title: "Dua to remain steadfast on the religion",
          duaCount: 3
        },
        {
          id: 5,
          title: "Dua of good outcome in all deeds",
          duaCount: 3
        },
        {
          id: 6,
          title: "Seeking whatever good Allah can bestow",
          duaCount: 3
        },
        {
          id: 7,
          title: "Shelter from horror, misery, evil consequences and rejoicing of the enemy",
          duaCount: 3
        }
      ],
      totalDuas: 21,
      icon: "🤲"
    },
    {
      id: 2,
      title: "Dua's Excellence",
      subcategories: [
        {
          id: 1,
          title: "Excellence of Dua",
          duaCount: 15
        }
      ],
      totalDuas: 15,
      icon: "⭐"
    },
    {
      id: 3,
      title: "Time of Dua",
      subcategories: [
        {
          id: 1,
          title: "Best Times for Dua",
          duaCount: 30
        }
      ],
      totalDuas: 30,
      icon: "🌙"
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="w-[400px] h-[calc(100vh-180px)] flex flex-col rounded-xl">
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
          {categories.map((category) => (
            <div key={category.id} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{category.icon}</span>
                  <div className="text-left">
                    <h3 className="font-medium">{category.title}</h3>
                    <p className="text-sm text-gray-500">
                      Subcategory: {category.subcategories.length}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="font-medium">{category.totalDuas}</span>
                    <p className="text-sm text-gray-500">Duas</p>
                  </div>
                  {expandedCategory === category.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {expandedCategory === category.id && (
                <div className="border-t bg-gray-50">
                  {category.subcategories.map((subcategory) => (
                    <div 
                      key={subcategory.id}
                      className="flex items-center gap-2 p-3 border-b last:border-b-0 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 flex-1">{subcategory.title}</span>
                      <span className="text-sm text-gray-500">{subcategory.duaCount} Duas</span>
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