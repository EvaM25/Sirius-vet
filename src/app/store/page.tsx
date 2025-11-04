import { siteConfig } from "@/src/config/site.config";
import Image from "next/image";

interface Store {
  src: string;
  alt: string;
}

interface StoreConfig {
  pictures?: Store[];
}

export default function Store() {
  const StoreConfig = siteConfig.pagesContent[
    "/store" as keyof typeof siteConfig.pagesContent
  ] as StoreConfig | undefined;

  const storePictures: Store[] = StoreConfig?.pictures || [];
  return (
    <div className="flex flex-col items-start">
      <span className="self-center mb-[20px] text-[14px] lg:text-[16px]">
        <strong>График работы: ежедневно 9:00-21:00</strong>
      </span>
      <div className="mb-[20px]">
        <p>
          В нашей клинике для вашего удобства располагается ветеринарная аптека.
          Побывав на приеме у врача Вы сможете приобрести необходимые Вам
          препараты.
        </p>
        <p>
          Все работники аптеки имеют специальное ветеринарное образование и с
          удовольствием проконсультируют Вас о покупаемых ветеринарных
          препаратах, помогут подобрать корм для вашего питомца, предложат
          хорошие лечебные корма, а также при необходимости подберут Вашему
          любимцу нужные зоотовары. На все товары есть необходимые сертификаты.
          Все лекарственные средства, корма и лакомства зарегистрированы в
          системе Честный знак.
        </p>
        <p>
          Если Вам необходим какой-то препарат, а вы не можете его найти или его
          нет в наличии – мы постараемся Вам помочь. Вы можете оставить свой
          заказ по телефону или подойти лично. А мы постараемся выполнить его в
          ближайшее время.
        </p>
        <p>
          Оставить свой заказ Вы можете по тел.:{" "}
          <strong>8-910-860-22-33; 8-(4842)-22-45-15</strong>
        </p>
      </div>
      <h3 className="self-center mb-[20px]">Обращаем Ваше внимание!</h3>
      <p>
        С 1 марта 2025 года в соответствии с Приказом Минсельхоза России №776 от
        22.11.2022 лекарственные препараты, относящиеся к группам:
      </p>
      <ul className="list-disc list-inside mb-[10px]">
        <li>Антибактериальные</li>
        <li>Противопаразитарные (для С/Х животных)</li>
        <li>Гормональные</li>
        <li>Седативные</li>
        <li>Нейролептики</li>
        <li>Анальгетики</li>
        <li>Анестетики</li>
      </ul>
      <span className="mb-[15px]">
        <strong>Отпускаются по РЕЦЕПТУ!!!!</strong>
      </span>
      <p className="underline mb-[30px]">
        <strong>НЕ ЗАНИМАЙТЕСЬ САМОЛЕЧЕНИЕМ!</strong>
      </p>
      <h3 className="self-center mb-[20px]">Наша аптека</h3>
      <div className="grid md:grid-cols-2 gap-[40px]">
        {storePictures.map((picture, index) => (
          <div key={index}>
            <Image
              src={picture.src}
              alt={picture.alt}
              width={1000}
              height={1000}
              className="w-[275px] h-[310px] md:w-[462px] md:h-[562px]"
              unoptimized={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
