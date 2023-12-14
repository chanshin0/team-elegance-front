import Image from "next/image";

const StoreMenu = () => {
  return (
    <div
      className="
    flex my-3 gap-3 pb-3 border-b-[0.5px] border-b-orange-300
    "
    >
      <div
        className="
      flex-[2.5] flex flex-col gap-1
      "
      >
        <p className="flex-1 text-sm font-semibold">개 맛있는 봉골레</p>
        <p className="flex-[2] text-xs">
          진짜 맛있는 봉골레입니다. 조개 엄청 많이 들어가있어서 감칠맛
          있을수도있음
        </p>
        <p className="flex-2">14,000원</p>
      </div>
      <Image
        src={"/assets/store/menu_pasta.png"}
        alt="pasta-img"
        className="flex-1"
        width={100}
        height={100}
      />
    </div>
  );
};

export default function StoreMenuList() {
  return (
    <article
      className="
    shadow-xl rounded-xl px-3 py-4
    "
    >
      <p
        className="
      font-bold py-2
      "
      >
        대표 메뉴
      </p>
      <StoreMenu />
      <StoreMenu />
    </article>
  );
}
