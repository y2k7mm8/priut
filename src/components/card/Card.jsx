import React from "react";
import Taika from "../../assets/icon/taika.jpg";
import Bambino from "../../assets/icon/bambino.jpg";
import Manchkin from "../../assets/icon/manchkin.jpg";
import Ragamaffin from "../../assets/icon/ragamaffin.jpg";

export const Card = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4">
        <div className="min-w-[300px] bg-white shadow-md rounded-md">
          <div className="flex justify-center p-4">
            <img src={Taika} className="rounded-xl" />
          </div>
          <div className="p-4">
            <h2 className="font-semibold">Тайская кошка</h2>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs my-1">
              Erbol:
            </button>
            <p className="text-xs mt-1">
              Внешние черты и характеристики тайской кошки: это сильные
              животные, компактных размеров, форма головы круглая, уши
              маленькие, близко посажены друг ко другу. Глаза раскосые
              миндалевидные или лимоновидные, имеют великолепный голубой цвет.
              Окрас шерсти у тайской кошки колор-поинт, который подразумевает
              наличие маски на морде, темные лапы и темный хвост.
            </p>
          </div>
        </div>

        <div className="min-w-[300px] bg-white shadow-lg rounded-md">
          <div className="flex justify-center p-4 pt-4">
            <img src={Bambino} className="rounded-xl" />
          </div>
          <div className="p-4 pt-0">
            <h2 className="font-semibold text-black-800">Бамбино</h2>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs my-1">
              Dniel:
            </button>
            <p className="text-xs mt-1">
              Родиной породы кошек бамбино является Штат Арканзас США. Эта
              порода кошек получилась благодаря скрещиванию манчкина и
              канадского сфинкса. В результате кошки породы бамбино получили
              короткие лапки от манчкина и полное отсутствие шерсти от
              канадского сфинкса.
            </p>
          </div>
        </div>

        <div className="min-w-[300px] bg-white shadow-md rounded-md">
          <div className="flex justify-center p-4">
            <img src={Manchkin} className="rounded-xl" />
          </div>
          <div className="p-4 pt-0">
            <h2 className="font-semibold text-black-800">Манчкин</h2>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs my-1">
              Nur-Tilek:
            </button>
            <p className="text-xs mt-1">
              Манчкины — это кошки с короткими лапками, результат естественной
              мутации. Несмотря на свою необычную внешность, они подвижные,
              игривые и очень дружелюбные. Они прекрасно ладят с детьми и
              другими животными.
            </p>
          </div>
        </div>

        <div className="min-w-[300px] bg-white shadow-md rounded-md">
          <div className="flex justify-center p-4">
            <img src={Ragamaffin} className="rounded-xl" />
          </div>
          <div className="p-4 pt-0">
            <h2 className="font-semibold text-black-800">Рагамаффин</h2>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs my-1">
              Nurchik:
            </button>
            <p className="text-xs mt-1">
              Рагамаффины — это крупные и ласковые кошки с густой мягкой
              шерстью. Они отличаются спокойным характером, любят ласку и
              внимание, легко приспосабливаются к жизни в квартире и отлично
              уживаются с другими питомцами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
