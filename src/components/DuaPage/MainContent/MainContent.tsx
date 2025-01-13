import { useEffect, useState } from "react";
import SectionContent from "../SectionContent/SectionContent";
import axios from "axios";

interface SubCategory {
  subcat_id: number;
  subcat_name_en: string;
}

interface MainContentProps {
  subcategory: SubCategory | null;
}

interface Dua {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name_bn: string;
  dua_name_en: string;
  top_bn: string;
  top_en: string;
  dua_arabic: string;
  dua_indopak: string;
  clean_arabic: string;
  transliteration_bn: string;
  transliteration_en: string;
  translation_bn: string;
  translation_en: string;
  bottom_bn: string | null;
  bottom_en: string | null;
  refference_bn: string;
  refference_en: string;
  audio: string;
}

const MainContent: React.FC<MainContentProps> = ({ subcategory }) => {
  const defaultSubcategory: SubCategory = {
    subcat_id: 1,
    subcat_name_en: "Default Section",
  }; // Define default subcategory
  const activeSubcategory = subcategory || defaultSubcategory; // Use the provided subcategory or fallback to default

  const [duas, setDuas] = useState([]);

  useEffect(() => {
    axios.get(`/api/duas/${activeSubcategory.subcat_id}`).then((response) => {
      console.log(response.data);
      setDuas(response.data);
    });
  }, [activeSubcategory.subcat_id]);

  console.log(activeSubcategory);
  return (
    <div className="h-[calc(100vh-180px)] w-full overflow-y-auto space-y-5">
      {activeSubcategory ? (
        <div>
          <div className="w-full bg-white p-4 shadow-lg rounded-xl mb-4">
            <h2 className="">
              <span className="text-emerald-500">Section: </span>{" "}
              {activeSubcategory.subcat_name_en}
            </h2>
          </div>
          <div>
            {duas.map((dua: Dua) => (
              <SectionContent key={dua.id} content={dua} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">
          Select a subcategory to view its details.
        </p>
      )}
    </div>
  );
};

export default MainContent;
