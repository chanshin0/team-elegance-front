import StoreCard from "./_components/card/StoreCard";
import Recommend from "./_components/recommend/Recommend";
import SearchBar from "./_components/search/SearchBar";
import StoresList from "./(routes)/stores/list/page";

export default function Home() {
  return (
    <main
      className="
    w-full h-full flex flex-col items-center 
    "
    >
      <SearchBar />
      <Recommend />
      {/* <StoresList /> */}
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
    </main>
  );
}
