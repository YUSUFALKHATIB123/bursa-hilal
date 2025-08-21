import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Sun,
  Moon,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Star,
  ShoppingCart,
  Heart,
  Eye,
  ArrowRight,
  ArrowLeft,
  Home,
  Info,
  Package,
  Image,
  Contact,
  Globe,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import WhatsappChatButton from "./components/WhatsappChatButton";
import emailjs from '@emailjs/browser';
import logoImage from "./assets/logo.avif";
// import fabricSampleImage from "./assets/fabric-sample.jpeg";
import companyBuildingImage from "./assets/company-building.webp";
import babyfaceColor1 from "./assets/babyface-color1.jpeg";
import babyfaceColor2 from "./assets/babyface-color2.jpeg";
import babyfaceColor3 from "./assets/babyface-color3.jpeg";
import couchIcon from "./assets/couch.png";
// import cushionIcon from "./assets/cushion.png";
import carpetIcon from "./assets/prayer.png";
import curtainIcon from "./assets/curtain.png";
// New fabric images
import jakar1 from "./assets/JAKAR  (1).jpg";
import jakar2 from "./assets/JAKAR  (2).jpg";
import jakar3_1 from "./assets/JAKAR 3 (1).jpeg";
import jakar3_2 from "./assets/JAKAR 3 (2).jpeg";
import jakar3 from "./assets/JAKAR  (3).jpg";
import jakar4 from "./assets/JAKAR  (4).jpg";
import jakar5 from "./assets/JAKAR  (5).jpg";
import jakar6 from "./assets/JAKAR  (6).jpg";
import babyface1_1 from "./assets/Babyface/babyface1 (1).jpeg";
import babyface1_2 from "./assets/Babyface/babyface1 (2).jpeg";
import babyface1_3 from "./assets/Babyface/babyface1 (3).jpeg";
import jakarNew1 from "./assets/jakar/jakar (2).jpeg";
import jakarNew2 from "./assets/jakar/jakar (3).jpeg";
import jakarNew3 from "./assets/jakar/jakar 4 (1).jpeg";
import jakarNew4 from "./assets/jakar/jakar 4 (2).jpeg";
import jakarNew5 from "./assets/jakar/jakar new  (2).jpeg";
import jakarNew6 from "./assets/jakar/jakar new  (3).jpeg";
import jakarNew7 from "./assets/jakar/jakar new  (5).jpeg";
import jakarNew8 from "./assets/jakar/jakar new  (6).jpeg";
import jakarNew9 from "./assets/jakar/jakar new 2 (1).jpeg";
import jakarNew10 from "./assets/jakar/jakar new 2 (2).jpeg";
import jakarNew11 from "./assets/jakar/jakar new 2 (3).jpeg";
// import sohoImage from "./assets/soho.jpg";
// import soho1Image from "./assets/soho1.jfif";
import darkColorTailoring from "./assets/dark-color-tailoring-leather-tissues-showroom.jpg";
import velvet1 from "./assets/Velvet1.jpg";
import velvet2 from "./assets/Velvet2.jpg";
import nubuk002 from "./assets/nubuk-002.jpg";
import decoratedInterior from "./assets/decorated-interior-empty-home.jpg";
import prayer1251 from "./assets/1251.jpg";
// China fabric images
import cizgi1 from "./assets/China/cizgi (1).jpeg";
import cizgi2 from "./assets/China/cizgi (2).jpeg";
import cizgi3 from "./assets/China/cizgi (3).jpeg";
import cizgi4 from "./assets/China/cizgi (4).jpeg";
import buffy1 from "./assets/China/Buffy 1 (1).jpeg";
import buffy2 from "./assets/China/Buffy 1 (2).jpeg";
import buffy3 from "./assets/China/Buffy 1 (3).jpeg";
import buffy2_1 from "./assets/China/Buffy 2  (1).jpeg";
import buffy2_2 from "./assets/China/Buffy 2  (2).jpeg";
import buffy2_3 from "./assets/China/Buffy 2  (3).jpeg";
import buffy2_4 from "./assets/China/Buffy 2  (4).jpeg";
import buffy3_1 from "./assets/China/Buffy 3 (1).jpeg";
import buffy3_2 from "./assets/China/Buffy 3 (2).jpeg";
import buffy3_3 from "./assets/China/Buffy 3 (3).jpeg";
import bukle1 from "./assets/China/Bukle (1).jpeg";
import bukle2 from "./assets/China/Bukle (2).jpeg";
import bukle3 from "./assets/China/Bukle (3).jpeg";
import bukle4 from "./assets/China/Bukle (4).jpeg";
import bukle2_1 from "./assets/China/Bukle 2 (2).jpeg";
import bukle2_2 from "./assets/China/Bukle 2 (3).jpeg";
import bukle2_3 from "./assets/China/bukle 2 (1).jpeg";
import bukle2_4 from "./assets/China/bukle 2 (4).jpeg";
import bukle4_1 from "./assets/China/Bukle 4 (2).jpeg";
import bukle4_2 from "./assets/China/Bukle 4 (3).jpeg";
import bukle4_3 from "./assets/China/Bukle 4 (4).jpeg";
import buffy7_1 from "./assets/China/Buffy 7 (1).jpeg";
import buffy7_2 from "./assets/China/Buffy 7 (2).jpeg";
import buffy7_3 from "./assets/China/Buffy 7 (3).jpeg";
import buffy7_4 from "./assets/China/Buffy 7 (6).jpeg";
import buffy9_1 from "./assets/China/Buffy 9 (2).jpeg";
import buffy9_2 from "./assets/China/Buffy 9 (3).jpeg";
import bukle77_1 from "./assets/China/Bukle 77 (1).jpeg";
import bukle77_2 from "./assets/China/Bukle 77 (2).jpeg";
import bukle77_3 from "./assets/China/Bukle 77 (3).jpeg";
import bukle470_1 from "./assets/China/bukle 470 (1).jpeg";
import bukle470_2 from "./assets/China/bukle 470 (3).jpeg";
import bukle470_3 from "./assets/China/bukle 470 (4).jpeg";
import buffy22_1 from "./assets/China/Buffy 22 (1).jpeg";
import buffy22_2 from "./assets/China/Buffy 22 (2).jpeg";
import buffy22_3 from "./assets/China/Buffy 22 (3).jpeg";
import blackout1 from "./assets/Curtains/Blackout (2).jpeg";
import blackout2 from "./assets/Curtains/Blackout (3).jpeg";
import blackout3 from "./assets/Curtains/Blackout (4).jpeg";
import blackout4 from "./assets/Curtains/Blackout (5).jpeg";
import curtainJakar1 from "./assets/Curtains/jakar  (2).jpeg";
import curtainJakar2 from "./assets/Curtains/jakar  (3).jpeg";
import curtainJakar3 from "./assets/Curtains/jakar  (4).jpeg";
import blackoutNew1 from "./assets/Curtains/BLACK OUT NEW (2).jpeg";
import blackoutNew2 from "./assets/Curtains/BLACK OUT NEW (3).jpeg";
import blackoutNew3 from "./assets/Curtains/BLACK OUT NEW (5).jpeg";
import blackoutNew4 from "./assets/Curtains/BLACK OUT NEW (6).jpeg";
// Gallery images
import BURSA1 from "./assets/BURSA1.webp";
import BURSA2 from "./assets/BURSA2.webp";
import BURSA3 from "./assets/BURSA3.webp";
import BURSA4 from "./assets/BURSA4.webp";

import "./App.css";
import upholsteryImg from "./assets/upholstery.webp";
// import cushionsImg from "./assets/cushions.webp";
import carpetImg from "./assets/carpet.webp";
import curtainImg from "./assets/Curtains-4k.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { Share2 } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Counter Animation Hook
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const startValue = 0;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        easeOutQuart * (end - startValue) + startValue
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [end]);

  return count;
}

// Image Zoom Modal Component
function ImageZoomModal({ image, isOpen, onClose, alt }) {
  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-90 animate-fadeIn p-8"
      onClick={onClose}
    >
      <div className="relative max-w-lg max-h-[50vh] w-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute -top-42 -right-2 z-10 p-2 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full transition-all duration-200"
        >
          <X className="h-5 w-5 text-white" />
        </button>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-contain rounded-lg shadow-2xl"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

// Product Details Modal Component with Image Carousel
function ProductDetailsModal({ product, isOpen, onClose, t }) {
  const [_currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [_priceType, _setPriceType] = useState("bulk");
  const [zoomedImage, setZoomedImage] = useState(null);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const _price = product?.price ? parseFloat(product.price.replace('$', '')) : 3.25;

  if (!isOpen || !product) return null;

  const whatsappNumber = "+905343168831";
  const message = `Hello! I'm interested in your textile product: ${product.name} (${product.productId}). Could you please provide more information?`;
  const _whatsappUrl = `https://wa.me/${whatsappNumber.replace(
    "+",
    ""
  )}?text=${encodeURIComponent(message)}`;

  const images = product.images || [product.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const _handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const _handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const _handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextImage(); // Swipe left
    }
    if (touchEndX - touchStartX > 50) {
      prevImage(); // Swipe right
    }
  };

  const handleImageClick = (imageUrl) => {
    setZoomedImage(imageUrl);
    setIsZoomModalOpen(true);
  };

  const closeZoomModal = () => {
    setIsZoomModalOpen(false);
    setZoomedImage(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
      <div className="bg-white dark:bg-[#112B3C] rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-slideUp">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <span className="text-sm text-[#4F7D66] font-medium uppercase">
              {t ? t(product.category) : product.category}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-[#E5E7EB]">
              {product.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
          >
            <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          <div className="relative aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            <Swiper
              modules={[SwiperNavigation, Pagination, A11y]}
              navigation
              pagination={{ clickable: true }}
              style={{ height: '100%', borderRadius: '0.75rem' }}
              className="custom-swiper"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={product.name}
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    style={{ borderRadius: '0.75rem', height: '100%' }}
                    onClick={() => handleImageClick(img)}
                    title={t ? t('clickToZoom') : "Click to zoom"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 dark:text-[#E5E7EB] text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-[#E5E7EB]">
                  {t ? t('productId') : "Product ID"}:
                </span>
                <span className="text-gray-600 dark:text-[#E5E7EB]">
                  {product.productId}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-[#E5E7EB]">
                  {t ? t('composition') : "Composition"}:
                </span>
                <span className="text-gray-600 dark:text-[#E5E7EB]">
                  {product.composition}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-[#E5E7EB]">
                  {t ? t('width') : "Width"}:
                </span>
                <span className="text-gray-600 dark:text-[#E5E7EB]">
                  {product.width}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-[#E5E7EB]">
                  {t ? t('weight') : "Weight"}:
                </span>
                <span className="text-gray-600 dark:text-[#E5E7EB]">
                  {product.weight || "250 g/m²"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-[#E5E7EB]">{t ? t('price') : "Price"}:</span>
                <div className="text-right">
                  <span className="text-gray-600 dark:text-[#E5E7EB]">{t ? t('priceOnRequest') : "Price on Request"} <span className="text-[#0b3d2e]">$</span></span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-[#E5E7EB]">{t ? t('minimumOrder') : "Minimum Order"}:</span>
                <div className="text-right">
                  <span className="text-red-600 dark:text-red-400 font-semibold">
                    {product.isChinese ? (t ? t('containerMinimum') : "Container (Container)") : (t ? t('twoThousandMeters') : "2000 meters")}
                  </span>
                </div>
              </div>
              {product.opacityLevel && (
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-[#E5E7EB]">{t ? t('opacityLevel') : "Opacity Level"}:</span>
                  <div className="text-right">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      {product.opacityLevel}
                    </span>
                  </div>
                </div>
              )}
              <div className="mt-3 flex items-center gap-2 bg-gray-50 border border-gray-300 rounded px-3 py-2">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#374151" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                <span className="text-gray-700 text-sm font-semibold">
                  {t ? t('bulkOrderMessage') : "For large orders, we provide special prices and competitive offers – please contact us for details."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      <ImageZoomModal
        image={zoomedImage}
        isOpen={isZoomModalOpen}
        onClose={closeZoomModal}
        alt={product.name}
      />
    </div>
  );
}

// Custom hook for dark mode with persistence
function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return [isDark, toggleDarkMode];
}

// Navigation Component
function Navigation({ language, toggleLanguage, t, isDark, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: t('home'), href: "/" },
    { name: t('about'), href: "/about" },
    { name: t('catalog'), href: "/catalog" },
    { name: t('gallery'), href: "/gallery" },
    { name: t('contact'), href: "/contact" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 text-white shadow-lg transition-all duration-400"
      style={
        isDark
          ? { background: "linear-gradient(90deg, #0B1623 0%, #22395c 100%)" }
          : { background: "linear-gradient(120deg, #0b3d2e 0%, #4F7D66 100%)" }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Name - Now Clickable */}
          <div
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => (window.location.href = "/")}
          >
            <div className="flex-shrink-0">
              <img
                src={logoImage}
                alt="BURSA HILAL ÖRME TEKSTİL Logo"
                className="w-10 h-10 object-contain rounded-lg"
              />
            </div>
            <div className="ml-3">
              <div className="text-lg font-semibold text-[#E5E7EB]">
                BURSA HILAL
              </div>
              <div className="text-xs text-[#E5E7EB] opacity-80">
                ÖRME TEKSTİL LTD.ŞTİ
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#E5E7EB] px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                  style={
                    isDark
                      ? { "&:hover": { color: "#ffffff", background: "rgba(34, 57, 92, 0.8)" } }
                      : { "&:hover": { color: "#ffffff", background: "rgba(79, 125, 102, 0.8)" } }
                  }
                  onMouseEnter={(e) => {
                    if (isDark) {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.background = "rgba(34, 57, 92, 0.8)";
                    } else {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.background = "rgba(79, 125, 102, 0.8)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#E5E7EB";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle and Language Toggle */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-white font-medium transition-all duration-200"
              style={
                isDark
                  ? { "&:hover": { background: "rgba(34, 57, 92, 0.8)" } }
                  : { "&:hover": { background: "rgba(79, 125, 102, 0.8)" } }
              }
              onMouseEnter={(e) => {
                if (isDark) {
                  e.currentTarget.style.background = "rgba(34, 57, 92, 0.8)";
                } else {
                  e.currentTarget.style.background = "rgba(79, 125, 102, 0.8)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
              title={language === 'en' ? 'العربية' : 'English'}
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === 'en' ? 'عربي' : 'EN'}
            </Button>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="text-white transition-all duration-200"
              style={
                isDark
                  ? { "&:hover": { background: "rgba(34, 57, 92, 0.8)" } }
                  : { "&:hover": { background: "rgba(79, 125, 102, 0.8)" } }
              }
              onMouseEnter={(e) => {
                if (isDark) {
                  e.currentTarget.style.background = "rgba(34, 57, 92, 0.8)";
                } else {
                  e.currentTarget.style.background = "rgba(79, 125, 102, 0.8)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white transition-all duration-200"
                style={
                  isDark
                    ? { "&:hover": { background: "rgba(34, 57, 92, 0.8)" } }
                    : { "&:hover": { background: "rgba(79, 125, 102, 0.8)" } }
                }
                onMouseEnter={(e) => {
                  if (isDark) {
                    e.currentTarget.style.background = "rgba(34, 57, 92, 0.8)";
                  } else {
                    e.currentTarget.style.background = "rgba(79, 125, 102, 0.8)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div 
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-all duration-400"
              style={
                isDark
                  ? { 
                      background: "linear-gradient(135deg, #0B1623 0%, #22395c 100%)",
                      borderColor: "#22395c"
                    }
                  : { 
                      background: "linear-gradient(135deg, #0b3d2e 0%, #4F7D66 100%)",
                      borderColor: "#4F7D66"
                    }
              }
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                  style={
                    isDark
                      ? {
                          color: "#E5E7EB",
                          "&:hover": {
                            color: "#ffffff",
                            background: "rgba(34, 57, 92, 0.8)"
                          }
                        }
                      : {
                          color: "#E5E7EB",
                          "&:hover": {
                            color: "#ffffff",
                            background: "rgba(79, 125, 102, 0.8)"
                          }
                        }
                  }
                  onMouseEnter={(e) => {
                    if (isDark) {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.background = "rgba(34, 57, 92, 0.8)";
                    } else {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.background = "rgba(79, 125, 102, 0.8)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#E5E7EB";
                    e.currentTarget.style.background = "transparent";
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// WhatsApp Button Component
function WhatsAppButton({ t, isDark }) {
  const whatsappNumber = "+905343168831";
  const message = t('whatsappMessage');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(
    "+",
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
      style={isDark ? {
        background: "linear-gradient(135deg, #0B1623 0%, #22395c 100%)",
        boxShadow: "0 4px 20px rgba(34, 57, 92, 0.4)",
        border: "2px solid rgba(34, 57, 92, 0.3)"
      } : {
        background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.3)"
      }}
      onMouseEnter={e => {
        if (isDark) {
          e.currentTarget.style.background = "linear-gradient(135deg, #22395c 0%, #355a8a 100%)";
          e.currentTarget.style.boxShadow = "0 6px 25px rgba(34, 57, 92, 0.6)";
          e.currentTarget.style.border = "2px solid rgba(53, 90, 138, 0.5)";
        } else {
          e.currentTarget.style.background = "linear-gradient(135deg, #128C7E 0%, #075E54 100%)";
          e.currentTarget.style.boxShadow = "0 6px 25px rgba(37, 211, 102, 0.4)";
        }
      }}
      onMouseLeave={e => {
        if (isDark) {
          e.currentTarget.style.background = "linear-gradient(135deg, #0B1623 0%, #22395c 100%)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(34, 57, 92, 0.4)";
          e.currentTarget.style.border = "2px solid rgba(34, 57, 92, 0.3)";
        } else {
          e.currentTarget.style.background = "linear-gradient(135deg, #25D366 0%, #128C7E 100%)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(37, 211, 102, 0.3)";
        }
      }}
    >
      <MessageCircle className="h-6 w-6 animate-bounce" />
    </a>
  );
}

// Home Page Component
function HomePage({ isDark, t }) {
  const navigate = useNavigate();

  const count20 = useCountUp(20);
  const count10 = useCountUp(10);
  const count50 = useCountUp(50);
  const count90 = useCountUp(90);

  const featuredProducts = [
    {
      name: t('upholsteryFabrics'),
      description: t('upholsteryDesc'),
      image: upholsteryImg,
      link: "furnishing-fabrics",
    },
    {
      name: t('carpets'),
      description: t('carpetsDesc'),
      image: carpetImg,
      link: "carpets",
    },
    {
      name: t('curtains'),
      description: t('curtainsDesc'),
      image: curtainImg,
      link: "curtains",
    },
  ];

  const handleLearnMore = (link) => {
    navigate("/catalog", { state: { scrollTo: link } });
  };

  return (
    <div className="min-h-screen bg-white transition-all duration-400">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 transition-all duration-400"
        style={{
          background: isDark
            ? "linear-gradient(90deg, #0B1623 0%, #22395c 100%)"
            : "linear-gradient(120deg, #0b3d2e 0%, #4F7D66 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInLeft">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-[#E5E7EB]">
                {t('heroTitle')}
              </h1>
              <p className="text-xl text-[#E5E7EB] opacity-90">
                {t('heroSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  style={
                    isDark
                      ? {
                          background: "linear-gradient(120deg, #0B1623 0%, #22395c 100%)",
                          color: "#fff",
                          fontWeight: "bold",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                          border: "none"
                        }
                      : {
                          background: "linear-gradient(120deg, #0b3d2e 0%, #4F7D66 100%)",
                          color: "#fff",
                          fontWeight: "bold",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                          border: "none"
                        }
                  }
                  className="transition-all duration-300 shadow-md hover:scale-105"
                  onClick={() => (window.location.href = "/catalog")}
                >
                  {t('viewFullCatalog')}
                </Button>
                <a
                  href="https://wa.me/905343168831?text=Hello!%20I'm%20interested%20in%20your%20textile%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    style={
                      isDark
                        ? {
                            background: "#fff",
                            color: "#0B1623",
                            fontWeight: "bold",
                            border: "none"
                          }
                        : {}
                    }
                    className="border-[#0b3d2e] text-[#0b3d2e] bg-white hover:bg-white hover:text-[#0b3d2e] 
                     dark:text-white dark:border-[#0b3d2e] 
                   hover:scale-105 transition-all duration-300 w-full"
                  >
                    {t('contact')}
                  </Button>
                </a>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative animate-fadeInRight">
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/4XHRYX0PpQA"
                  title="Company Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Statistics Section */}
      <section className="py-16 transition-all duration-400"
        style={{
          background: isDark
            ? "linear-gradient(90deg, #0B1623 0%, #22395c 100%)"
            : "#f9fafb"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div
              id="counter-20"
              className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
              style={isDark ? {
                background: "linear-gradient(120deg, rgba(34,57,92,0.95) 0%, rgba(11,22,35,0.92) 100%)",
                border: "1.5px solid rgba(79,125,102,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18)"
              } : {
                background: "#fff",
                border: "1.5px solid #e5e7eb",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
              }}
            >
              <div className="text-4xl font-bold text-[#1C3B2C] dark:text-white mb-2">
                {count20}+
              </div>
              <div className="text-lg text-gray-600 dark:text-[#E5E7EB]">
                {t('yearsExperience')}
              </div>
            </div>
            <div
              id="counter-10"
              className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
              style={isDark ? {
                background: "linear-gradient(120deg, rgba(34,57,92,0.95) 0%, rgba(11,22,35,0.92) 100%)",
                border: "1.5px solid rgba(79,125,102,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18)"
              } : {
                background: "#fff",
                border: "1.5px solid #e5e7eb",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
              }}
            >
              <div className="text-4xl font-bold text-[#1C3B2C] dark:text-white mb-2">
                {count10}+
              </div>
              <div className="text-lg text-gray-600 dark:text-[#E5E7EB]">
                {t('countriesServed')}
              </div>
            </div>
            <div
              id="counter-50"
              className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
              style={isDark ? {
                background: "linear-gradient(120deg, rgba(34,57,92,0.95) 0%, rgba(11,22,35,0.92) 100%)",
                border: "1.5px solid rgba(79,125,102,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18)"
              } : {
                background: "#fff",
                border: "1.5px solid #e5e7eb",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
              }}
            >
              <div className="text-4xl font-bold text-[#1C3B2C] dark:text-white mb-2">
                {count50}+
              </div>
              <div className="text-lg text-gray-600 dark:text-[#E5E7EB]">
                {t('productsAvailable')}
              </div>
            </div>
            <div
              id="counter-90"
              className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
              style={isDark ? {
                background: "linear-gradient(120deg, rgba(34,57,92,0.95) 0%, rgba(11,22,35,0.92) 100%)",
                border: "1.5px solid rgba(79,125,102,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18)"
              } : {
                background: "#fff",
                border: "1.5px solid #e5e7eb",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
              }}
            >
              <div className="text-4xl font-bold text-[#1C3B2C] dark:text-white mb-2">
                {count90}%
              </div>
              <div className="text-lg text-gray-600 dark:text-[#E5E7EB]">
                {t('customerSatisfaction')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 transition-all duration-400"
        style={{
          background: isDark
            ? "linear-gradient(90deg, #0B1623 0%, #22395c 100%)"
            : "#fff"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0b3d2e] mb-2 drop-shadow"
              style={isDark ? { color: '#fff' } : {}}
            >
              {t('featuredProducts')}
            </h2>
            <div className="flex justify-center mb-4">
              <div
                className="h-1 w-24 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #0B1623 0%, #22395c 100%)"
                }}
              ></div>
            </div>
            <p className="text-lg font-medium max-w-2xl mx-auto mb-2"
              style={isDark ? { color: '#fff' } : { color: '#1a202c' }}
            >
              {t('featuredProductsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] animate-fadeInUp stagger-item"
                style={isDark ? {
                  background: "linear-gradient(120deg, rgba(34,57,92,0.95) 0%, rgba(11,22,35,0.92) 100%)",
                  border: "1.5px solid rgba(79,125,102,0.18)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.18)"
                } : {
                  background: "#fff",
                  border: "1.5px solid #e5e7eb",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
                }}
              >
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-[#E5E7EB] mb-2">
                    {/* نص أبيض في الدارك مود */}
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-[#E5E7EB] mb-4">
                    {product.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 hover:-translate-y-1"
                    style={isDark ? {
                      background: "linear-gradient(90deg, #0B1623 0%, #22395c 100%)",
                      color: "#fff",
                      border: "1.5px solid #22395c"
                    } : {
                      border: "1.5px solid #1C3B2C",
                      color: "#1C3B2C"
                    }}
                    onMouseEnter={e => {
                      if (isDark) e.currentTarget.style.background = "linear-gradient(90deg, #22395c 0%, #355a8a 100%)";
                    }}
                    onMouseLeave={e => {
                      if (isDark) e.currentTarget.style.background = "linear-gradient(90deg, #0B1623 0%, #22395c 100%)";
                    }}
                    onClick={() => handleLearnMore(product.link)}
                  >
                    {t('learnMore')}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              className="font-bold text-white border-none transition-all duration-300 shadow-md hover:scale-105 px-8 py-2 rounded-md"
              style={isDark ? {
                background: "linear-gradient(90deg, #0B1623 0%, #22395c 100%)"
              } : {
                background: "linear-gradient(120deg, #0b3d2e 0%, #4F7D66 100%)"
              }}
              onMouseEnter={e => {
                if (isDark) e.currentTarget.style.background = "linear-gradient(90deg, #22395c 0%, #355a8a 100%)";
              }}
              onMouseLeave={e => {
                if (isDark) e.currentTarget.style.background = "linear-gradient(90deg, #0B1623 0%, #22395c 100%)";
              }}
              onClick={() => (window.location.href = "/catalog")}
            >
              {t('viewFullCatalog')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// About Us Page Component
function AboutPage({ isDark, t }) {
  const whyChooseUs = [
    {
      title: t('yearsExperienceTitle'),
      description: t('yearsExperienceDesc'),
    },
    {
      title: t('premiumMachinesTitle'),
      description: t('premiumMachinesDesc'),
    },
    {
      title: t('trustedClientsTitle'),
      description: t('trustedClientsDesc'),
    },
    {
      title: t('customDesignsTitle'),
      description: t('customDesignsDesc'),
    },
  ];

  return (
    <div className="min-h-screen py-20 transition-all duration-400"
      style={{
        background: isDark
          ? "linear-gradient(90deg, #0B1623 0%, #22395c 100%)"
          : "#fff"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-6">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-[#E5E7EB] max-w-3xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>

        {/* Company History */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInLeft">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-[#E5E7EB]">
                {t('ourHeritage')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-[#E5E7EB] leading-relaxed">
                {t('heritageText1')}
              </p>
              <p className="text-lg text-gray-600 dark:text-[#E5E7EB] leading-relaxed">
                {t('heritageText2')}
              </p>
              <p className="text-lg text-gray-600 dark:text-[#E5E7EB] leading-relaxed">
                {t('heritageText3')}
              </p>
              <p className="text-lg text-gray-600 dark:text-[#E5E7EB] leading-relaxed">
                {t('heritageText4')}
              </p>
            </div>
            <div className="relative animate-fadeInRight">
              <div className="aspect-square rounded-lg shadow-2xl overflow-hidden">
                <img
                  src={companyBuildingImage}
                  alt="BURSA HILAL ÖRME TEKSTİL Company Building"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('whyChooseUs')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('whyChooseUsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Catalog Page Component
function CatalogPage({ isDark, t }) {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("furnishing-fabrics");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    if (location.state?.scrollTo) {
      setActiveSection(location.state.scrollTo);
    }
  }, [location.state]);

  const sections = [
    { id: "furnishing-fabrics", name: t ? t('upholsteryFabrics') : "Upholstery Fabrics", icon: couchIcon },
    { id: "carpets", name: t ? t('carpets') : "Carpets", icon: carpetIcon },
    { id: "curtains", name: t ? t('curtains') : "Curtains", icon: curtainIcon },
  ];

  const products = {
    "furnishing-fabrics": [
      {
        id: 1,
        name: t ? t('premiumJacquardVelvet') : "Premium Jacquard Velvet",
        category: "jacquard",
        description: t ? t('premiumJacquardVelvetDesc') : "Elegant grey jacquard velvet with sophisticated patterns",
        images: [jakarNew5, jakarNew6, jakarNew7, jakarNew8],
        image: jakarNew5,
        productId: "JK-002",
        composition: "100% Polyester",
        width: "140cm",
        weight: "316 g/m²",
        price: "$2.80",
        isNew: true,
      },
      {
        id: 2,
        name: t ? t('classicJacquardDesign') : "Classic Jacquard Design",
        category: "jacquard",
        description: t ? t('classicJacquardDesignDesc') : "Traditional patterns with modern appeal",
        images: [jakar1, jakar2, jakar3_1, jakar3_2],
        image: jakar1,
        productId: "JK-001",
        composition: "100% Polyester",
        width: "142cm",
        weight: "338 g/m²",
        price: "$3.25",
        isJacquard: true,
      },
      {
        id: 3,
        name: t ? t('classicJacquardDesign') : "Classic Jacquard Design",
        category: "jacquard",
        description: t ? t('classicJacquardDesignDesc') : "Traditional patterns with modern appeal",
        images: [jakar3, jakar4, jakar5, jakar6],
        image: jakar3,
        productId: "JK-003",
        composition: "100% Polyester",
        width: "142cm",
        weight: "338 g/m²",
        price: "$3.25",
        isJacquard: true,
      },
      {
        id: 4,
        name: t ? t('classicJacquardDesign') : "Classic Jacquard Design",
        category: "jacquard",
        description: t ? t('classicJacquardDesignDesc') : "Traditional patterns with modern appeal",
        images: [jakarNew1, jakarNew2, jakarNew3, jakarNew4],
        image: jakarNew1,
        productId: "JK-004",
        composition: "100% Polyester",
        width: "142cm",
        weight: "316 g/m²",
        price: "$2.80",
        isJacquard: true,
      },
      {
        id: 5,
        name: t ? t('classicJacquardDesign') : "Classic Jacquard Design",
        category: "jacquard",
        description: t ? t('classicJacquardDesignDesc') : "Traditional patterns with modern appeal",
        images: [jakarNew9, jakarNew10, jakarNew11],
        image: jakarNew9,
        productId: "JK-005",
        composition: "100% Polyester",
        width: "142cm",
        weight: "281 g/m²",
        price: "$1.90",
        isJacquard: true,
      },
      {
        id: 7,
        name: t ? t('contemporarySohoFabric') : "Contemporary Soho Fabric",
        category: "soho",
        description: t ? t('contemporarySohoFabricDesc') : "Modern textile for fashion and decor",
        images: [babyface1_1, babyface1_2, babyface1_3],
        image: babyface1_1,
        productId: "SH-001",
        composition: "65% Cotton, 35% Polyester",
        width: "142cm",
        weight: "316 g/m²",
        price: "$2.60",
        pricePrinted: "$3.10",
      },

      {
        id: 12,
        name: t ? t('chineseCizgiFabric') : "Chinese Cizgi Fabric",
        category: "cizgi",
        description: t ? t('chineseCizgiFabricDesc') : "Premium Chinese fabric with elegant patterns and superior quality",
        images: [cizgi1, cizgi2, cizgi3, cizgi4],
        image: cizgi1,
        productId: "CZ-001",
        composition: "100% Polyester",
        width: "140cm",
        weight: "280 g/m²",
        price: "$2.50",
        isNew: true,
        isChinese: true,
      },
      {
        id: 13,
        name: t ? t('chineseBuffyFabric') : "Chinese Buffy Fabric",
        category: "buffy",
        description: t ? t('chineseBuffyFabricDesc') : "Premium Chinese Buffy fabric with two weight options for different applications",
        images: [buffy1, buffy2, buffy3],
        image: buffy1,
        productId: "BF-001",
        composition: "100% Polyester",
        width: "140cm",
        weight: "280 g/m²",
        weight2: "360 g/m²",
        price: "$1.57",
        price2: "$1.80",
        isNew: true,
        isChinese: true,
        hasMultipleWeights: true,
      },
      {
        id: 14,
        name: t ? t('chineseBuffyFabric2') : "Chinese Buffy Fabric 2",
        category: "buffy",
        description: t ? t('chineseBuffyFabric2Desc') : "Premium Chinese Buffy fabric with two weight options for different applications",
        images: [buffy2_1, buffy2_2, buffy2_3, buffy2_4],
        image: buffy2_1,
        productId: "BF-002",
        composition: "100% Polyester",
        width: "142cm",
        weight: "280 g/m²",
        weight2: "360 g/m²",
        price: "$1.57",
        price2: "$1.80",
        isNew: true,
        isChinese: true,
        hasMultipleWeights: true,
      },
      {
        id: 15,
        name: t ? t('chineseBuffyFabric3') : "Chinese Buffy Fabric 3",
        category: "buffy",
        description: t ? t('chineseBuffyFabric3Desc') : "Premium Chinese Buffy fabric with two weight options for different applications",
        images: [buffy3_1, buffy3_2, buffy3_3],
        image: buffy3_1,
        productId: "BF-003",
        composition: "100% Polyester",
        width: "142cm",
        weight: "280 g/m²",
        weight2: "360 g/m²",
        price: "$1.57",
        price2: "$1.80",
        isNew: true,
        isChinese: true,
        hasMultipleWeights: true,
      },
      {
        id: 16,
        name: t ? t('chineseBukleFabric') : "Chinese Bukle Fabric",
        category: "bukle",
        description: t ? t('chineseBukleFabricDesc') : "Premium Chinese Bukle fabric with elegant texture and superior quality",
        images: [bukle1, bukle2, bukle3, bukle4],
        image: bukle1,
        productId: "BK-001",
        composition: "100% Polyester",
        width: "142cm",
        weight: "400 g/m²",
        price: "$2.30",
        isNew: true,
        isChinese: true,
      },
      {
        id: 17,
        name: t ? t('chineseBukleFabric2') : "Chinese Bukle Fabric 2",
        category: "bukle",
        description: t ? t('chineseBukleFabric2Desc') : "Premium Chinese Bukle fabric with elegant texture and superior quality",
        images: [bukle2_1, bukle2_2, bukle2_3, bukle2_4],
        image: bukle2_1,
        productId: "BK-002",
        composition: "100% Polyester",
        width: "142cm",
        weight: "300 g/m²",
        price: "$1.63",
        isNew: true,
        isChinese: true,
      },
      {
        id: 18,
        name: t ? t('chineseBukleFabric4') : "Chinese Bukle Fabric 4",
        category: "bukle",
        description: t ? t('chineseBukleFabric4Desc') : "Premium Chinese Bukle fabric with elegant texture and superior quality",
        images: [bukle4_1, bukle4_2, bukle4_3],
        image: bukle4_1,
        productId: "BK-003",
        composition: "100% Polyester",
        width: "142cm",
        weight: "300 g/m²",
        price: "$1.63",
        isNew: true,
        isChinese: true,
      },
      {
        id: 19,
        name: t ? t('chineseBuffyFabric7') : "Chinese Buffy Fabric 7",
        category: "buffy",
        description: t ? t('chineseBuffyFabric7Desc') : "Premium Chinese Buffy fabric with two weight options for different applications",
        images: [buffy7_1, buffy7_2, buffy7_3, buffy7_4],
        image: buffy7_1,
        productId: "BF-004",
        composition: "100% Polyester",
        width: "142cm",
        weight: "280 g/m²",
        weight2: "360 g/m²",
        price: "$1.57",
        price2: "$1.80",
        isNew: true,
        isChinese: true,
        hasMultipleWeights: true,
      },
      {
        id: 20,
        name: t ? t('chineseBuffyFabric9') : "Chinese Buffy Fabric 9",
        category: "buffy",
        description: t ? t('chineseBuffyFabric9Desc') : "Premium Chinese Buffy fabric with two weight options for different applications",
        images: [buffy9_1, buffy9_2],
        image: buffy9_1,
        productId: "BF-005",
        composition: "100% Polyester",
        width: "142cm",
        weight: "280 g/m²",
        weight2: "360 g/m²",
        price: "$1.57",
        price2: "$1.80",
        isNew: true,
        isChinese: true,
        hasMultipleWeights: true,
      },
      {
        id: 21,
        name: t ? t('chineseBukle77Fabric') : "Chinese Bukle 77 Fabric",
        category: "bukle",
        description: t ? t('chineseBukle77FabricDesc') : "Premium Chinese Bukle fabric with elegant texture and superior quality",
        images: [bukle77_1, bukle77_2, bukle77_3],
        image: bukle77_1,
        productId: "BK-004",
        composition: "100% Polyester",
        width: "142cm",
        weight: "300 g/m²",
        price: "$1.63",
        isNew: true,
        isChinese: true,
      },
      {
        id: 22,
        name: t ? t('chineseBuffyFabric22') : "Chinese Buffy Fabric 22",
        category: "buffy",
        description: t ? t('chineseBuffyFabric22Desc') : "Premium Chinese Buffy fabric with two weight options for different applications",
        images: [buffy22_1, buffy22_2, buffy22_3],
        image: buffy22_1,
        productId: "BF-006",
        composition: "100% Polyester",
        width: "142cm",
        weight: "280 g/m²",
        weight2: "360 g/m²",
        price: "$1.57",
        price2: "$1.80",
        isNew: true,
        isChinese: true,
        hasMultipleWeights: true,
      },
      {
        id: 23,
        name: t ? t('chineseBukle470Fabric') : "Chinese Bukle 470 Fabric",
        category: "bukle",
        description: t ? t('chineseBukle470FabricDesc') : "Premium Chinese Bukle fabric with elegant texture and superior quality",
        images: [bukle470_1, bukle470_2, bukle470_3],
        image: bukle470_1,
        productId: "BK-005",
        composition: "100% Polyester",
        width: "142cm",
        weight: "470 g/m²",
        price: "$2.25",
        isNew: true,
        isChinese: true,
      },
    ],
    carpets: [
      {
        id: 11,
        name: t ? t('traditionalPrayerRug') : "Traditional Prayer Rug",
        category: "carpet",
        description: t ? t('traditionalPrayerRugDesc') : "Handcrafted prayer rugs with traditional patterns",
        image: prayer1251,
        productId: "CR-001",
        composition: "100% Wool",
        width: "120cm x 80cm",
        weight: "800 g/m²",
        isNew: true,
      },
      {
        id: 12,
        name: t ? t('modernAreaRug') : "Modern Area Rug",
        category: "carpet",
        description: t ? t('modernAreaRugDesc') : "Contemporary designs for modern spaces",
        image: "/api/placeholder/400/400",
        productId: "CR-002",
        composition: "80% Wool, 20% Silk",
        width: "200cm x 150cm",
        weight: "900 g/m²",
      },
    ],
    curtains: [
      {
        id: 15,
        name: t ? t('chineseBlackoutCurtains') : "Chinese Blackout Curtains",
        category: "blackout",
        description: t ? t('chineseBlackoutCurtainsDesc') : "Premium Chinese blackout curtains for complete light control",
        images: [blackout1, blackout2, blackout3, blackout4],
        image: blackout1,
        productId: "CT-003",
        composition: "100% Polyester",
        width: "310-320cm",
        weight: "200-300 g/m²",
        opacityLevel: "100%",
        price: "$3.30",
        isNew: true,
        isChinese: true,
      },
      {
        id: 16,
        name: t ? t('jacquardCurtains') : "Jacquard Curtains",
        category: "jacquard",
        description: t ? t('jacquardCurtainsDesc') : "Elegant jacquard curtains with sophisticated patterns",
        images: [curtainJakar1, curtainJakar2, curtainJakar3],
        image: curtainJakar1,
        productId: "CT-004",
        composition: "100% Polyester",
        width: "300cm",
        weight: "187 g/m²",
      },
      {
        id: 17,
        name: t ? t('blackoutCurtains') : "Blackout Curtains",
        category: "blackout",
        description: t ? t('blackoutCurtainsDesc') : "Premium blackout curtains for complete light control",
        images: [blackoutNew1, blackoutNew2, blackoutNew3, blackoutNew4],
        image: blackoutNew1,
        productId: "CT-005",
        composition: "100% Polyester",
        width: "300cm",
        weight: "233 g/m²",
        opacityLevel: "70% – 75%",
        isNew: true,
      },
    ],
  };

  const currentProducts = products[activeSection] || [];

  // استخراج جميع أنواع القماش المتوفرة في القسم الحالي
  const fabricTypes = Array.from(new Set(currentProducts.map(p => p.category)));

  // دالة ترجمة أسماء فئات الأقمشة
  const getCategoryDisplayName = (category) => {
    if (!t) return category.charAt(0).toUpperCase() + category.slice(1);
    return t(category) || category.charAt(0).toUpperCase() + category.slice(1);
  };

  // منطق البحث والفلترة
  const filteredProducts = currentProducts.filter(product => {
    const search = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !search ||
      (product.productId && product.productId.toLowerCase().includes(search)) ||
      (product.name && product.name.toLowerCase().includes(search)) ||
      (product.category && product.category.toLowerCase().includes(search));
    const matchesCategory = !filterCategory || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen py-20 transition-all duration-400"
      style={{
        background: isDark
          ? "linear-gradient(90deg, #0B1623 0%, #22395c 100%)"
          : "#fff"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-6">
            {t ? t('catalogTitle') : "Fabric Catalog"}
          </h1>
          <p className="text-xl text-gray-600 dark:text-[#E5E7EB] max-w-3xl mx-auto">
            {t ? t('catalogSubtitle') : "Explore Our Complete Collection"}
          </p>
        </div>
        {/* Section Buttons with integrated Search & Filter */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-16">
          {/* Search & Filter Section */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder={t ? t('searchPlaceholder') : "Search..."}
                className="w-full sm:w-72 px-4 py-2.5 pr-10 rounded-full border focus:outline-none focus:ring-2 transition-all duration-300"
                style={{
                  backgroundColor: isDark ? '#112B3C' : '#ffffff',
                  borderColor: isDark ? '#22395c' : '#e5e7eb',
                  color: isDark ? '#E5E7EB' : '#374151',
                  focusRingColor: isDark ? '#22395c' : '#4F7D66',
                }}
              />
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </div>
            <select
              value={filterCategory}
              onChange={e => setFilterCategory(e.target.value)}
              className="px-4 py-2.5 rounded-full border focus:outline-none focus:ring-2 transition-all duration-300 min-w-32"
              style={{
                backgroundColor: isDark ? '#112B3C' : '#ffffff',
                borderColor: isDark ? '#22395c' : '#e5e7eb',
                color: isDark ? '#E5E7EB' : '#374151',
              }}
            >
              <option value="">{t ? t('allTypes') : "All"}</option>
              {fabricTypes.map(type => (
                <option key={type} value={type}>{getCategoryDisplayName(type)}</option>
              ))}
            </select>
          </div>

          {/* Section Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 ${
                activeSection === section.id
                  ? "text-white shadow-lg border-none"
                  : "bg-white text-[#0b3d2e] border-2 border-[#0b3d2e] hover:bg-[#0b3d2e] hover:text-white dark:bg-[#112B3C] dark:text-[#E5E7EB] dark:border-[#22395c] dark:hover:bg-[#22395c] dark:hover:text-white"
              }`}
              style={
                activeSection === section.id
                  ? isDark 
                    ? { background: "linear-gradient(90deg, #0B1623 0%, #22395c 100%)" }
                    : { background: "linear-gradient(120deg, #0b3d2e 0%, #4F7D66 100%)" }
                  : {}
              }
            >
              <img
                src={section.icon}
                alt={section.name}
                className="w-6 h-6 mr-3"
              />
              {section.name}
            </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white dark:bg-[#112B3C] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] animate-fadeInUp cursor-pointer"
              style={isDark ? {
                background: "linear-gradient(120deg, rgba(34,57,92,0.95) 0%, rgba(11,22,35,0.92) 100%)",
                border: "1.5px solid rgba(79,125,102,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18)"
              } : {}}
              onClick={() => handleViewDetails(product)}
            >
              {/* New Label */}
              {product.isNew && (
                <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-md shadow-lg">
                  {t ? t('new') : "NEW"}
                </div>
              )}
              {/* Jacquard Label */}
              {product.isJacquard && (
                <div className="absolute top-3 right-3 z-10 bg-blue-500 text-white px-2 py-1 text-xs font-bold rounded-md shadow-lg">
                  {t ? t('jacquard') : "Jacquard"}
                </div>
              )}
              {/* Chinese Label */}
              {product.isChinese && (
                <div className="absolute top-3 right-3 z-10 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded-md shadow-lg">
                  {t ? t('chinese') : "Chinese"}
                </div>
              )}
              <div className="aspect-video overflow-hidden">
                {product.image &&
                product.image !== "/api/placeholder/400/400" ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1C3B2C] to-[#4F7D66] transition-transform duration-300 hover:scale-110"></div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-[#E5E7EB] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-[#E5E7EB] mb-4">
                  {product.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full transition-all duration-300 hover:-translate-y-1"
                  style={isDark ? {
                    background: "linear-gradient(90deg, #0B1623 0%, #22395c 100%)",
                    color: "#fff",
                    border: "1.5px solid #22395c"
                  } : {
                    border: "1.5px solid #1C3B2C",
                    color: "#1C3B2C"
                  }}
                  onMouseEnter={e => {
                    if (isDark) e.currentTarget.style.background = "linear-gradient(90deg, #22395c 0%, #355a8a 100%)";
                  }}
                  onMouseLeave={e => {
                    if (isDark) e.currentTarget.style.background = "linear-gradient(90deg, #0B1623 0%, #22395c 100%)";
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewDetails(product);
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {t ? t('viewDetails') : "View Details"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
              <ProductDetailsModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
          t={t}
        />
    </div>
  );
}

// Gallery Page Component
function GalleryPage({ isDark, t }) {
  const galleryImages = [
    {
      id: 1,
      title: t('companyLogoWall'),
      description: t('companyLogoWallDesc'),
      image: BURSA1,
    },
    {
      id: 2,
      title: t('storefrontView'),
      description: t('storefrontViewDesc'),
      image: BURSA2,
    },
    {
      id: 3,
      title: t('interiorShowroom'),
      description: t('interiorShowroomDesc'),
      image: BURSA3,
    },
    {
      id: 4,
      title: t('containerFactory'),
      description: t('containerFactoryDesc'),
      image: BURSA4,
    },
  ];

  return (
    <div className="min-h-screen py-20 transition-all duration-400"
      style={{
        background: isDark
          ? "linear-gradient(90deg, #0B1623 0%, #22395c 100%)"
          : "#fff"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-6">
            {t('galleryTitle')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-[#E5E7EB] max-w-3xl mx-auto">
            {t('gallerySubtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-[300px] overflow-hidden rounded-lg relative">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 z-10 relative"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Contact Page Component
function ContactPage({ isDark, t }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);

  const _handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // دالة تحقق من صحة البريد الإلكتروني
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // دالة تحقق من صحة الاسم
  const validateName = (name) => {
    return name.trim().length >= 2 && name.trim().length <= 100;
  };

  // دالة تحقق من صحة الرسالة
  const validateMessage = (message) => {
    return message.trim().length >= 10 && message.trim().length <= 1000;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Rate Limiting - منع الإرسال المتكرر
    const now = Date.now();
    if (isSubmitting) {
      alert('Please wait, your message is being sent...');
      return;
    }
    
    if (now - lastSubmissionTime < 30000) { // 30 ثانية
      alert('Please wait 30 seconds before sending another message.');
      return;
    }
    
    const formData = new FormData(e.target);
    const name = formData.get('from_name');
    const email = formData.get('from_email');
    const message = formData.get('message');

    // تحقق من المدخلات
    if (!validateName(name)) {
      alert('Please enter a valid name (2-100 characters)');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!validateMessage(message)) {
      alert('Please enter a valid message (10-1000 characters)');
      return;
    }

    setIsSubmitting(true);
    setLastSubmissionTime(now);

    // إرسال الرسالة
    emailjs.sendForm(
      'service_xasdjh7', // Service ID
      'template_hra8d9h', // Template ID الجديد
      e.target,
      'u4mYQ-kugz8xDuXcX' // Public Key
    ).then(
      () => {
        alert('Message sent successfully!');
        e.target.reset();
        setIsSubmitting(false);
      },
      () => {
        alert('Failed to send message, please try again.');
        setIsSubmitting(false);
      }
    );
  };

  return (
    <div className="min-h-screen py-20 transition-all duration-400"
      style={{
        background: isDark
          ? "linear-gradient(90deg, #0B1623 0%, #22395c 100%)"
          : "#fff"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-6">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-[#E5E7EB] max-w-3xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-[#112B3C] p-8 rounded-xl shadow-lg"
            style={isDark ? {
              background: "linear-gradient(120deg, rgba(34,57,92,0.95) 0%, rgba(11,22,35,0.92) 100%)",
              border: "1.5px solid rgba(79,125,102,0.18)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)"
            } : {}}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-6">
              {t('sendMessage')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-[#E5E7EB] mb-2">{t('fullName')}</label>
                <input type="text" id="name" name="from_name" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4F7D66] focus:border-transparent dark:bg-[#0D1B2A] dark:text-[#E5E7EB]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-[#E5E7EB] mb-2">{t('email')}</label>
                <input type="email" id="email" name="from_email" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4F7D66] focus:border-transparent dark:bg-[#0D1B2A] dark:text-[#E5E7EB]" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-[#E5E7EB] mb-2">{t('message')}</label>
                <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4F7D66] focus:border-transparent dark:bg-[#0D1B2A] dark:text-[#E5E7EB]" />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full text-white py-3 transition-all duration-300"
                style={isDark ? {
                  background: isSubmitting ? "#666" : "linear-gradient(90deg, #0B1623 0%, #22395c 100%)"
                } : {
                  background: isSubmitting ? "#666" : "linear-gradient(120deg, #0b3d2e 0%, #4F7D66 100%)"
                }}
                onMouseEnter={e => {
                  if (!isSubmitting && isDark) e.currentTarget.style.background = "linear-gradient(90deg, #22395c 0%, #355a8a 100%)";
                }}
                onMouseLeave={e => {
                  if (!isSubmitting && isDark) e.currentTarget.style.background = "linear-gradient(90deg, #0B1623 0%, #22395c 100%)";
                }}
              >
                {isSubmitting ? 'Sending...' : t('send')}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-[#112B3C] p-8 rounded-xl shadow-lg"
              style={isDark ? {
                background: "linear-gradient(120deg, rgba(34,57,92,0.95) 0%, rgba(11,22,35,0.92) 100%)",
                border: "1.5px solid rgba(79,125,102,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18)"
              } : {}}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-6">
                {t('contactInfo')}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#4F7D66] mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-[#E5E7EB]">
                      {t('address')}
                    </p>
                    <p className="text-gray-600 dark:text-[#E5E7EB]">
                      Küçükbalıklı, 5. Bilgin Sk. No:10, 16250 Osmangazi̇/Bursa
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#4F7D66] mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-[#E5E7EB]">
                      {t('phone')}
                    </p>
                    <a
                      href="tel:+905343168831"
                      className="text-[#4F7D66] hover:underline"
                    >
                      +90 534 316 88 31 — Yusuf Alkhatib
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#4F7D66] mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-[#E5E7EB]">
                      {t('phone')}
                    </p>
                    <a
                      href="tel:+905380351773"
                      className="text-[#4F7D66] hover:underline"
                    >
                      +90 538 035 17 73 — Mustafa Alkhatib
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#4F7D66] mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-[#E5E7EB]">
                      {t('email')}
                    </p>
                    <a
                      href="mailto:info@bursahilal.com"
                      className="text-[#4F7D66] hover:underline"
                    >
                      info@bursahilal.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white dark:bg-[#112B3C] p-8 rounded-xl shadow-lg mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-4">Find Us</h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.7534180371867!2d29.084037699999996!3d40.2145477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3f8dbf5b6da9%3A0x5b93dfe302ff42e0!2z2KjZiNi12Kcg2YfZhNin2YQgQlVSU0EgSElMQUw!5e0!3m2!1sar!2str!4v1753362399993!5m2!1sar!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.75rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BURSA HILAL ÖRME TEKSTİL Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer({ isDark, t }) {
  return (
    <footer className="text-white py-12 transition-all duration-400"
      style={isDark ? {
        background: "linear-gradient(90deg, #0B1623 0%, #22395c 100%)"
      } : {
        background: "linear-gradient(120deg, #0b3d2e 0%, #4F7D66 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={logoImage}
                alt="BURSA HILAL ÖRME TEKSTİL Logo"
                className="w-10 h-10 object-contain rounded-lg mr-3"
              />
              <div>
                <div className="text-lg font-semibold text-white drop-shadow-md">BURSA HILAL ÖRME</div>
                <div className="text-sm opacity-90 text-white drop-shadow">TEKSTİL LTD.ŞTİ</div>
              </div>
            </div>
            <p className="mb-4 max-w-md text-white opacity-95 drop-shadow">{t('companyDescription')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white drop-shadow-md">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-white hover:text-[#FFD700] transition-colors drop-shadow"
                >
                  {t('home')}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white hover:text-[#FFD700] transition-colors drop-shadow"
                >
                  {t('about')}
                </a>
              </li>
              <li>
                <a
                  href="/catalog"
                  className="text-white hover:text-[#FFD700] transition-colors drop-shadow"
                >
                  {t('catalog')}
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-white hover:text-[#FFD700] transition-colors drop-shadow"
                >
                  {t('gallery')}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white hover:text-[#FFD700] transition-colors drop-shadow"
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white drop-shadow-md">{t('contact')}</h3>
            <div className="space-y-2 text-white">
              <a
                href="https://maps.app.goo.gl/btQ1xjfyhzsRtj2c2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD700] transition-colors flex items-center mt-3 drop-shadow"
              >
                <MapPin className="h-4 w-4 mr-2" />
                <span className="leading-6">
                  Küçükbalıklı, 5. Bilgin Sk. No:10,<br />16250 Osmangazi/Bursa
                </span>
              </a>
              <div className="space-y-3">
                <a
                  href="tel:+905380351773"
                  className="flex items-center text-white hover:text-[#25D366] transition-colors bg-white/10 rounded-lg p-3 hover:bg-white/20 drop-shadow"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <div>
                    <div className="font-medium">Mustafa Alkhatib</div>
                    <div className="text-sm opacity-80">+90 538 035 17 73</div>
                  </div>
                </a>
                <a
                  href="tel:+905343168831"
                  className="flex items-center text-white hover:text-[#25D366] transition-colors bg-white/10 rounded-lg p-3 hover:bg-white/20 drop-shadow"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <div>
                    <div className="font-medium">Yusuf Alkhatib</div>
                    <div className="text-sm opacity-80">+90 534 316 88 31</div>
                  </div>
                </a>
              </div>
              <a
                href="mailto:info@bursahilal.com"
                className="text-white hover:text-[#FFD700] transition-colors flex items-center mt-3 drop-shadow"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@bursahilal.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-white opacity-90 drop-shadow">© 2025 BURSA HILAL ÖRME TEKSTİL LTD.ŞTİ. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}



// Translation System
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    catalog: "Catalog",
    gallery: "Gallery",
    contact: "Contact",
    
    // Hero Section
    heroTitle: "Premium Textile Manufacturing",
    heroSubtitle: "Crafting exceptional fabrics since 2005 with 20+ years of expertise in textile manufacturing and distribution.",
    learnMore: "Learn More",
    
    // Statistics
    yearsExperience: "20+ Years of Experience",
    countriesServed: "10+ Countries Served",
    productsAvailable: "50+ Products Available",
    customerSatisfaction: "90% Customer Satisfaction",
    
    // Featured Products
    featuredProducts: "Our Featured Products",
    featuredProductsSubtitle: "Discover our premium collection of textile products, crafted with precision and designed for excellence.",
    viewFullCatalog: "View Full Catalog",
    
    // Product Names
    upholsteryFabrics: "Upholstery Fabrics",
    carpets: "Carpets",
    curtains: "Curtains",
    
    // Product Titles
    premiumJacquardVelvet: "Premium Jacquard Velvet",
    classicJacquardDesign: "Classic Jacquard Design",
    contemporarySohoFabric: "Contemporary Soho Fabric",
    urbanSohoCollection: "Urban Soho Collection",

    chineseCizgiFabric: "Chinese Cizgi Fabric",
    chineseBuffyFabric: "Chinese Buffy Fabric",
    chineseBuffyFabric2: "Chinese Buffy Fabric",
    chineseBuffyFabric3: "Chinese Buffy Fabric",
    chineseBuffyFabric7: "Chinese Buffy Fabric",
    chineseBuffyFabric9: "Chinese Buffy Fabric",
    chineseBukle77Fabric: "Chinese Bukle Fabric",
    chineseBuffyFabric22: "Chinese Buffy Fabric",
    chineseBlackoutCurtains: "Chinese Blackout Curtains",
    chineseBukle470Fabric: "Chinese Bukle Fabric",
    chineseBukleFabric: "Chinese Bukle Fabric",
    chineseBukleFabric2: "Chinese Bukle Fabric",
    chineseBukleFabric4: "Chinese Bukle Fabric",
    traditionalPrayerRug: "Traditional Prayer Rug",
    modernAreaRug: "Modern Area Rug",

    jacquardCurtains: "Jacquard Curtains",
    blackoutCurtains: "Blackout Curtains",
    
    // Product Descriptions
    upholsteryDesc: "Elegant and durable fabrics for furniture and upholstery",
    carpetsDesc: "Premium floor coverings and area rugs for modern spaces",
    curtainsDesc: "Elegant window treatments and decorative curtains",
    
    // Product Descriptions
    premiumJacquardVelvetDesc: "Elegant grey jacquard velvet with sophisticated patterns",
    classicJacquardDesignDesc: "Traditional patterns with modern appeal",
    contemporarySohoFabricDesc: "Modern textile for fashion and decor",
    urbanSohoCollectionDesc: "Versatile fabrics for contemporary designs",

    chineseCizgiFabricDesc: "Premium Chinese fabric with elegant patterns and superior quality",
    chineseBuffyFabricDesc: "Premium Chinese Buffy fabric with two weight options for different applications",
    chineseBuffyFabric2Desc: "Premium Chinese Buffy fabric with two weight options for different applications",
    chineseBuffyFabric3Desc: "Premium Chinese Buffy fabric with two weight options for different applications",
    chineseBuffyFabric7Desc: "Premium Chinese Buffy fabric with two weight options for different applications",
    chineseBuffyFabric9Desc: "Premium Chinese Buffy fabric with two weight options for different applications",
    chineseBukle77FabricDesc: "Premium Chinese Bukle fabric with elegant texture and superior quality",
    chineseBuffyFabric22Desc: "Premium Chinese Buffy fabric with two weight options for different applications",
    chineseBlackoutCurtainsDesc: "Premium Chinese blackout curtains for complete light control",
    chineseBukle470FabricDesc: "Premium Chinese Bukle fabric with elegant texture and superior quality",
    chineseBukleFabricDesc: "Premium Chinese Bukle fabric with elegant texture and superior quality",
    chineseBukleFabric2Desc: "Premium Chinese Bukle fabric with elegant texture and superior quality",
    chineseBukleFabric4Desc: "Premium Chinese Bukle fabric with elegant texture and superior quality",
    traditionalPrayerRugDesc: "Handcrafted prayer rugs with traditional patterns",
    modernAreaRugDesc: "Contemporary designs for modern spaces",

    jacquardCurtainsDesc: "Elegant jacquard curtains with sophisticated patterns",
    blackoutCurtainsDesc: "Premium blackout curtains for complete light control",
    
    // About Page
    aboutTitle: "About Bursa Hilal Tekstil",
    aboutSubtitle: "Your Trusted Partner in Premium Textile Manufacturing",
    aboutDescription: "Founded in 2010, Bursa Hilal Tekstil has been at the forefront of textile manufacturing, providing high-quality fabrics and materials to customers worldwide. Our commitment to excellence and innovation has made us a trusted name in the industry.",
    ourHeritage: "Our Heritage",
    heritageText1: "With over 20 years of experience since 2005, BURSA HILAL ÖRME TEKSTİL LTD.ŞTİ has established itself as a premier manufacturer of high-quality fabrics. Founded on the principles of excellence, innovation, and customer satisfaction, we have grown from a small local operation to an internationally recognized textile company.",
    heritageText2: "Our journey began with a simple vision: to create exceptional textiles that combine traditional Turkish craftsmanship with modern manufacturing techniques. Today, we proudly serve clients across more than 10 countries, delivering premium fabrics that meet the highest international standards.",
    heritageText3: "Located in the heart of Bursa, Turkey's textile capital, we leverage our strategic position to source the finest materials and employ skilled artisans who bring decades of experience to every product we create. Our commitment to quality and innovation has made us a trusted partner for fashion designers, home decor manufacturers, and textile distributors worldwide.",
    heritageText4: "As we look to the future, we remain dedicated to pushing the boundaries of textile manufacturing while maintaining the traditional values that have made us successful. Our investment in cutting-edge technology, combined with our respect for time-honored techniques, ensures that every fabric we produce meets the evolving needs of our global clientele.",
    whyChooseUs: "Why Choose Us",
    whyChooseUsSubtitle: "Discover what sets us apart in the competitive world of textile manufacturing.",
    yearsExperienceTitle: "20+ Years Experience",
    yearsExperienceDesc: "Over a decade of expertise in premium textile manufacturing and export.",
    premiumMachinesTitle: "Premium Jacquard Machines",
    premiumMachinesDesc: "State-of-the-art machinery ensuring the highest quality fabric production.",
    trustedClientsTitle: "Trusted by Global Clients",
    trustedClientsDesc: "Serving customers across 10+ countries with consistent quality and reliability.",
    customDesignsTitle: "Custom Designs Available",
    customDesignsDesc: "Tailored solutions to meet your specific textile requirements and designs.",
    
    // Gallery Page
    galleryTitle: "Gallery",
    gallerySubtitle: "Take a visual journey through our manufacturing processes, facilities, and premium textile products.",
    companyLogoWall: "Company Logo Wall",
    companyLogoWallDesc: "Our brand identity displayed prominently",
    storefrontView: "Storefront View",
    storefrontViewDesc: "Our modern textile showroom entrance",
    interiorShowroom: "Interior Showroom",
    interiorShowroomDesc: "Inside our fabric display area",
    containerFactory: "Container & Factory",
    containerFactoryDesc: "Our manufacturing and shipping facilities",
    
    // Catalog Page
    catalogTitle: "Fabric Catalog",
    catalogSubtitle: "Explore Our Complete Collection",
    viewDetails: "View Details",
    
    // Contact Page
    contactTitle: "Contact Us",
    contactSubtitle: "Get in Touch with Our Team",
    sendMessage: "Send us a Message",
    fullName: "Full Name",
    email: "Email Address",
    message: "Message",
    send: "Send Message",
    contactInfo: "Contact Information",
    address: "Address",
    phone: "Phone",
    workingHours: "Working Hours",
    
    // Footer
    quickLinks: "Quick Links",
    companyDescription: "Premium textile manufacturing with 20+ years of expertise. Serving clients worldwide with exceptional quality and innovation.",
    allRightsReserved: "All rights reserved.",
    
    // Product Details
    productId: "Product ID",
    composition: "Composition",
    width: "Width",
    weight: "Weight",
    category: "Category",
    description: "Description",
    jacquard: "Jacquard",
    velvet: "Velvet",
    soho: "Soho",
    babyface: "Babyface",
    nubuck: "Nubuck",
    cizgi: "Cizgi",
    buffy: "Buffy",
    bukle: "Bukle",
    blackout: "Blackout",
    chinese: "Chinese",
    carpet: "Carpet",
    curtain: "Curtain",
    new: "NEW",
    
    // Modal
    close: "Close",
    previous: "Previous",
    next: "Next",
    price: "Price",
    priceOnRequest: "Price on Request",
    minimumOrder: "Minimum Order",
    opacityLevel: "Opacity Level",
    containerMinimum: "Container (Container)",
    twoThousandMeters: "2000 meters",
    plain: "Plain",
    printed: "Printed",
    bulkOrderMessage: "For large orders, we provide special prices and competitive offers – please contact us for details.",
    
    // WhatsApp
    whatsappMessage: "Hello! I'm interested in your textile products.",
    searchPlaceholder: "Search by Product ID, Name, or Type...",
    allTypes: "All Types",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "من نحن",
    catalog: "الكتالوج",
    gallery: "المعرض",
    contact: "اتصل بنا",
    
    // Hero Section
    heroTitle: "تصنيع المنسوجات المميزة",
    heroSubtitle: "نصنع الأقمشة الاستثنائية منذ 2005 مع أكثر من 20 عاماً من الخبرة في تصنيع وتوزيع المنسوجات.",
    learnMore: "اعرف المزيد",
    
    // Statistics
    yearsExperience: "20+ سنوات من الخبرة",
    countriesServed: "10+ دولة نخدمها",
    productsAvailable: "50+ منتج متاح",
    customerSatisfaction: "90% رضا العملاء",
    
    // Featured Products
    featuredProducts: "منتجاتنا المميزة",
    featuredProductsSubtitle: "اكتشف مجموعتنا المميزة من المنتجات النسيجية، المصنوعة بدقة ومصممة للتميز.",
    viewFullCatalog: "عرض الكتالوج الكامل",
    
    // Product Names
    upholsteryFabrics: "أقمشة الأثاث",
    carpets: "السجاد",
    curtains: "الستائر",
    
    // Product Titles
    premiumJacquardVelvet: "مخمل جاكار مميز",
    classicJacquardDesign: "تصميم جاكار كلاسيكي",
    contemporarySohoFabric: "قماش سوهو معاصر",
    urbanSohoCollection: "مجموعة سوهو الحضرية",

    chineseCizgiFabric: "قماش صيني سيزجي",
    chineseBuffyFabric: "قماش صيني بافي",
    chineseBuffyFabric2: "قماش صيني بافي",
    chineseBuffyFabric3: "قماش صيني بافي",
    chineseBuffyFabric7: "قماش صيني بافي",
    chineseBuffyFabric9: "قماش صيني بافي",
    chineseBukle77Fabric: "قماش صيني بوكلي",
    chineseBuffyFabric22: "قماش صيني بافي",
    chineseBlackoutCurtains: "ستائر صينية بلاك أوت",
    chineseBukle470Fabric: "قماش صيني بوكلي",
    chineseBukleFabric: "قماش صيني بوكلي",
    chineseBukleFabric2: "قماش صيني بوكلي",
    chineseBukleFabric4: "قماش صيني بوكلي",
    traditionalPrayerRug: "سجادة صلاة تقليدية",
    modernAreaRug: "سجادة منطقة عصرية",

    jacquardCurtains: "ستائر جاكار",
    blackoutCurtains: "ستائر بلاك أوت",
    
    // Product Descriptions
    upholsteryDesc: "أقمشة أنيقة ومتينة للأثاث والتنجيد",
    carpetsDesc: "أغطية أرضية مميزة وسجاد للمساحات الحديثة",
    curtainsDesc: "معالجات نوافذ أنيقة وستائر زخرفية",
    
    // Product Descriptions
    premiumJacquardVelvetDesc: "مخمل جاكار رمادي أنيق مع أنماط متطورة",
    classicJacquardDesignDesc: "أنماط تقليدية مع جاذبية عصرية",
    contemporarySohoFabricDesc: "نسيج عصري للأزياء والديكور",
    urbanSohoCollectionDesc: "أقمشة متعددة الاستخدامات للتصاميم المعاصرة",

    chineseCizgiFabricDesc: "قماش صيني مميز مع أنماط أنيقة وجودة عالية",
    chineseBuffyFabricDesc: "قماش صيني بافي مميز مع خيارين للوزن لتطبيقات مختلفة",
    chineseBuffyFabric2Desc: "قماش صيني بافي مميز مع خيارين للوزن لتطبيقات مختلفة",
    chineseBuffyFabric3Desc: "قماش صيني بافي مميز مع خيارين للوزن لتطبيقات مختلفة",
    chineseBuffyFabric7Desc: "قماش صيني بافي مميز مع خيارين للوزن لتطبيقات مختلفة",
    chineseBuffyFabric9Desc: "قماش صيني بافي مميز مع خيارين للوزن لتطبيقات مختلفة",
    chineseBukle77FabricDesc: "قماش صيني بوكلي مميز مع نسيج أنيق وجودة عالية",
    chineseBuffyFabric22Desc: "قماش صيني بافي مميز مع خيارين للوزن لتطبيقات مختلفة",
    chineseBlackoutCurtainsDesc: "ستائر صينية بلاك أوت مميزة للتحكم الكامل في الضوء",
    chineseBukle470FabricDesc: "قماش صيني بوكلي مميز مع نسيج أنيق وجودة عالية",
    chineseBukleFabricDesc: "قماش صيني بوكلي مميز مع نسيج أنيق وجودة عالية",
    chineseBukleFabric2Desc: "قماش صيني بوكلي مميز مع نسيج أنيق وجودة عالية",
    chineseBukleFabric4Desc: "قماش صيني بوكلي مميز مع نسيج أنيق وجودة عالية",
    traditionalPrayerRugDesc: "سجاد صلاة يدوي الصنع مع أنماط تقليدية",
    modernAreaRugDesc: "تصاميم معاصرة للمساحات الحديثة",

    jacquardCurtainsDesc: "ستائر جاكار أنيقة مع أنماط متطورة",
    blackoutCurtainsDesc: "ستائر بلاك أوت مميزة للتحكم الكامل في الضوء",
    
    // About Page
    aboutTitle: "عن بورصة هلال تكستيل",
    aboutSubtitle: "شريكك الموثوق في تصنيع المنسوجات المميزة",
    aboutDescription: "تأسست ال تكستيل في عام 2010، وكانت في طليعة تصنيع المنسوجات، حيث توفر أقمشة ومواد عالية الجودة للعملاء في جميع أنحاء العالم. التزامنا بالتميز والابتكار جعلنا اسماً موثوقاً في الصناعة.",
    ourHeritage: "تراثنا",
    heritageText1: "مع أكثر من 20 عاماً من الخبرة منذ عام 2005، أثبتت بورصة هلال أورمة تكستيل أنها مصنع رائد للأقمشة عالية الجودة. تأسست على مبادئ التميز والابتكار ورضا العملاء، نمت من عملية محلية صغيرة إلى شركة منسوجات معترف بها دولياً.",
    heritageText2: "بدأت رحلتنا برؤية بسيطة: خلق منسوجات استثنائية تجمع بين الحرفية التركية التقليدية وتقنيات التصنيع الحديثة. اليوم، نخدم بفخر عملاء في أكثر من 10 دول، ونوفر أقمشة مميزة تلبي أعلى المعايير الدولية.",
    heritageText3: "تقع في قلب بورصة، عاصمة المنسوجات التركية، نستفيد من موقعنا الاستراتيجي للحصول على أفضل المواد وتوظيف حرفيين ماهرين يجلبون عقوداً من الخبرة لكل منتج نصنعه. التزامنا بالجودة والابتكار جعلنا شريكاً موثوقاً لمصممي الأزياء ومصنعي ديكور المنازل وموزعي المنسوجات في جميع أنحاء العالم.",
    heritageText4: "بينما نتطلع إلى المستقبل، نحافظ على التزامنا بدفع حدود تصنيع المنسوجات مع الحفاظ على القيم التقليدية التي جعلتنا ناجحين. استثمارنا في التكنولوجيا المتطورة، جنباً إلى جنب مع احترامنا للتقنيات التقليدية، يضمن أن كل قماش ننتجه يلبي الاحتياجات المتطورة لعملائنا العالميين.",
    whyChooseUs: "لماذا تختارنا",
    whyChooseUsSubtitle: "اكتشف ما يميزنا في عالم تصنيع المنسوجات التنافسي.",
    yearsExperienceTitle: "20+ سنوات من الخبرة",
    yearsExperienceDesc: "أكثر من عقد من الخبرة في تصنيع وتصدير المنسوجات المميزة.",
    premiumMachinesTitle: "آلات جاكار مميزة",
    premiumMachinesDesc: "آلات متطورة تضمن أعلى جودة في إنتاج الأقمشة.",
    trustedClientsTitle: "موثوق به من قبل العملاء العالميين",
    trustedClientsDesc: "نخدم العملاء في أكثر من 10 دول بجودة وموثوقية ثابتة.",
    customDesignsTitle: "تصاميم مخصصة متاحة",
    customDesignsDesc: "حلول مصممة خصيصاً لتلبية متطلبات وتصاميم المنسوجات الخاصة بك.",
    
    // Gallery Page
    galleryTitle: "المعرض",
    gallerySubtitle: "انطلق في رحلة بصرية عبر عمليات التصنيع والمرافق ومنتجات المنسوجات المميزة.",
    companyLogoWall: "جدار شعار الشركة",
    companyLogoWallDesc: "هوية علامتنا التجارية معروضة بشكل بارز",
    storefrontView: "منظر الواجهة الأمامية",
    storefrontViewDesc: "مدخل معرض المنسوجات الحديث",
    interiorShowroom: "المعرض الداخلي",
    interiorShowroomDesc: "داخل منطقة عرض الأقمشة",
    containerFactory: "الحاويات والمصنع",
    containerFactoryDesc: "مرافق التصنيع والشحن",
    
    // Catalog Page
    catalogTitle: "كتالوج الأقمشة",
    catalogSubtitle: "استكشف مجموعتنا الكاملة",
    viewDetails: "عرض التفاصيل",
    
    // Contact Page
    contactTitle: "اتصل بنا",
    contactSubtitle: "تواصل مع فريقنا",
    sendMessage: "أرسل لنا رسالة",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    send: "إرسال الرسالة",
    contactInfo: "معلومات الاتصال",
    address: "العنوان",
    phone: "الهاتف",
    workingHours: "ساعات العمل",
    
    // Footer
    quickLinks: "روابط سريعة",
    companyDescription: "تصنيع منسوجات مميزة مع أكثر من 20 عاماً من الخبرة. نخدم العملاء في جميع أنحاء العالم بجودة استثنائية وابتكار.",
    allRightsReserved: "جميع الحقوق محفوظة.",
    
    // Product Details
    productId: "رقم المنتج",
    composition: "التركيب",
    width: "العرض",
    weight: "الوزن",
    category: "الفئة",
    description: "الوصف",
    jacquard: "جاكار",
    velvet: "مخمل",
    soho: "سوهو",
    babyface: "بيبي فيس",
    nubuck: "نوباك",
    cizgi: "سيزجي",
    buffy: "بافي",
    bukle: "بوكلي",
    blackout: "بلاك أوت",
    chinese: "صيني",
    carpet: "سجادة",
    curtain: "ستارة",
    new: "جديد",
    
    // Modal
    close: "إغلاق",
    previous: "السابق",
    next: "التالي",
    price: "السعر",
    priceOnRequest: "يُحدد عند الطلب",
    minimumOrder: "الحد الأدنى للطلب",
    opacityLevel: "درجة التعتيم",
    containerMinimum: "حاوية (كونتيرا)",
    twoThousandMeters: "2000 متر",
    plain: "سادة",
    printed: "مطبوع",
    bulkOrderMessage: "للطلبات الكبيرة، نوفر أسعارًا خاصة وعروضًا تنافسية – يرجى التواصل معنا للحصول على التفاصيل.",
    
    // WhatsApp
    whatsappMessage: "مرحباً! أنا مهتم بمنتجاتكم النسيجية.",
    searchPlaceholder: "ابحث برقم الكتالوج أو الاسم أو النوع...",
    allTypes: "كل الأنواع",
  }
};

// Language Management Hook
function useLanguage() {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'en';
  });

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    
    // Update document direction for RTL support
    if (newLang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    // Set initial direction
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [language]);

  return { language, toggleLanguage, t };
}

// Main App Component
function App() {
  const [isDark, toggleDarkMode] = useDarkMode();
  const { language, toggleLanguage, t } = useLanguage();
  return (
    <Router>
      <div key={`theme-${isDark}`} className={`min-h-screen transition-all duration-400 ${isDark ? 'dark' : ''}`}>
        <Navigation key={`nav-${isDark}`} language={language} toggleLanguage={toggleLanguage} t={t} isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage key={`home-${isDark}`} isDark={isDark} t={t} />} />
          <Route path="/about" element={<AboutPage key={`about-${isDark}`} isDark={isDark} t={t} />} />
          <Route path="/catalog" element={<CatalogPage key={`catalog-${isDark}`} isDark={isDark} t={t} />} />
          <Route path="/gallery" element={<GalleryPage key={`gallery-${isDark}`} isDark={isDark} t={t} />} />
          <Route path="/contact" element={<ContactPage key={`contact-${isDark}`} isDark={isDark} t={t} />} />
        </Routes>
        <Footer key={`footer-${isDark}`} isDark={isDark} t={t} />
        <WhatsAppButton key={`whatsapp-${isDark}`} t={t} isDark={isDark} />
      </div>
    </Router>
  );
}

export default App;
