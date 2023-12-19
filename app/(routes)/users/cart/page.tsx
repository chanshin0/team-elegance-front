"use client";
import CartMenuCard from "@/app/_components/card/CartMenuCard";
import Image from "next/image";
import { useState } from "react";

export default function Cart() {
  const storeData = {
    imageUrl: "/assets/cart/ShrimpScampiPasta.webp",
    storeName: "진짜존맛파스타집",
    storeId: "123123",
  };

  const [cartRawData, setCartRawData] = useState({
    totalItemPrice: 62000,
    deliveryFee: 3000,
    totalPrice: 65000,
    items: [
      {
        menuName: "맛있는봉골레파스타",
        menuImg: "/assets/cart/ClamPasta.webp",
        price: 31000,
        options: ["면 추가선택 가능:면추가 (2000원)"],
        quantity: 1,
        id: 1,
      },
      {
        menuName: "맛있는크림파스타",
        menuImg: "/assets/cart/ShrimpScampiPasta.webp",
        price: 31000,
        options: ["면 추가선택 가능:면추가 (2000원)"],
        quantity: 1,
        id: 2,
      },
    ],
  });

  const { imageUrl, storeName, storeId } = storeData;
  const { totalItemPrice, deliveryFee, totalPrice } = cartRawData;

  // 메뉴 수량 컨트롤
  const handleQuantity = (id: number, action: "plus" | "minus") => {
    if (action === "plus") {
      setCartRawData(() => {
        const newObj = {
          ...cartRawData,
          items: cartRawData.items.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          }),
        };

        return newObj;
      });
    } else {
      setCartRawData((): any => {
        const newObj = {
          ...cartRawData,
          items: cartRawData.items
            .map((item) => {
              if (item.id === id) {
                if (item.quantity > 1) {
                  return {
                    ...item,
                    quantity: item.quantity - 1,
                  };
                } else {
                  return null;
                }
              }
              return item;
            })
            .filter(Boolean),
        };

        return newObj;
      });
    }

    // TODO 변경 된 수량 반영 된 카트 데이터 POST & 새로운 cartRawData GET => 가격조정 반영
  };

  return (
    <section className=" w-full self-start inline-block text-left m-0 ">
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
      {cartRawData.items.length > 0 ? (
        <ul>
          {cartRawData.items.map((item) => (
            <li key={item.id} className="mt-5">
              <CartMenuCard
                handleQuantity={handleQuantity}
                key={item.id}
                cartData={item}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className=" text-center mt-5">장바구니가 비었어요🥲 </p>
      )}

      <ul className=" mt-16 ">
        <div className="flex justify-between">
          <div>
            <li>총 주문 금액</li>
            <li className="mt-3">배달팁</li>
          </div>
          <div>
            <li>{totalItemPrice}원</li>
            <li className="mt-3">{deliveryFee}원</li>
          </div>
        </div>
        <div className=" w-full border-b-orange-200 border-b-2 h-2 my-5 "></div>
        <div className="flex justify-between font-bold text-lg">
          <li>결제예정금액</li>
          <li className="relative">
            <div className="absolute bottom-0 top-3 h-3 w-full bg-orange-300 opacity-50"></div>
            <span className="relative block z-10">{totalPrice}원</span>
          </li>
        </div>
      </ul>
    </section>
  );
}
