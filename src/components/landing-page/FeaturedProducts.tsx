"use client";
import React, { useState } from "react";
import FeaturedProductsCard from "../FeaturedProductsCard";
import Link from "next/link";
import graphiccard from "@/app/images/graphiccard.png";
import { StaticImageData } from "next/image";

interface Product {
  title: string;
  price: string;
  oldPrice: string;
  rating: number;
  reviews: number;
  image: StaticImageData;
  isSale: boolean;
  isNew?: boolean;
  discount: string;
  category: string;
}

interface ProductCategories {
  all: Product[];
  audio: Product[];
  computer: Product[];
  displays: Product[];
  elektro: Product[];
}

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "Alle" },
    { id: "audio", label: "Audio, Video & Hifi" },
    { id: "computer", label: "Computer & Hardware" },
    { id: "displays", label: "Displays & Projektoren" },
    { id: "elektro", label: "Elektro & Installation" },
  ];

  const allProducts: ProductCategories = {
    all: [
      {
        title: "14 - AMD Ryzen 9 3 GHz - Win 11",
        price: "2.644",
        oldPrice: "2.694",
        rating: 5,
        reviews: 5,
        image: graphiccard,
        isSale: true,
        isNew: false,
        discount: "€99",
        category: "computer",
      },
      {
        title: "ZOTAC GAMING GeForce RTX 3050 AMP - Grafikkarten",
        price: "319,80",
        oldPrice: "334,80",
        rating: 5,
        reviews: 5,
        image: graphiccard,
        isSale: false,
        isNew: true,
        discount: "€99",
        category: "computer",
      },
      {
        title: "SanDisk Extreme - Flash-Speicherkarte (microSDXC)",
        price: "31,40",
        oldPrice: "31,40",
        rating: 5,
        reviews: 5,
        image: graphiccard,
        isSale: true,
        discount: "€99",
        category: "computer",
      },
      {
        title: "Razer Blade 14 - AMD Ryzen 9 6900HX / 3.3 GHz - Win 11",
        price: "2.644",
        oldPrice: "2.694",
        rating: 5,
        reviews: 5,
        image: graphiccard,
        isSale: false,
        isNew: true,
        discount: "€99",
        category: "computer",
      },
      {
        title: "Canon CLI-551 C/M/Y/BK Multipack - 4er-Pack - Schwarz",
        price: "52,44",
        oldPrice: "64,44",
        rating: 5,
        reviews: 5,
        image: graphiccard,
        isSale: true,
        discount: "€99",
        category: "elektro",
      },
    ],
    audio: [
      {
        title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
        price: "299,99",
        oldPrice: "349,99",
        rating: 5,
        reviews: 5,
        image: graphiccard,
        isSale: true,
        discount: "€50",
        category: "audio",
      },
      {
        title: "Galaxy S22 Ultra",
        price: "52,44",
        oldPrice: "64,44",
        rating: 5,
        reviews: 5,
        image: graphiccard,
        isSale: true,
        discount: "€99",
        category: "audio",
      },
    ],
    computer: [
      {
        title: "14 - AMD Ryzen 9 3 GHz - Win 11",
        price: "2.644",
        oldPrice: "2.694",
        rating: 5,
        reviews: 5,
        image: graphiccard,
        isSale: true,
        isNew: false,
        discount: "€99",
        category: "computer",
      },
      {
        title: "ZOTAC GAMING GeForce RTX 3050 AMP - Grafikkarten",
        price: "319,80",
        oldPrice: "334,80",
        rating: 5,
        reviews: 5,
        image: graphiccard,
        isSale: false,
        isNew: true,
        discount: "€99",
        category: "computer",
      },
    ],
    displays: [
      {
        title: "LG 27GP850-B 27 Inch Gaming Monitor",
        price: "449,99",
        oldPrice: "499,99",
        rating: 5,
        reviews: 5,
        image: graphiccard,
        isSale: true,
        discount: "€50",
        category: "displays",
      },
    ],
    elektro: [
      {
        title: "Canon CLI-551 C/M/Y/BK Multipack - 4er-Pack - Schwarz",
        price: "52,44",
        oldPrice: "64,44",
        rating: 5,
        reviews: 5,
        image: graphiccard,
        isSale: true,
        discount: "€99",
        category: "elektro",
      },
    ],
  };

  const displayProducts =
    allProducts[activeTab as keyof ProductCategories] || allProducts.all;

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container max-w-[1920px] mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:px-8 justify-between gap-6 mb-8 lg:mb-10">
          <h3 className="text-2xl md:text-3xl lg:text-[48px] font-extrabold flex flex-wrap items-center gap-2">
            {/* <Star className="text-orange-500 w-6 h-6 fill-orange-500" /> */}
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0362 6.46194L20.0537 10.5469C20.3097 11.0645 20.8022 11.4207 21.3727 11.5042L25.8806 12.1581C27.3165 12.3668 27.8897 14.1311 26.8518 15.144L23.5877 18.3246C23.1758 18.7281 22.9866 19.3069 23.084 19.8746L23.8548 24.3658C24.0997 25.7961 22.5998 26.887 21.3142 26.2108L17.2821 24.0903C16.7729 23.8232 16.1634 23.8232 15.6542 24.0903L11.6221 26.2108C10.3365 26.887 8.8366 25.7961 9.08148 24.3658L9.85229 19.8746C9.94969 19.3069 9.76047 18.7281 9.34863 18.3246L6.08452 15.144C5.04657 14.1311 5.6198 12.3668 7.05568 12.1581L11.5664 11.5042C12.1369 11.4207 12.6294 11.0645 12.8854 10.5469L14.9029 6.46194C15.5401 5.16242 17.3962 5.16242 18.0362 6.46194Z"
                fill="#F37835"
              />
              <path
                d="M18.9391 1.75886C18.9391 2.13731 18.633 2.44619 18.2518 2.44619C17.8733 2.44619 17.5645 2.14009 17.5645 1.75886C17.5645 1.37763 17.8733 1.07153 18.2518 1.07153C18.633 1.07153 18.9391 1.38041 18.9391 1.75886Z"
                fill="#F37835"
              />
              <path
                d="M16.6442 0.687326C16.6442 1.06577 16.3381 1.37465 15.9569 1.37465C15.5784 1.37465 15.2695 1.06577 15.2695 0.687326C15.2695 0.308879 15.5784 0 15.9569 0C16.3381 0 16.6442 0.306097 16.6442 0.687326Z"
                fill="#F37835"
              />
              <path
                d="M14.6247 2.3592C14.6247 2.73765 14.3158 3.04653 13.9373 3.04653C13.5589 3.04653 13.25 2.74043 13.25 2.3592C13.25 1.98075 13.5589 1.67188 13.9373 1.67188C14.3158 1.67188 14.6247 1.98075 14.6247 2.3592Z"
                fill="#F37835"
              />
              <path
                d="M13.4274 4.78401C13.4274 5.16245 13.1213 5.47133 12.7401 5.47133C12.3616 5.47133 12.0527 5.16524 12.0527 4.78401C12.0527 4.40556 12.3616 4.09668 12.7401 4.09668C13.1213 4.09668 13.4274 4.40278 13.4274 4.78401Z"
                fill="#F37835"
              />
              <path
                d="M12.2321 7.20393C12.2321 7.58238 11.9232 7.89125 11.5447 7.89125C11.1663 7.89125 10.8574 7.58238 10.8574 7.20393C10.8574 6.82548 11.1635 6.5166 11.5447 6.5166C11.9232 6.5166 12.2321 6.82548 12.2321 7.20393Z"
                fill="#F37835"
              />
              <path
                d="M10.2575 8.97248C10.2575 9.35093 9.95137 9.65981 9.57014 9.65981C9.18891 9.65981 8.88281 9.35371 8.88281 8.97248C8.88281 8.59404 9.19169 8.28516 9.57014 8.28516C9.94859 8.28516 10.2575 8.59404 10.2575 8.97248Z"
                fill="#F37835"
              />
              <path
                d="M7.63051 9.47248C7.63051 9.85093 7.32163 10.1598 6.94319 10.1598C6.56474 10.1598 6.25586 9.85371 6.25586 9.47248C6.25586 9.09125 6.56474 8.78516 6.94319 8.78516C7.32163 8.78516 7.63051 9.09404 7.63051 9.47248Z"
                fill="#F37835"
              />
              <path
                d="M4.95472 9.86213C4.95472 10.2406 4.64585 10.5495 4.26741 10.5495C3.88896 10.5495 3.58008 10.2434 3.58008 9.86213C3.58008 9.4809 3.88896 9.1748 4.26741 9.1748C4.64863 9.1748 4.95472 9.4809 4.95472 9.86213Z"
                fill="#F37835"
              />
              <path
                d="M2.42934 10.6744C2.42934 11.0528 2.12324 11.3617 1.74201 11.3617C1.36357 11.3617 1.05469 11.0528 1.05469 10.6744C1.05469 10.2959 1.36357 9.98706 1.74201 9.98706C2.12046 9.98706 2.42934 10.2932 2.42934 10.6744Z"
                fill="#F37835"
              />
              <path
                d="M1.37465 12.9234C1.37465 13.3019 1.06577 13.6107 0.687327 13.6107C0.30888 13.6107 0 13.3019 0 12.9234C0 12.545 0.30888 12.2361 0.687327 12.2361C1.06856 12.2361 1.37465 12.545 1.37465 12.9234Z"
                fill="#F37835"
              />
              <path
                d="M2.80239 15.1622C2.80239 15.5406 2.49351 15.8495 2.11506 15.8495C1.73661 15.8495 1.42773 15.5406 1.42773 15.1622C1.42773 14.7837 1.73661 14.4749 2.11506 14.4749C2.49629 14.4749 2.80239 14.7837 2.80239 15.1622Z"
                fill="#F37835"
              />
              <path
                d="M4.73793 17.0494C4.73793 17.4278 4.42905 17.7367 4.0506 17.7367C3.67215 17.7367 3.36328 17.4278 3.36328 17.0494C3.36328 16.6709 3.67215 16.3621 4.0506 16.3621C4.42905 16.3621 4.73793 16.6709 4.73793 17.0494Z"
                fill="#F37835"
              />
              <path
                d="M6.67153 18.9373C6.67153 19.3158 6.36265 19.6247 5.9842 19.6247C5.60575 19.6247 5.29688 19.3186 5.29688 18.9373C5.29688 18.5589 5.60297 18.25 5.9842 18.25C6.36265 18.25 6.67153 18.5561 6.67153 18.9373Z"
                fill="#F37835"
              />
              <path
                d="M7.53286 21.4569C7.53286 21.8353 7.22398 22.1442 6.84553 22.1442C6.46708 22.1442 6.1582 21.8353 6.1582 21.4569C6.1582 21.0784 6.4643 20.7695 6.84553 20.7695C7.22398 20.7695 7.53286 21.0784 7.53286 21.4569Z"
                fill="#F37835"
              />
              <path
                d="M7.07387 24.1199C7.07387 24.4984 6.76499 24.8073 6.38655 24.8073C6.0081 24.8073 5.69922 24.5012 5.69922 24.1199C5.69922 23.7415 6.0081 23.4326 6.38655 23.4326C6.76778 23.4326 7.07387 23.7415 7.07387 24.1199Z"
                fill="#F37835"
              />
              <path
                d="M6.61683 26.785C6.61683 27.1634 6.31074 27.4723 5.92951 27.4723C5.55106 27.4723 5.24219 27.1662 5.24219 26.785C5.24219 26.4065 5.54828 26.0977 5.92951 26.0977C6.31074 26.0977 6.61683 26.4038 6.61683 26.785Z"
                fill="#F37835"
              />
              <path
                d="M6.74965 29.4364C6.74965 29.8148 6.44077 30.1237 6.06233 30.1237C5.68388 30.1237 5.375 29.8148 5.375 29.4364C5.375 29.0579 5.68388 28.749 6.06233 28.749C6.44077 28.749 6.74965 29.0551 6.74965 29.4364Z"
                fill="#F37835"
              />
              <path
                d="M8.86098 30.7235C8.86098 31.1019 8.55488 31.4108 8.17366 31.4108C7.79243 31.4108 7.48633 31.1019 7.48633 30.7235C7.48633 30.345 7.79243 30.0361 8.17366 30.0361C8.55488 30.0361 8.86098 30.345 8.86098 30.7235Z"
                fill="#F37835"
              />
              <path
                d="M11.3942 29.9246C11.3942 30.3031 11.0853 30.612 10.7069 30.612C10.3284 30.612 10.0195 30.3031 10.0195 29.9246C10.0195 29.5462 10.3284 29.2373 10.7069 29.2373C11.0853 29.2373 11.3942 29.5434 11.3942 29.9246Z"
                fill="#F37835"
              />
              <path
                d="M13.7828 28.6671C13.7828 29.0455 13.4768 29.3544 13.0955 29.3544C12.7143 29.3544 12.4082 29.0483 12.4082 28.6671C12.4082 28.2886 12.7171 27.9797 13.0955 27.9797C13.474 27.9797 13.7828 28.2886 13.7828 28.6671Z"
                fill="#F37835"
              />
              <path
                d="M16.1911 27.491C16.1911 27.8695 15.8822 28.1784 15.5037 28.1784C15.1253 28.1784 14.8164 27.8695 14.8164 27.491C14.8164 27.1126 15.1225 26.8037 15.5037 26.8037C15.885 26.8037 16.1911 27.1126 16.1911 27.491Z"
                fill="#F37835"
              />
              <path
                d="M18.8375 27.7205C18.8375 28.099 18.5287 28.4079 18.1502 28.4079C17.7718 28.4079 17.4629 28.099 17.4629 27.7205C17.4629 27.3421 17.7718 27.0332 18.1502 27.0332C18.5287 27.0332 18.8375 27.3421 18.8375 27.7205Z"
                fill="#F37835"
              />
              <path
                d="M21.2282 28.9793C21.2282 29.3578 20.9221 29.6666 20.5408 29.6666C20.1624 29.6666 19.8535 29.3578 19.8535 28.9793C19.8535 28.6009 20.1596 28.292 20.5408 28.292C20.9221 28.292 21.2282 28.6009 21.2282 28.9793Z"
                fill="#F37835"
              />
              <path
                d="M23.6207 30.2381C23.6207 30.6166 23.3119 30.9254 22.9334 30.9254C22.555 30.9254 22.2461 30.6166 22.2461 30.2381C22.2461 29.8597 22.5522 29.5508 22.9334 29.5508C23.3147 29.5508 23.6207 29.8569 23.6207 30.2381Z"
                fill="#F37835"
              />
              <path
                d="M26.2125 30.7498C26.2125 31.1283 25.9037 31.4372 25.5252 31.4372C25.1468 31.4372 24.8379 31.1283 24.8379 30.7498C24.8379 30.3714 25.144 30.0625 25.5252 30.0625C25.9064 30.0625 26.2125 30.3714 26.2125 30.7498Z"
                fill="#F37835"
              />
              <path
                d="M27.8082 28.7791C27.8082 29.1576 27.5022 29.4664 27.1209 29.4664C26.7425 29.4664 26.4336 29.1576 26.4336 28.7791C26.4336 28.4007 26.7425 28.0918 27.1209 28.0918C27.4994 28.0918 27.8082 28.4007 27.8082 28.7791Z"
                fill="#F37835"
              />
              <path
                d="M27.6872 26.1248C27.6872 26.5033 27.3811 26.8122 26.9998 26.8122C26.6214 26.8122 26.3125 26.5061 26.3125 26.1248C26.3125 25.7464 26.6186 25.4375 26.9998 25.4375C27.3811 25.4375 27.6872 25.7436 27.6872 26.1248Z"
                fill="#F37835"
              />
              <path
                d="M27.2321 23.4617C27.2321 23.8402 26.9232 24.1491 26.5447 24.1491C26.1663 24.1491 25.8574 23.843 25.8574 23.4617C25.8574 23.0833 26.1663 22.7744 26.5447 22.7744C26.9232 22.7744 27.2321 23.0805 27.2321 23.4617Z"
                fill="#F37835"
              />
              <path
                d="M27.0368 20.8179C27.0368 21.1964 26.7279 21.5053 26.3494 21.5053C25.971 21.5053 25.6621 21.1964 25.6621 20.8179C25.6621 20.4395 25.9682 20.1306 26.3494 20.1306C26.7307 20.1306 27.0368 20.4367 27.0368 20.8179Z"
                fill="#F37835"
              />
              <path
                d="M28.2282 18.4696C28.2282 18.848 27.9193 19.1569 27.5408 19.1569C27.1624 19.1569 26.8535 18.848 26.8535 18.4696C26.8535 18.0911 27.1596 17.7822 27.5408 17.7822C27.9193 17.7822 28.2282 18.0883 28.2282 18.4696Z"
                fill="#F37835"
              />
              <path
                d="M29.4725 17.2692C29.8521 17.2692 30.1598 16.9615 30.1598 16.5819C30.1598 16.2023 29.8521 15.8945 29.4725 15.8945C29.0929 15.8945 28.7852 16.2023 28.7852 16.5819C28.7852 16.9615 29.0929 17.2692 29.4725 17.2692Z"
                fill="#F37835"
              />
              <path
                d="M32.0954 14.6959C32.0954 15.0743 31.7893 15.3832 31.408 15.3832C31.0296 15.3832 30.7207 15.0771 30.7207 14.6959C30.7207 14.3174 31.0296 14.0085 31.408 14.0085C31.7893 14.0113 32.0954 14.3174 32.0954 14.6959Z"
                fill="#F37835"
              />
              <path
                d="M32.9997 12.2967C32.9997 12.6751 32.6908 12.984 32.3123 12.984C31.9339 12.984 31.625 12.6779 31.625 12.2967C31.625 11.9183 31.9311 11.6094 32.3123 11.6094C32.6936 11.6094 32.9997 11.9155 32.9997 12.2967Z"
                fill="#F37835"
              />
              <path
                d="M31.4079 10.3416C31.4079 10.7201 31.099 11.0289 30.7205 11.0289C30.3421 11.0289 30.0332 10.7229 30.0332 10.3416C30.0332 9.96039 30.3393 9.6543 30.7205 9.6543C31.1018 9.6543 31.4079 9.96318 31.4079 10.3416Z"
                fill="#F37835"
              />
              <path
                d="M28.8004 9.76447C28.8004 10.1429 28.4916 10.4518 28.1131 10.4518C27.7347 10.4518 27.4258 10.1457 27.4258 9.76447C27.4258 9.38603 27.7319 9.07715 28.1131 9.07715C28.4916 9.07715 28.8004 9.38603 28.8004 9.76447Z"
                fill="#F37835"
              />
              <path
                d="M26.1286 9.3758C26.1286 9.75425 25.8197 10.0631 25.4412 10.0631C25.0628 10.0631 24.7539 9.75425 24.7539 9.3758C24.7539 8.99736 25.06 8.68848 25.4412 8.68848C25.8225 8.69126 26.1286 8.99736 26.1286 9.3758Z"
                fill="#F37835"
              />
              <path
                d="M23.6207 8.57893C23.6207 8.95738 23.3147 9.26625 22.9334 9.26625C22.555 9.26625 22.2461 8.96016 22.2461 8.57893C22.2461 8.20048 22.555 7.8916 22.9334 7.8916C23.3147 7.8916 23.6207 8.1977 23.6207 8.57893Z"
                fill="#F37835"
              />
              <path
                d="M21.8922 6.60237C21.8922 6.98081 21.5861 7.28969 21.2049 7.28969C20.8265 7.28969 20.5176 6.98081 20.5176 6.60237C20.5176 6.22392 20.8237 5.91504 21.2049 5.91504C21.5861 5.91782 21.8922 6.22392 21.8922 6.60237Z"
                fill="#F37835"
              />
              <path
                d="M20.6559 3.90119C20.6559 4.27964 20.3498 4.58852 19.9686 4.58852C19.5901 4.58852 19.2812 4.28242 19.2812 3.90119C19.2812 3.52275 19.5901 3.21387 19.9686 3.21387C20.3498 3.21387 20.6559 3.52275 20.6559 3.90119Z"
                fill="#F37835"
              />
              <path
                d="M17.4722 9.85327C17.4722 10.0202 17.3386 10.1538 17.1716 10.1538C17.0047 10.1538 16.8711 10.0202 16.8711 9.85327C16.8711 9.6863 17.0047 9.55273 17.1716 9.55273C17.3386 9.55552 17.4722 9.68909 17.4722 9.85327Z"
                fill="white"
              />
              <path
                d="M16.4683 9.38647C16.4683 9.55343 16.3347 9.687 16.1677 9.687C16.0008 9.687 15.8672 9.55343 15.8672 9.38647C15.8672 9.21951 16.0008 9.08594 16.1677 9.08594C16.3347 9.08594 16.4683 9.21951 16.4683 9.38647Z"
                fill="white"
              />
              <path
                d="M15.5854 10.1179C15.5854 10.2849 15.4519 10.4184 15.2849 10.4184C15.1179 10.4184 14.9844 10.2849 14.9844 10.1179C14.9844 9.95095 15.1179 9.81738 15.2849 9.81738C15.4519 9.81738 15.5854 9.95095 15.5854 10.1179Z"
                fill="white"
              />
              <path
                d="M15.064 11.1755C15.064 11.3425 14.9304 11.4761 14.7634 11.4761C14.5965 11.4761 14.4629 11.3425 14.4629 11.1755C14.4629 11.0086 14.5965 10.875 14.7634 10.875C14.9304 10.875 15.064 11.0086 15.064 11.1755Z"
                fill="white"
              />
              <path
                d="M14.2439 12.5337C14.4099 12.5337 14.5444 12.3991 14.5444 12.2331C14.5444 12.0672 14.4099 11.9326 14.2439 11.9326C14.0779 11.9326 13.9434 12.0672 13.9434 12.2331C13.9434 12.3991 14.0779 12.5337 14.2439 12.5337Z"
                fill="white"
              />
              <path
                d="M13.6792 13.0046C13.6792 13.1716 13.5456 13.3052 13.3787 13.3052C13.2117 13.3052 13.0781 13.1716 13.0781 13.0046C13.0781 12.8377 13.2117 12.7041 13.3787 12.7041C13.5456 12.7041 13.6792 12.8405 13.6792 13.0046Z"
                fill="white"
              />
              <path
                d="M12.5308 13.2244C12.5308 13.3913 12.3972 13.5249 12.2302 13.5249C12.0633 13.5249 11.9297 13.3913 11.9297 13.2244C11.9297 13.0574 12.0633 12.9238 12.2302 12.9238C12.3972 12.9238 12.5308 13.0602 12.5308 13.2244Z"
                fill="white"
              />
              <path
                d="M11.0642 13.6938C11.2302 13.6938 11.3647 13.5593 11.3647 13.3933C11.3647 13.2273 11.2302 13.0928 11.0642 13.0928C10.8982 13.0928 10.7637 13.2273 10.7637 13.3933C10.7637 13.5593 10.8982 13.6938 11.0642 13.6938Z"
                fill="white"
              />
              <path
                d="M10.2612 13.7497C10.2612 13.9167 10.1277 14.0503 9.96069 14.0503C9.79651 14.0503 9.66016 13.9167 9.66016 13.7497C9.66016 13.5828 9.79373 13.4492 9.96069 13.4492C10.1249 13.4492 10.2612 13.5828 10.2612 13.7497Z"
                fill="white"
              />
              <path
                d="M9.79833 14.7331C9.79833 14.9001 9.66476 15.0337 9.4978 15.0337C9.33084 15.0337 9.19727 14.9001 9.19727 14.7331C9.19727 14.5662 9.33084 14.4326 9.4978 14.4326C9.66476 14.4326 9.79833 14.5662 9.79833 14.7331Z"
                fill="white"
              />
              <path
                d="M10.4233 15.7117C10.4233 15.8786 10.2898 16.0122 10.1228 16.0122C9.95861 16.0122 9.82227 15.8786 9.82227 15.7117C9.82227 15.5447 9.95583 15.4111 10.1228 15.4111C10.2898 15.4111 10.4233 15.5447 10.4233 15.7117Z"
                fill="white"
              />
              <path
                d="M11.269 16.5359C11.269 16.7028 11.1355 16.8364 10.9685 16.8364C10.8043 16.8364 10.668 16.7028 10.668 16.5359C10.668 16.3689 10.8015 16.2354 10.9685 16.2354C11.1355 16.2354 11.269 16.3689 11.269 16.5359Z"
                fill="white"
              />
              <path
                d="M12.1147 17.3591C12.1147 17.5261 11.9812 17.6597 11.8142 17.6597C11.65 17.6597 11.5137 17.5261 11.5137 17.3591C11.5137 17.1922 11.6472 17.0586 11.8142 17.0586C11.9784 17.0586 12.1147 17.1922 12.1147 17.3591Z"
                fill="white"
              />
              <path
                d="M12.4878 18.4607C12.4878 18.6277 12.3542 18.7612 12.1872 18.7612C12.0203 18.7612 11.8867 18.6277 11.8867 18.4607C11.8867 18.2937 12.0203 18.1602 12.1872 18.1602C12.3514 18.1602 12.4878 18.2937 12.4878 18.4607Z"
                fill="white"
              />
              <path
                d="M12.2905 19.6238C12.2905 19.7907 12.157 19.9243 11.99 19.9243C11.8258 19.9243 11.6895 19.7907 11.6895 19.6238C11.6895 19.4568 11.823 19.3232 11.99 19.3232C12.157 19.3232 12.2905 19.4568 12.2905 19.6238Z"
                fill="white"
              />
              <path
                d="M12.0893 20.7869C12.0893 20.9538 11.9558 21.0874 11.7888 21.0874C11.6246 21.0874 11.4883 20.9538 11.4883 20.7869C11.4883 20.6199 11.6219 20.4863 11.7888 20.4863C11.9558 20.4863 12.0893 20.6199 12.0893 20.7869Z"
                fill="white"
              />
              <path
                d="M12.1479 21.9441C12.1479 22.111 12.0144 22.2446 11.8474 22.2446C11.6832 22.2446 11.5469 22.111 11.5469 21.9441C11.5469 21.7771 11.6804 21.6436 11.8474 21.6436C12.0144 21.6436 12.1479 21.7799 12.1479 21.9441Z"
                fill="white"
              />
              <path
                d="M13.0698 22.5076C13.0698 22.6745 12.9362 22.8081 12.7693 22.8081C12.6023 22.8081 12.4688 22.6745 12.4688 22.5076C12.4688 22.3406 12.6023 22.207 12.7693 22.207C12.9362 22.2098 13.0698 22.3434 13.0698 22.5076Z"
                fill="white"
              />
              <path
                d="M14.1753 22.1599C14.1753 22.3269 14.0417 22.4604 13.8748 22.4604C13.7078 22.4604 13.5742 22.3269 13.5742 22.1599C13.5742 21.9929 13.7078 21.8594 13.8748 21.8594C14.0389 21.8594 14.1753 21.9929 14.1753 22.1599Z"
                fill="white"
              />
              <path
                d="M15.2202 21.6101C15.2202 21.7771 15.0866 21.9106 14.9197 21.9106C14.7527 21.9106 14.6191 21.7771 14.6191 21.6101C14.6191 21.4431 14.7527 21.3096 14.9197 21.3096C15.0866 21.3096 15.2202 21.4431 15.2202 21.6101Z"
                fill="white"
              />
              <path
                d="M16.2729 21.0964C16.2729 21.2634 16.1394 21.397 15.9724 21.397C15.8054 21.397 15.6719 21.2634 15.6719 21.0964C15.6719 20.9295 15.8054 20.7959 15.9724 20.7959C16.1366 20.7959 16.2729 20.9295 16.2729 21.0964Z"
                fill="white"
              />
              <path
                d="M17.4292 21.196C17.4292 21.363 17.2956 21.4966 17.1287 21.4966C16.9617 21.4966 16.8281 21.363 16.8281 21.196C16.8281 21.0291 16.9617 20.8955 17.1287 20.8955C17.2956 20.8955 17.4292 21.0319 17.4292 21.196Z"
                fill="white"
              />
              <path
                d="M18.4722 21.7476C18.4722 21.9145 18.3386 22.0481 18.1716 22.0481C18.0047 22.0481 17.8711 21.9145 17.8711 21.7476C17.8711 21.5806 18.0047 21.447 18.1716 21.447C18.3386 21.447 18.4722 21.5806 18.4722 21.7476Z"
                fill="white"
              />
              <path
                d="M19.5151 22.2947C19.5151 22.4616 19.3816 22.5952 19.2146 22.5952C19.0476 22.5952 18.9141 22.4616 18.9141 22.2947C18.9141 22.1277 19.0476 21.9941 19.2146 21.9941C19.3816 21.9941 19.5151 22.1277 19.5151 22.2947Z"
                fill="white"
              />
              <path
                d="M20.6479 22.5212C20.6479 22.6882 20.5144 22.8218 20.3474 22.8218C20.1832 22.8218 20.0469 22.6882 20.0469 22.5212C20.0469 22.3543 20.1804 22.2207 20.3474 22.2207C20.5144 22.2207 20.6479 22.3543 20.6479 22.5212Z"
                fill="white"
              />
              <path
                d="M21.3472 21.657C21.3472 21.8239 21.2136 21.9575 21.0466 21.9575C20.8825 21.9575 20.7461 21.8239 20.7461 21.657C20.7461 21.49 20.8797 21.3564 21.0466 21.3564C21.2108 21.3564 21.3472 21.4928 21.3472 21.657Z"
                fill="white"
              />
              <path
                d="M21.2944 20.4978C21.2944 20.6648 21.1608 20.7983 20.9939 20.7983C20.8297 20.7983 20.6934 20.6648 20.6934 20.4978C20.6934 20.3308 20.8269 20.1973 20.9939 20.1973C21.1608 20.1973 21.2944 20.3336 21.2944 20.4978Z"
                fill="white"
              />
              <path
                d="M21.0932 19.3347C21.0932 19.5017 20.9597 19.6352 20.7927 19.6352C20.6258 19.6352 20.4922 19.5017 20.4922 19.3347C20.4922 19.1677 20.6258 19.0342 20.7927 19.0342C20.9597 19.0342 21.0932 19.1705 21.0932 19.3347Z"
                fill="white"
              />
              <path
                d="M21.0112 18.1794C21.0112 18.3464 20.8777 18.48 20.7107 18.48C20.5465 18.48 20.4102 18.3464 20.4102 18.1794C20.4102 18.0125 20.5437 17.8789 20.7107 17.8789C20.8777 17.8789 21.0112 18.0153 21.0112 18.1794Z"
                fill="white"
              />
              <path
                d="M21.5308 17.1528C21.5308 17.3198 21.3972 17.4534 21.2302 17.4534C21.0633 17.4534 20.9297 17.3198 20.9297 17.1528C20.9297 16.9859 21.0633 16.8523 21.2302 16.8523C21.3972 16.8523 21.5308 16.9886 21.5308 17.1528Z"
                fill="white"
              />
              <path
                d="M22.3745 16.3298C22.3745 16.4968 22.2409 16.6304 22.074 16.6304C21.907 16.6304 21.7734 16.4968 21.7734 16.3298C21.7734 16.1629 21.907 16.0293 22.074 16.0293C22.2409 16.0321 22.3745 16.1656 22.3745 16.3298Z"
                fill="white"
              />
              <path
                d="M23.2202 15.5066C23.2202 15.6735 23.0866 15.8071 22.9197 15.8071C22.7527 15.8071 22.6191 15.6735 22.6191 15.5066C22.6191 15.3396 22.7527 15.2061 22.9197 15.2061C23.0866 15.2061 23.2202 15.3424 23.2202 15.5066Z"
                fill="white"
              />
              <path
                d="M23.6147 14.4558C23.6147 14.6228 23.4812 14.7563 23.3142 14.7563C23.1472 14.7563 23.0137 14.6228 23.0137 14.4558C23.0137 14.2888 23.1472 14.1553 23.3142 14.1553C23.4812 14.1553 23.6147 14.2916 23.6147 14.4558Z"
                fill="white"
              />
              <path
                d="M22.9194 13.6062C22.9194 13.7732 22.7858 13.9067 22.6189 13.9067C22.4547 13.9067 22.3184 13.7732 22.3184 13.6062C22.3184 13.4392 22.4519 13.3057 22.6189 13.3057C22.7858 13.3057 22.9194 13.4392 22.9194 13.6062Z"
                fill="white"
              />
              <path
                d="M21.7807 13.3523C21.7807 13.5193 21.6472 13.6528 21.4802 13.6528C21.3133 13.6528 21.1797 13.5193 21.1797 13.3523C21.1797 13.1853 21.3133 13.0518 21.4802 13.0518C21.6444 13.0518 21.7807 13.1881 21.7807 13.3523Z"
                fill="white"
              />
              <path
                d="M20.6128 13.1824C20.6128 13.3493 20.4792 13.4829 20.3122 13.4829C20.1453 13.4829 20.0117 13.3493 20.0117 13.1824C20.0117 13.0154 20.1453 12.8818 20.3122 12.8818C20.4792 12.8818 20.6128 13.0182 20.6128 13.1824Z"
                fill="white"
              />
              <path
                d="M19.5151 12.8347C19.5151 13.0017 19.3816 13.1352 19.2146 13.1352C19.0476 13.1352 18.9141 13.0017 18.9141 12.8347C18.9141 12.6677 19.0476 12.5342 19.2146 12.5342C19.3816 12.5342 19.5151 12.6677 19.5151 12.8347Z"
                fill="white"
              />
              <path
                d="M18.4607 12.271C18.6267 12.271 18.7612 12.1364 18.7612 11.9705C18.7612 11.8045 18.6267 11.6699 18.4607 11.6699C18.2947 11.6699 18.1602 11.8045 18.1602 11.9705C18.1602 12.1364 18.2947 12.271 18.4607 12.271Z"
                fill="white"
              />
              <path
                d="M18.2222 10.7915C18.2222 10.9585 18.0886 11.092 17.9216 11.092C17.7547 11.092 17.6211 10.9585 17.6211 10.7915C17.6211 10.6245 17.7547 10.491 17.9216 10.491C18.0886 10.491 18.2222 10.6245 18.2222 10.7915Z"
                fill="white"
              />
            </svg>
            Featured{" "}
            <span className="bg-primary text-white px-4 py-2 rounded">
              Products
            </span>
          </h3>

          {/* Tabs Section - Scrollable on mobile */}
          <div className="w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0">
            <div className="flex items-center space-x-8 min-w-max border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 relative text-sm md:lg font-medium whitespace-nowrap transition-colors
                    ${
                      activeTab === tab.id
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }
                  `}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <>
                      <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 -translate-y-1/21/2 -translate-y-1/2 -right-3"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    </>
                  )}
                </button>
              ))}
              <Link
                href="/product-listing"
                className="hidden lg:flex text-primary font-medium items-center whitespace-nowrap"
              >
                View All
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="px-0 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {displayProducts.map((product, index) => (
              <FeaturedProductsCard key={index} {...product} />
            ))}
          </div>
        </div>

        {/* Mobile View All Link */}
        <div className="flex lg:hidden justify-center mt-8">
          <Link
            href="/all-products"
            className="text-[#FF6B3D] font-medium flex items-center"
          >
            View All
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
