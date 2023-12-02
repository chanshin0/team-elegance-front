import React from "react";
import Image from "next/image";
import { CartData } from "@/app/_model/cart";

type Props = {
  cartData: CartData;
};

function CartMenuCard({ cartData }: Props) {
  const { menuName, menuImg, price, options, quantity } = cartData;

  return (
    <div>
      <h3 className=" font-semibold text-lg">{menuName}</h3>

      <div className="flex mt-3">
        <Image
          src={menuImg}
          alt="menu image"
          width={100}
          height={100}
          className=" rounded-md"
        />
        <div className="ml-10 flex flex-col justify-between">
          <ul className=" list-item text-slate-600 text-sm">
            {options.map((option, index) => {
              return <li key={index}> {option}</li>;
            })}
          </ul>
          <p className="flex justify-between">
            <span className=" text-lg font-semibold">{price}</span>
            <span className="text-slate-600">{quantity}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartMenuCard;
