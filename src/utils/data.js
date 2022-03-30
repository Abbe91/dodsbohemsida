import React from "react";
import { GiMountainCave } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { MdOutlineAir } from "react-icons/md";
import { AiTwotoneBoxPlot } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
export const navlinks = [
  {
    id: 1,
    label: "Hem",
  },
  {
    id: 2,
    label: "Om oss",
  },
  {
    id: 3,
    label: "Tjänster",
  },
  {
    id: 5,
    label: "Tips",
  },
  {
    id: 6,
    label: "Nyheter",
  },
];
export const erbjuder = [
  {
    id: 1,
    title: "Bergvärme",
    icon: <GiMountainCave />,
  },
  {
    id: 2,
    title: "Luft/Vattenvärmepumpar",
    icon: <FaWater />,
  },
  {
    id: 3,
    title: "Luftvärmepumpar",
    icon: <MdOutlineAir />,
  },
  {
    id: 4,
    title: "AC-anläggningar och luftrenare",
    icon: <AiTwotoneBoxPlot />,
  },
  {
    id: 5,
    title: "Service reparation av värmepumpar",
    icon: <MdMiscellaneousServices />,
  },
];
