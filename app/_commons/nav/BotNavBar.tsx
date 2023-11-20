"use client";

import NavBarItem from "./NavBarItem";

export default function BotNavBar() {
  const userId = 1004; // 추후 바인딩 필요

  const menus = "search, heart, home, cart, user".split(", ");
  const menusUrl =
    `/stores/list, /users/like, /, /users/cart, /users/${userId}`.split(", ");
  const navButtons = menus.map((v, i) => {
    return {
      name: v,
      url: menusUrl[i],
    };
  });

  return (
    <main
      className="h-20 w-full rounded-t-3xl flex justify-around fixed bottom-0  shadow-xl z-50 bg-white
    md:max-w-7xl
    "
    >
      {navButtons.map((v, idx) => (
        <NavBarItem iconName={v.name} url={v.url} key={idx} />
      ))}
    </main>
  );
}
