import Image from "next/image";
import orderSampleImg from "@/public/assets/card/orderSample.png";
import storeMainImg from "@/public/assets/card/storeMainSample.png";

export default function StoreCard({ storesList }) {
  return (
    <main
      className="
    flex flex-col w-full max-w-sm mx-8 my-3 rounded-xl shadow-xl  hover:scale-105
    "
    >
      <Image alt="store-main-image" src={storeMainImg} className="w-full" />
      <div
        className="
      px-2 py-1 h-20 flex flex-col justify-around
      "
      >
        <p
          className="
        text-lg font-bold
        "
        >
          진짜 존맛 파스타집
        </p>
        <div
          className="
        flex
        "
        >
          <Image
            alt="order-img"
            src={orderSampleImg}
            className="
          mr-2
          "
          />
          최소주문 {15000}원
        </div>
      </div>
    </main>
  );
}
