export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  visible: boolean;
  liked: boolean;
  description: string;
  rating:number;
  images:Array<string>;
  link:string;
}

export const products = [
{
  id: 1,
  name: 'Смартфон Apple iPhone 13 128Gb белый',
  price: 374699,
  category: 'Mobile phone',
  visible: true,
  liked: false,
  description: 'технология NFC: Да\n' +
      'цвет: белый\n' +
      'тип экрана: OLED, Super Retina XDR\n' +
      'диагональ: 6.1 дюйм\n' +
      'размер оперативной памяти: 4 ГБ\n' +
      'процессор: 6-ядерный Apple A15 Bionic\n' +
      'объем встроенной памяти: 128 ГБ\n' +
      'емкость аккумулятора: 3095 мАч',
  rating: 5,
  images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/h49/46392664621086/apple-iphone-13-128gb-belyj-102298420-3-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h44/46392664817694/apple-iphone-13-128gb-belyj-102298420-4-Container.jpg'],
  link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
},
  {
    id: 2,
    name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: 128350,
    category: 'Mobile phone',
    visible: true,
    liked: false,
    description: 'технология NFC: Да\n' +
        'цвет: серый\n' +
        'тип экрана: цветной AMOLED, сенсорный\n' +
        'диагональ: 6.67 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 732G\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 5020 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/he1/64487159201822/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/hfc/64487160578078/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-3.jpg'],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 13 128Gb розовый',
    price: 377000,
	category: 'Mobile phone',
    visible: true,
    liked: false,
    description: 'технология NFC: Да\n' +
        'цвет: розовый\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h12/46392661344286/apple-iphone-13-128gb-rozovyj-102298145-3-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/hdd/46392661540894/apple-iphone-13-128gb-rozovyj-102298145-4-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 14 128Gb серебристый',
    price: 421580,
	category: 'Mobile phone',
    visible: true,
    liked: false,
    description: 'технология NFC: Да\n' +
        'цвет: серебристый\n' +
        'тип экрана: OLED, Super Retina XDR display\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3279 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h22/63072557236254/apple-iphone-14-128gb-belyj-106363144-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h3d/63072557465630/apple-iphone-14-128gb-belyj-106363144-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/h8b/63076103716894/apple-iphone-14-128gb-belyj-106363144-3.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-serebristyi-106363144/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 5,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ черный',
    price: 46360,
    category: 'Mobile phone',
    visible: true,
    liked: false,
    description: 'технология NFC: Нет\n' +
        'цвет: черный\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.5 дюйм\n' +
        'размер оперативной памяти: 2 ГБ\n' +
        'процессор: 8-ядерный Unisoc SC9863A\n' +
        'объем встроенной памяти: 32 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha4/hce/47719147929630/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h61/he7/51190896394270/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/hff/51190897442846/samsung-galaxy-a03-core-2-gb-32-gb-cernyj-103153817-3.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-chernyi-103153817/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 6,
    name: 'Фотокамера Canon EOS M50 Mark II kit EF-M 15-45mm f/3.5-6.3 IS STM черный',
    price: 339900,
    category: 'cameras',
    visible: true,
    liked: false,
    description: 'тип: беззеркальная со сменной оптикой\n' +
        'число эффективных пикселов: 24.1 Мпикс\n' +
        'объектив в комплекте: Да\n' +
        'диагональ ЖК-экрана: 3 дюйм\n' +
        'ручная настройка выдержки и диафрагмы: Да\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/h32/68844292374558/canon-eos-m50-mark-ii-kit-ef-m-15-45mm-f-3-5-6-3-is-stm-chernyi-102026887-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he4/h74/68844292571166/canon-eos-m50-mark-ii-kit-ef-m-15-45mm-f-3-5-6-3-is-stm-chernyi-102026887-2.jpg'],
    link: 'https://kaspi.kz/shop/p/canon-eos-m50-mark-ii-kit-ef-m-15-45mm-f-3-5-6-3-is-stm-chernyi-102026887/?c=195253200#!/item'
  },
  {
    id: 7,
    name: 'Фотокамера Canon EOS 2000D Kit EF-S 18-55 III',
    price: 192980,
    category: 'cameras',
    visible: true,
    liked: false,
    description: 'тип: зеркальный фотоаппарат (TTL)\n' +
        'число эффективных пикселов: 24.1 Мпикс\n' +
        'объектив в комплекте: Да\n' +
        'диагональ ЖК-экрана: 3 дюйм\n' +
        'ручная настройка выдержки и диафрагмы: Да\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf8/h2e/31740824649758/canon-eos-2000d-kit-ef-s-18-55-iii-black-2240125-1-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he1/h59/31740826157086/canon-eos-2000d-kit-ef-s-18-55-iii-black-2240125-2-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/canon-eos-2000d-kit-ef-s-18-55-iii-2240125/?c=195253200#!/item'
  },
  {
    id: 8,
    name: 'Фотокамера Canon EOS 250D EF-S 18-55 IS STM Kit',
    price: 284990,
    category: 'cameras',
    visible: true,
    liked: false,
    description: 'тип: зеркальный фотоаппарат (TTL)\n' +
        'число эффективных пикселов: 25.8 Мпикс\n' +
        'объектив в комплекте: Да\n' +
        'диагональ ЖК-экрана: 3 дюйм\n' +
        'ручная настройка выдержки и диафрагмы: Да\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h4b/32210465325086/canon-eos-250d-ef-s-18-55-is-stm-kit-black-2240118-1-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/hc5/32210466570270/canon-eos-250d-ef-s-18-55-is-stm-kit-black-2240118-2-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/canon-eos-250d-ef-s-18-55-is-stm-kit-2240118/?c=195253200#!/item'
  },
  {
    id: 9,
    name: 'Фотокамера Canon EOS 6D Mark II Body',
    price: 599000,
    category: 'cameras',
    visible: true,
    liked: false,
    description: 'тип: зеркальный фотоаппарат (TTL)\n' +
        'число эффективных пикселов: 26.2 Мпикс\n' +
        'объектив в комплекте: Нет\n' +
        'диагональ ЖК-экрана: 3 дюйм\n' +
        'ручная настройка выдержки и диафрагмы: Да\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/h01/31513258786846/canon-eos-6d-mark-ii-body-cernyj-2200982-1-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/hfd/31513261867038/canon-eos-6d-mark-ii-body-cernyj-2200982-2-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/canon-eos-6d-mark-ii-body-2200982/?c=195253200#!/item'
  },
  {
    id: 10,
    name: 'Фотокамера Sony Alpha A7 III черный',
    price: 887621,
    category: 'cameras',
    visible: true,
    liked: false,
    description: 'тип: беззеркальная со сменной оптикой\n' +
        'число эффективных пикселов: 25.3 Мпикс\n' +
        'объектив в комплекте: Нет\n' +
        'диагональ ЖК-экрана: 3 дюйм\n' +
        'ручная настройка выдержки и диафрагмы: Нет\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haa/h34/46256819339294/sony-alpha-a7-iii-chernyi-102454243-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h4f/46256819568670/sony-alpha-a7-iii-chernyi-102454243-2.jpg'],
    link: 'https://kaspi.kz/shop/p/sony-alpha-a7-iii-chernyi-102454243/?c=195253200#!/item'
  },
  {
    id: 11,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 478874,
    category: 'laptop',
    visible: true,
    liked: false,
    description: 'диагональ экрана: 13.3 дюйм\n' +
    'процессор: Apple M1\n' +
    'видеокарта: Apple M1 7 core\n' +
    'размер оперативной памяти: 8 ГБ\n' +
    'тип жесткого диска: SSD  \n' +
    'общий объем накопителей: 256 ГБ\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/hbb/52177862557726/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-2-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/h9f/50489392365598/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-3-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=353220100#!/item'
  },
  {
    id: 12,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389980,
    category: 'laptop',
    visible: true,
    liked: false,
    description: 'диагональ экрана: 15.6 дюйм\n' +
    'процессор: Intel Core i5 11400H\n' +
    'видеокарта: NVIDIA GeForce GTX 1650\n' +
    'размер оперативной памяти: 16 ГБ\n' +
    'тип жесткого диска: SSD  \n' +
    'общий объем накопителей: 512 ГБ\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/he7/67236399448094/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd0/h65/67236399710238/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-3.jpg'],
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=353220100#!/item'
  },
  {
    id: 13,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 164990,
    category: 'laptop',
    visible: true,
    liked: false,
    description: 'диагональ экрана: 15.6 дюйм\n' +
    'процессор: Intel Pentium Gold 7505\n' +
    'видеокарта: Intel UHD Graphics\n' +
    'размер оперативной памяти: 8 ГБ\n' +
    'тип жесткого диска: SSD  \n' +
    'общий объем накопителей: 256 ГБ\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h6f/66993674715166/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h06/66993675239454/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-3.jpg'],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=353220100#!/item'
  },
  {
    id: 14,
    name: 'Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый',
    price: 239950,
    category: 'laptop',
    visible: true,
    liked: false,
    description: 'диагональ экрана: 15.6 дюйм\n' +
    'процессор: Intel Core i3 1115G4\n' +
    'видеокарта: Intel UHD Graphics\n' +
    'размер оперативной памяти: 8 ГБ\n' +
    'тип жесткого диска: SSD  \n' +
    'общий объем накопителей: 512 ГБ\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h30/hd7/65953422344222/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h73/h82/65953422868510/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-3.jpg'],
    link: 'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=353220100#!/item'
  },
  {
    id: 15,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 169990,
    category: 'laptop',
    visible: true,
    liked: false,
    description: 'диагональ экрана: 15.6 дюйм\n' +
        'процессор: Intel Pentium Gold 7505\n' +
        'видеокарта: Intel UHD Graphics\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256 ГБ',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h6f/66993674715166/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h6f/66993676288030/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-5.jpg'],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAgOefBhDgARIsAMhqXA5uaRWlKXhafWV-sjIw1ErriOZU61hBwJfeIgUa_GWZLskhpxlKEzgaAgrVEALw_wcB#!/item'
  },
  {
    id: 16,
    name: 'Экшн-камера GoPro HERO 11',
    price: 246980,
    category: 'action camera',
    visible: true,
    liked: false,
    description: 'максимальное разрешение видео: 5312x2988\n' +
        'максимальное разрешение фото: 2704x2028\n' +
        'угол обзора, градусов: 155\n' +
        'тип матрицы: CMOS\n' +
        'модель: HERO 11\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/h17/62711822549022/ekshn-kamera-gopro-hero-11-106585231-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/h46/62711822778398/ekshn-kamera-gopro-hero-11-106585231-2.jpg'],
    link: 'https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero-11-106585231/?c=195253200#!/item'
  },
  {
    id: 17,
    name: 'Экшн-камера SJCAM SJ4000',
    price: 24290,
    category: 'action camera',
    visible: true,
    liked: false,
    description: 'максимальное разрешение видео: 1920x1080 Full HD\n' +
        '  максимальное разрешение фото: 4032x3024\n' +
        'число кадров при максимальном разрешении: 30 кадров/сек\n' +
        'угол обзора, градусов: 170\n' +
        'тип матрицы: CMOS\n'+
        'модель: SJ4000\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfe/h0c/61665001275422/sjcam-sj4000-cernyj-2300161-1-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h30/hc5/61665001635870/sjcam-sj4000-cernyj-2300161-2-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/ekshn-kamera-sjcam-sj4000-2300161/?c=195253200#!/item'
  },
  {
    id: 18,
    name: 'Экшн-камера Insta360 X3 360°',
    price: 288900,
    category: 'action camera',
    visible: true,
    liked: false,
    description: 'максимальное разрешение видео: 5760x2880\n' +
        '   максимальное разрешение фото: 9216x6912\n' +
        'число кадров при максимальном разрешении: 24 кадра/сек\n' +
        'угол обзора, градусов: 360\n' +
        'тип матрицы: CMOS\n'+
        'модель: X3 360°\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haa/h53/62944244891678/eksn-kamera-insta360-x3-360-106715062-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h39/hf7/62944245350430/eksn-kamera-insta360-x3-360-106715062-2.jpg'],
    link: 'https://kaspi.kz/shop/p/ekshn-kamera-insta360-x3-360--106715062/?c=195253200#!/item'
  },
  {
    id: 19,
    name: 'Экшн-камера GoPro Hero10',
    price: 197980,
    category: 'action camera',
    visible: true,
    liked: false,
    description: 'максимальное разрешение видео: 5120x2160\n' +
        'максимальное разрешение фото: 5120x2160\n' +
        'число кадров при максимальном разрешении: 60 кадров/сек\n' +
        'угол обзора, градусов: 180\n' +
        'тип матрицы: CMOS\n'+
        'модель: Hero10\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/heb/61664759545886/gopro-hero10-cernyj-102385071-1-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6a/h4b/61664759775262/gopro-hero10-cernyj-102385071-2-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero10-102385071/?c=195253200#!/item'
  },
  {
    id: 20,
    name: 'Экшн-камера AUSEK H12R',
    price: 28000,
    category: 'action camera',
    visible: true,
    liked: false,
    description: 'максимальное разрешение видео: 3840x2160\n' +
        'максимальное разрешение фото: 3840x2160\n' +
        'число кадров при максимальном разрешении: 60 кадров/сек\n' +
        'угол обзора, градусов: 170\n' +
        'тип матрицы: CMOS\n'+
        'модель: H12R\n',
    rating: 0,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/hd7/63091954810910/eksn-kamera-ausek-h12r-106795835-1.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h37/63091958022174/eksn-kamera-ausek-h12r-106795835-2.jpg'],
    link: 'https://kaspi.kz/shop/p/ekshn-kamera-ausek-h12r-106795835/?c=195253200#!/item'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/