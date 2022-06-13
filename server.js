const express = require('express')
const app = express()

const PORT = 8000

const country = {

    "Algeria" : {
      "name": "Algeria",
      "Capital": "Algiers",
      "women": "31.6%",
      "officialLanguages:": "Arabic and Berber",
      "otherLanguages":" English and French",
      "colonised": "France 1830-1962",
      "independence": "1962 - from France",
      "heritageSite": "The Casbah of Algiers, a citadel founded on the ruins of old Icosium, a Phoenician and later Roman city. Mosques dating back to the 17th century can be found there.",
      "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Algeria.svg"
     },
    "Angola" : {
       "name": "Angola",
       "Capital": "Luanda",
       "women": "36.8%",
       "officialLanguages:": "Portuguese",
       "otherLanguages":"Kikongo, Chokwe, Umbundu, Kimbundu, Nganguela and Kwanyama",
       "colonised": "Portugal 1575-1975",
       "independence": "1975 - from Portugal",
       "heritageSite": "M'banza Kongo, capital of the Kingdom of Kongo, which flourished as one of the largest states in southern Africa from the 14th to the 19th century.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Angola.svg"
    },
    "Benin" : {
       "name": "Benin",
       "Capital": "Porto-Novo",
       "women": "7.2%",
       "officialLanguages:": "French",
       "otherLanguages":"Fon and Yoruba",
       "colonised": " Portugal - 1472-1892 | France 1892-1960",
       "independence": "1960 from France",
       "heritageSite": "The Royal Palaces of Abomey, the seat of 12 successive kings who ruled the powerful Kingdom of Abomey from 1625 to 1900.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Benin.svg"
      },
    "Botswana" :{
       "name": "Botswana",
       "Capital": "Gaborone",
       "women": "9.5%",
       "officialLanguages:": "English",
       "otherLanguages":"Setswana",
       "colonised": "Britain 1885-1966",
       "independence": "1966 - from Britain",
       "heritageSite": "Known as the 'Louvre of the Desert', Tsodilo in the Kalahari Desert contains over 4,500 well-preserved rock paintings produced over the past 100,000 years.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Botswana.svg"
      },
    "Burkina Faso" : {
       "name": "Burkina Faso",
       "Capital": "Ouagadougou",
       "women": " 9.4%",
       "officialLanguages:": "French",
       "otherLanguages":" Mòoré, Fulani, Dioula",
       "colonised": "France 1896-1960",
       "independence": "1960 - from France",
       "heritageSite": "The 1,000-year-old Ruins of Loropéni, an imposing stone fortress that was the centre of the trans-Saharan gold trade from the 14th to 17th century.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Burkina_Faso.svg"
      },
    "Burundi":{
       "name": "Burundi",
       "Capital": "Bujumbura",
       "women": " 36.4%",
       "officialLanguages:": "French and Kurundi",
       "otherLanguages":"Unknown",
       "colonised": "Germany 1899-1916 | Belgium 1916-1962",
       "independence": "1962 – from Belgium",
       "heritageSite": "The royal domain of Gishora was founded by the Mwami Ntare Rugamba in the first half of the 19th century after its victory over the rebel leader Ntibirangwa.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Burundi.svg"
      },
    "Cabo Verde (Cape Verde)":{
       "name": "Cabo Verde (Cape Verde)",
       "Capital": "Praia",
       "women": "20.8%",
       "officialLanguages:": "French and Kurundi",
       "otherLanguages":"Cape Verdean Creole",
       "colonised": "Portugal 1462-1975",
       "independence": "1975 – from Portugal",
       "heritageSite": " Cidade Velha, built in the 1460s as the first European town in the tropics. The founding of the town marked a decisive step in Europe’s colonisation of Africa.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Cape_Verde.svg"
      },
    "Cameroon" :{
       "name": "Cameroon",
       "Capital": "Yaoundé",
       "women": "31.1%",
       "officialLanguages:": "French and Englis",
       "otherLanguages":"55 Afro-Asiatic languages, two Nilo-Saharan languages, 173 Niger-Congo languages, Camfranglais",
       "colonised": "Germany 1884-1916 | Britain 1916-1961 | France 1919-1960",
       "independence": " 1960 – from France | 1961 – from Britain",
       "heritageSite": "The Dja Faunal Reserve is one of Africa’s largest and best-protected rain forests, almost completely surrounded by the Dja River and sheltering 107 mammal species, five of them threatened.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Cameroon.svg"
      },
    "Central African Republic" :  {
       "name": "Central African Republic",
       "Capital": "Bangui",
       "women": "N/A",
       "officialLanguages:": "French and Sango",
       "otherLanguages":"N/A",
       "colonised": "France 1894-1960",
       "independence": "1960 – from France",
       "heritageSite": "Manovo-Gounda St Floris National Park, whose importance of derives from its wealth of flora and fauna.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_the_Central_African_Republic.svg"
      },
    "Chad" : {
       "name": "Chad",
       "Capital": "N’Djamena",
       "women": "14.9%",
       "officialLanguages:": "French and Arabic",
       "otherLanguages":"N/A",
       "colonised": "France 1894-1960",
       "independence": "1960 – from France",
       "heritageSite": "Official languages: French and Arabic\nColonised by: France 1900-1960\nIndependence: 1960 – from France\nWorld Heritage Site: The Lakes of Ounianga, a series of lakes in the Sahara Desert.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Chad.svg"
      },
    "Comoros" : {
       "name": "Comoros",
       "Capital": "Moroni",
       "women": "3%",
       "officialLanguages:": "Comorian, Arabic and French",
       "otherLanguages":"N/A",
       "colonised": "France 1841-1975",
       "independence": "1975 – from France",
       "heritageSite": "N/A",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_the_Comoros.svg"
      },
    "Congo, Democratic Republic (DRC)" :  {
       "name": "Congo, Democratic Republic (DRC)",
       "Capital": "Kinshasa",
       "women": "8.9%",
       "officialLanguages:": "French",
       "otherLanguages":"Lingala, Kikongo, Swahili, Tshiluba",
       "colonised": "King Leopold II of Belgium (as his private property) 1877-1908 | Belgium 1908-1960",
       "independence": "1960 – from Belgium",
       "heritageSite": "The 490,000 hectare Garamba National Park covers vast grass savannahs and woodlands interspersed with gallery forests and marshland.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_the_Democratic_Republic_of_the_Congo.svg"
      },
    "Congo, Republic" : {
       "name": "Congo, Republic",
       "Capital": "Brazzaville",
       "women": "7.4%",
       "officialLanguages:": "French",
       "otherLanguages":"Kituba, Lingala",
       "colonised": "France 1880-1960",
       "independence": "1960 – from Belgium",
       "heritageSite": "N/A",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_the_Republic_of_the_Congo.svg"
      },
      "Côte d’Ivoire (Ivory Coast)" : {
       "name": "Côte d’Ivoire (Ivory Coast)",
       "Capital": "Yamoussoukro",
       "women": "9.2%",
       "officialLanguages:": "French",
       "otherLanguages":"Baoulé, Sénoufo, Yacouba, Agni, Attié, Guéré, Bété, Dioula, Abé, Mahou, Wobé, Lobi and others",
       "colonised": "France 1893-1960",
       "independence": "1960 – from France",
       "heritageSite": "The historic town of Grand-Bassam, the first capital of Côte d’Ivoire, is an example of a late 19th-century colonial town planned with quarters specialising in commerce, administration, and different housing for Europeans and Africans.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_C%C3%B4te_d'Ivoire.svg"
      },
      "Djibouti" : {
       "name": "Djibouti",
       "Capital": "Djibouti City",
       "women": "12.7%",
       "officialLanguages:": "French, Arabic",
       "otherLanguages":"Somali, Afar",
       "colonised": "France 1894-1977",
       "independence": "1977 – from France",
       "heritageSite": "The Abourma petroglyphs, several thousand Neolithic images carved in cave walls depicting humans, wildlife, hunting and warfare, dating back to 3,000 BCE.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Djibouti.svg"
      },
      "Egypt" : {
       "name": "Egypt",
       "Capital": "Cairo",
       "women": "14.9%",
       "officialLanguages:": "Arabic",
       "otherLanguages":"Egyptian Arabic",
       "colonised": "Britain 1882-1952",
       "independence": "1952 – from Britain",
       "heritageSite": "Ancient Thebes, with its temples and palaces at Karnak and Luxor, and the necropolises of the Valley of the Kings and the Valley of the Queens, is a striking testimony to Egyptian civilization at its height.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Egypt.svg"
      },
      "Equatorial Guinea" : {
     "name": "Equatorial Guinea",
     "Capital": "Malabo, Oyala",
     "women": "24%",
     "officialLanguages:": "Arabic",
     "otherLanguages":"Fang, Bube, Combe, West African Pidgin English, Annobonese, Igbo",
     "colonised": " Portugal 1472-1778 | Spain 1778-1968",
     "independence": "1968 – from Spain",
     "heritageSite": "Iron Age burial sites on the Island of Corisco, also known as Mandji, with intact 1,500-year-old tombs containing artefacts such as axes, spears, anklets, bracelets and unbroken pots.",
     "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Equatorial_Guinea.svg"
    },
    "Eritrea" :{
     "name": "Eritrea",
     "Capital": "Asmara",
     "women": "22%",
     "officialLanguages:": "Tigrinya, Arabic, Tigre, Kunama, Saho, Bilen, Nara, Afar, English",
     "otherLanguages":"N/A",
     "colonised": " Italy 1880-1941 | Britain 1941-1952 | Ethiopia 1952-1991",
     "independence": "1952 – from Britain | 1991 – from Ethiopia",
     "heritageSite": "The historic perimeter of Asmara represents perhaps the most concentrated and intact assemblage of Modernist architecture in the world. Its urban design has remained untouched since the 1930s.",
     "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Eritrea.svg"
    },
    "Ethiopia" :{
     "name": "Ethiopia",
     "Capital": "Addis Ababa",
     "women": "38.8%",
     "officialLanguages:": "Amharic, Afar, Harari, Oromo, Somali, Tigrinya",
     "otherLanguages":"N/A",
     "colonised": " never colonized",
     "independence": "Never colonized",
     "heritageSite": "Ruins of the ancient city of Aksum, once the most powerful state between the Eastern Roman Empire and Persia.",
     "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Ethiopia.svg"
    },
    "Gabon" :{
     "name": "Gabon",
     "Capital": "Libreville",
     "women": "14.2%",
     "officialLanguages:": "French",
     "otherLanguages":"Fang, Myene, Punu, Nzebi",
     "colonised": " France 1885-1960",
     "independence": "1960 – from France",
     "heritageSite": "The Ecosystem and Relict Cultural Landscape of Lopé-Okanda demonstrates an unusual interface between dense and well-conserved tropical rainforest and relict savannah environments with a great diversity of species, including endangered large mammals.",
     "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Gabon.svg"
    },
    "The Gambia" :{
     "name": "The Gambia",
     "Capital": " Banjul",
     "women": "9.4%",
     "officialLanguages:": "English",
     "otherLanguages":"Mandinka, Fula, Wolof, Serer, Jola",
     "colonised": " Britain 1821-1965",
     "independence": "1965 – from Britain",
     "heritageSite": "Kunta Kinteh Island and related sites present a testimony to the main periods and facets of the encounter between Africa and Europe along the River Gambia, a continuum stretching from pre-colonial and pre-slavery times to independence.",
     "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_The_Gambia.svg"
    },
    "Ghana" : {
     "name": "Ghana",
     "Capital": "Accra",
     "women": "10.9%",
     "officialLanguages:": "English",
     "otherLanguages":"Asante Twi, Dagaare, Dagbani, Dangme, Ewe, Ga, Gonja, Kasem, Fante, Akuapem Twi, Nzema, Wasa, Talensi, Frafra, Hausa",
     "colonised": "Portugal 1482–1642 | Britain 1821-1957",
     "independence": "1957 – from Britain",
     "heritageSite": "The Asante Traditional Buildings, found to the north-east of Kumasi, are the last material remains of the great Asante civilization that reached its high point in the 18th century.",
     "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Ghana.svg"
    },
    "Guinea" :{
     "name": "Guinea",
     "Capital": "Conakry",
     "women": "21.9%",
     "officialLanguages:": "French",
     "otherLanguages":"Maninka, Fula, Susu",
     "colonised": "France 1898-1958",
     "independence": "1958 – from France",
     "heritageSite": "Mount Nimba, rising above the surrounding savannah, its slopes covered by dense forest at the foot of grassy mountain pastures, harbours rich flora and fauna that includes endemic species such as the viviparous toad.",
     "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Guinea.svg"
    },
    "Guinea-Bissau" :{
     "name": "Guinea-Bissau",
     "Capital": "Bissau",
     "women": "13.7%",
     "officialLanguages:": "Portuguese",
     "otherLanguages":"Guinea-Bissau Creole (Kriol), Balanta, Fula, Mandjak, Mandinka, Papel, French",
     "colonised": "Portugal 1474-1973",
     "independence": "1973 – from Portugal",
     "heritageSite": "The Archipelago of Bijagos, consisting of 88 islands and islets, is the most biodiverse region of Guinea-Bissau.",
     "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Guinea-Bissau.svg"
    },
    "Kenya" : {
     "name": "Kenya",
     "Capital": "Nairobi",
     "women": "19.7%",
     "officialLanguages:": " English, Kiswahili",
     "otherLanguages":"N/A",
     "colonised": "Britain 1888-1962",
     "independence": "1963 – from Britain",
     "heritageSite": " The Sacred Mijikenda Kaya Forests, 11 fortified villages set in forested land running over 200 kilometres along the coast. Known as kayas, the sites were first settled by the Mijikenda people in about 1560.",
     "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Kenya.svg"
    },
    "Lesotho" :{
     "name": "Lesotho",
     "Capital": "Maseru",
     "women": "25%",
     "officialLanguages:": "English, Sesotho",
     "otherLanguages":"N/A",
     "colonised": " Britain 1868-1966",
     "independence": " 1966 – from Britain",
     "heritageSite": "The Maloti Drakensberg Transboundary World Heritage Site is known for its rock art and mountain landscape.",
     "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Lesotho.svg"
    }, 
    "Liberia" :{
     "name": "Liberia",
     "Capital": "Monrovia",
     "women": "11%",
     "officialLanguages:": "English",
     "otherLanguages":"16 tribal languages",
     "colonised": "Never Colonized",
     "independence": " Never colonized",
     "heritageSite": "Providence Island is a former trade post and was the first point of arrival for freed American Slaves. The guitar-shaped island has a cement pillar and concrete floor believed to be the first concrete work in the history of the country, as well as an ancient water well and an old docking platform for incoming canoes and ships. On the site is also a 250-year-old cotton tree, the oldest in Liberia.",
     "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Liberia.svg"
    },
    "Libya" :{
       "name": "Libya",
       "Capital": "Tripoli",
       "women": "16%",
       "officialLanguages:": "Arabic",
       "otherLanguages":"Libyan Arabic, Tamazight, Italian",
       "colonised": "Italy 1911-1943",
       "independence": "1947 – from Italy",
       "heritageSite": "Cyrene was one of the principal cities in the ancient Hellenic world.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Libya.svg"
     },
     "Madagascar" :{
       "name": "Madagascar",
       "Capital": "Antananarivo",
       "women": "20.5%",
       "officialLanguages:": "Malagasy, French",
       "otherLanguages":"N/A",
       "colonised": "France 1896-1958",
       "independence": "1960 – from France",
       "heritageSite": "The Royal Hill of Ambohimanga, the cradle of a 500-year-old kingdom and dynasty that retains enormous spiritual importance to this day.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Madagascar.svg"
     },
     "Malawi" : {
       "name": "Malawi",
       "Capital": "Lilongwe",
       "women": "16.7%",
       "officialLanguages:": "English",
       "otherLanguages":"Chichewa",
       "colonised": "Britain 1891-1964",
       "independence": "1964 – from Britain",
       "heritageSite": "The Chongoni Rock Art Area, lying in a cluster of forested granite hills high on the plateau of central Malawi, holds the richest concentration of rock art in Central Africa.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Malawi.svg"
     },
     "Mali" :{
       "name": "Mali",
       "Capital": "Bamako",
       "women": "8.8%",
       "officialLanguages:": "French",
       "otherLanguages":"Bambara, Bomu, Tieyaxo Bozo, Toro So Dogon, Maasina Fulfulde, Hassaniya Arabic, Mamara Senoufo, Kita Maninkakan, Soninke, Koyraboro Senni, Syenara Senoufo, Tamasheq, Xaasongaxango",
       "colonised": "France 1892-1960",
       "independence": "1960 – from France",
       "heritageSite": "The city of Timbuktu was an intellectual and spiritual capital and the centre of Islamic thought in Africa from the 15th to the 16th centuries.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Mali.svg"
     },
     "Mauritania" : {
       "name": "Mauritania",
       "Capital": "Nouakchott",
       "women": "25.2%",
       "officialLanguages:": "Arabic",
       "otherLanguages":"Hassaniya Arabic, Pulaar, Soninke, Wolof, Zenaga Berber, French",
       "colonised": "France 1903-1960",
       "independence": "1960 – from France",
       "heritageSite": "The Ancient Ksour of Ouadane, Chinguetti, Tichitt and Oualata were trading and religious centres founded in the 11th and 12th centuries to serve caravans crossing the Sahara.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Mauritania.svg"
     },
     "Mauritius" :{
       "name": "Mauritius",
       "Capital": "Port Louis",
       "women": "11.6%",
       "officialLanguages:": "Mauritian Creole, French, English, Bhojpuri",
       "otherLanguages":"N/A",
       "colonised": "Netherlands 1638-1710 | France 1715-1810 | Britain 1810-1968",
       "independence": "1968 – from Britain",
       "heritageSite": "Aapravasi Ghat, a fortlike stone complex established by the UK in 1834, a year after slavery was abolished, as a global transit point for a new kind of slavery: indentured labour. About half a million mainly Indian labourers were processed through the site from 1849 to 1923.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Mauritius.svg"
     },
     "Morocco" : {
       "name": "Morocco",
       "Capital": "Rabat",
       "women": "17%",
       "officialLanguages:": "Arabic, Berber",
       "otherLanguages":"N/A",
       "colonised": "Spain 1912-1956 | France 1912-1956",
       "independence": "1956 – from Spain and France",
       "heritageSite": "The Medina of Marrakesh, a massive old Islamic capital from the 11th century enclosed by 16 kilometres of ramparts and gates.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Morocco.svg"
     },
     "Mozambique" :{
       "name": "Mozambique",
       "Capital": "Maputo",
       "women": "39.6%",
       "officialLanguages:": "Portuguese",
       "otherLanguages":"Emakhuwa, Cisena, Xichangana, Elomwe, Cishona, Xitswa, Xironga, Chichewa, Cinyungwe, Cicopi, Ciyao, Shimakonde",
       "colonised": "Portugal 1498-1975",
       "independence": "1975 – from Portugal",
       "heritageSite": "The Island of Mozambique and its fortified city was a former Portuguese trading post on the route to India, used since the 16th century.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Mozambique.svg"
     },
     "Namibia" :{
       "name": "Namibia",
       "Capital": "Windhoek",
       "women": "41.3%",
       "officialLanguages:": "English",
       "otherLanguages":"Afrikaans, German, Ju’hoansi, Khoekhoegowab, Oshiwambo, Otjiherero, Rukwangali, Rumanyo, Setswana, Silozi, Thimbukushu",
       "colonised": "Germany 1884-1915 | South Africa 1915-1990",
       "independence": "1990 – from South Africa",
       "heritageSite": "The Namib Sand Sea, covering an area of over 3-million hectares, is the only coastal desert in the world that includes extensive dune fields influenced by fog.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Namibia.svg"
     },
     "Niger" : {
       "name": "Niger",
       "Capital": "Niamey",
       "women": "13.3%",
       "officialLanguages:": "French",
       "otherLanguages":"Arabic, Buduma, Fulfulde, Gourmanchéma, Hausa, Kanuri, Zarma & Songhai, Tamasheq, Tassawaq, Tebu",
       "colonised": "France 1900-1960",
       "independence": "1960 – from France",
       "heritageSite": "Agadez, known as the gateway to the Sahara desert, developed in the 15th and 16th centuries when the Sultanate of Aïr was established and Touareg groups settled in the city in the boundaries of nomadic encampments, creating street patterns still in place today.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Niger.svg"
     },
     "Nigeria" :{
       "name": "Nigeria",
       "Capital": "Abuja",
       "women": "5.6%",
       "officialLanguages:": "English",
       "otherLanguages":"Hausa, Igbo, Yoruba, Birom, Edo, Efik, Fulfulde, Gbagyi, Hyam, Ibibio, Idoma, Igala, Igbira, Ijaw, Ikwerre, Itsekiri, Jju, Jukun, Kanuri, Atyap, Margi, Nupe, Tiv, Urhobo-Isoko",
       "colonised": "Britain 1800-1960",
       "independence": "1960 – from Britain",
       "heritageSite": "The dense forest of the Osun Sacred Grove, on the outskirts of the city of Osogbo, is one of the last remnants of primary high forest in southern Nigeria. It is regarded as the abode of the goddess of fertility Osun, one of the pantheon of Yoruba gods.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Nigeria.svg"
     },
     "Rwanda" : {
       "name": "Rwanda",
       "Capital": "Kigali",
       "women": "63.8%",
       "officialLanguages:": "Kinyarwanda, English, French, Swahili",
       "otherLanguages":"Hausa, Igbo, Yoruba, Birom, Edo, Efik, Fulfulde, Gbagyi, Hyam, Ibibio, Idoma, Igala, Igbira, Ijaw, Ikwerre, Itsekiri, Jju, Jukun, Kanuri, Atyap, Margi, Nupe, Tiv, Urhobo-Isoko",
       "colonised": "Germany 1884-1916 | Belgium 1916-1962",
       "independence": "1962 – from Belgium",
       "heritageSite": "Nyamata, Murambi, Bisesero and Gisozi, memorial sites of the 1994 Genocide.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Rwanda.svg"
     },
     "São Tomé and Príncipe":{
       "name": "São Tomé and Príncipe",
       "Capital": "São Tomé",
       "women": "18.2%",
       "officialLanguages:": "Portuguese",
       "otherLanguages":"Forro, Angolar, Principense",
       "colonised": "Portugal 1522-1975",
       "independence": " 1975 – from Portugal",
       "heritageSite": "Unknow",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Sao_Tome_and_Principe.svg"
     },
     "Senegal" : {
       "name": "Senegal",
       "Capital": "Dakar",
       "women": "42.7%",
       "officialLanguages:": "French",
       "otherLanguages":"Balanta-Ganja, Hassaniya Arabic, Jola-Fonyi, Mandinka, Mandjak, Mankanya, Noon, Pulaar, Serer Soninke, Wolof",
       "colonised": " France 1783-1960",
       "independence": "1960 – from France",
       "heritageSite": "The island of Gorée was the largest slave-trading centre on the African coast between the 15th and 19th centuries.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Senegal.svg"
     },
     "Seychelles" : {
       "name": "Seychelles",
       "Capital": "Victoria",
       "women": "43.8%",
       "officialLanguages:": "English, French, Seychellois Creole",
       "otherLanguages":"N/A",
       "colonised": " France 1756-1794 | Britain 1794-1976",
       "independence": "1976 – from Britain",
       "heritageSite": " Aldabra Atoll, four coral islands enclosing a lagoon and surrounded by a coral reef. Protected from human intrusion, the atoll is a safe haven for some 152,000 giant tortoises, the world’s largest population of the reptile.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Seychelles.svg"
     },
     "Sierra Leone" :{
       "name": "Sierra Leone",
       "Capital": "Freetown",
       "women": "12.4%",
       "officialLanguages:": "English",
       "otherLanguages":"Temne, Mende, Krio (Sierra Leonean Creole)",
       "colonised": " Britain 1792-1961",
       "independence": " 1961 – from Britain",
       "heritageSite": "Bunce Island on the Sierra Leone River was established as a slave trading station in 1670. From here British traders shipped tens of thousands of African slaves to the Americas.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Sierra_Leone.svg"
     },
     "Somalia" :{
       "name": "Somalia",
       "Capital": "Mogadishu",
       "women": "13.8%",
       "officialLanguages:": " Somali, Arabic",
       "otherLanguages":"N/A",
       "colonised": "Britain 1884-1960 | Italy 1889-1941 | UN trust territory 1946-1960",
       "independence": "1960 – from Britain and UN",
       "heritageSite": "N/A",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Somalia.svg"
     },
     "South Africa" : {
       "name": "South Africa",
       "Capital": "Pretoria, Bloemfontein and Cape Town",
       "women": "42%",
       "officialLanguages:": "Afrikaans, English, isiNdebele, isiXhosa, isiZulu, Sesotho sa Leboa, Sesotho, Setswana, siSwati, Tshivenda, Xitsonga",
       "otherLanguages":"N/A",
       "colonised": " Netherlands 1562-1795 | Britain 1795-1961 | internal white minority 1961-1994",
       "independence": "1961 – from Britain | 1994 – first democratic elections",
       "heritageSite": " South Africa has nine Unesco World Heritage Sites. Five are cultural, three natural, and one of mixed cultural and natural heritage. The five cultural sites are the ǂKhomani Cultural Landscape, the Mapungubwe Cultural Landscape, the Richtersveld Cultural and Botanical Landscape, Robben Island, and the country’s rich fossil hominid sites. The three natural sites are the Cape Floral Region, iSimangaliso Wetland Park and the ancient Vredefort Dome meteor impact site. Finally, the uKhahlamba Drakensberg Mountains are valued for both their natural beauty and the rich cultural heritage of San Bushman paintings found in their caves and rock shelters.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_South_Africa.svg"
     },
     "South Sudan" : {
       "name": "South Sudan",
       "Capital": "Juba",
       "women": "26.5%",
       "officialLanguages:": "English",
       "otherLanguages":"Bari, Dinka, Luo, Murle, Nuer, Zande and some 60 others",
       "colonised": "Britain 1889-1956 | Sudan 1956-2011",
       "independence": "1956 – from Britain | 2011 – from Sudan",
       "heritageSite": "N/A",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_South_Sudan.svg"
     },
     "Sudan" : {
       "name": "Sudan",
       "Capital": "Khartoum",
       "women": "30.5%",
       "officialLanguages:": "Arabic, English",
       "otherLanguages":"N/A",
       "colonised": " Egypt 1820-1885 | Britain 1899-1956",
       "independence": "1956 – from Britain",
       "heritageSite": "The archaeological sites of Gebel Barkal and the Napatan region in the Nile valley, testimony to the Napatan (900 to 270 BC) and Meroitic (270 BC to 350 AD) cultures of the second kingdom of Kush.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Sudan.svg"
     },
     "Swaziland (Eswatini)" : {
       "name": "Swaziland (Eswatini)",
       "Capital": "Mbabane",
       "women": "6.2%",
       "officialLanguages:": "siSwati, English",
       "otherLanguages":"N/A",
       "colonised": "Britain 1906-1968",
       "independence": "1968 – from Britain",
       "heritageSite": "Ngwenya Mine is the site of the world’s earliest mining activity, and its iron ore deposits one of the oldest geological formations in the world.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Eswatini.svg"
     },
     "Tanzania" :{
       "name": "Tanzania",
       "Capital": "Dodoma",
       "women": "36.6%",
       "officialLanguages:": "Swahili, English",
       "otherLanguages":"N/A",
       "colonised": "Germany 1885-1919 | Britain 1920-1963",
       "independence": "Tanganyika 1961 – from Britain | Zanzibar and Pemba 1963 – from Britain",
       "heritageSite": "Kilimanjaro National Park",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Tanzania.svg"
     },
     "Togo" : {
       "name": "Togo",
       "Capital": "Lomé",
       "women": "17.6%",
       "officialLanguages:": "French",
       "otherLanguages":"Ewe, Kabiyé, Gbe languages, Kotocoli",
       "colonised": "Germany 1884-1916 | France 1916-1960",
       "independence": "1960 – from France",
       "heritageSite": "Koutammakou, the land of the Batammariba people, whose remarkable mud tower-houses (takienta) have become a symbol of Togo.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Togo.svg"
     },
     "Tunisia" : {
       "name": "Tunisia",
       "Capital": "Tunis",
       "women": "31.3%",
       "officialLanguages:": "Arabic",
       "otherLanguages":"Berber, French",
       "colonised": "France 1881-1956",
       "independence": "1956 – from France",
       "heritageSite": "The Amphitheatre of El Jem, built during the third century.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Tunisia.svg"
     },
     "Uganda" : {
       "name": "Uganda",
       "Capital": "Kampala",
       "women": "35%",
       "officialLanguages:": "Berber, French ",
       "otherLanguages":"Around 40 other languages",
       "colonised": "Britain 1894-1962",
       "independence": "1962 – from Britain",
       "heritageSite": " The Tombs of Buganda Kings at Kasubi, the former palace of the Kabakas of Buganda, built in 1882 and converted into a royal burial ground in 1884.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Uganda.svg"
     },
     "Zambia" : {
       "name": "Zambia",
       "Capital": "Lusaka",
       "women": "12.7%",
       "officialLanguages:": "English",
       "otherLanguages":"Nyanja, Bemba, Chewa, Lozi, Kaonde, Lunda, Tonga, Luvale and around 60 others",
       "colonised": "Britain",
       "independence": "1964 – from Britain",
       "heritageSite": "The Victoria Falls – Mosi-oa-Tunya, “the smoke that thunders” – is the world’s largest sheet of falling water, significant for the beauty of its spray, mist and permanent rainbows.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Zambia.svg"
     },
     "Zimbabwe" : {
       "name": "Zimbabwe",
       "Capital": "Harare",
       "women": "31.5%",
       "officialLanguages:": "Chishona, isiNdebele, English and 13 others",
       "otherLanguages":"N/A",
       "colonised": "Britain 1888-1964 | internal (white minority) 1964-1980",
       "independence": "1965 – from Britain (declared) | 1980 – first democratic elections",
       "heritageSite": "The ruins of Great Zimbabwe are a unique testimony to the Bantu civilization of the Shona between the 11th and 15th centuries.",
       "url1": "https://en.wikipedia.org/wiki/Flags_of_Africa#/media/File:Flag_of_Zimbabwe.svg"
     },
     "Unknown" : {
        "name": "Unknown",
        "Capital": "Unknown",
        "women": "Unknown",
        "officialLanguages:": "Unknown",
        "otherLanguages":"Unknown",
        "colonised": "Unknown",
        "independence": "Unknown",
        "heritageSite": "Unknown",
        "url1": "Unknown"
      }
 }

app.get('/', (req,res)=>{
    res.sendFile(__dirname + 'index.html')
})

app.get('/api/:name',(req,res)=>{
   const countryName = req.params.name.toLowerCase //change all the country names to lowercase

   if(country[countryName]){
    res.json(country[countryName])
   }else{
    res.json(country['unknown'])
   }
    
})






app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!, you better go catch it`);
})