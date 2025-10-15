"use client";

import { siteConfig } from "@/src/config/site.config";
import { usePathname } from "next/navigation";
import NotFoundPage from "@/src/app/not-found";
import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

const PageContent = () => {
  const pathname = usePathname();
  const PageContent =
    siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent];

  if (!PageContent) {
    return <NotFoundPage />;
  }

  const cleanHTML = DOMPurify.sanitize(PageContent.content);

  return (
    <div className="flex flex-col justify-center items-center">
      {parse(cleanHTML)}
    </div>
  );
};

export default PageContent;
