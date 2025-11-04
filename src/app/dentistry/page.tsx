import { siteConfig } from "@/src/config/site.config";
import Image from "next/image";

interface Dentistry {
  src: string;
  alt: string;
  name: string;
}

interface DentistryConfig {
  equipment?: Dentistry[];
}

export default function Dentistry() {
  const DentistryConfig = siteConfig.pagesContent[
    "/dentistry" as keyof typeof siteConfig.pagesContent
  ] as DentistryConfig | undefined;

  const equipmentPictures: Dentistry[] = DentistryConfig?.equipment || [];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-start mb-[40px]">
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
          полости у животного.
        </p>
        <h3 className="self-center mb-[20px]">Сюда можно отнести:</h3>
        <ol className="list-decimal list-inside mb-[20px]">
          <li>зубной камень у собак и кошек</li>
          <li>зубной налет</li>
          <li>неприятный запах из пасти</li>
          <li>воспаление десен</li>
          <li>нежизнеспособные, разрушенные зубы и многие другие проблемы.</li>
        </ol>
        <h3 className="self-center mb-[20px]">
          Ваш питомец нуждается в стоматологической помощи в том случае, если:
        </h3>
        <ul className="list-disc list-inside mb-[20px]">
          <li>Имеется наличие красной полосы вдоль линии десен.</li>
          <li>Появляется неприятный запах изо рта.</li>
          <li>Происходит полный отказ от корма.</li>
          <li>
            Меняется интенсивность жевания или животное делает это с большой
            осторожностью.
          </li>
        </ul>
        <h3 className="self-center mb-[20px]">
          Тревожными симптомами являются также:
        </h3>
        <ul className="list-disc list-inside mb-[20px]">
          <li>Невозможность увидеть зубную эмаль из-за зубного камня.</li>
          <li>Сломанный зуб.</li>
          <li>Изменение цвета зубов.</li>
          <li>Потеря зубов.</li>
          <li>Отеки в лицевой области.</li>
          <li>
            Отеки или разрастание мягких тканей в ротовой полости и масса других
            явных и скрытых признаков.
          </li>
        </ul>
      </div>
      <h2 className="mb-[40]">Наше оборудование:</h2>
      <div className="flex flex-col items-center gap-[40px]">
        {equipmentPictures.map((picture, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={picture.src}
              alt={picture.alt}
              width={1000}
              height={1000}
              className="w-[275px] h-[305px] md:w-[462px] md:h-[462px]"
              unoptimized={true}
            />
            <p>{picture.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
