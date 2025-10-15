"use client";

import { siteConfig } from "@/src/config/site.config";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Radiography {
  src: string;
  alt: string;
}

interface RadiographyConfig {
  pictures?: Radiography[];
}

const Radiography = () => {
  const pathname = usePathname();

  const radiographyConfig = siteConfig.pagesContent[
    pathname as keyof typeof siteConfig.pagesContent
  ] as RadiographyConfig | undefined;

  const equipmentPictures: Radiography[] = radiographyConfig?.pictures || [];

  return (
    <div>
      <div className="mb-[40px]">
        <p>
          В нашей клинике работает лицензированный кабинет цифровой
          рентгенографии.
        </p>
        <p>
          <strong>Цифровая рентгенография</strong> — это один из методов
          диагностики, в основе которого лежит получение изображения внутренних
          органов и тканей животного на цифровой матрице. Для этого через тело
          животного пропускают специальным аппаратом рентгеновские лучи. Это
          главный метод диагностики проблем опорно-двигательного аппарата,
          грудной клетки и органов брюшной полости.
        </p>
        <p>
          Такая ветеринарная рентгенография имеет ряд преимуществ по сравнению с
          традиционным методом, когда изображение переносится на плёнку:
        </p>
        <ul>
          <li>
            <strong>Цифровые технологии</strong> – это минимальные лучевые
            нагрузки на пациентов и владельца животного;
          </li>
          <li>
            Существует возможность дополнительной обработки полученных
            изображений программными средствами (измерения, увеличения и т.п.)
          </li>
          <li>
            <strong>Время получения снимка.</strong> Снимок готов сразу же после
            экспозиции.
          </li>
          <li>
            <strong>Удобное хранение и перемещение полученных снимков</strong> –
            на цифровом носителе. Также существует возможность распечатки снимка
            на термографическом принтере.
          </li>
        </ul>
        <p>
          Мы работаем на самом современном цифровом оборудовании: аппарат
          рентгеновский <strong>ORANGE-1040HF, EcoRay</strong>. И система
          оцифровки DR панель Astel.
        </p>
        <p>
          Цифровой рентгеновский аппарат сочетает в себе компактность,
          безопасность и высокое качество цифровой диагностики. Портативный
          плоскопанельный детектор Astel 1417 G обеспечивает высокую
          эффективность, качество и скорость появления изображения в процессе
          рентгенологического исследования.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[40px]">
        {equipmentPictures.map((picture, index) => (
          <div key={index}>
            <Image
              src={picture.src}
              alt={picture.alt}
              width={462}
              height={462}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radiography;
