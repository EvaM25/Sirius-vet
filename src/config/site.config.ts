export const siteConfig = {
  title: "Sirius-vet",
  description: "Сириус-Вет. Ветклиника",
  navItems: [
    { href: "/", label: "Главная" },
    { href: "/about", label: "О нас" },
    { href: "/rules", label: "Правила работы с нами" },
    {
      label: "Услуги",
      children: [
        { href: "/therapy", label: "Терапия" },
        { href: "/surgery", label: "Хирургия" },
        { href: "/dentistry", label: "Стоматология" },
        { href: "/radiography", label: "Цифровая рентгенография" },
        { href: "/vaccination", label: "Вакцинация" },
        { href: "/registration", label: "Оформление документов" },
        { href: "/chipping", label: "Чипирование" },
        { href: "/diagnostics", label: "Лабораторная диагностика" },
        { href: "/scan", label: "УЗИ" },
        { href: "/echocardiography", label: "ЭХОкг" },
      ],
    },
    { href: "/staff", label: "Врачи" },
    { href: "/contacts", label: "Контакты" },
    {
      href: "https://docs.google.com/spreadsheets/d/1FhEuhjEnx3fDFMO7mEuiIljn7kID2MPBJnZZykWsg1Y/edit?gid=0#gid=0",
      label: "Прейскурант",
      target: "_blank",
    },
    { href: "/store", label: "Ветеринарная аптека" },
  ],

  pagesContent: {
    "/": {
      title: "Мы поможем вашему питомцу!",
      pictures: [
        {
          src: "/clinic/clinic-front.png",
          alt: "Главный вход",
        },
        {
          src: "/clinic/registration.png",
          alt: "Регистратура",
        },
        {
          src: "/clinic/waiting-room.png",
          alt: "Зал ожидания",
        },
        {
          src: "/clinic/vet-store.png",
          alt: "Аптека",
        },
      ],
    },
    "/about": {
      title: "О нас",
    },
    "/rules": {
      title: "Правила работы с нами",
    },
    "/staff": {
      title: "Наши сотрудники",
      staffMembers: {
        doctors: [
          {
            src: "/staff/ipatov.png",
            alt: "Ипатов Александр Васильевич",
            name: "Ипатов Александр Васильевич",
          },
          {
            src: "/staff/cheriukanov.png",
            alt: "Черюканов Михаил Михайлович",
            name: "Черюканов Михаил Михайлович",
          },
          {
            src: "/staff/padalka.png",
            alt: "Падалка Юлия Александровна",
            name: "Падалка Юлия Александровна",
          },
          {
            src: "/staff/potyomkina.png",
            alt: "Потемкина Татьяна Сергеевна",
            name: "Потемкина Татьяна Сергеевна",
          },
          {
            src: "/staff/koganova.png",
            alt: "Коганова Екатерина Владимировна",
            name: "Коганова Екатерина Владимировна",
          },
          {
            src: "/staff/ananyeva.png",
            alt: "Ананьева Кристина Алексеевна",
            name: "Ананьева Кристина Алексеевна",
          },
          {
            src: "/staff/khromaya.png",
            alt: "Хромая Ольга Владиславовна",
            name: "Хромая Ольга Владиславовна",
          },
          {
            src: "/staff/arkhipov.png",
            alt: "Архипов Артем Александрович",
            name: "Архипов Артем Александрович",
          },
          {
            src: "/staff/rodin.png",
            alt: "Родин Давид Паатович",
            name: "Родин Давид Паатович",
          },
          {
            src: "/staff/schebeneva.png",
            alt: "Щебенева Анастасия Олеговна",
            name: "Щебенева Анастасия Олеговна",
          },
          {
            src: "/staff/fedyukhina.png",
            alt: "Федюхина Анна Владимировна",
            name: "Федюхина Анна Владимировна",
          },
          {
            src: "/staff/aleksandrova.png",
            alt: "Александрова Анастасия Валериевна",
            name: "Александрова Анастасия Валериевна",
          },
          {
            src: "/staff/lobova.png",
            alt: "Лобова Юлия Сергеевна",
            name: "Лобова Юлия Сергеевна",
          },
          {
            src: "/staff/rodina.png",
            alt: "Родина Софья Станиславовна",
            name: "Родина Софья Станиславовна",
          },
          {
            src: "/staff/katkova.png",
            alt: "Каткова Светлана Евгеньевна",
            name: "Каткова Светлана Евгеньевна",
          },
          {
            src: "/staff/ipatova.png",
            alt: "Ипатова Елена Викторовна",
            name: "Ипатова Елена Викторовна",
          },
          {
            src: "/staff/slonevskaya.png",
            alt: "Слоневская Елена Александровна",
            name: "Слоневская Елена Александровна",
          },
          {
            src: "/staff/morozov.png",
            alt: "Морозов Данила Алексеевич",
            name: "Морозов Данила Алексеевич",
          },
          {
            src: "/staff/lapitskaya.png",
            alt: "Лапицкая Марина Алексеевна",
            name: "Лапицкая Марина Алексеевна",
          },
        ],
        registration: [
          {
            src: "/staff/zhukova.png",
            alt: "Жукова Наталья Евгеньевна",
            name: "Жукова Наталья Евгеньевна",
          },
          {
            src: "/staff/Svirina.png",
            alt: "Свирина Галина Леонидовна",
            name: "Свирина Галина Леонидовна",
          },
          {
            src: "/staff/basarab.png",
            alt: "Басараб Елена Викторовна",
            name: "Басараб Елена Викторовна",
          },
          {
            src: "/staff/antonova.png",
            alt: "Антонова Татьяна Васильевна",
            name: "Антонова Татьяна Васильевна",
          },
          {
            src: "/staff/shmakova.png",
            alt: "Шмакова Валентина Алексеевна",
            name: "Шмакова Валентина Алексеевна",
          },
          {
            src: "/staff/kolpakova.png",
            alt: "Колпакова Дарья Олеговна",
            name: "Колпакова Дарья Олеговна",
          },
        ],
        pharm: [
          {
            src: "/staff/korneeva.png",
            alt: "Корнеева Татьяна Михайловна",
            name: "Корнеева Татьяна Михайловна",
          },
          {
            src: "/staff/frolova.png",
            alt: "Фролова Галина Сергеевна",
            name: "Фролова Галина Сергеевна",
          },
          {
            src: "/staff/sadykova.png",
            alt: "Садыкова Ольга Вячеславовна",
            name: "Садыкова Ольга Вячеславовна",
          },
          {
            src: "/staff/khodakin.png",
            alt: "Ходакин Александр Игоревич",
            name: "Ходакин Александр Игоревич",
          },
          {
            src: "/staff/kulakova.png",
            alt: "Кулакова Елена Александровна",
            name: "Кулакова Елена Александровна",
          },
          {
            src: "/staff/yurina.png",
            alt: "Юрина Ольга Владимировна",
            name: "Юрина Ольга Владимировна",
          },
        ],
      },
    },
    "/contacts": {
      title: "Контакты",
    },
    "/therapy": {
      title: "Терапия",
    },
    "/surgery": {
      title: "Хирургия",
      pictures: [
        {
          src: "/equipment/surgery-2.png",
          alt: "Mindray monitor",
          name: "",
        },
        {
          src: "/equipment/surgery-3.png",
          alt: "Infusomat",
          name: "",
        },
        {
          src: "/equipment/surgery-4.png",
          alt: "Electrocoagulator",
          name: "",
        },
        {
          src: "/equipment/surgery-5.png",
          alt: "Panda",
          name: "",
        },
      ],
      equipment: [
        {
          src: "/equipment/surgery-6.png",
          alt: "Surgery equipment",
        },
        {
          src: "/equipment/surgery-7.png",
          alt: "Surgery equipment",
        },
      ],
    },
    "/dentistry": {
      title: "Стоматология",
      equipment: [
        {
          src: "/equipment/dentistry-1.png",
          alt: "Стоматологическая установка wikiVET mobile №1",
          name: "Cтоматологическая установка wikiVET mobile №1",
        },
        {
          src: "/equipment/dentistry-2.png",
          alt: "Дентальный рентген",
          name: "Дентальный рентген",
        },
        {
          src: "/equipment/dentistry-3.png",
          alt: "Система оцифровки Handy HDR",
          name: "Система оцифровки Handy HDR",
        },
        {
          src: "/equipment/dentistry-4.png",
          alt: "Ультразвуковой скейлер",
          name: "Ультразвуковой скейлер",
        },
      ],
    },
    "/radiography": {
      title: "Цифровая рентгенография",
      // pictures: [
      //   {
      //     src: "/equipment/radiography.png",
      //     alt: "ORANGE-1040HF, EcoRay",
      //   },
      //   {
      //     src: "/equipment/radiography-3.png",
      //     alt: "ORANGE-1040HF, EcoRay",
      //   },
      //   {
      //     src: "/equipment/radiography-2.png",
      //     alt: "ORANGE-1040HF, EcoRay",
      //   },
      // ],
    },
    "/vaccination": {
      title: "Вакцинация",
    },
    "/registration": {
      title: "Оформление документов",
    },
    "/chipping": {
      title: "Чипирование",
    },
    "/diagnostics": {
      title: "Лабораторная диагностика",
      equipment: [
        {
          src: "/equipment/diagnostics-1.png",
          alt: "Mindray BS-240 Vet",
          name: "Автоматизированная высокоточная биохимическая система  Mindray BS-240 Vet",
        },
        {
          src: "/equipment/diagnostics-2.png",
          alt: "Mindray BС-2800 Vet",
          name: "Автоматический гематологический анализатор Mindray BС-2800 Vet",
        },
        {
          src: "/equipment/diagnostics-3.png",
          alt: "Medica EasyLyte",
          name: "Анализатор электролитов и газов крови Medica EasyLyte",
        },
        {
          src: "/equipment/diagnostics-4.png",
          alt: "BIONOTE V200",
          name: "Иммуноферментный анализатор BIONOTE V200",
        },
      ],
      pictures: [
        {
          src: "/equipment/diagnostics-5.png",
          alt: "Diagnostics equipment",
        },
        {
          src: "/equipment/diagnostics-6.png",
          alt: "Doctor's desk",
        },
      ],
    },
    "/scan": {
      title: "Ультразвуковая диагностика",
    },
    "/echocardiography": {
      title: "ЭХОкг",
    },
    "/store": {
      title: "Ветеринарная аптека",
      pictures: [
        {
          src: "/store/store-1.png",
          alt: "pharm-1",
        },
        {
          src: "/store/store-2.png",
          alt: "pharm-2",
        },
        {
          src: "/store/store-3.png",
          alt: "pharm-3",
        },
        {
          src: "/store/store-4.png",
          alt: "pharm-4",
        },
        {
          src: "/store/store-5.png",
          alt: "pharm-5",
        },
        {
          src: "/store/store-6.png",
          alt: "pharm-6",
        },
      ],
    },
  },

  footerItems: [
    { href: "/", label: "Главная" },
    { href: "/about", label: "О нас" },
    { href: "/contacts", label: "Контакты" },
    { href: "/staff", label: "Врачи" },
    {
      href: "https://docs.google.com/spreadsheets/d/1FhEuhjEnx3fDFMO7mEuiIljn7kID2MPBJnZZykWsg1Y/edit?gid=0#gid=0",
      label: "Прейскурант",
    },
    { href: "/rules", label: "Правила работы с нами" },
    { href: "/store", label: "Ветеринарная аптека" },
  ],
};
