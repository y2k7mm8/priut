import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start p-8 gap-8">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Адрес</h2>
          <div className="flex items-center p-4 border rounded-2xl shadow-sm gap-4">
            <span className="text-2xl">📍</span>
            <p className="text-lg">Кыргызстан, г.Бишкек, ул.Горького 18</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Связь</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center p-4 border rounded-2xl shadow-sm gap-4">
              <span className="text-2xl">📱</span>
              <p className="text-lg">+996 500 500 425</p>
            </div>
            <div className="flex items-center p-4 border rounded-2xl shadow-sm gap-4">
              <p className="text-lg">nickname123@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full ">
        <h2 className="text-2xl font-bold mb-4">На карте</h2>
        <iframe
          title="map"
          className="w-full h-96 border rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.8482441680435!2d74.6318379!3d42.8551453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb65041bf6f57%3A0x7073e49841f3d4d1!2z0J_QtdGA0YHQuNGPLCA5OSwg0JHRg9C70LXQstCwLCDQmtC40ZfQsi3QodC-0LLQvg!5e0!3m2!1sru!2skg!4v1714153585101!5m2!1sru!2skg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
