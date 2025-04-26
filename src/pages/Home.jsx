import React from "react";
import { Intro } from "../components/intro/Intro";
import { Help } from "../components/help/Help";
import { Animalist } from "../components/animalist/Animalist";
import { Card } from "../components/card/Card";

export const Home = () => {
  return (
    <div>
      <Intro />
      <Help />
      <Animalist />
      <Card />
    </div>
  );
};
