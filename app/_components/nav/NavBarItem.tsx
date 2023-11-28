"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarItemProps {
  iconName: string;
  url: string;
}

export default function NavBarItem({ iconName, url }: NavBarItemProps) {
  const pathName = usePathname();

  return (
    <div
      className={`flex justify-center items-center ${
        iconName === "home" ? "flex-[1.2] mb-8" : "flex-1"
      }`}
    >
      <Link href={url}>
        <Image
          src={`/assets/nav/icon_${iconName}${
            iconName !== "home" && pathName === url ? "_hovered" : ""
          }.png`}
          alt={`icon_${iconName}`}
          width={iconName === "home" ? 100 : 35}
          height={35}
          className="hover:scale-[1.15]"
        />
      </Link>
    </div>
  );
}
