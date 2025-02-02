import { Play } from "lucide-react";
import React, { useRef, useState } from "react";

// Define a type for the content prop
interface SectionContentProps {
    content: {
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
    };
  }
  

  const SectionContent: React.FC<SectionContentProps> = ({ content }) => {
  // const content = {
  //     "id": 2,
  //     "cat_id": 1,
  //     "subcat_id": 1,
  //     "dua_id": 2,
  //     "dua_name_bn": "বান্দা তার রবের মুখাপেক্ষী #২",
  //     "dua_name_en": "The servant is dependent on his Lord #2",
  //     "top_bn": "নবী (ﷺ) প্রত্যেক সালাতের শেষে সালাম ফিরিয়ে বলতেন - বান্দা তার দ্বীন-দুনিয়ার সকল প্রয়োজন তার রবের কাছে চাইবে, কারণ সব কিছুর ভাণ্ডার আল্লাহ্‌ তা'আলার হাতে। আল্লাহ্‌ তা‘আলা বলেন -\n\n“আর প্রতিটি বস্তুরই ভান্ডারসমূহ রয়েছে আমার কাছে এবং আমি তা অবতীর্ণ করি কেবল নির্দিষ্ট পরিমাণে।” (সূরা আল-হিজরঃ ১৫:২১)\n\nআল্লাহ্‌ যা দেন, তা কেউ আটকে রাখতে পারে না; আবার তিনি যা রুখে দেন, তা কেউ দিতে পারে না।",
  //     "top_en": "Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning):\n\n“And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.” (Sura Al-Hijr 15:21)\n\nNo one can withhold what Allah gives; And, no one can give what he resists.",
  //     "dua_arabic": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
  //     "dua_indopak": "لَا اِلٰهَ اِلَّا اللّٰهُ وَحْدَهٗ لَا شَرِيْكَ لَهٗ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ، اَللّٰهُمَّ لَا مَانِعَ لِماَ اَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
  //     "clean_arabic": "لا اله الا الله وحده لا شريك له له الملك وله الحمد وهو علي كل شيء قدير اللهم لا مانع لما اعطيت ولا معطي لما منعت ولا ينفع ذا الجد منك الجد",
  //     "transliteration_bn": "লা- ইলা-হা ইল্লাল্লা-হু, ওয়া‘হদাহু লা- শারীকা লাহু, লাহুল মুলকু ওয়া লাহুল ‘হামদু, ওয়া হুআ ‘আলা- কুল্লি শাইয়্যিন ক্বাদীর, আল্লা-হুম্মা লা- মা-নি’আ লিমা-আ‘অ্‌ত্বাইতা, ওয়ালা- মু‘অ্‌ত্বিয়া লিমা- মানা‘অ্‌তা, ওয়ালা- ইয়ান্‌ফা‘উ যাল জাদ্দি মিনকাল জাদ্দু",
  //     "transliteration_en": "Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu",
  //     "translation_bn": "আল্লাহ্‌ ছাড়া কোনো সত্য মাবুদ নেই, তিনি একক, তার কোনো শরীক নেই। রাজত্ব তারই এবং প্রশংসা তারই। তিনি সবকিছুর উপর ক্ষমতাবান। হে আল্লাহ্‌! তুমি যা দাও, তা কেউ রুখতে পারে না; তুমি যা রুখে দাও, তা কেউ দিতে পারে না; তোমার বিপরীতে ধনীর প্রাচুর্য তার কোনও কাজে লাগে না।",
  //     "translation_en": "There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.",
  //     "bottom_bn": null,
  //     "bottom_en": null,
  //     "refference_bn": "বুখারীঃ ৮৪৪",
  //     "refference_en": "Bukhari: 844",
  //     "audio": "http://www.ihadis.com/duaaudiofinal/2.mp3"
  //   }

  const audioUrl = content?.audio?.replace("http://www.ihadis.com", "https://api.duaruqyah.com");


  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleAudioToggle = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full bg-white p-4 shadow-lg rounded-xl mb-4">
      <div className="flex items-center gap-4 mb-4">
        {/* dua_name_en */}
        <div>
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="35" height="35" fill="#1E1E1E" />
            <rect
              width="1920"
              height="1295"
              transform="translate(-662 -213)"
              fill="#F7F8FA"
            />
            <rect
              x="-29.75"
              y="-14.75"
              width="888.5"
              height="302.5"
              rx="9.75"
              fill="white"
            />
            <rect
              x="-29.75"
              y="-14.75"
              width="888.5"
              height="302.5"
              rx="9.75"
              stroke="#E2E2E2"
              strokeWidth="0.5"
            />
            <path
              id="allah 1 (Traced)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.8233 2.41379L12.4054 4.82759H8.80159H5.19788L5.01277 5.01277L4.82759 5.19788V8.80159V12.4054L2.41379 14.8233C0.193254 17.0478 0 17.2619 0 17.4978C0 17.7336 0.193858 17.9487 2.41379 20.1755L4.82759 22.5967V26.1995V29.8021L5.01277 29.9872L5.19788 30.1724H8.80054H12.4033L14.8245 32.5862C17.043 34.7979 17.2671 35 17.5 35C17.7329 35 17.957 34.7979 20.1755 32.5862L22.5967 30.1724H26.1995H29.8021L29.9872 29.9872L30.1724 29.8021V26.1995V22.5967L32.5862 20.1755C34.7979 17.957 35 17.7329 35 17.5C35 17.2671 34.7979 17.043 32.5862 14.8245L30.1724 12.4033V8.80054V5.19788L29.9872 5.01277L29.8021 4.82759H26.1995H22.5967L20.1755 2.41379C17.9487 0.193858 17.7336 0 17.4978 0C17.2619 0 17.0478 0.193254 14.8233 2.41379ZM19.8019 3.77155L22.0693 6.03448H25.5174H28.9655V9.48259V12.9307L31.2456 15.2153L33.5258 17.5L31.2456 19.7847L28.9655 22.0693V25.5174V28.9655H25.5174H22.0693L19.7847 31.2456L17.5 33.5258L15.2153 31.2456L12.9307 28.9655H9.48259H6.03448V25.5174V22.0693L3.75435 19.7847L1.47422 17.5L3.75435 15.2153L6.03448 12.9307V9.48259V6.03448H9.48289H12.9313L15.1968 3.77193C16.4428 2.52747 17.4785 1.50915 17.4984 1.509C17.5183 1.50877 18.5548 2.52694 19.8019 3.77155ZM15.4272 6.63793L13.6113 8.44828H11.2149H8.81857L8.63346 8.63346L8.44828 8.81857V11.2149V13.6113L6.63793 15.4272C4.99218 17.078 4.82759 17.2662 4.82759 17.4971C4.82759 17.728 4.99301 17.9175 6.63793 19.5713L8.44828 21.3913V23.7864V26.1814L8.63346 26.3665L8.81857 26.5517H11.2136H13.6087L15.4287 28.3621C17.0742 29.9987 17.273 30.1724 17.5 30.1724C17.727 30.1724 17.9258 29.9987 19.5713 28.3621L21.3913 26.5517H23.7864H26.1814L26.3665 26.3665L26.5517 26.1814V23.7864V21.3913L28.3621 19.5713C29.9987 17.9258 30.1724 17.727 30.1724 17.5C30.1724 17.273 29.9987 17.0742 28.3621 15.4287L26.5517 13.6087V11.2136V8.81857L26.3665 8.63346L26.1814 8.44828H23.7864H21.3913L19.5713 6.63793C17.9175 4.99301 17.728 4.82759 17.4971 4.82759C17.2662 4.82759 17.078 4.99218 15.4272 6.63793ZM19.1989 7.99569L20.8644 9.65517H23.1046H25.3448V11.8954V14.1356L27.021 15.8178L28.6971 17.5L27.021 19.1822L25.3448 20.8644V23.1046V25.3448H23.1046H20.8644L19.1822 27.021L17.5 28.6971L15.8178 27.021L14.1356 25.3448H11.8954H9.65517V23.1046V20.8644L7.97902 19.1822L6.30294 17.5L7.97902 15.8178L9.65517 14.1356V11.8954V9.65517H11.8958H14.1364L15.7993 7.99614C16.7139 7.08373 17.4783 6.33696 17.4978 6.33666C17.5174 6.33643 18.2829 7.08297 19.1989 7.99569ZM17.6852 14.0645L17.5 14.2496V17.1983V20.1469L17.3148 20.3321C17.1981 20.4488 17.0435 20.5172 16.8966 20.5172C16.7496 20.5172 16.595 20.4488 16.4783 20.3321L16.2931 20.1469V17.8017V15.4565L16.1079 15.2714C15.863 15.0264 15.5163 15.0264 15.2714 15.2714C15.1696 15.3732 15.0862 15.5042 15.0862 15.5625C15.0862 15.6418 14.9277 15.6783 14.4534 15.7078C13.928 15.7406 13.7416 15.7894 13.3557 15.9951C12.8375 16.2713 12.6079 16.5095 12.313 17.0771C12.1423 17.4056 12.1128 17.5566 12.1128 18.1034C12.1128 18.6502 12.1423 18.8013 12.313 19.1298C12.6084 19.6983 12.8375 19.9356 13.3601 20.2141C13.7665 20.4307 13.9215 20.469 14.5195 20.5003L15.2098 20.5364L15.3914 20.8788C15.6092 21.2893 16.0919 21.6206 16.5785 21.6936C16.9869 21.7548 17.5858 21.6298 17.8769 21.4226L18.087 21.273L18.4473 21.4744C19.4184 22.0171 20.7428 21.4601 21.0418 20.3834C21.0877 20.2179 21.12 19.1469 21.1202 17.7795L21.1207 15.4565L20.9355 15.2714C20.8188 15.1546 20.6642 15.0862 20.5172 15.0862C20.3703 15.0862 20.2157 15.1546 20.099 15.2714L19.9138 15.4565V17.8017V20.1469L19.7286 20.3321C19.6119 20.4488 19.4573 20.5172 19.3103 20.5172C19.1634 20.5172 19.0088 20.4488 18.8921 20.3321L18.7069 20.1469V17.1983V14.2496L18.5217 14.0645C18.405 13.9477 18.2504 13.8793 18.1034 13.8793C17.9565 13.8793 17.8019 13.9477 17.6852 14.0645ZM21.9093 14.6679L21.7241 14.853V18.1034V21.3538L21.9093 21.539C22.026 21.6557 22.1806 21.7241 22.3276 21.7241C22.4745 21.7241 22.6292 21.6557 22.7459 21.539L22.931 21.3538V18.1034V14.853L22.7459 14.6679C22.6292 14.5512 22.4745 14.4828 22.3276 14.4828C22.1806 14.4828 22.026 14.5512 21.9093 14.6679ZM15.0862 18.1034V19.3103H14.6689C14.1383 19.3103 13.8006 19.1685 13.5504 18.8406C13.1915 18.3699 13.1945 17.7734 13.558 17.3414C13.8239 17.0253 14.1266 16.9031 14.6525 16.8995L15.0862 16.8966V18.1034Z"
              fill="#1FA45B"
            />
          </svg>
        </div>
        <h2 className="text-emerald-500 font-semibold">
          {content.dua_name_en}
        </h2>
      </div>
      {/* top */}
      <div className="top_en">
        {content.top_en ? (
          <p className="whitespace-pre-line">{content.top_en}</p>
        ) : null}
      </div>
      <br />
      {/* dua_arabic */}
      <div className="dua_arabic">
        {content.dua_arabic ? (
          <p className="whitespace-pre-line text-end text-3xl leading-10">{content.dua_arabic}</p>
        ) : null}
      </div>
      <br />
      {/* transliteration_en */}
      <div className="transliteration_en">
        {content.transliteration_en ? (
          <p className="whitespace-pre-line"><span className="italic font-semibold">Transliteration: </span> {content.transliteration_en}</p>
        ) : null}
      </div>
      <br />
      {/* translation_en */}
      <div className="translation_en">
        {content.translation_en ? (
          <p className="whitespace-pre-line"> <span className="font-semibold">Translation:</span> {content.translation_en}</p>
        ) : null}
      </div>
      <br />
      {/* Footer Credit */}
      <div className="footer-Credit">
        {
            content.refference_en ? (
                <p className="font-semibold"> <span className="text-emerald-500">Reference: </span> <br /> {content.refference_en}</p>
            ): null
        }
      </div>
      {/* Icons and Playbacks */}
      <div>
            {content.audio && (
                <div className="flex items-center gap-4 mt-4">
                {/* Audio Play */}
                <div className="flex items-center rounded-full bg-emerald-500 p-1">
                <button
                  onClick={handleAudioToggle}
                  className={`${
                    isPlaying ? "bg-emerald-500 rounded-full" : "bg-emerald-500 rounded-full"
                  } text-white p-2 rounded-lg`}
                >
                  {isPlaying ? " " : " "} <Play />
                </button>
                </div>
        
                {/* Audio Element */}
                <audio ref={audioRef} src={audioUrl} />
              </div>
            )}
        </div>
    </div>
  );
};

export default SectionContent;
