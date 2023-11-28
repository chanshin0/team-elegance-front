"use client";

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface dropDownProps {
  placeholder: string;
  options: Array<string>;
}

interface menuItemProps {
  setSelectedMenu: (menu: string) => void;
  option: string;
}

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

function MenuItem({ setSelectedMenu, option }: menuItemProps) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm"
          )}
          onClick={() => setSelectedMenu(option)}
        >
          {option}
        </a>
      )}
    </Menu.Item>
  );
}
export default function DropDown({ placeholder, options }: dropDownProps) {
  const [selectedMenu, setSelectedMenu] = useState(placeholder || options[0]);

  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-2xl bg-orange-500 px-3 py-2 text-sm font-semibold text-white border-none shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-orange-500">
          {selectedMenu}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-1/2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 -translate-x-1/2 focus:outline-none">
          <div className="py-1">
            {options.map((op) => (
              <MenuItem
                key={op}
                option={op}
                setSelectedMenu={setSelectedMenu}
              />
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
