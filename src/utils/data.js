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
  }
];
export const erbjuder = [
  {
    id: 1,
    title: "Dödsbo Hantering",
    icon: <BiHomeAlt />
  },
  {
    id: 2,
    title: "Värdering av Dödsbo och Bohag",
    icon: <AiOutlineCalculator />
  },
  {
    id: 3,
    title: "Flytt & Packning",
    icon: <FaTruckMoving />
  },
  {
    id: 4,
    title: "Städning, Flyttstäd & Sanering",
    icon: <MdCleaningServices />
  },
  {
    id: 5,
    title: "Uppköp & Försäljning",
    icon: <AiOutlineCreditCard />
  }
];

export const customerReviews = [
  {
    id: 0,
    service: "Tömning av dödsbo",
    kund: "Marie Lindqvist",
    comment:
      "Jag fick hjälp med at tömma mammas dödsbo och sedan städas dödsboet. Vi är jättenöjda med deras helhetslösning"
  },
  {
    id: 1,
    service: "Uppköp av dödsbo",
    kund: "Liselott Andersson",
    comment:
      "De kom ut på en kostnadsfri värdering för uppköp av vårt dödsbo. Dödsbo Jouren köpte en hel del av oss och resten forsla dom bort och skänkte. Tack för hjälpen med vårt dödsbo."
  },
  {
    id: 2,
    service: "Försäljning av dödsbo",
    kund: "Bosse Eriksson",
    comment:
      "Jag fick hjälp med att sälja lösöre ur mitt dödsbo och det gick hur bra som helst. Dödsbo Jourens helhetslösning passade mig perfekt när de sedan tömde dch städade dödsboet."
  },
  {
    id: 3,
    service: "Bohags flytt",
    kund: "Jasem Hossan",
    comment:
      "Kanon! Packning, Flytt och flyttstädning av vårt hus. Proffsigt, smidigt och billigt då vi fick äntliigen nyttja vår rut. Bohagsflytten gick hur bra som helst."
  },
  {
    id: 4,
    service: "Flytt städning",
    kund: "Petra Dahl",
    comment:
      "Vi fick hjälp med att flyttstäda vårt bohag och Dödsbo Jouren forslade bort lite gammla möbler vi hade i förrådet. Enkelt och prisvärt."
  },
  {
    id: 5,
    service: "Bortforsling av dödsbo",
    kund: "Kirsten Abbasi",
    comment:
      "Dödsbo Jouren hjälpte oss med att sortera och forsla bort vårt dödsbo. Vi fick lite avdrag på priset då de köpte lite lösöre ur dödsboet. Jag rekommenderar Dödsbo Jouren starkt."
  },
  {
    id: 6,
    service: "Städning av dödsbo",
    kund: "John Pettersson",
    comment:
      "Städningen av vårt dödsbo gick utmärkt. Vi fick ett bra pris för städet och det slängde lite gammla prylar åt oss. Bra firma verkligen."
  },
  {
    id: 7,
    service: "Sälja dödsbo Göteborg",
    kund: "Ali Hussein",
    comment:
      "Vi ville sälja vårt dödsbo i Göteborg och Dödsbo Jouren hjälpte oss med en helhetslösning där de köpte upp lösöre ur dödsboet, tömde dödsboet, forslade bort dödsboet och sedan slutstädade."
  },
  {
    id: 8,
    service: "Tömma dödsbo Göteborg",
    kund: "Lisa Magnusson",
    comment:
      "De tömde vårt dödsbo i Göteborg vilket gick utmärkt. Dödsbo Jouren gav oss även en liten slant för våra gammla prylar."
  },
  {
    id: 9,
    service: "Städning av dödsbo Göteborg",
    kund: "Britt Marie",
    comment:
      "Trevliga killar som gjorde ett jättebra jobb med att städa vårt dödsbo i Göteborg."
  },
  {
    id: 9,
    service: "Uppköp av dödsbo Göteborg",
    kund: "Tony Sloth",
    comment:
      "Vi fick en kostnadsfri värderin och sedan gjord de ett uppköp av vårt dödsbo i Göteborg."
  }
];
