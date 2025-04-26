import React, { useState } from "react";
import Taika from "../../assets/icon/taika.jpg";
import TaikaHover from "../../assets/icon/hover/bambinohover.png"; 
import Bambino from "../../assets/icon/bambino.jpg";
import BambinoHover from "../../assets/icon/hover/ragamaffinhover.png"; 
import Manchkin from "../../assets/icon/manchkin.jpg";
import ManchkinHover from "../../assets/icon/hover/manchkinhover.jpg";
import Ragamaffin from "../../assets/icon/ragamaffin.jpg";
import RagamaffinHover from "../../assets/icon/hover/image.png";

export const Card = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = (cardName) => {
    const timeout = setTimeout(() => {
      setHoveredCard(cardName);
    }, 5000); 
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout); 
    setHoveredCard(null);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4">
        {/* Тайская кошка */}
        <div
          className="min-w-[300px] bg-white shadow-md rounded-md"
          onMouseEnter={() => handleMouseEnter("taika")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-center p-4">
            <img
              src={hoveredCard === "taika" ? TaikaHover : Taika}
              className="rounded-xl w-64 h-64 object-cover"
              alt="Тайская кошка"
            />
          </div>
          <div className="p-4">
            <h2 className="font-semibold">Тайская кошка</h2>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs my-1">
              <a href="https://youtube.com/shorts/E-yWsY2zMww?si=HAQuyHjsly3w_YMm">
                Erbol:
              </a>
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


        <div
          className="min-w-[300px] bg-white shadow-lg rounded-md"
          onMouseEnter={() => handleMouseEnter("bambino")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-center p-4">
            <img
              src={hoveredCard === "bambino" ? BambinoHover : Bambino}
              className="rounded-xl w-64 h-64 object-cover"
              alt="Бамбино"
            />
          </div>
          <div className="p-4 pt-0">
            <h2 className="font-semibold text-black-800">Бамбино</h2>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs my-1">
              <a href="https://youtube.com/shorts/MBuWQms1GCo?si=KX_XtSxZm6-satXf">
                Dniel:
              </a>
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


        <div
          className="min-w-[300px] bg-white shadow-md rounded-md"
          onMouseEnter={() => handleMouseEnter("manchkin")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-center p-4">
            <img
              src={hoveredCard === "manchkin" ? ManchkinHover : Manchkin}
              className="rounded-xl w-64 h-64 object-cover"
              alt="Манчкин"
            />
          </div>
          <div className="p-4 pt-0">
            <h2 className="font-semibold text-black-800">Манчкин</h2>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs my-1">
              <a href="https://youtube.com/shorts/dkXmLWzgRnM?si=E6vzaSiODSF1XHlp">
                Nur-Tilek:
              </a>
            </button>
            <p className="text-xs mt-1">
              Манчкины — это кошки с короткими лапками, результат естественной
              мутации. Несмотря на свою необычную внешность, они подвижные,
              игривые и очень дружелюбные. Они прекрасно ладят с детьми и
              другими животными.
            </p>
          </div>
        </div>


        <div
          className="min-w-[300px] bg-white shadow-md rounded-md"
          onMouseEnter={() => handleMouseEnter("ragamaffin")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-center p-4">
            <img
              src={hoveredCard === "ragamaffin" ? RagamaffinHover : Ragamaffin}
              className="rounded-xl w-64 h-64 object-cover"
              alt="Рагамаффин"
            />
          </div>
          <div className="p-4 pt-0">
            <h2 className="font-semibold text-black-800">Рагамаффин</h2>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs my-1">
              <a href="https://youtube.com/shorts/ve2n_flhtK0?si=p--pFHzyr8i2Vq_g">
                Nurchik:
              </a>
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