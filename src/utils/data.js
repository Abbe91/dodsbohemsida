import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineCalculator } from "react-icons/ai";
import { FaTruckMoving } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { AiOutlineCreditCard } from "react-icons/ai";

export const navlinks = [
  {
    id: 1,
    label: "Hem"
  },

  {
    id: 2,
    label: "Om oss"
  },
  {
    id: 3,
    label: "Tjänster"
  },
  {
    id: 4,
    label: "Dödsboanmälan",
    path: "/dodsboanmalan"
  },
  {
    id: 5,
    label: "Dödsbodelägare",
    path: "/dodsbodelagare"
  },
  {
    id: 6,
    label: "Dödsboet",
    path: "/dodsboet"
  },
  {
    id: 7,
    label: "Sälja dödsbo",
    path: "/salja-dodsbo"
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
    comment:
      "Jag fick hjälp med at tömma mammas dödsbo och sedan städas dödsboet. Vi är jättenöjda med deras helhetslösning"
  },
  {
    id: 221,
    service: "Uppköp av dödsbo",
    kund: "Liselott Andersson",
    comment:
      "De kom ut på en kostnadsfri värdering för uppköp av vårt dödsbo. Dödsbo Jouren köpte en hel del av oss och resten forsla dom bort och skänkte. Tack för hjälpen med vårt dödsbo."
  },
  {
    id: 222,
    service: "Försäljning av dödsbo",
    kund: "Bosse Eriksson",
    comment:
      "Jag fick hjälp med att sälja lösöre ur mitt dödsbo och det gick hur bra som helst. Dödsbo Jourens helhetslösning passade mig perfekt när de sedan tömde dch städade dödsboet."
  },
  {
    id: 243,
    service: "Bohagsflytt",
    kund: "Jasem Hossan",
    comment:
      "Kanon! Packning, Flytt och flyttstädning av vårt hus. Proffsigt, smidigt och billigt då vi fick äntliigen nyttja vår rut. Bohagsflytten gick hur bra som helst."
  },
  {
    id: 435,
    service: "Flyttstädning",
    kund: "Petra Dahl",
    comment:
      "Vi fick hjälp med att flyttstäda vårt bohag och Dödsbo Jouren forslade bort lite gammla möbler vi hade i förrådet. Enkelt och prisvärt."
  },
  {
    id: 5777,
    service: "Bortforsling av dödsbo",
    kund: "Kirsten Abbasi",
    comment:
      "Dödsbo Jouren hjälpte oss med att sortera och forsla bort vårt dödsbo. Vi fick lite avdrag på priset då de köpte lite lösöre ur dödsboet. Jag rekommenderar Dödsbo Jouren starkt."
  },
  {
    id: 6777775,
    service: "Städning av dödsbo",
    kund: "John Pettersson",
    comment:
      "Städningen av vårt dödsbo gick utmärkt. Vi fick ett bra pris för städet och det slängde lite gammla prylar åt oss. Bra firma verkligen."
  },
  {
    id: 7456,
    service: "Sälja dödsbo Göteborg",
    kund: "Ali Hussein",
    comment:
      "Vi ville sälja vårt dödsbo i Göteborg och Dödsbo Jouren hjälpte oss med en helhetslösning där de köpte upp lösöre ur dödsboet, tömde dödsboet, forslade bort dödsboet och sedan slutstädade."
  },
  {
    id: 8688,
    service: "Tömma dödsbo Göteborg",
    kund: "Lisa Magnusson",
    comment:
      "De tömde vårt dödsbo i Göteborg vilket gick utmärkt. Dödsbo Jouren gav oss även en liten slant för våra gammla prylar."
  },
  {
    id: 996986,
    service: "Städning av dödsbo Göteborg",
    kund: "Britt Marie",
    comment:
      "Trevliga killar som gjorde ett jättebra jobb med att städa vårt dödsbo i Göteborg."
  },
  {
    id: 15460,
    service: "Uppköp av dödsbo Göteborg",
    kund: "Tony Sloth",
    comment:
      "Vi fick en kostnadsfri värdering och sedan gjord de ett uppköp av vårt dödsbo i Göteborg."
  },
  {
    id: 146461,
    service: "Dödsbo uppköpare",
    kund: "Liselott Thor",
    comment:
      "Dödsbo Jouren hjälpte oss med att köpa upp lösöre ur vårt dödsbo. De köpte en hel del."
  },
  {
    id: 166462,
    service: "Köper dödsbo Göteborg",
    kund: "Per-Olof Andersson",
    comment: "Bra firma i Göteborg som köper dödsbo och tömmer samt städar"
  }
];
