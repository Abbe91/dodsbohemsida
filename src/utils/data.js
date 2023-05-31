import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineCalculator } from "react-icons/ai";
import { FaTruckMoving } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { AiOutlineCreditCard } from "react-icons/ai";

export const navlinks = [
  {
    id: 2,
    label: "Tömning",
    path: "/tomma-bohag"
  },
  {
    id: 3,
    label: "Värdering",
    path: "/vardera-dodsbo"
  },
  {
    id: 4,
    label: "Städning",
    path: "/stadning-av-dodsbo"
  },
  {
    id: 5,
    label: "Flytt",
    path: "/bohagsflytt"
  },
  {
    id: 6,
    label: "Uppköp",
    path: "/uppkop-av-dodsbo"
  },
  {
    id: 7,
    label: "Bortforsling",
    path: "/bortforsling-dodsbo"
  },
  {
    id: 8,
    label: "Återvinning",
    path: "/atervinning"
  },
  {
    id: 9,
    label: "Avfallshantering",
    path: "/avfallshantering"
  },
  {
    id: 10,
    label: "Återvinningsstation",
    path: "/atervinningsstation"
  },
  {
    id: 11,
    label: "Återvinningscentral",
    path: "/atervinningscentral"
  }
];
export const erbjuder = [
  {
    id: 22,
    title: "Dödsbo Hantering",
    icon: <BiHomeAlt />
  },
  {
    id: 55,
    title: "Värdering av Dödsbo och Bohag",
    icon: <AiOutlineCalculator />
  },
  {
    id: 33,
    title: "Flytt & Packning",
    icon: <FaTruckMoving />
  },
  {
    id: 43,
    title: "Städning, Flyttstäd & Sanering",
    icon: <MdCleaningServices />
  },
  {
    id: 51,
    title: "Uppköp & Försäljning",
    icon: <AiOutlineCreditCard />
  }
];

export const customerReviews = [
  {
    id: 144444,
    service: "Tömning av dödsbo",
    kund: "Marie Lindqvist",
    path: "/tomning-av-dodsbo",
    comment:
      "Jag fick hjälp med at tömma mammas dödsbo och sedan städas dödsboet. Vi är jättenöjda med deras helhetslösning"
  },
  {
    id: 221,
    service: "Uppköp av dödsbo",
    kund: "Liselott Andersson",
    path: "/uppkop-av-dodsbo",
    comment:
      "De kom ut på en kostnadsfri värdering för uppköp av vårt dödsbo. Dödsbo Jouren köpte en hel del av oss och resten forsla dom bort och skänkte. Tack för hjälpen med vårt dödsbo."
  },
  {
    id: 222,
    service: "Försäljning av dödsbo",
    kund: "Bosse Eriksson",
    path: "/salja-dodsbo-goteborg",
    comment:
      "Jag fick hjälp med att sälja lösöre ur mitt dödsbo och det gick hur bra som helst. Dödsbo Jourens helhetslösning passade mig perfekt när de sedan tömde dch städade dödsboet."
  },
  {
    id: 243,
    service: "Bohagsflytt",
    kund: "Jasem Hossan",
    path: "/bohagsflytt",
    comment:
      "Kanon! Packning, Flytt och flyttstädning av vårt hus. Proffsigt, smidigt och billigt då vi fick äntliigen nyttja vår rut. Bohagsflytten gick hur bra som helst."
  },
  {
    id: 435,
    service: "Flyttstädning",
    kund: "Petra Dahl",
    path: "/flyttstadning",
    comment:
      "Vi fick hjälp med att flyttstäda vårt bohag och Dödsbo Jouren forslade bort lite gammla möbler vi hade i förrådet. Enkelt och prisvärt."
  },
  {
    id: 5777,
    service: "Bortforsling av dödsbo",
    kund: "Kirsten Abbasi",
    path: "/bortforsling-dodsbo-goteborg",
    comment:
      "Dödsbo Jouren hjälpte oss med att sortera och forsla bort vårt dödsbo. Vi fick lite avdrag på priset då de köpte lite lösöre ur dödsboet. Jag rekommenderar Dödsbo Jouren starkt."
  },
  {
    id: 6777775,
    service: "Städning av dödsbo",
    kund: "John Pettersson",
    path: "/stadning-av-dodsbo",
    comment:
      "Städningen av vårt dödsbo gick utmärkt. Vi fick ett bra pris för städet och det slängde lite gammla prylar åt oss. Bra firma verkligen."
  },
  {
    id: 7456,
    service: "Sälja dödsbo Göteborg",
    kund: "Ali Hussein",
    path: "/salja-dodsbo-goteborg",
    comment:
      "Vi ville sälja vårt dödsbo i Göteborg och Dödsbo Jouren hjälpte oss med en helhetslösning där de köpte upp lösöre ur dödsboet, tömde dödsboet, forslade bort dödsboet och sedan slutstädade."
  },
  {
    id: 8688,
    service: "Tömma dödsbo Göteborg",
    kund: "Lisa Magnusson",
    path: "/tomma-dodsbo-goteborg",
    comment:
      "De tömde vårt dödsbo i Göteborg vilket gick utmärkt. Dödsbo Jouren gav oss även en liten slant för våra gammla prylar."
  },
  {
    id: 996986,
    service: "Städning av dödsbo Göteborg",
    kund: "Britt Marie",
    path: "/stada-dodsbo-goteborg",
    comment:
      "Trevliga killar som gjorde ett jättebra jobb med att städa vårt dödsbo i Göteborg."
  },
  {
    id: 15460,
    service: "Uppköp av dödsbo Göteborg",
    kund: "Tony Sloth",
    path: "/uppkop-dodsbo-goteborg",
    comment:
      "Vi fick en kostnadsfri värdering och sedan gjord de ett uppköp av vårt dödsbo i Göteborg."
  },
  {
    id: 146461,
    service: "Dödsbo uppköpare",
    kund: "Liselott Thor",
    path: "/uppkop-dodsbo-goteborg",
    comment:
      "Dödsbo Jouren hjälpte oss med att köpa upp lösöre ur vårt dödsbo. De köpte en hel del."
  },
  {
    id: 166462,
    service: "Köper dödsbo Göteborg",
    kund: "Per-Olof Andersson",
    path: "/uppkop-dodsbo-goteborg",
    comment: "Bra firma i Göteborg som köper dödsbo och tömmer samt städar"
  },
  {
    id: 166463,
    service: "Flyttstädning i Göteborg",
    kund: "Janne Jansson",
    path: "/flyttstadning-i-goteborg",
    comment:
      "Vi fick hjälp med att röja vårt dödsbo och sen gjorde Dödsbo Jouren flyttstädning av dödsboet. Enkel kommunikation och smidigt."
  },
  {
    id: 166466868,
    service: "Röja dödsbo i Göteborg",
    kund: "Karl Einersson",
    path: "/roja-dodsbo-goteborg",
    comment:
      "Röjning av dödsboet gick som vi ville. Dödsbo Jouren skötte allt trots att vi inte kunde vara på plats. Pålitligt företag och rekommenderar dem starkt. "
  }
];
