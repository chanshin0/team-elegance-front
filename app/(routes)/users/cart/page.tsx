import CartMenuCard from "@/app/_components/card/CartMenuCard";
import Image from "next/image";

export default function Cart() {
  const storeData = {
    imageUrl: "/assets/cart/ShrimpScampiPasta.webp",
    storeName: "진짜존맛파스타집",
    storeId: "123123",
  };

  const cartData = [
    {
      menuName: "맛있는봉골레파스타",
      menuImg: "/assets/cart/ClamPasta.webp",
      price: 31000,
      options: ["면 추가선택 가능:면추가 (2000원)"],
      quantity: 1,
    },
    {
      menuName: "맛있는봉골레파스타",
      menuImg: "/assets/cart/ClamPasta.webp",
      price: 31000,
      options: ["면 추가선택 가능:면추가 (2000원)"],
      quantity: 1,
    },
  ];
  const { imageUrl, storeName, storeId } = storeData;
  return (
    <section className=" self-start inline-block text-left m-0 ">
      <h1 className="flex items-center py-8">
        <Image
          src={imageUrl}
          alt="Store profile image"
          width={45}
          height={45}
          className=" rounded-md shadow-md"
        />
        <span className=" pl-1 font-semibold"> {storeName}</span>
      </h1>
      <ul>
        {cartData.map((item, i) => (
          <li key={i} className="mt-5">
            <CartMenuCard cartData={item} />
          </li>
        ))}
      </ul>

      <ul className="mt-10">
        <li>총 주문 금액</li>
        <li>배달팁</li>
        <span></span>
        <li>결제예정금액</li>
      </ul>
    </section>
  );
}
