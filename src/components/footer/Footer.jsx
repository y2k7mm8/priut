import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-blue-400 text-gray-800 py-6 border-t border-green-300">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold">&copy; 2025 Мир Животных — Любите природу!</p>
        <div className="mt-4 text-sm space-y-1">
          <p className="text-black-700">Адрес: г.Бишкек ул.Пушкина д.Колотушкина</p>
          <p className="text-black-700">Телефон: +996 123-45-67</p>
          <p className="text-black-700">
            Email: <a href="mailto:mirzoo@gmail.com" className="hover:underline">priutKeK@gmail.com</a>
          </p>
        </div>
        <div className="mt-4 text-sm">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-black-700 hover:underline">
            Помогите кошкам и они подарят вам свою любовь
          </a>
        </div>
        <div className="social-icons mt-4">
          <a href="https://t.me/твоя_ссылка" target="_blank" rel="noopener noreferrer" className="mr-4">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="https://instagram.com/твоя_ссылка" target="_blank" rel="noopener noreferrer" className="mr-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/твоя_ссылка" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
