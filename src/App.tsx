import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  series: string;
  type: string;
  size: string;
  art: string;
  stock: string;
  image: string;
  price: string;
}

interface Faq {
  q: string;
  a: string;
}

interface Review {
  name: string;
  company: string;
  text: string;
  date: string;
  rating: number;
}

const App: React.FC = () => {
  // Данные товаров
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Товар 1",
      series: "MC-131",
      type: "Асбестовая",
      size: "14×14 мм",
      art: "ART:1435825",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/1015/600/400",
    },
    {
      id: 2,
      name: "Товар 2",
      series: "MC-131",
      type: "Асбестовая",
      size: "12×12 мм",
      art: "ART:1436290",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/133/600/400",
    },
    {
      id: 3,
      name: "Товар 3",
      series: "MC-131",
      type: "Асбестовая",
      size: "4×4 мм",
      art: "ART:1436291",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/201/600/400",
    },
    {
      id: 4,
      name: "Товар 4",
      series: "MC-131",
      type: "Асбестовая",
      size: "10×10 мм",
      art: "ART:1435826",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/866/600/400",
    },
    {
      id: 5,
      name: "Товар 5",
      series: "MC-131",
      type: "Асбестовая",
      size: "15×15 мм",
      art: "ART:1436292",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/1005/600/400",
    },
    {
      id: 6,
      name: "Товар 6",
      series: "MC-131",
      type: "Графитовая",
      size: "10×10 мм",
      art: "ART:1435827",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/1009/600/400",
    },
    {
      id: 7,
      name: "Товар 7",
      series: "MC-131",
      type: "Графитовая",
      size: "6×6 мм",
      art: "ART:1436001",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/1025/600/400",
    },
    {
      id: 8,
      name: "Товар 8",
      series: "MC-131",
      type: "Асбестовая",
      size: "8×8 мм",
      art: "ART:1436002",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/1035/600/400",
    },
    {
      id: 9,
      name: "Товар 9",
      series: "MC-131",
      type: "Графитовая",
      size: "9×9 мм",
      art: "ART:1436003",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/1045/600/400",
    },
    {
      id: 10,
      name: "Товар 10",
      series: "MC-131",
      type: "Асбестовая",
      size: "11×11 мм",
      art: "ART:1436004",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/1055/600/400",
    },
    {
      id: 11,
      name: "Товар 11",
      series: "MC-131",
      type: "Графитовая",
      size: "12×12 мм",
      art: "ART:1436005",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/1065/600/400",
    },
    {
      id: 12,
      name: "Товар 12",
      series: "MC-131",
      type: "Асбестовая",
      size: "13×13 мм",
      art: "ART:1436006",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/1075/600/400",
    },
    {
      id: 13,
      name: "Товар 13",
      series: "MC-131",
      type: "Графитовая",
      size: "14×14 мм",
      art: "ART:1436007",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/1085/600/400",
    },
    {
      id: 14,
      name: "Товар 14",
      series: "MC-131",
      type: "Асбестовая",
      size: "15×15 мм",
      art: "ART:1436008",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/1095/600/400",
    },
    {
      id: 15,
      name: "Товар 15",
      series: "MC-131",
      type: "Графитовая",
      size: "16×16 мм",
      art: "ART:1436009",
      stock: "НА СКЛАДЕ <1Т.",
      image: "https://picsum.photos/id/1105/600/400",
    },
  ]);

  // Состояния

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);
  const [showCookie, setShowCookie] = useState<boolean>(true);
  const [showRequestModal, setShowRequestModal] = useState<boolean>(false);
  const [requestProduct, setRequestProduct] = useState<Product | null>(null);

  // Фильтрация товаров
  const filteredProducts = products;

  // Варианты размеров для фильтров
  const sizes = [
    "4×4 мм",
    "6×6 мм",
    "10×10 мм",
    "12×12 мм",
    "14×14 мм",
    "15×15 мм",
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Отзывы
  const reviews: Review[] = [
    {
      name: "Алексей Морозов",
      company: "ООО «НефтеХимСервис»",
      text: "Отличное качество набивки. Работает уже 8 месяцев без протечек. Быстрая доставка в Краснодар.",
      date: "12.04.2026",
      rating: 5,
    },
    {
      name: "Светлана Ковалёва",
      company: "Завод «Металлург»",
      text: "Цена по запросу оказалась очень выгодной. Качество на уровне европейских аналогов.",
      date: "05.04.2026",
      rating: 5,
    },
  ];

  // Добавление в «запрос цены»
  const addToCart = (product: Product) => {
    setCartCount((prev) => prev + 1);
    alert(
      `✅ Запрос цены на ${product.name} ${product.size} отправлен менеджеру.\n\nМы свяжемся с вами в течение 15 минут!`,
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== ТОНКИЙ ВЕРХНИЙ ХЕДЕР ==================== */}
      <div className="bg-white border-b text-sm py-2 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-x-6 text-gray-600">
            <div className="flex items-center gap-x-1">
              <i className="fas fa-map-marker-alt text-blue-600"></i>
              <span className="font-medium">Краснодар</span>
            </div>
            <a
              href="#"
              className="flex items-center hover:text-blue-600 transition-colors">
              <i className="fab fa-whatsapp text-green-500 mr-1"></i>
              WhatsApp
            </a>
            <a
              href="#"
              className="flex items-center hover:text-blue-600 transition-colors">
              <i className="fab fa-telegram text-blue-500 mr-1"></i>
              Telegram
            </a>
            <a
              href="tel:+78619441688"
              className="flex items-center hover:text-blue-600 transition-colors font-medium">
              <i className="fas fa-phone mr-1"></i>
              +7 (861) 000-00-00
            </a>
            <a
              href="mailto:krasnodar@inmetprom.ru"
              className="flex items-center hover:text-blue-600 transition-colors">
              <i className="fas fa-envelope mr-1"></i>
              test@test.ru
            </a>
          </div>

          <div className="flex items-center gap-x-5 text-sm">
            <a
              href="#"
              className="hover:text-blue-600 flex items-center gap-x-1">
              О компании <i className="fas fa-chevron-down text-xs"></i>
            </a>
            <a
              href="#"
              className="hover:text-blue-600 flex items-center gap-x-1">
              Клиентам <i className="fas fa-chevron-down text-xs"></i>
            </a>
            <a href="#" className="hover:text-blue-600">
              Прайс-лист
            </a>
            <a href="#" className="hover:text-blue-600">
              Контакты
            </a>
          </div>
        </div>
      </div>

      {/* ==================== ОСНОВНОЙ ХЕДЕР ==================== */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Логотип */}
            <div className="flex items-center gap-x-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white font-bold text-2xl">
                  |||
                </div>
                <span className="ml-2 text-2xl font-semibold tracking-tighter text-blue-700">
                  ТОВАРЫ
                </span>
              </div>
            </div>

            {/* Кнопка КАТАЛОГ */}
            <button
              onClick={() => alert("Каталог открыт (демо)")}
              className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-2xl flex items-center gap-x-2 transition-colors">
              <i className="fas fa-list-ul"></i>
              КАТАЛОГ
            </button>

            {/* Поиск */}
            <div className="flex-1 max-w-xl mx-8 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Поиск по сайту"
                className="w-full pl-5 pr-12 py-4 bg-gray-100 border border-transparent focus:border-blue-300 rounded-2xl outline-none text-base placeholder:text-gray-400"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
                <i className="fas fa-search text-xl"></i>
              </button>
            </div>

            {/* Кнопки */}
            <div className="flex items-center gap-x-3">
              <button
                onClick={() =>
                  alert("Заявка отправлена! Менеджер свяжется с вами.")
                }
                className="px-7 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl flex items-center gap-x-2 shadow-sm transition-all active:scale-95">
                <i className="fas fa-paper-plane"></i>
                ЗАЯВКА
              </button>

              <button
                onClick={() => alert("Корзина запросов")}
                className="relative px-6 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-2xl flex items-center gap-x-2 transition-colors">
                <i className="fas fa-shopping-cart text-xl"></i>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Навигация по категориям */}
      </header>

      {/* ==================== ОСНОВНОЙ КОНТЕНТ ==================== */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <a href="#" className="hover:text-blue-700">
            Главная
          </a>
          <span className="mx-3">›</span>
          <a href="#" className="hover:text-blue-700">
            Каталог
          </a>
          <span className="mx-3">›</span>
          <span className="text-blue-700 font-medium">Товар 1</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ==================== ЛЕВАЯ ПАНЕЛЬ ФИЛЬТРОВ ==================== */}
          {/* ==================== ЛЕВАЯ ПАНЕЛЬ ФИЛЬТРОВ ==================== */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-3xl shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-6">ФИЛЬТРЫ</h3>

              {/* Размер */}
              <div className="mb-6">
                <div className="font-medium mb-3">РАЗМЕР</div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <div
                      key={size}
                      className="px-4 py-2 border rounded-xl text-sm cursor-pointer hover:border-blue-400 hover:text-blue-600 transition-colors">
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              {/* Тип */}
              <div>
                <div className="font-medium mb-3">ТИП</div>
                <div className="flex flex-col gap-2 text-sm">
                  <span className="cursor-pointer hover:text-blue-600 transition-colors">
                    Асбестовая
                  </span>
                  <span className="cursor-pointer hover:text-blue-600 transition-colors">
                    Графитовая
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ==================== ПРАВАЯ ЧАСТЬ — ТАБЫ И КАРТОЧКИ ==================== */}
          <div className="flex-1">
            {/* Табы */}
            <div className="mb-6 overflow-hidden">
              <div className="flex gap-2 flex-wrap">
                {["MC-131", "10×10 мм", "12×12 мм", "14×14 мм", "15×15 мм"].map(
                  (tab) => (
                    <button
                      key={tab}
                      className="px-5 py-2 text-sm rounded-2xl bg-white border hover:border-blue-400">
                      {tab}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Сортировка */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">Сортировать по:</span>
                <select className="bg-transparent font-medium outline-none cursor-pointer">
                  <option>умолчанию</option>
                  <option>по размеру</option>
                  <option>по артикулу</option>
                </select>
              </div>
              <div className="flex items-center gap-x-4">
                <button className="text-xl text-gray-400 hover:text-gray-600">
                  ☰
                </button>
                <button className="text-2xl text-blue-700">▦</button>
              </div>
            </div>

            {/* Сетка товаров */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="bg-white rounded-3xl overflow-hidden border hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-2xl flex items-center">
                      <i className="fas fa-circle text-[8px] mr-1"></i>
                      {product.stock}
                    </div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-gray-400 mb-1">
                      {product.art}
                    </div>
                    <h4 className="font-semibold text-lg leading-tight mb-2">
                      {product.name}
                    </h4>
                    <div className="flex justify-between text-sm mb-4">
                      <div>
                        <div className="text-gray-500">Серия:</div>
                        <div className="font-medium">{product.series}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Тип:</div>
                        <div className="font-medium">{product.type}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Размер:</div>
                        <div className="font-medium">{product.size}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setRequestProduct(product);
                          setShowRequestModal(true);
                        }}
                        className="border-2 border-red-500 hover:bg-red-500 hover:text-white text-red-500 font-medium px-8 py-4 rounded-2xl transition-all text-sm w-full">
                        ЗАПРОСИТЬ ЦЕНУ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Пагинация */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-12 gap-x-2">
                <button className="w-10 h-10 flex items-center justify-center border rounded-2xl text-gray-400 hover:text-blue-700">
                  ←
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white rounded-2xl">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center border rounded-2xl text-gray-400 hover:text-blue-700">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center border rounded-2xl text-gray-400 hover:text-blue-700">
                  →
                </button>
              </div>
            )}
          </div>
        </div>
        {/* ==================== О ПРЕДПРИЯТИИ ==================== */}
        <div className="mb-10 bg-white rounded-3xl overflow-hidden shadow-sm border flex flex-col lg:flex-row mt-10">
          {/* Картинка */}
          <div className="lg:w-1/2">
            <img
              src="https://avatars.mds.yandex.net/i?id=6c0e8405bc710599d36d76c2cb7b6eaa_l-5986425-images-thumbs&n=13"
              alt="О предприятии"
              className="w-full h-64 lg:h-full object-cover"
            />
          </div>

          {/* Текст */}
          <div className="p-8 lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">О предприятии</h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Мы — поставщик промышленной продукции и уплотнительных материалов
              с многолетним опытом работы на рынке. Наша компания
              специализируется на обеспечении предприятий качественными
              материалами для насосного оборудования, арматуры и трубопроводных
              систем.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Работаем напрямую с производителями, что позволяет нам удерживать
              стабильные цены и гарантировать качество. Отгрузка осуществляется
              по всей России в кратчайшие сроки.
            </p>

            <button
              onClick={() => alert("Запрос отправлен")}
              className="self-start px-6 py-3 bg-blue-700 text-white rounded-2xl hover:bg-blue-800 transition-colors">
              Узнать больше
            </button>
          </div>
        </div>
      </div>

      {/* ==================== БЛОК ОТЗЫВОВ ==================== */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Что говорят наши клиенты
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex gap-x-1 text-amber-400 mb-6">
                {Array(5)
                  .fill(0)
                  .map((_, k) => (
                    <i
                      key={k}
                      className={`fas fa-star ${
                        k < review.rating ? "" : "text-gray-200"
                      }`}></i>
                  ))}
              </div>
              <p className="text-gray-600 mb-8 italic">«{review.text}»</p>
              <div className="flex items-center gap-x-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.company}</div>
                  <div className="text-xs text-gray-400">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== ФУТЕР ==================== */}
      <footer className="bg-blue-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-12">
            {/* Лого + описание */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-3xl font-bold">|||</div>
                <span className="ml-3 text-3xl tracking-tighter">ТОВАРЫ</span>
              </div>

              <p className="text-blue-200 text-sm leading-relaxed">
                Поставка металлопроката и уплотнительных материалов по всей
                России с 2008 года.
              </p>

              <div className="flex gap-x-6 mt-8 text-2xl">
                <i className="fab fa-whatsapp cursor-pointer hover:text-blue-400"></i>
                <i className="fab fa-telegram cursor-pointer hover:text-blue-400"></i>
                <i className="fab fa-vk cursor-pointer hover:text-blue-400"></i>
              </div>
            </div>

            {/* Компания (справа) */}
            <div className="flex justify-end">
              <ul className="flex gap-8 text-blue-200">
                <li className="hover:text-white cursor-pointer">О нас</li>
                <li className="hover:text-white cursor-pointer">Доставка</li>
                <li className="hover:text-white cursor-pointer">Оплата</li>
                <li className="hover:text-white cursor-pointer">Контакты</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[200]"
          onClick={() => setSelectedProduct(null)}>
          <div
            className="bg-white rounded-3xl max-w-md w-full mx-4 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}>
            {/* Фото сверху */}
            <div>
              <img
                src={selectedProduct.image}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Инфа ниже */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {selectedProduct.name}
                </h2>

                <p className="text-gray-500 mb-2">{selectedProduct.art}</p>

                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <b>Серия:</b> {selectedProduct.series}
                  </p>
                  <p>
                    <b>Тип:</b> {selectedProduct.type}
                  </p>
                  <p>
                    <b>Размер:</b> {selectedProduct.size}
                  </p>
                  <p>
                    <b>Наличие:</b> {selectedProduct.stock}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setRequestProduct(selectedProduct);
                    setShowRequestModal(true);
                  }}
                  className="w-full bg-blue-700 text-white py-3 rounded-2xl hover:bg-blue-800">
                  ЗАПРОСИТЬ ЦЕНУ
                </button>

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full border py-3 rounded-2xl hover:bg-gray-100">
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showRequestModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[300]"
          onClick={() => setShowRequestModal(false)}>
          <div
            className="bg-white rounded-2xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-semibold mb-4">Запросить цену</h2>

            {requestProduct && (
              <div className="bg-gray-50 p-3 rounded-lg mb-4 text-sm">
                <p>
                  <b>Товар:</b> {requestProduct.name}
                </p>
                <p>
                  <b>Размер:</b> {requestProduct.size}
                </p>
                <p>
                  <b>Артикул:</b> {requestProduct.art}
                </p>
              </div>
            )}

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full border rounded-xl px-4 py-2"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-xl px-4 py-2"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                type="tel"
                placeholder="Телефон"
                className="w-full border rounded-xl px-4 py-2"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <button
                onClick={() => {
                  alert(
                    `Заявка отправлена!\n\nИмя: ${form.name}\nEmail: ${form.email}\nТелефон: ${form.phone}`,
                  );
                  setShowRequestModal(false);
                  setForm({ name: "", email: "", phone: "" });
                  setRequestProduct(null);
                }}
                className="w-full bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800">
                Отправить
              </button>

              <button
                onClick={() => {
                  setShowRequestModal(false);
                  setRequestProduct(null);
                }}
                className="w-full border py-2 rounded-xl hover:bg-gray-100">
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Cookie banner */}
      {showCookie && (
        <div className="fixed bottom-6 left-6 bg-white shadow-2xl rounded-3xl px-6 py-4 flex items-center max-w-xs z-[100] border">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-amber-100 rounded-2xl flex items-center justify-center mr-4">
              🍪
            </div>
            <p className="text-sm leading-tight">
              Мы используем cookie, чтобы улучшить работу сайта, повысить его
              эффективность и удобство
            </p>
          </div>
          <button
            onClick={() => setShowCookie(false)}
            className="ml-4 px-6 py-2 bg-blue-700 text-white text-sm font-medium rounded-2xl hover:bg-blue-800 whitespace-nowrap">
            ОК
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
