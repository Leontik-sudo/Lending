import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">AI Money Systems</div>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-gray-900/90 backdrop-blur-sm flex flex-col items-center py-6 space-y-6 z-40">
          {['Главная','Что внутри','Для кого','Отзывы','FAQ','Купить'].map((item, idx) => (
            <a key={idx} href={`#${item.toLowerCase()}`} className="text-xl" onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="text-center pt-32 md:pt-24 pb-24 px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        >
          Запусти онлайн-бизнес за 24 часа
        </motion.h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10">
          Готовые автоворонки + AI-шаблоны + мини-курс = твоя система заработка, которая работает бесконечно.
        </p>
        <a href="#buy">
          <Button size="lg" className="rounded-2xl px-10 py-6 text-xl shadow-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90">
            Получить доступ — 3 990 ₽
          </Button>
        </a>
      </section>

      {/* What’s Inside */}
      <section id="что внутри" className="py-20 px-6 bg-gray-800/40">
        <h2 className="text-4xl font-bold text-center mb-14">Что внутри</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Готовые автоворонки (лендинги + боты)",
            "100+ AI-промптов для рекламы и продаж",
            "Мини-курс по запуску и масштабированию",
            "500+ шаблонов для Canva и MidJourney",
            "Закрытый чат поддержки и комьюнити",
            "Бонус: инструкция по рекламе в TikTok/Telegram"
          ].map((item, idx) => (
            <Card key={idx} className="bg-gray-900/80 border-gray-700 shadow-lg rounded-2xl">
              <CardContent className="p-6 flex items-start space-x-4">
                <CheckCircle className="text-green-400 w-7 h-7" />
                <p className="text-lg">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* For Whom */}
      <section id="для кого" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-14">Для кого продукт</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Новички, которые хотят заработать онлайн",
            "Владельцы малого бизнеса",
            "Фрилансеры и SMM-специалисты"
          ].map((aud, idx) => (
            <Card key={idx} className="bg-gray-900/80 border-gray-700 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center text-lg">{aud}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="отзывы" className="py-20 px-6 bg-gray-800/40">
        <h2 className="text-4xl font-bold text-center mb-14">Отзывы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { name: "Анна К.", text: "Я запустила первую воронку за 2 дня и уже получила 15 заявок. Это реально работает!" },
            { name: "Игорь П.", text: "Крутой комплект. Всё готово: шаблоны, тексты, даже картинки. Экономит месяцы работы." },
            { name: "Марина Л.", text: "Я новичок, но смогла разобраться. Очень помог бонус про рекламу в Telegram." }
          ].map((rev, idx) => (
            <Card key={idx} className="bg-gray-900/80 border-gray-700 shadow-xl rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400" />))}
                </div>
                <p className="italic mb-4">“{rev.text}”</p>
                <h4 className="font-bold">{rev.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-14">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[ 
            {q: "Что я получу после оплаты?", a: "Сразу после оплаты вы получите архив с воронками, шаблонами, курсом и бонусами."},
            {q: "Я новичок, справлюсь ли я?", a: "Да! Продукт создан специально для новичков, внутри есть пошаговые инструкции."},
            {q: "Можно ли перепродавать продукт?", a: "Да, у нас есть лицензия перепродажи как отдельный тариф."}
          ].map((faq, idx) => (
            <Card key={idx} className="bg-gray-900/80 border-gray-700 rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">{faq.q}</h4>
                <p className="text-gray-300">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="buy" className="py-24 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-700">
        <h2 className="text-5xl font-extrabold mb-6">Начни сегодня</h2>
        <p className="text-xl text-gray-200 mb-10">
          Получи полный комплект "AI Money Systems" и запусти систему заработка уже завтра.
        </p>
        <a href="https://yourpaymentlink.com" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="secondary" className="rounded-2xl px-12 py-6 text-xl shadow-2xl">
            Купить сейчас — 3 990 ₽
          </Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400 text-sm bg-black border-t border-gray-800">
        © 2025 AI Money Systems. Все права защищены.
      </footer>
    </div>
  );
}
