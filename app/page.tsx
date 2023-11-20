import Recommend from "./_commons/recommend/Recommend";
import SearchBar from "./_commons/search/SearchBar";
import StoresList from "./stores/list/page";

export default function Home() {
  return (
    <main
      className="
    w-full h-full flex flex-col items-center
    "
    >
      <SearchBar />
      <Recommend />
      <StoresList />
    </main>
  );
}
