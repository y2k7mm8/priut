import React from "react";
import imh from "../../../src/assets/meow.mp3";
export const Animalist = () => {
  const playSound = (soundUrl) => {
    const audio = new Audio(soundUrl);
    audio.play();
  };

  return (
    <>
      <p className="flex text-5xl justify-center top-4 uppercase font-semibold">
        Наши мурчашие
      </p>
      <div className="flex flex-col items-center mb-3 gap-6 border-2 border-gray-500 p-5 m-5 rounded-lg bg-gray-200">
        <div className="flex gap-4 font-semibold flex-nowrap">
          <div className="flex flex-col items-center">
            <img
              className="w-72 h-96 object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1yE00Sy00hgTdukr7JdwewYgCm_obp5dJn7A5jnpIDxwTg0f90eq610ABfXhQDaG0CE8&usqp=CAU"
              alt="Тигр"
              onClick={() => playSound("../../../src/assets/meow.mp3")}
            />
            <p className="mt-2 text-lg font-medium">Тигр</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-72 h-96 object-cover"
              src="https://idsb.tmgrup.com.tr/ly/uploads/images/2022/05/16/205719.jpg"
              alt="Ням Ням"
              onClick={() => playSound("../../../src/assets/meow.mp3")}
            />
            <p className="mt-2 text-lg">Ням Ням</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-72 h-96 object-cover"
              src="https://indoorpet.osu.edu/sites/default/files/assets/images/cats/Calico.jpg"
              alt="Нуртикек"
              onClick={() => playSound("../../../src/assets/meow.mp3")}
            />
            <p className="mt-2 text-lg">Нуртикек</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-72 h-96 object-cover"
              src="https://www.vetmed.wisc.edu/wp-content/uploads/2022/12/lina-angelov-Ah_QC2v2alE-unsplash-1200x960.jpg"
              alt="Сигмо"
              onClick={() => playSound("p../../../src/assets/meow.mp3")}
            />
            <p className="mt-2 text-lg">Сигмо</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-72 h-96 object-cover"
              src="https://pettrust.uoguelph.ca/sites/default/files/iStock-472160419%20%281%29.jpg"
              alt="Милое имя"
              onClick={() => playSound("")}
            />
            <p className="mt-2 text-lg">Милое имя</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-72 h-96 object-cover"
              src="https://i.pinimg.com/736x/b4/bb/b2/b4bbb2198b036fe1024571ec6b60f8b8.jpg"
              alt="Кот"
              onClick={() => playSound("../../../src/assets/meow.mp3")}
            />
            <p className="mt-2 text-lg">Кот</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-72 h-96 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRy6snyVm8JuioMgHQZ1b15PR2fZovCc-WnvXm6bfuHc5kGPT6hJTxxY9EMVjYrodAKl8&usqp=CAU"
              alt="El Gato"
              onClick={() => playSound("../../../src/assets/meow.mp3")}
            />
            <p className="mt-2 text-lg">El gato</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:border-l-cyan-800 shadow-md hover:bg-blue-600">
          Показать больше
        </button>
      </div>
    </>
  );
};
