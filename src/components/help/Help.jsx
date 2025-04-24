import React from "react";
const helpOptions = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 0v13m0-13H9m3 0h3"
        />
      </svg>
    ),
    title: "Пожертвования",
    description: "Вы можете помочь, сделав финансовый вклад.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    title: "Волонтёрство",
    description: "Присоединяйтесь к нашей команде волонтёров.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-yellow-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 10h11M9 21V3m0 18l-6-6m6 6l6-6"
        />
      </svg>
    ),
    title: "Распространение информации",
    description: "Расскажите о нас своим друзьям и знакомым.",
  },
];
export const Help = () => {
  return (
    <>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Как вы можете помочь</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Каждый может внести свой вклад — вместе мы можем больше!
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {helpOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl transition duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
