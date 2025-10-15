"use client";

import { siteConfig } from "@/src/config/site.config";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Dentistry {
  src: string;
  alt: string;
  name: string;
}

interface DentistryConfig {
  equipment?: Dentistry[];
}

const Dentistry = () => {
  const pathname = usePathname();

  const dentistryConfig = siteConfig.pagesContent[
    pathname as keyof typeof siteConfig.pagesContent
  ] as DentistryConfig | undefined;

  const equipmentPictures: Dentistry[] = dentistryConfig?.equipment || [];

  return (
    <div className="flex flex-col items-center">
      <div className="mb-[40]">
        <p>
          Из всех заболеваний, которым подвержены домашние животные, на проблемы
          зубов и полости рта владельцы, как правило, обращают внимание только в
          тех случаях, когда заболевание уже довольно серьезно прогрессирует. В
          этот момент патологический процесс затрагивает уже не только зубы, но
          и ротовую полость. В первую очередь это касается органов пищеварения,
          но могут быть вовлечены и все остальные системы. Таким образом,
          отсутствие клинических признаков, свойственных больному животному,
          совершенно не означает отсутствие заболеваний зубов и ротовой полости
          у собак и кошек.
        </p>
        <p>
          Санация полости рта у собак и кошек подразумевает обнаружение и
          своевременный индивидуальный курс лечения всех заболеваний ротовой
          полости у животного. Сюда можно отнести в первую очередь зубной камень
          у собак и кошек, зубной налет, неприятный запах из пасти, воспаление
          десен, нежизнеспособные, разрушенные зубы и многие другие проблемы.
        </p>
        <p>
          Ваш питомец нуждается в стоматологической помощи в том случае, если
          имеется наличие красной полосы вдоль линии десен, появляется
          неприятный запах изо рта, происходит полный отказ от корма, меняется
          интенсивность жевания или животное делает это с большой осторожностью.
          Тревожными симптомами являются также: невозможность увидеть зубную
          эмаль из-за зубного камня, сломанный зуб, изменение цвета зубов,
          потеря зубов, отеки в лицевой области, отеки или разрастание мягких
          тканей в ротовой полости и масса других явных и скрытых признаков.
        </p>
      </div>
      <h2 className="mb-[40]">Наше оборудование:</h2>
      <div className="flex flex-col items-center gap-[40px]">
        {equipmentPictures.map((picture, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={picture.src}
              alt={picture.alt}
              width={462}
              height={462}
            />
            <p>{picture.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dentistry;
