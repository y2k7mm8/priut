import React from "react";
import img from "../../../../cat.jpg";

export const Intro = () => {
  return (
    <div
      className="relative h-3xl bg-cover bg-center flex  text-neutral-800"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-opacity-50 p-8 rounded-lg text-left">
        <h1 className="text-4xl font-bold mb-4">Приют</h1>
        <p className="text-lg ">
          Наш приют — это тёплое и безопасное место для любых кошек. <br /> Мы
          заботимся о каждом хвостике, дарим любовь, медицинскую помощь и ищем
          <br />
          для них любящие дома.
        </p>
      </div>
    </div>
  );
};
