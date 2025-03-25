export const bio = {
  en: "As a Hardware and Software Engineer, I specializied in C, Javascript and Python. My development skills encompass desktop, web and backend applications, built with React, Next.js, Tkinter, Qt, Node.js, Flask and AWS. I am highly proficient in programming microcontrollers and microprocessors, seamlessly integrating them with electronic components to develop sophisticated (IoT) systems. Driven by a passion for innovation, I create cutting-edge IoT systems by effectively bridging the gap between hardware and software.",
  mn: "Би техник хангамж, программ хангамжийн инженер бөгөөд C, JavaScript, Python хэлүүдээр олон систем бүтээсэн туршлагатай. Программ хангамжийн хувьд React, Next.js, Tkinter, Qt, Node.js, Flask, AWS зэрэг технологийг ашиглан компьютер, веб болон серверийн программууд бүтээж чадах бол техникийн хувьд микроконтроллер, микропроцессоруудыг програмчлах, тэдгээрийг электрон бүрэлдэхүүн хэсгүүдтэй уялдуулан нарийн төвөгтэй (IoT) системүүдийг хөгжүүлэх чадамжтай. Иймд техник болон программ хангамжийг уялдуулан, орчин үеийн системүүдийг бүтээх хүсэл эрмэлзэлтэй.",
};

export type TProfile = {
  name: string;
  phone: number;
  email: string;
  linkedin: string;
  github: string;
};

export const profile: { en: TProfile; mn: TProfile } = {
  en: {
    name: "B.Batzorig",
    phone: 88330623,
    email: "b.bat3orig@gmail.com",
    linkedin: "https://www.linkedin.com/in/batzorig-bazarragchaa-68b56115a",
    github: "https://github.com/Bat3orig",
  },
  mn: {
    name: "Б.Батзориг",
    phone: 88330623,
    email: "b.bat3orig@gmail.com",
    linkedin: "https://www.linkedin.com/in/batzorig-bazarragchaa-68b56115a",
    github: "https://github.com/Bat3orig",
  },
};

type workDetial = {
  name: string;
  link: null | {
    href: string;
    text: string;
  };
};

export type TWork = {
  company: string;
  year: string;
  occupation: string;
  details: workDetial[];
};

export const works: { en: TWork[]; mn: TWork[] } = {
  en: [
    {
      company: "Tridum e-Security LLC",
      year: "2013 - 2022",
      occupation: "Hardware engineer",
      details: [
        {
          name: "provide software and hardware maintenance to ensure the reliable operation of DieboldNixdorf Automated Teller Machine",
          link: null,
        },
        {
          name: "provide software and hardware maintenance to the proper operation of  BPS C4 banknote sorting machine",
          link: null,
        },
      ],
    },
    {
      company: "Tridum key LLC",
      year: "2022 - 2023",
      occupation: "Software engineer",
      details: [
        {
          name: "developed e-sign register and monitoring application (fullstack)",
          link: {
            href: "https://register.tridumkey.mn",
            text: "link",
          },
        },
      ],
    },
    {
      company: "Incon LLC",
      year: "2023 - Present",
      occupation: "R&D and software engineer",
      details: [
        {
          name: "invented Railway monitor system",
          link: {
            href: "https://www.incon.mn/product/1",
            text: "See more",
          },
        },
        {
          name: "invented and develop Railway Crossing monitor system",
          link: {
            href: "https://www.incon.mn/product/2",
            text: "See more",
          },
        },
        {
          name: "invented Train Approach Alert device",
          link: {
            href: "https://www.incon.mn/product/3",
            text: "See more",
          },
        },
        {
          name: "invented Auto Rail Light device",
          link: null,
        },
        {
          name: "research and develop Smart Chock system",
          link: null,
        },
        {
          name: "develop company website",
          link: {
            href: "https://www.incon.mn",
            text: "See more",
          },
        },
        {
          name: "develop Time Attendance and Lunch registration",
          link: null,
        },
      ],
    },
    {
      company: "Other",
      year: " ",
      occupation: " ",
      details: [
        {
          name: "developed Intrusion detecion system that detects smoke, sound, and motion within the office, transmitting their locations, along with the details of employees who activated or deactivated the alarm, directly to mobile devices via text message. This system has been successfully deployed and utilized by `Tridum e-Security` LLC since 2014",
          link: null,
        },
        {
          name: "developed a device and software for writing or reading from RFID tagged bag locks used in mining operations. This device reads the barcode on the outside of the lock and transmits the information to the RFID tag inside. The software allows for counting, monitoring, and recording the locks being produced, as well as creating a database on a computer. In 2017, Grand Gobi Tech LLC integrated this RFID tag-based system into their bag lock production, eliminating manual processes and significantly accelerating their manufacturing workflow",
          link: null,
        },
      ],
    },
  ],
  mn: [
    {
      company: "Тридум э-Секьюрити ХХК",
      year: "2013 - 2023",
      occupation: "Электроникийн инженер",
      details: [
        {
          name: "DieboldNixdorf автомат теллер машинуудын (ATM) найдвартай ажиллагааг хангах программ болон техникийн засвар үйлчилгээ",
          link: null,
        },
        {
          name: "BPS C4 мөнгөн тэмдэгт ангилах машины хэвийн ажиллагааг хангах программ, техникийн засвар үйлчилгээ",
          link: null,
        },
      ],
    },
    {
      company: "Тридум Кей ХХК",
      year: "2022 - 2023",
      occupation: "Программ хангамжийн инженер",
      details: [
        {
          name: "Тоон гарын үсгийн бүртгэлийн программ хөгжүүлсэн",
          link: {
            href: "https://register.tridumkey.mn",
            text: "линк",
          },
        },
      ],
    },
    {
      company: "Инкон ХХК",
      year: "2023 - Одоо",
      occupation: "Бүтээгдэхүүн хөгжүүлэлт, програм хангамжийн инженер",
      details: [
        {
          name: "Төмөр замын хяналтын систем зохион бүтээсэн",
          link: {
            href: "https://www.incon.mn/product/1",
            text: "Дэлгэрэнгүй",
          },
        },
        {
          name: "Төмөр замын хаалтгүй гармын төлөвийг зүтгүүр дотроос урьдчилан харах, газрын зурагт суурилсан хяналтын систем зохион бүтээсэн",
          link: {
            href: "https://www.incon.mn/product/2",
            text: "Дэлгэрэнгүй",
          },
        },
        {
          name: "Зам төмөр дээр ажиллаж байгаа ажилчдад галт тэрэг ирж буйг мэдээлэх жижиг зөөврийн төхөөрөмж зохион бүтээсэн",
          link: {
            href: "https://www.incon.mn/product/3",
            text: "Дэлгэрэнгүй",
          },
        },
        {
          name: "Төмөр замын муруйг гар удирдлагаар эсвэл автоматаар дагаж эргэдэг 1км - ийн тусгалтай зүтгүүрийн гэрлийн удирдлагын төхөөрөмж зохион бүтээсэн",
          link: null,
        },
        {
          name: "Төмөр замын ухаалаг эвүүрийн судалгаа болон хөгжүүлэлт",
          link: null,
        },
        {
          name: "Компанийн веб сайт",
          link: {
            href: "https://www.incon.mn",
            text: "Дэлгэрэнгүй",
          },
        },
        {
          name: "Гар утсанд суурилсан компанийн ажилчдын цаг бүртгэл, үдийн хоолны бүртгэлийн системийн хөгжүүлэлт",
          link: null,
        },
      ],
    },
    {
      company: "Бусад",
      year: " ",
      occupation: " ",
      details: [
        {
          name: "Байгууллага дотор илэрсэн хөдөлгөөн, утаа, чанга дуу чимээний байршлуудыг, дохиолол идэвхжүүлсэн болон идэвхгүй болгосон ажилтны мэдээлэл зэргийг гар утас руу мессежээр дамжуулдаг дохиоллын систем хийсэн. 2014 оноос эхлээд Тридум э-Секьюрити ХХК - д ашигласаар байна",
          link: null,
        },
        {
          name: "Уурхайд ашиглагддаг RFID tag - тай уутны цоожны мэдээллийг суулгаж өгдөг, хяналт болон бүртгэлийн программ бүхий төхөөрөмж хөгжүүлсэн. Энэхүү төхөөрөмж нь өгөгдсөн баркодын утгыг уншиж, цоож дотор байрлах tag - руу мэдээллийг суулгаж (шарах) өгдөг. Desktop программ нь үйлдвэрлэж байгаа цоожоо тоолох, хянах, бүртгэх, мэдээллийн сан үүсгэх боломжтой. Гранд Говь Теч ХХК нь 2017 онд RFID tag - д суурилсан уутны цоожны үйлдвэрлэлдээ үүнийг ашиглаж эхэлсэн ба гар ажиллагааг халж, үйлдвэрлэлийн явцыг хурдасгаж өгсөн",
          link: null,
        },
      ],
    },
  ],
};

export const educations = {
  en: [
    {
      school: "Mongolian University of Science and Technology",
      year: "2009 - 2013",
      occupation: "Hardware engineer",
      level: "Bachelor",
      degree: "3.4",
    },
  ],
  mn: [
    {
      school: "ШУТИС-КТМС",
      year: "2009 - 2013",
      occupation: "Техник хангамжийн инженер",
      level: "бакалавр",
      degree: "3.4",
    },
  ],
};
