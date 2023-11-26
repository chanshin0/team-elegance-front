import StoreCard from "@/app/_commons/card/StoreCard";
import SearchBar from "@/app/_commons/search/SearchBar";
import DropDown from "@/app/_commons/ui/DropDown";

export default function StoresList() {
  const options = ["기본순", "거리순", "인기순"];

  return (
    <main
      className="
      flex flex-col w-full items-center
    "
    >
      <SearchBar />
      {/* <div className="flex justify-start w-full"> */}
      <DropDown options={options} />
      {/* </div> */}
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
    </main>
  );
}
