import React from "react";
import Image from "next/image";
import { CartData } from "@/app/_model/cart";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

type Props = {
  cartData: CartData;
  handleQuantity: (id: number, action: "plus" | "minus") => void;
};

function CartMenuCard({ cartData, handleQuantity }: Props) {
  const { menuName, menuImg, price, options, quantity, id } = cartData;

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
          <div className="flex justify-between">
            <span className=" text-lg font-semibold">{price}원</span>
            <div className=" border-2 flex items-center gap-4 text-lg  border-orange-200 rounded-lg p-1 px-2 text-slate-600">
              <button onClick={() => handleQuantity(id, "plus")}>
                <FaPlus />
              </button>
              <span className="text-slate-600">{quantity}</span>
              <button onClick={() => handleQuantity(id, "minus")}>
                <FaMinus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartMenuCard;
