export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating:number;
  images:Array<string>;
  link:string;
}

export const products = [
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 478874,
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
    id: 2,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389980,
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
    id: 3,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 164990,
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
    id: 4,
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: 374699,
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
    id: 5,
    name: 'Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый',
    price: 239950,
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
    id: 6,
    name: 'Смартфон Apple iPhone 13 128Gb розовый',
    price: 377000,
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
    id: 7,
    name: 'Ноутбук HP 15s-eq1387ur 4Z3A4EA серебристый',
    price: 179900,
    description: 'диагональ экрана: 15.6 дюйм\n' +
    'процессор: AMD Athlon 3150U\n' +
    'видеокарта: AMD Radeon Graphics\n' +
    'размер оперативной памяти: 8 ГБ\n' +
    'тип жесткого диска: SSD  \n' +
    'общий объем накопителей: 256 ГБ\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/h8f/67253149204510/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7e/h84/67253149728798/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h0a/67253150253086/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227-3.jpg'],
    link: 'https://kaspi.kz/shop/p/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227/?c=353220100#!/item'
  },
  {
    id: 8,
    name: 'Ноутбук Apple MacBook Air 13 MGND3 золотистый',
    price: 490480,
    description: 'диагональ экрана: 13.3 дюйм\n' +
    'процессор: Apple M1\n' +
    'видеокарта: Apple M1 8 core\n' +
    'размер оперативной памяти: 8 ГБ\n' +
    'тип жесткого диска: SSD  \n' +
    'общий объем накопителей: 256 ГБ\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h54/33286638272542/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-1-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h5c/51914181050398/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-2-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h93/51914181279774/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-3-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=353220100#!/item'
  },
  {
    id: 9,
    name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
    price: 349930,
    description: 'диагональ экрана: 15.6 дюйм\n' +
    'процессор: AMD Ryzen 5 4600H\n' +
    'видеокарта: nVidia GeForce GTX1650\n' +
    'размер оперативной памяти: 8 ГБ\n' +
    'тип жесткого диска: SSD  \n' +
    'общий объем накопителей: 512 ГБ\n',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/h7a/62100003160094/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hed/h09/62100003618846/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-3.jpg'],
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=353220100#!/item'
  },
  {
    id: 10,
    name: 'Смартфон Apple iPhone 14 128Gb серебристый',
    price: 421580,
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
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/