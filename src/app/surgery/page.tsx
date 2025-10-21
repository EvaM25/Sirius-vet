import { siteConfig } from "@/src/config/site.config";
import Image from "next/image";

interface Surgery {
  src: string;
  alt: string;
}

interface SurgeryConfig {
  pictures?: Surgery[];
  equipment?: Surgery[];
}

export default function Surgery() {
  const SurgeryConfig = siteConfig.pagesContent[
    "/surgery" as keyof typeof siteConfig.pagesContent
  ] as SurgeryConfig | undefined;

  const surgeryPictures: Surgery[] = SurgeryConfig?.pictures || [];
  const equipmentPictures: Surgery[] = SurgeryConfig?.equipment || [];

  return (
    <div className="flex flex-col items-center">
      <div className="mb-[40px]">
        <p>
          <strong>Хирургия</strong> — область ветеринарной медицины, изучающая
          острые и хронические заболевания, которые лечатся при помощи
          оперативного (хирургического) метода.
        </p>
        <p>
          Хирургическое лечение состоит из нескольких последовательных этапов:
        </p>
        <ul className="list-disc list-inside">
          <li>подготовки больного к операции</li>
          <li>обезболивания (наркоза) хирургического вмешательства</li>
        </ul>
        <div className="flex flex-col items-center">
          <p>
            Во время подготовки животного к операции обязательно проводится{" "}
            <strong>премедикация</strong>, призванная снизить риск , связанный с
            анестезией. Эти мероприятия могут занимать как минуты, так и недели.
          </p>
          <p>
            В нашем операционном блоке используются разные виды наркоза, в том
            числе и ингаляционный. Мы работаем на ветеринарном наркозно -
            дыхательном аппарате Zoomed Minor VET Optima
          </p>
          <Image
            src="/equipment/surgery-1.png"
            alt="Zoomed Minor VET Optima"
            width={1000}
            height={1000}
            className="w-[275px] h-[333px] md:w-[462px] md:h-[462px]"
          />
        </div>
        <p>
          Так же наш операционный блок оборудован несколькими кислородными
          концентраторами, кислородной камерой, ветеринарными мониторами
          пациента Mindray, различными типами инфузоматов,электрокоагуляторами
          ЭХА и Panda.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[10px] mb-[40px]">
        {surgeryPictures.map((picture, index) => (
          <div key={index}>
            <Image
              src={picture.src}
              alt={picture.alt}
              width={1000}
              height={1000}
              className="w-[275px] h-[270px] md:w-[462px] md:h-[462px]"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start mb-[40px]">
        <p>
          При любом методе наркоза всегда существует вероятность развития
          осложнений, особенно при тяжелых заболеваниях и у гериатрических
          пациентов. Об этом ветеринарный врач обязан предупредить владельца,
          который в свою очередь , должен подписать соглашение на операцию.
          Каждый организм индивидуален , поэтому реакция на введение препаратов
          трудно полноценно спрогнозировать. К наркозу животное надо
          своевременно готовить (исключая случаи экстренного вмешательства).{" "}
          <b>
            Минимальная подготовка заключается в проведении 12 часовой голодной
            диеты во избежании аспирации рвотных масс. Плановые операции
            рекомендуется проводить в утренние часы, чтобы у владельцев животных
            была возможность контролировать процесс выхода из наркоза.
          </b>
        </p>
        <h3 className="flex self-center mb-[10px]">
          Хирургическая операция включает:
        </h3>

        <ol className="list-decimal list-inside mb-[10px]">
          <li>Операционный доступ. </li>
          <li>Оперативное лечение органа.</li>
          <li>
            Восстановление целостности тканей, нарушенных во время операции.
          </li>
        </ol>

        <h3 className="self-center mb-[10px]">
          По характеру и целям операции делят на:
        </h3>
        <ul className="list-disc list-inside mb-[10px]">
          <li>
            <b>Диагностические</b> - позволяют хирургу поставить более точный
            диагноз и являются, в некоторых случаях, единственным диагностически
            достоверным методом.
          </li>
          <li>
            <b>Радикальные</b> - полностью устраняют патологический процесс.
          </li>
          <li>
            <b>Паллиативные</b> - блегчают общее состояние больного
            кратковременно.
          </li>
        </ul>

        <h3 className="self-center mb-[10px]">
          По срокам выполнения различают операции:
        </h3>
        <ul className="list-disc list-inside mb-[10px]">
          <li>
            <b>Экстренные</b> - требуют немедленного выполнения.
          </li>
          <li>
            <b>Срочные</b> - могут быть отложены на время уточнения диагноза и
            подготовку больного к операции.
          </li>
          <li>
            <b>Плановые</b> - выполняются после детального обследования больного
            и необходимой подготовки к операции.
          </li>
        </ul>

        <p>
          Степень и необходимость хирургического вмешательства определяется
          лечащим врачом.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[20px]">
        {equipmentPictures.map((picture, index) => (
          <div key={index}>
            <Image
              src={picture.src}
              alt={picture.alt}
              width={1000}
              height={1000}
              className="w-[307px] h-[430px] md:w-[662px] md:h-[623px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
