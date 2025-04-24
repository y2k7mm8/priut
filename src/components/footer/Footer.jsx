import React from 'react'

export const Footer = () => {
  return (
    <footer class="bg-green-100 text-gray-800 py-6 border-t border-green-300">
    <div class="container mx-auto px-4 text-center">
      <p class="text-sm font-semibold">&copy; 2025 Мир Животных — Любите природу!</p>
      <div class="mt-2 flex justify-center space-x-4 text-sm">
        <a href="#" class="text-green-700 hover:underline">О нас</a>
        <a href="#" class="text-green-700 hover:underline">Контакты</a>
        <a href="#" class="text-green-700 hover:underline">Спасите животных</a>
      </div>
    </div>
    </footer>
  )
}
