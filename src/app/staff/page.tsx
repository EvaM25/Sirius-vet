"use client";

import { siteConfig } from "@/src/config/site.config";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

const Staff = () => {
  const pathname = usePathname();

  const StaffPageConfig = siteConfig.pagesContent[
    pathname as keyof typeof siteConfig.pagesContent
  ] as StaffPageConfig | undefined;

  const doctors: StaffMember[] = StaffPageConfig?.staffMembers?.doctors || [];
  const registration: StaffMember[] =
    StaffPageConfig?.staffMembers?.registration || [];
  const pharm: StaffMember[] = StaffPageConfig?.staffMembers?.pharm || [];

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="mb-[40]">Клиника</h2>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[40px] mb-[40]">
          {doctors.map((doctors, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={doctors.src}
                alt={doctors.alt}
                width={452}
                height={593}
                className="mb-[10px]"
              />
              <h3>{doctors.name}</h3>
            </div>
          ))}
        </div>
        <h2 className="mb-[40]">Регистратура</h2>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[40px] mb-[40]">
          {registration.map((registration, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={registration.src}
                alt={registration.alt}
                width={452}
                height={593}
                className="mb-[10px]"
              />
              <h3>{registration.name}</h3>
            </div>
          ))}
        </div>
        <h2 className="mb-[40]">Ветеринарная аптека</h2>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[40px] mb-[40]">
          {pharm.map((pharm, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={pharm.src}
                alt={pharm.alt}
                width={452}
                height={593}
                className="mb-[10px]"
              />
              <h3>{pharm.name}</h3>
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
};

export default Staff;
