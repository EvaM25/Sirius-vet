"use client";

import { siteConfig } from "@/src/config/site.config";
import { usePathname } from "next/navigation";

const Title = () => {
  const pathname = usePathname();

  const pageData =
    siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent];

  const pageTitle = pageData?.title || siteConfig.title;

  return (
    <div className="w-full flex justify-center ">
      <h1 className="lg:text-[32px] md:text-[24px] font-bold mb-[34] text-teal-700">
        {pageTitle}
      </h1>
    </div>
  );
};

export default Title;
