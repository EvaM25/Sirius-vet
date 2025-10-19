import { siteConfig } from "@/src/config/site.config";
import Image from "next/image";

interface StaffMember {
  src: string;
  alt: string;
  name: string;
}

interface StaffPageConfig {
  staffMembers?: {
    doctors?: StaffMember[];
    registration?: StaffMember[];
    pharm?: StaffMember[];
  };
}

export default function Staff() {
  const StaffPageConfig = siteConfig.pagesContent[
    "/staff" as keyof typeof siteConfig.pagesContent
  ] as StaffPageConfig | undefined;

  const doctors: StaffMember[] = StaffPageConfig?.staffMembers?.doctors || [];
  const registration: StaffMember[] =
    StaffPageConfig?.staffMembers?.registration || [];
  const pharm: StaffMember[] = StaffPageConfig?.staffMembers?.pharm || [];

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="mb-[40px]">Клиника</h2>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[40px] mb-[40px]">
          {doctors.map((doctors, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={doctors.src}
                alt={doctors.alt}
                width={1000}
                height={1000}
                className="w-[310px] h-[425px] md:w-[452px] md:h-[693px] mb-[10px]"
              />
              <h4 className="font-bold text-[14px] md:text-[18px]">
                {doctors.name}
              </h4>
            </div>
          ))}
        </div>
        <h2 className="mb-[40px]">Регистратура</h2>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[40px] mb-[40px]">
          {registration.map((registration, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={registration.src}
                alt={registration.alt}
                width={1000}
                height={1000}
                className="w-[310px] h-[425px] md:w-[452px] md:h-[693px] mb-[10px]"
              />
              <h4 className="font-bold text-[14px] md:text-[18px]">
                {registration.name}
              </h4>
            </div>
          ))}
        </div>
        <h2 className="mb-[40px]">Ветеринарная аптека</h2>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[40px] mb-[40px]">
          {pharm.map((pharm, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={pharm.src}
                alt={pharm.alt}
                width={1000}
                height={1000}
                className="w-[310px] h-[425px] md:w-[452px] md:h-[693px] mb-[10px]"
              />
              <h4 className="font-bold text-[14px] md:text-[18px]">
                {pharm.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <span className="text-[12px]">
        Все фотографии размещены с письменного согласия субъекта персональных
        данных в соответствии со ст.10.1 ФЗ №152-ФЗ "О персональных данных"
      </span>
    </div>
  );
}
