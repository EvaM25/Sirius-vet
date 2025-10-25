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
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

interface ChevronDownProps {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
  [key: string]: any;
}

export const ChevronDown: React.FC<ChevronDownProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
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

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
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
    <Navbar className=" py-0 lg:py-[38px] bg-gradient-to-r from-teal-500 to-blue-400 relative border-none">
      <NavbarContent
        className="hidden bg-transparent lg:flex gap-4 max-w-[1024px] xl:max-w-[1360px] mx-auto"
        justify="center"
      >
        {getNavItems()}
      </NavbarContent>
      <div className="block absolute right-[20px] top-[10px] lg:hidden z-[100]">
        <Hamburger
          toggled={isOpen}
          toggle={toggleMenu}
          size={20}
          direction="right"
          duration={0.3}
          distance="lg"
          color="#fff"
          easing="ease-in"
        />
      </div>
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-teal-500 to-blue-400 text-white 
                      py-[45px] transform transition-transform -translate-x-full duration-300 ease-in-out z-50
             ${isOpen ? "translate-x-0" : ""}`}
      >
        <div className="h-screen top-0 flex flex-col items-center gap-[20px]">
          {getNavItems()}
        </div>
      </div>
    </Navbar>
  );
}
