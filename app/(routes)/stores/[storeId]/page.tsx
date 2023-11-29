"use client";

import StoreCard from "@/app/_components/card/StoreCard";
import { useParams } from "next/navigation";
import StoreMenuList from "./_components/StoreMenuList";

export default function Store() {
  const storeId = useParams().storeId;

  return (
    <section
      className="
      flex flex-col items-center gap-1 max-w-sm
    "
    >
      <StoreCard showDetails={true} />
      <StoreMenuList />
    </section>
  );
}
