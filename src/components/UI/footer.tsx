"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/src/config/site.config";
import FooterLinks from "./footerLinks";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-gradient-to-r from-teal-500 to-blue-400 pt-12 pb-8 text-white text-center">
      <div className="flex flex-col md:flex-row justify-between items-center xl:max-w-[1240] lg:max-w-[944] max-w-[722] mx-auto">
        <div className="flex flex-col items-center order-2 md:order-1 mb-[15] md:mb-0">
          <Image
            src="/clinic.png"
            alt="sirius-vet"
            width={1000}
            height={1000}
            className="w-[125px] h-[125px] mb-[20px]"
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

        <FooterLinks items={siteConfig.footerItems} pathname={pathname} />

        <div className="flex flex-col items-center order-3">
          <Image
            src="/store.png"
            alt="vet-store"
            width={1000}
            height={1000}
            className="w-[125px] h-[125px] mb-[20px]"
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
