import Image from "next/image";

export default function Hero() {
  return (
    <section
      className={` bg-gradient-to-r from-teal-500 to-blue-400 mb-[50px] pb-[45px] text-white items-center justify-between`}
    >
      <div className="flex justify-between items-center  xl:max-w-[1240px] lg:max-w-[944px] md:max-w-[688px] relative mx-auto">
        <div className="flex flex-col items-center w-[353px] ">
          <Image
            src="/clinic.png"
            alt="sirius-vet"
            width={1000}
            height={1000}
            className="mb-[15px] w-[166px] h-[166px] md:mb-[25px] md:w-[166px]"
            unoptimized={true}
          />
          <h2 className="mb-[5px] flex flex-col items-center">
            <span className="font-semibold text-[11px] xl:text-[24px] lg:text-[20px] md:text-[16px]">
              КЛИНИКА
            </span>
            <span className="font-semibold text-[11px] xl:text-[24px] lg:text-[20px] md:text-[16px] ">
              ВЕТЕРИНАРНОЙ МЕДИЦИНЫ
            </span>
          </h2>
          <span className="mb-[5px] font-semibold lg:text-[16px] md:text-[12px] text-[10px]">
            ооо “Сириус-Вет”
          </span>
          <span className="mb-[5px] font-semibold lg:text-[16px] md:text-[12px] text-[10px]">
            г.Калуга
          </span>
          <span className="mb-[5px] font-semibold lg:text-[12px] md:text-[12px] text-[10px]">
            КРУГЛОСУТОЧНО
          </span>
          <span className="mb-[10px] font-semibold lg:text-[16px] md:text-[12px] text-[10px]">
            ул.Баррикад , д.128
          </span>
          <span className="font-semibold lg:text-[24px] md:text-[16px] text-[11px]">
            ТЕЛ. +7-(4842)-57-01-75
          </span>
          <span className="font-semibold lg:text-[24px] md:text-[16px] text-[11px]">
            +7-(930)-754-10-60
          </span>
        </div>

        <div className="hidden xl:flex flex-row">
          <Image
            src="/hero-1.png"
            alt="cat-photo"
            width={1000}
            height={1000}
            className="absolute w-[240px] h-[222px] top-[130px] left-[420px] z-[10]"
            unoptimized={true}
          />
          <Image
            src="/hero-2.png"
            alt="vet-photo"
            width={1000}
            height={1000}
            className="absolute w-[316px] h-[290px] top-[5px] right-[380px] z-[5]"
            unoptimized={true}
          />
        </div>

        <div className="flex flex-col items-center w-[353px]">
          <Image
            src="/store.png"
            alt="vet-store"
            width={1000}
            height={1000}
            className="mb-[12px] w-[166px] h-[166px] md:mb-[27px] md:w-[166px]"
            unoptimized={true}
          />
          <h2 className="mb-[5px] lg:mb-[25px] md:mb-[12px]">
            <span className="font-semibold xl:text-[24px] lg:text-[20px] md:text-[16px] text-[11px]">
              ВЕТЕРИНАРНАЯ АПТЕКА
            </span>
          </h2>
          <span className="mb-[5px] font-semibold lg:text-[16px] md:text-[12px] text-[10px]">
            ооо “Живая планета”
          </span>
          <span className="lg:mb-[5px] mb-[5px] font-semibold lg:text-[16px] md:text-[12px] text-[10px]">
            г.Калуга
          </span>
          <span className="mb-[5px] font-semibold lg:text-[12px] md:text-[12px] text-[10px]">
            С 9.00 ДО 21.00
          </span>
          <span className="mb-[10px] font-semibold lg:text-[16px] md:text-[12px] text-[10px]">
            ул.Баррикад , д.128
          </span>
          <span className="font-semibold lg:text-[24px] md:text-[16px] text-[11px]">
            ТЕЛ. +7-(4842)-22-45-15
          </span>
          <span className="font-semibold lg:text-[24px] md:text-[16px] text-[11px]">
            +7-(910)-860-22-33
          </span>
        </div>
      </div>
    </section>
  );
}
