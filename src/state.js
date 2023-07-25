import slide1 from "./assets/slide1.webp";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import service1 from "./assets/service1.jpg";
import service2 from "./assets/service2.jpg";
import service3 from "./assets/service3.jpg";
import service4 from "./assets/service4.jpg";
import service5 from "./assets/service5.jpg";
import service6 from "./assets/service6.jpg";
import service7 from "./assets/service7.png";
import service8 from "./assets/service8.jpg";
import kakumaeSadam from './assets/kakumaeSadam.jpg'
import moduleTech from './assets/moduleTech.jpg'
import eestiTraat from './assets/eestiTraat.jpg'
import favor from './assets/favor.jpg'
import wegLogo from "./assets/wegLogo.png";
import combiconLogo from "./assets/combiconLogo.png"
import maruLogo from "./assets/maruLogo.png";
import evrLogo from "./assets/evrLogo.png";
import lwLogo from "./assets/lwLogo.png";
import onninenLogo from "./assets/onninenLogo.webp";
import esvikaLogo from "./assets/esvikaLogo.png";
import lucidusLogo from "./assets/lucidusLogo.png";
import esbLogo from "./assets/esbLogo.png";
import harjuLogo from "./assets/harjuLogo.png";
import stokkerLogo from "./assets/stokkerLogo.png";
import melkerLogo from "./assets/melkerLogo.png";
import contactIcon from "./assets/contactIcon.png"
import locationIcon from "./assets/locationIcon.png"
import emailIcon from "./assets/emailIcon.png"
import jcb4x from "./assets/jcb4vx.jpg"
import yanmar_vio80 from "./assets/yanmar_vio80.jpg"
import yanmar_vio23 from "./assets/yanmar_vio23.jpg"
import yanmar_svo8 from "./assets/yanmar_svo8.jpg"
import bobcat_s175 from "./assets/bobcat_s175.jpg"
import bobcat_e16 from "./assets/bobcat_e16.jpg"
import r13 from "./assets/r13.jpeg"


const state = {

    home: [{
        swiper: [
            {
                img: slide1,
            },
            {
                img: slide2,
            },
            {
                img: slide3,
            }
        ],
        services: [
            {
                serviceImg: service1,
            },
            {
                serviceImg: service2,
            },
            {
                serviceImg: service3,
            },
            {
                serviceImg: service4,
            },
            {
                serviceImg: service5,
            },
            {
                serviceImg: service6,
            },
            {
                serviceImg: service7,
            },
            {
                serviceImg: service8,
            },
        ],

        projects: [
            {

                id:0,
                url: "kakumae-sadam",
                img: kakumaeSadam,
                name: "Kakumäe Sadam",
                finishDate: "06.2019",
                location: "Nooda tee 8",
                completedBy: "Filsi",
                projectDescription: "",
                Latitude: 59.45047898716102,
                Longitude: 24.602906514467623
            },
            {
                id: 1,
                url: "module-tech",
                img: moduleTech,
                name: "Module Tech",
                finishDate: "10.2019 ja 03.2021",
                location: "Loovälja tee 9",
                completedBy: "Filsi",
                Latitude: 59.446804506266645,
                Longitude: 24.943789984457965
            },
            {
                id: 2,
                url: "eesti-traat",
                img: eestiTraat,
                name: "Eesti Traat",
                finishDate: "06.2018",
                location: "Lõuna tee 10",
                completedBy: "Filsi",
                Latitude: 59.424281340044885,
                Longitude: 24.95524521329249
            },
            {
                id: 3,
                url: "favor",
                img: favor,
                name: "Favor",
                finishDate: "05.2023",
                location: "Loovälja tee 11",
                completedBy: "Filsi",
                Latitude: 59.44687181380816,
                Longitude: 24.94435881144405
            },
            {
                id: 4,
                url: "r13",
                img: r13,
                name: "Lao ja büroohoone",
                client: "Maru",
                finishDate: "09.2022",
                location: "Kesk tee 2 // Ringi tee 13 ",
                completedBy: "Filsi",
                Latitude: 59.3521623611344,
                Longitude:  24.88790910107856
            },


        ],
        partners: [
            {name: 'WEG', logo: wegLogo},
            {name: 'Maru', logo: maruLogo},
            {name: 'EVR', logo: evrLogo},
            {name: 'LW', logo: lwLogo},
            {name: 'Onninen', logo: onninenLogo},
            {name: 'Esvika', logo: esvikaLogo},
            {name: 'Lucidus', logo: lucidusLogo},
            {name: 'ESB', logo: esbLogo},
            {name: 'Harju El.', logo: harjuLogo},
            {name: 'Stokker', logo: stokkerLogo},
            {name: 'Melker', logo: melkerLogo},
            {name: 'Combicon', logo: combiconLogo}
        ]
    }],
    contact: [{
        contactInfo: [
            {
                icon: locationIcon,
                className: ""
            },
            {
                icon: contactIcon,
                className: "lowInfo"
            },
            {
                icon: emailIcon,
                className: "lowInfo"
            },
        ],
        pageInfoContact: [
            {supHeading: ""}
        ],

    }
    ],
    equipment: [{
        equipmentInfo: [
            {
                equipmentImg: jcb4x,
                equipmentName: "JCB 4CX",
            },
            {
                equipmentImg: yanmar_vio80,
                equipmentName: "Yanmar VIO80",
            },
            {
                equipmentImg: yanmar_vio23,
                equipmentName: "Yanmar VIO23",
            },
            {
                equipmentImg: yanmar_svo8,
                equipmentName: "Yanmar SVO8",
            },
            {
                equipmentImg: bobcat_s175,
                equipmentName: "Bobcat S175",
            },
            {
                equipmentImg: bobcat_e16,
                equipmentName: "Bobcat E16",
            }

        ],
        pageInfoEquipment: [
            {upperHeading: "meie", lowerHeading: "tehnika", supHeading: ""}
        ]
    }],



}

export default state