"use client";

import Image from "next/image";

const Contacts = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[16px] lg:text-[24px] mb-[15] lg:mb-[25px]">
        г. Калуга
      </span>
      <span className="text-[16px] lg:text-[24px] mb-[25] lg:mb-[50px]">
        ул. Баррикад д. 128
      </span>
      <div className="flex flex-col items-center gap-[10px] mb-[15] lg:mb-[40px]">
        <span className="text-[16px] lg:text-[24px]">
          <strong>Клиника (круглосуточно)</strong>
        </span>
        <span className="text-[16px] lg:text-[24px]">
          тел: 57-01-75, 8-930-754-10-60
        </span>
      </div>
      <div className="flex flex-col items-center gap-[10px] mb-[15] lg:mb-[40px]">
        <span className="text-[16px] lg:text-[24px] ">
          <strong>Аптека</strong>
        </span>
        <span className="text-[16px] lg:text-[24px]">
          тел: 22-45-15, 89108602233
        </span>
      </div>
      <Image src="/map.png" alt="Клиника" width={722} height={380} />
    </div>
  );
};

export default Contacts;
