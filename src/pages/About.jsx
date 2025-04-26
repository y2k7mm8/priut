import React from "react";

export const About = () => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">

      <div
        className="header bg-cover bg-center text-white py-12 px-6"
        style={{ backgroundImage: "url('https://domkohouse.com.ua/content/images/1/yak-zrozumity-shcho-kit-zakhvoriv-94128678688063.jpg')" }}
      >
        <h1 className="text-4xl font-bold text-center drop-shadow-lg">Приют для кошек "КЕК"</h1>
      </div>

      <div className="promo bg-blue-600 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-semibold mb-4">Как это происходит</h2>
        <p>Место где кошки правят миром (мы им только помогаем).</p>
        <p>Наши пушистики — мастера по умилению, смешным позам и поеданию вкусняшек.</p>
        <p>У каждого есть своя история и свой шрам.</p>
        <p>Зайди в 'Кек' и забери себе мурчащего напарника.</p>
      </div>

      <div className="content max-w-5xl mx-auto my-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-8">Наш процесс</h1>
        <div className="flex items-center space-x-6">
          <img
            src="https://storage.yandexcloud.net/yac-wh-sb-prod-s3-media-03008/uploads/articles/pohod-k-veterinaru-s-koshkoj/img5.webp"
            alt="Ветеринарный осмотр"
            className="w-1/2 rounded-lg shadow-lg"
          />
          <p className="text-lg">
            При поступлении фельдшер осматривает, обрабатывает от паразитов, вакцинирует, чипирует каждое животное. Кот получает ветпаспорт международного образца.
          </p>
        </div>
      </div>

      <div className="content max-w-5xl mx-auto my-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">Кастрация и стерилизация</h2>
        <p className="text-lg">
          В течение месяца фотографы создают альбом питомцу, котик выходит в пиар и уже может быть замечен будущими хозяевами.
        </p>
      </div>

    
    </div>
  );
};