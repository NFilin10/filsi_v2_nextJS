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
                text1: "Elektrifirma usaldusväärsed partnerid.",
                text2: "Ehitajad, kes teevad parimat tööd",
                btnText: "Kes me oleme"
            },
            {
                img: slide2,
                text1: "Avasta võimsad elektrilahendused meie ettevõttega.",
                text2: "Oleme ehitajad, kes loovad tuleviku",
                btnText: "Kes me oleme"
            },
            {
                img: slide3,
                text1: "Elektrifirma, mis pakub innovaatilisi lahendusi.",
                text2: "Meie ehitajad toovad teie ideed ellu",
                btnText: "Kes me oleme"
            }
        ],
        services: [
            {
                id: 1,
                serviceName: "Välisvõrkude ehitus",
                serviceDescription: "See teenus hõlmab elektrivõrkude rajamist ja hooldust välitingimustes, tagades elektrienergia leviku piirkonnas või territooriumil.",
                serviceImg: service1,
                shortDesc: ["Mastide ja postide paigaldus", "Kaablite paigaldus", "Maa-alune kaablite paigaldus", "Välisvõrkude hooldus ja remont"]
            },
            {
                id: 2,
                serviceName: "Sisetööd",
                serviceDescription: "Selle teenusega tegeletakse elektrisüsteemide paigaldamise, remondi ja hooldusega hoonetes ja struktuurides, et tagada ohutu ja usaldusväärne elektrivarustus.",
                serviceImg: service2,
                shortDesc: ["Elektrijuhtmestiku paigaldus", "Valgustussüsteemide paigaldus", "Pistikupesade ja lülitite paigaldus", "Elektrisüsteemide auditeerimine ja hooldus"]
            },
            {
                id: 3,
                serviceName: "Kontaktvõrgu ehitus",
                serviceDescription: "See teenus hõlmab kontaktliinide või elektriliinide ehitamist, mille abil elektrienergia edastatakse ühendatud seadmetele ja klientidele.",
                serviceImg: service3,
                shortDesc: ["Kontaktliinide paigaldus", "Isolatsioonimaterjalide kinnitamine", "Kontaktliinide hooldus ja remont"]
            },
            {
                id: 4,
                serviceName: "Kaevetööd",
                serviceDescription: "Kaevetööd hõlmavad maapinna kaevamist ja töötlemist, et paigaldada elektrikaablid, torustikud või muud seadmed elektrivõrguga seotud projekte ja rajatisi vajavate tööde jaoks.",
                serviceImg: service4,
                shortDesc: ["Kaeviku kaevamine kaablite paigaldamiseks", "Kaeviku täitmine pärast kaablite paigaldust", "Kaablikaitse torude paigaldus", "Side- ja elektrikaablite markeerimine"]
            },
            {
                id: 5,
                serviceName: "Alajaamade ehitus",
                serviceDescription: " See teenus hõlmab alajaamade rajamist, mis on olulised elektrivarustuse jaotamiseks ning energia muundamiseks ühendatud piirkondadele ja klientidele.",
                serviceImg: service5,
                shortDesc: ["Kaablite ühendamine alajaama", "Alajaama testimine ja seadistamine", "Alajaama turvalisuse tagamine"]
            },
            {
                id: 6,
                serviceName: "Käit",
                serviceDescription: "Käituteenus hõlmab elektrisüsteemide ja seadmete järelevalvet, hooldust, remonti ja optimeerimist, et tagada nende tõrgeteta toimimine ja pikaajaline usaldusväärsus.",
                serviceImg: service6,
                shortDesc: ["Elektrisüsteemide jälgimine ja hooldus", "Rikete ja häirete käsitlemine", "Plumbing"]
            },
            {
                id: 7,
                serviceName: "Projekteerimine",
                serviceDescription: "Projekteerimisteenus hõlmab kohandatud elektrisüsteemide planeerimist ja kavandamist vastavalt klientide vajadustele, arvestades ohutuse, tõhususe ja energiasäästlikkuse põhimõtteid.",
                serviceImg: service7,
                shortDesc: ["Elektrisüsteemi kavandamine ja projekteerimine", "Tehniliste jooniste ja dokumentatsiooni loomine", "Seadmete ja komponentide valik vastavalt projektinõuetele"]
            },
            {
                id: 8,
                serviceName: "Ehitustööd",
                serviceDescription: "Ehitusteenus hõlmab elektriinfrastruktuuri ehitamist, sealhulgas elektrisüsteemide, kaablite, juhtmete ja muude seadmete paigaldamist vastavalt projektidele ja ehitusstandarditele.",
                serviceImg: service8,
                shortDesc: ["Elektrisüsteemide paigaldus vastavalt projektile", "Ühenduste kontrollimine ja testimine", "Ehitusplatsi ettevalmistamine"]
            },
        ],
        pageInfoServices: [
            {upperHeading: "meie", lowerHeading: "teenused", supHeading: ""}
        ],
        pageInfoProjects: [
            {upperHeading: "meie", lowerHeading: "projektid", supHeading: "Avaldage projektid, mis aitasid ehitada vastupanuvõimelisi ja usaldusväärseid ühendusi"}
        ],
        projects: [
            {
                id: 0,
                url: "kakumae-sadam",
                img: kakumaeSadam,
                name: "Kakumäe Sadam",
                finishDate: "06.2019",
                location: "maardu",
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
                location: "maardu",
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
                location: "maardu",
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
                location: "maardu",
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
                location: "maardu",
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

                heading: "Meie Asukoht",
                midInfo: "Suur-Männiku 8",
                lowInfo: "Tallinn Harjumaa 11216",
                icon: locationIcon,
                className: ""
            },
            {
                heading: "Võtke meiega ühendust",
                midInfo: "Mobiil +372 501 2509",
                lowInfo: ".",
                icon: contactIcon,
                className: "lowInfo"
            },
            {
                heading: "Kirjutage meile",
                midInfo: "filsi@filsi.ee",
                lowInfo: ".",
                icon: emailIcon,
                className: "lowInfo"
            },
        ],
        pageInfoContact: [
            {upperHeading: "meie", lowerHeading: "kontaktid", supHeading: ""}
        ]
    }
    ],
    equipment: [{
        equipmentInfo: [
            {
                equipmentImg: jcb4x,
                equipmentName: "JCB 4CX",
                equipmentDesc: "\n" +
                    "4CX on JCB esinduslik ekskavaator-pogur. See masin ühendab endas klassikalise esilaaduri omadused suurepärase ekskavaatoritöö võimekusega.\n" +
                    "\n" +
                    "Maksimaalne kaevamissügavus: 5,88 m,\n" +
                    "Mootori nimivõimsus: 74,2 kW,\n" +
                    "Maksimaalne tõstekõrgus: 4638 kg,\n" +
                    "4CX ECO pakub suurepärast tootlikkust ja väljapaistvaid tööomadusi, sealhulgas:\n" +
                    "\n" +
                    "4-rattavedu ja suur maapinnakliirens\n" +
                    "Suur koppmaht (1,1 m³) ja hea nähtavus\n" +
                    "EcoLoad süsteem tagab suurema tõmbejõu\n" +
                    "Vastupidavad materjalid ekstreemsetes tingimustes\n" +
                    "Usaldusväärne pidurisüsteem ja suurepärane mugavus operaatrile\n" +
                    "4CX on kvaliteetne masin, mille igat toodetud eksemplari kontrollitakse kõrgelt standarditele vastavuse tagamiseks. See tagab ohutuse, vastupidavuse ja optimaalse töökeskkonna."
            },
            {
                equipmentImg: yanmar_vio80,
                equipmentName: "Yanmar VIO80",
                equipmentDesc: "Suurepärane kulutulemus. Ekskavaator sobib erinevatele objektidele. Mugav isegi kitsastes ruumides töötades. Suurepärane vastupidavus, tugevus ja avar kabiin muudavad selle kasutamise lihtsaks ja sobivad ideaalselt pikkadeks töötundideks. Väga kulutõhus. Kogege töökindlat ja tõestatud tulemustega ehitusmasinat"
            },
            {
                equipmentImg: yanmar_vio23,
                equipmentName: "Yanmar VIO23",
                equipmentDesc: "Turvaliseks töötamiseks kitsastes oludes loodud ViO23 on tänu ülestõmmatavale veermikule ja väikesele kaalule lihtne transportida. Täiustatud hüdraulika ja kaudsissepritsega mootor annavad sellele palju täpsust, kui see on oluline. Palju on ette nähtud ka juhile, alates täiustatud turvafunktsioonidest kuni mugavuspõhise disainini üllatavalt ruumikas salongis. Kiiret ja lihtsat hooldust saab kiirendada SmartAssist Remote'iga, mis pakub ka hulgaliselt masinapargi halduse, tootlikkuse ja turvalisuse eeliseid."
            },
            {
                equipmentImg: yanmar_svo8,
                equipmentName: "Yanmar SVO8",
                equipmentDesc: "YANMAR ultra-mini ekskavaator on uhke erakordse tööomadustega. Kaaludes alla 1 tonni, saab selle ultra-mini ekskavaatori ekskavaatoreid sujuvalt kasutada ja manööverdada suletud ruumides. Ekskavaatoril on lihtne siseneda läbi väravate ja läbi tagatänavate elumajade vahel tänu oma kompaktsele konstruktsioonile. Selle tõelist tulemuslikkust võib näha mitmesugustes toimingutes, nagu elamute vundamenditööd, hoonete ehituslikud ümberehitused, vee- ja kanalisatsioonitorude paigaldamine ning haljastus"
            },
            {
                equipmentImg: bobcat_s175,
                equipmentName: "Bobcat S175",
                equipmentDesc: "Bobcat S175 on suurepärane laadur paljude aastate kasutamiseks. S175 Bobcat ühendab tõestatud vöötehnoloogia nullraadiusega pööramise ja suurepärase nähtavusega, et maksimeerida tootlikkust. Tõstuki käsivarred on madala profiiliga ja annavad kitsastes ruumides töötades selge ülevaate Bobcat S175 külgedest, esi- ja tagaküljest. Räägime kõigist Bobcatiga ratsutamise eelistest. See võib olla raske töö, kuid mugavused kodus on olemas teile oma takso. Sisenemine ja väljumine on lihtne tagumise pivoti istmeribaga ning uuenduslikud mõõteriistad ja juhtseadmed muudavad elu palju lihtsamaks."
            },
            {
                equipmentImg: bobcat_e16,
                equipmentName: "Bobcat E16",
                equipmentDesc: "Bobcat E16 miniekskavaatoril on kompaktsed mõõtmed suhteliselt suure võimsuse juures. See kõik võimaldab kiiresti ja edukalt teha töid suletud ruumides ja kohtades, kus on vaja hoolsust tööde tegemisel.\n" +
                    "Bobcat E16 mudelil on muljetavaldavad tehnilised omadused, suur kiirus ja manööverdusvõime, mis tagab igasuguse keerukusega tööde tegemise kiiruse ja kvaliteedi.  "
            }

        ],
        pageInfoEquipment: [
            {upperHeading: "meie", lowerHeading: "tehnika", supHeading: ""}
        ]
    }],
    about: [{
        pageInfoAbout: [
            {upperHeading: "meie", lowerHeading: "ettevõtest", supHeading: ""}
        ],
    }]


}

export default state