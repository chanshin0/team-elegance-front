"use client";

import Image from "next/image";
import orderSampleImg from "@/public/assets/card/orderSample.png";
import storeMainImg from "@/public/assets/card/storeMainSample.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import Button from "../ui/Button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface StoreCardProps {
  showDetails: boolean;
}

export default function StoreCard({ showDetails = false }) {
  const pathName = usePathname();
  const infoPath = `${pathName}/info`;
  const router = useRouter();

  return (
    <section
      className="
    flex flex-col w-full max-w-sm mx-8 my-3 rounded-xl shadow-xl  hover:scale-105
    "
      onClick={() => router.push("/stores/1/info")}
    >
      <Image alt="store-main-image" src={storeMainImg} className="w-full" />
      <div
        className="
      px-2 py-1 h-20 flex flex-col justify-around
      "
      >
        <div className="flex justify-between items-center pr-[calc(70*0.3px)]">
          <p
            className="
          text-lg font-bold
          "
          >
            진짜 존맛 파스타집
          </p>
          {showDetails && <IoIosHeartEmpty color="red" size="25" />}
          {/* <IoIosHeart/> 채워진 하트 */}
        </div>
        <div
          className="
        flex justify-between items-center
        "
        >
          <div className="flex flex-col gap-1 text-xs">
            {/* <Image
              alt="order-img"
              src={orderSampleImg}
              className="
            mr-2
            "
            /> */}
            <p>최소주문 {15000}원</p>
            <p>배달팁 {3000}원</p>
          </div>
          {showDetails && (
            <Link href={infoPath}>
              <Button
                value="가게 정보"
                filled={true}
                classes="w-[70px] h-[25px]"
                text="xs"
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
