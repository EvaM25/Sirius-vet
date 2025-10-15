"use client";

import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";

import { siteConfig } from "@/src/config/site.config";
import { usePathname } from "next/navigation";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

import Link from "next/link";
import { useState } from "react";

export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const icon = <ChevronDown fill="currentColor" size={16} />;

  const getNavItems = () => {
    return siteConfig.navItems.map((item) => {
      const isActive = pathname === item.href;
      if (item.children) {
        return (
          <Dropdown key={item.label}>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="px-3 py-1 text-white font-semibold 
                  text-[16px] bg-transparent hover:bg-transparent hover:text-blue-500"
                  endContent={icon}
                  radius="sm"
                >
                  {item.label}
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label={item.label}>
              {item.children.map((dropdownItem) => (
                <DropdownItem
                  key={dropdownItem.href}
                  className="bg-transparent data-[hover=true]:bg-transparent"
                >
                  <Link
                    href={dropdownItem.href}
                    onClick={() => {
                      toggleMenu();
                    }}
                    className={` font-semibold text-[14px]
                    flex flex-col items-center bg-transparent
                    hover:text-blue-500 hover:bg-transparent
                    ${isActive ? "text-teal-800" : "text-black"}
                    transition-colors
                    duration-300`}
                  >
                    {dropdownItem.label}
                  </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        );
      } else {
        return (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              {...(item.target && { target: item.target })}
              onClick={() => {
                toggleMenu();
              }}
              className={` font-semibold  xl:text-[16px]
              hover:text-blue-300  
              ${isActive ? "text-teal-800" : "text-white"}
              transition-colors
              duration-300
              `}
            >
              {item.label}
            </Link>
          </NavbarItem>
        );
      }
    });
  };

  return (
    <Navbar className=" py-0 lg:py-[40] bg-gradient-to-r from-teal-500 to-blue-400 relative border-none">
      <NavbarContent
        className="hidden lg:flex gap-4 max-w-[1024] xl:max-w-[1360] mx-auto"
        justify="center"
      >
        {getNavItems()}
      </NavbarContent>
      <div className="block absolute right-[20] top-[20] lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-blue-200 focus:outline-none will-change-transform transition-transform duration-300 ease-in-out"
        >
          <svg
            className="fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style={{ display: "block" }}
          >
            {isOpen ? (
              <>
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 18L18 6"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 6L18 18"
                />
              </>
            ) : (
              <>
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M4 6h16"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M4 12h16"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M4 18h16"
                />
              </>
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className={`lg:hidden fixed top-full left-0 w-full h-screen bg-gradient-to-r from-teal-500 to-blue-400 text-white 
                      py-4 transform transition-transform duration-300 ease-in-out
             ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                    z-50`}
        >
          <div className="h-screen flex flex-col items-center gap-[30] space-y-4">
            {getNavItems()}
          </div>
        </div>
      )}
    </Navbar>
  );
}
