import React from "react";

export const About = () => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      <div
        className="header bg-cover bg-center text-white py-12 px-6"
        style={{
          backgroundImage:
            "url('https://domkohouse.com.ua/content/images/1/yak-zrozumity-shcho-kit-zakhvoriv-94128678688063.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold text-center drop-shadow-lg">
          Приют для кошек "КЕК"
        </h1>
      </div>

      <div className="promo bg-blue-600 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-semibold mb-4">Как это происходит</h2>
        <p>Место где кошки правят миром (мы им только помогаем).</p>
        <p>
          Наши пушистики — мастера по умилению, смешным позам и поеданию
          вкусняшек.
        </p>
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
            При поступлении фельдшер осматривает, обрабатывает от паразитов,
            вакцинирует, чипирует каждое животное. Кот получает ветпаспорт
            международного образца.
          </p>
        </div>
      </div>

      <div className="content max-w-5xl mx-auto my-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">
          Кастрация и стерилизация
        </h2>
        <p className="text-lg">
          В течение месяца фотографы создают альбом питомцу, котик выходит в
          пиар и уже может быть замечен будущими хозяевами.
        </p>
      </div>

      <section className="flex flex-col md:flex-row justify-between p-8 md:p-12 gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 space-y-6">
          <h2 className="text-3xl font-bold text-center md:text-left">О нас</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9FjbSJFJa0Eoc5wSu9EVrJwjnecbOp4K-Q&s"
            alt="Котик"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />

          <div className="flex flex-col space-y-4">
            <div>
              <span className="text-3xl font-bold text-green-600">
                &gt;1500
              </span>
              <p className="text-sm text-gray-500">спасённых кошек</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-green-600">
                &gt;45
              </span>
              <p className="text-sm text-gray-500">волонтёров</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6 text-justify leading-relaxed">
          <p className="text-lg">
            У нас вы почувствуете себя как в большой дружной семье. Мы всегда
            готовы выслушать, объяснить всё непонятное и дать дельный совет. Мы
            верим, что каждый котик заслуживает свой дом и заботливого хозяина.
          </p>

          <p>
            Наш приют работает более 5 лет. За это время мы помогли найти дом
            сотням бездомных кошек и котят. Мы открыты для общения и готовы
            подобрать для вас идеального пушистого друга.
          </p>

          <p>
            Активно взаимодействуя с нами, вы заранее узнаете характер, привычки
            и потребности каждого питомца. Мы подробно рассказываем о каждом
            нашем подопечном, чтобы вы могли сделать осознанный выбор.
          </p>

          <p>
            Мы не просто передаём кошек — мы объединяем сердца! С нами вы не
            останетесь одни на этом пути. Ваши пожелания важны для нас так же,
            как комфорт наших хвостатых друзей.
          </p>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wByQDTzA8mRpzpCIB9Jyp34C31XngLWPCA&s"
            alt="Кошачья команда"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
        </div>
      </section>
    </div>
  );
};