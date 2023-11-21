"use client";

import Input from "@/app/_commons/ui/Input";
import Button from "@/app/_commons/ui/Button";

import Image from "next/image";
import MainLogo from "@/public/assets/nav/logo_elegance_big.png";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Login() {
  const [prevPage, setPrevPage] = useState("/");

  useEffect(() => {
    const storedPrevPage = localStorage.getItem("prevPage") || "/";
    setPrevPage(storedPrevPage);
  }, []);

  const handleLogIn = () => {
    // 로그인
  };

  return (
    <main
      className="
      flex flex-col items-center mt-24
      "
    >
      <Image
        src={MainLogo}
        alt="logo-elegance"
        className="
      w-full max-w-lg mb-[-2rem] 
      "
      />
      <Input placeholder="ID" classes="w-48 my-1" />
      <Input placeholder="PASSWORD" classes="w-48 my-1" />
      <p
        className="text-orange-500 font-bold my-3 cursor-pointer"
        onClick={handleLogIn}
      >
        LOGIN
      </p>
      <Link href={"/users/findpw"}>
        <Button value="아이디 or 비밀번호 찾기" classes="mb-3 cursor-pointer" />
      </Link>

      <p className="font-bold text-sm mt-10">🔐아직 계정이 없으시다면?</p>
      <Link href={"/users/signup"}>
        <Button
          value="계정 만들고 맛있는거 먹기😋"
          filled={true}
          classes="w-52 mt-2"
        />
      </Link>

      <Link href={prevPage}>
        <p className="fixed bottom-3 right-3 text-sm text-gray-400">돌아가기</p>
      </Link>
    </main>
  );
}
