import StoreCard from "@/app/_components/card/StoreCard";
import SearchBar from "@/app/_components/search/SearchBar";
import DropDown from "@/app/_components/ui/DropDown";

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
