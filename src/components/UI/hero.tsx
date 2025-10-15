"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className={` bg-gradient-to-r from-teal-500 to-blue-400 mb-[50] pb-[45] text-white items-center justify-between`}
      // style={{ height: layoutConfig.heroHeight }}
    >
      <div className="flex justify-between items-center  xl:max-w-[1240] lg:max-w-[944] md:max-w-[688] relative mx-auto">
        <div className="flex flex-col items-center w-[353] ">
          <Image
            src="/clinic.png"
            alt="sirius-vet"
            width={126}
            height={166}
            className=" mb-[15] md:mb-[25] md:w-[166px]"
          />
          <h2 className="mb-[5] flex flex-col items-center">
            <span className="font-semibold text-[11px] xl:text-[24px] lg:text-[20px] md:text-[16px]">
              КЛИНИКА
            </span>
            <span className="font-semibold text-[11px] xl:text-[24px] lg:text-[20px] md:text-[16px] ">
              ВЕТЕРИНАРНОЙ МЕДИЦИНЫ
            </span>
          </h2>
          <span className="mb-[5] font-semibold lg:text-[16px] md:text-[12px] text-[10px]">
            ооо “Сириус-Вет”
          </span>
          <span className="mb-[5] font-semibold lg:text-[16px] md:text-[12px] text-[10px]">
            г.Калуга
          </span>
          <span className="mb-[5] font-semibold lg:text-[12px] md:text-[12px] text-[10px]">
            КРУГЛОСУТОЧНО
          </span>
          <span className="mb-[10] font-semibold lg:text-[16px] md:text-[12px] text-[10px]">
            ул.Баррикад , д.128
          </span>
          <span className="font-semibold lg:text-[24px] md:text-[16px] text-[11px]">
            ТЕЛ. 57-01-75 / 8 930 754 1060
          </span>
        </div>

        <div className="hidden xl:flex flex-row">
          <Image
            src="/hero-1.png"
            alt="cat-photo"
            width={220}
            height={222}
            className="absolute top-[130] left-[420] z-[10]"
          />
          <Image
            src="/hero-2.png"
            alt="vet-photo"
            width={316}
            height={282}
            className="absolute top-[5] right-[380] z-[5]"
          />
        </div>

        <div className="flex flex-col items-center w-[353]">
          <Image
            src="/store.png"
            alt="vet-store"
            width={126}
            height={166}
            className="mb-[15] md:mb-[37] md:w-[166px]"
          />
          <h2 className="mb-[7] lg:mb-[25] md:mb-[12]">
            <span className="font-semibold xl:text-[24px] lg:text-[20px] md:text-[16px] text-[11px]">
              ВЕТЕРИНАРНАЯ АПТЕКА
            </span>
          </h2>
          <span className="mb-[5] font-semibold lg:text-[16px] md:text-[12px] text-[10px]">
            ооо “Живая планета”
          </span>
          <span className="lg:mb-[30] mb-[20] font-semibold lg:text-[16px] md:text-[12px] text-[10px]">
            г.Калуга
          </span>
          <span className="mb-[10] font-semibold lg:text-[16px] md:text-[12px] text-[10px]">
            ул.Баррикад , д.128
          </span>
          <span className="font-semibold lg:text-[24px] md:text-[16px] text-[11px]">
            ТЕЛ. 57-01-75 / 8 930 754 1060
          </span>
        </div>
      </div>
    </section>
  );
}
