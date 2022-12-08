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
    kund: "Marie Lindqvist"
  },
  {
    id: 1,
    service: "Uppköp av dödsbo",
    kund: "Liselott Andersson"
  },
  {
    id: 2,
    service: "Försäljning av dödsbo",
    kund: "Bosse Eriksson"
  },
  {
    id: 3,
    service: "Bohags flytt",
    kund: "Jasem Hossan"
  },
  {
    id: 4,
    service: "Flytt städning",
    kund: "Petra Dhal"
  },
  {
    id: 5,
    service: "Bortforsling av dödsbo",
    kund: "Kirsten Abbasi"
  },
  {
    id: 5,
    service: "Städning av dödsbo",
    kund: "John Pettersson"
  }
];
