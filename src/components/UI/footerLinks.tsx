import Link from "next/link";

interface FooterItem {
  href: string;
  label: string;
}

interface FooterLinksProps {
  items: FooterItem[];
  pathname: string | null;
}

function FooterLinks({ items, pathname }: FooterLinksProps) {
  return (
    <ul className="flex flex-col order-1 md:grid md:grid-cols-2 md:order-2 gap-4 mb-[30px] md:mb-0">
      {items.map((item) => {
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
      })}
    </ul>
  );
}

export default FooterLinks;
