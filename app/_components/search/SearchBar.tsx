import searchIcon from "@/public/assets/search/searchIcon.png";
import Image from "next/image";

export default function SearchBar() {
  return (
    <main
      className="
      my-5 px-4 w-full relative flex items-center
      md:max-w-xl
    "
    >
      <Image
        alt="search-icon"
        src={searchIcon}
        className="absolute h-6 w-6 ml-2 pointer-events-auto"
      />
      <input
        type="text"
        name=""
        id=""
        className="
        border-orange-500 border-2 rounded-2xl h-10 w-full pl-8
        "
      />
    </main>
  );
}
