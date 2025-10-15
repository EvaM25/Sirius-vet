"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/src/config/site.config";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  const getFooterItems = () => {
    return siteConfig.footerItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`px-3 py-1 font-semibold text-[16px]
              hover:text-blue-300
              ${isActive ? "text-teal-800" : "text-white"}
              transition-colors
              duration-300`}
          >
            {item.label}
          </Link>
        </li>
      );
    });
  };
  return (
    <footer
      className={` bg-gradient-to-r from-teal-500 to-blue-400 pt-12 pb-8 text-white text-center`}
      //   style={{ height: layoutConfig.footerHeight }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center xl:max-w-[1240] lg:max-w-[944] max-w-[722] mx-auto">
        <div className="flex flex-col items-center order-2 md:order-1 mb-[15] md:mb-0">
          <Image
            src="/clinic.png"
            alt="sirius-vet"
            width={125}
            height={125}
            className="mb-[20]"
          />
          <a
            href="tel:570175"
            className="font-bold text-[16px] hover:text-blue-300 transition-colors
              duration-300 "
          >
            57-01-75
          </a>
          <a
            href="tel:+79307541060"
            className="font-bold text-[16px] hover:text-blue-300 transition-colors
              duration-300"
          >
            8 930 754 10 60
          </a>
        </div>

        <ul className="flex flex-col order-1 md:grid md:grid-cols-2 md:order-2 gap-4 mb-[30] md:mb-0">
          {getFooterItems()}
        </ul>

        <div className="flex flex-col items-center order-3">
          <Image
            src="/store.png"
            alt="vet-store"
            width={125}
            height={125}
            className="mb-[20]"
          />
          <a
            href="tel:570175"
            className="font-bold text-[16px] hover:text-blue-300 transition-colors
              duration-300"
          >
            57-01-75
          </a>
          <a
            href="tel:+79307541060"
            className="font-bold text-[16px] hover:text-blue-300 transition-colors
              duration-300"
          >
            8 930 754 10 60
          </a>
        </div>
      </div>
    </footer>
  );
}
