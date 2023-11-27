import CartMenuCard from "@/app/_commons/card/CartMenuCard";
import Image from "next/image";

export default function Cart() {
  const storeData = {
    imageUrl: "/assets/cart/ShrimpScampiPasta.webp",
    storeName: "진짜존맛파스타집",
    storeId: "123123",
  };

  const { imageUrl, storeName, storeId } = storeData;
  return (
    <section className=" inline-block text-left m-0 ">
      <h1 className="flex items-center">
        <Image
          src={imageUrl}
          alt="Store profile image"
          width={45}
          height={45}
          className=" rounded-md shadow-md"
        />
        <span className=" pl-1 font-semibold"> {storeName}</span>
      </h1>
      <CartMenuCard />
      <ul>
        <li>1</li>
        <li>2</li>
        <span></span>
        <li>3</li>
      </ul>
    </section>
  );
}
