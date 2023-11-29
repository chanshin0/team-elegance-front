"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import MainLogo from "@/public/assets/nav/logo_elegance.png";
import LocationLogo from "@/public/assets/nav/icon_location_sharp.png";

export default function TopNavBar() {
  const [userLocation, setUserLocation] = useState("너네집");

  return (
    <nav
      className="h-24 w-full flex justify-between items-center fixed top-0 shadow-sm z-50 bg-white
    md:max-w-7xl
    "
    >
      <div
        className="h-full w-1/3
      
      "
      >
        <Link href={"/"}>
          <Image
            src={MainLogo}
            alt="team-elegance"
            className=" ml-2 mt-[-5px]"
          />
        </Link>
      </div>
      <div
        className="flex justify-end h-6 w-1/3 mr-4 font-bold
      
      "
      >
        <Image src={LocationLogo} alt="location" />
        <p className="ml-2">{userLocation}</p>
      </div>
    </nav>
  );
}
