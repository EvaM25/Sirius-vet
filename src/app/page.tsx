"use client";

import Image from "next/image";
import { siteConfig } from "../config/site.config";
import { usePathname } from "next/navigation";

interface Clinic {
  src: string;
  alt: string;
}

interface PicturesConfig {
  pictures?: Clinic[];
}

export default function Home() {
  const pathname = usePathname();
  const MainPageConfig = siteConfig.pagesContent[
    pathname as keyof typeof siteConfig.pagesContent
  ] as PicturesConfig | undefined;

  const mainPictures: Clinic[] = MainPageConfig?.pictures || [];

  return (
    <div className="flex flex-col items-center">
      <Image
        src="/main.png"
        alt="Главное фото"
        width={1000}
        height={1000}
        className="mb-[52px] w-[562px] h-[523px]"
      />
      <div className="mb-[40px] text-justify">
        <blockquote className=" italic text-blue-900">
          <p>"Ты навсегда в ответе за всех, кого приручил"</p>
        </blockquote>
        <p>Слова Антуана де Сент Экзюпери никогда не теряют актуальность.</p>
        <p>
          В настоящее время люди стали забывать эту истину, но помните, что
          приобретая животное Вы берете на себя всю полноту ответственности за
          его жизнь и здоровье, своевременное проведение всех профилактических и
          лечебных мероприятий.
        </p>
        <p>
          Наша клиника осуществляет свою практику <strong>с 2003 года</strong> и
          накопила немалый опыт в лечебно — профилактической деятельности.
        </p>
        <p>
          Мы всегда стараемся сочетать в нашей деятельности знание и умение,
          терпение и аккуратность, благоразумие и осторожность, честность и
          объективность.
        </p>
        <p>
          Мы до последнего мгновения боремся за каждую жизнь! Мы переживаем с
          Вами за каждого пациента и искренне радуемся каждой спасенной жизни!
        </p>
        <p>
          Ветеринарная клиника "Сириус Вет" находится в г. Калуга, по адресу{" "}
          <strong>ул.Баррикад, 128</strong>. Отличительной чертой нашей
          ветклиники является <strong>круглосуточная работа</strong>.
        </p>
      </div>
      <h2 className="mb-[40px]">Наша клиника</h2>
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" w-full h-full object-cover"
      >
        <source src="/videos/sirius-vet.mp4" type="video/mp4" />
        <source src="/videos/sirius-vet.webm" type="video/webm" />
      </video>
      {/* <div className="grid grid-cols-2 gap-[40px] mb-[40]">
        {mainPictures.map((picture, index) => (
          <div key={index}>
            <Image
              src={picture.src}
              alt={picture.alt}
              width={452}
              height={300}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}
