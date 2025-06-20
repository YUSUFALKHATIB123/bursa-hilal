import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  Moon,
  Sun,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import logoImage from "./assets/logo.avif";
import fabricSampleImage from "./assets/fabric-sample.jpeg";
import companyBuildingImage from "./assets/company-building.webp";
import babyfaceColor1 from "./assets/babyface-color1.jpeg";
import babyfaceColor2 from "./assets/babyface-color2.jpeg";
import babyfaceColor3 from "./assets/babyface-color3.jpeg";
import couchIcon from "./assets/couch.png";
import cushionIcon from "./assets/cushion.png";
import carpetIcon from "./assets/prayer.png";
// New fabric images
import jakar1 from "./assets/Jakar-1.jpg";
import jakar2 from "./assets/Jakar-2.jpg";
import jakarGri2 from "./assets/Jakar-Gri-2.jpg";
import sohoImage from "./assets/soho.jpg";
import soho1Image from "./assets/soho1.jfif";
import darkColorTailoring from "./assets/dark-color-tailoring-leather-tissues-showroom.jpg";
import velvet1 from "./assets/Velvet1.jpg";
import velvet2 from "./assets/Velvet2.jpg";
import nubuk002 from "./assets/nubuk-002.jpg";
import decoratedInterior from "./assets/decorated-interior-empty-home.jpg";
import prayer1251 from "./assets/1251.jpg";
// Gallery images
import BURSA1 from "./assets/BURSA1.webp";
import BURSA2 from "./assets/BURSA2.webp";
import BURSA3 from "./assets/BURSA3.webp";
import BURSA4 from "./assets/BURSA4.webp";

import "./App.css";
import upholsteryImg from "./assets/upholstery.webp";
import cushionsImg from "./assets/cushions.webp";
import carpetImg from "./assets/carpet.webp";
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

// Product Details Modal Component with Image Carousel
function ProductDetailsModal({ product, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  if (!isOpen || !product) return null;

  const whatsappNumber = "+905343168831";
  const message = `Hello! I'm interested in your textile product: ${product.name} (${product.productId}). Could you please provide more information?`;
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(
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

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextImage(); // Swipe left
    }
    if (touchEndX - touchStartX > 50) {
      prevImage(); // Swipe right
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
      <div className="bg-white dark:bg-[#112B3C] rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-slideUp">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <span className="text-sm text-[#4F7D66] font-medium uppercase">
              {product.category}
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
            <img
              src={images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? "bg-white"
                          : "bg-white bg-opacity-50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 dark:text-[#E5E7EB] text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-[#E5E7EB]">
                  Product ID:
                </span>
                <span className="text-gray-600 dark:text-[#E5E7EB]">
                  {product.productId}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-[#E5E7EB]">
                  Composition:
                </span>
                <span className="text-gray-600 dark:text-[#E5E7EB]">
                  {product.composition}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-[#E5E7EB]">
                  Width:
                </span>
                <span className="text-gray-600 dark:text-[#E5E7EB]">
                  {product.width}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-[#E5E7EB]">
                  Weight:
                </span>
                <span className="text-gray-600 dark:text-[#E5E7EB]">
                  {product.weight || "250 g/m²"}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Start Chat
              </a>
            </div>
          </div>
        </div>
      </div>
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
function Navigation() {
  const [isDark, toggleDarkMode] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Fabric Catalog", href: "/catalog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0b3d2e] to-[#194d37] text-white shadow-lg transition-all duration-400">
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
                  className="text-[#E5E7EB] hover:text-white hover:bg-[#4F7D66] px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="text-white hover:bg-[#4F7D66]"
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
                className="text-white hover:bg-[#4F7D66]"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1C3B2C] border-t border-[#4F7D66]">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white hover:bg-[#4F7D66] block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
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
function WhatsAppButton() {
  const whatsappNumber = "+905343168831";
  const message = "Hello! I'm interested in your textile products.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(
    "+",
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20B858] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
    >
      <MessageCircle className="h-6 w-6 animate-bounce" />
    </a>
  );
}

// Home Page Component
function HomePage() {
  const navigate = useNavigate();

  const count15 = useCountUp(15);
  const count10 = useCountUp(10);
  const count50 = useCountUp(50);
  const count90 = useCountUp(90);

  const featuredProducts = [
    {
      name: "Upholstery  Fabrics",
      description: "Elegant and durable fabrics for furniture and upholstery",
      image: upholsteryImg,
      link: "furnishing-fabrics",
    },
    {
      name: "Cushions",
      description: "Soft and stylish cushions for comfort and decoration",
      image: cushionsImg,
      link: "cushions",
    },
    {
      name: "Carpets",
      description: "Premium floor coverings and area rugs for modern spaces",
      image: carpetImg,
      link: "carpets",
    },
  ];

  const handleLearnMore = (link) => {
    navigate("/catalog", { state: { scrollTo: link } });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0D1B2A] transition-all duration-400">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1C3B2C] to-[#4F7D66] dark:from-[#081521] dark:to-[#112B3C] text-white py-20 transition-all duration-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInLeft">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-[#E5E7EB]">
                Premium Textile Manufacturing
              </h1>
              <p className="text-xl text-[#E5E7EB] opacity-90">
                Crafting exceptional fabrics since 2010 with 15+ years of
                expertise in premium textile production.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#4F7D66] hover:bg-[#3A5D4D] text-white hover:-translate-y-1 transition-all duration-300"
                  onClick={() => (window.location.href = "/catalog")}
                >
                  View Full Catalog
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
                    className="border-[#0b3d2e] text-[#0b3d2e] bg-white hover:bg-white hover:text-[#0b3d2e] 
                     dark:text-white dark:border-[#0b3d2e] 
                   hover:scale-105 transition-all duration-300 w-full"
                  >
                    Contact Us
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
      <section className="py-16 bg-gray-50 dark:bg-[#0D1B2A] transition-all duration-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div
              id="counter-15"
              className="p-8 bg-white dark:bg-[#112B3C] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
            >
              <div className="text-4xl font-bold text-[#1C3B2C] dark:text-[#4F7D66] mb-2">
                {count15}+
              </div>
              <div className="text-lg text-gray-600 dark:text-[#E5E7EB]">
                Years of Experience
              </div>
            </div>
            <div
              id="counter-10"
              className="p-8 bg-white dark:bg-[#112B3C] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
            >
              <div className="text-4xl font-bold text-[#1C3B2C] dark:text-[#4F7D66] mb-2">
                {count10}+
              </div>
              <div className="text-lg text-gray-600 dark:text-[#E5E7EB]">
                Countries Exported
              </div>
            </div>
            <div
              id="counter-50"
              className="p-8 bg-white dark:bg-[#112B3C] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
            >
              <div className="text-4xl font-bold text-[#1C3B2C] dark:text-[#4F7D66] mb-2">
                {count50}+
              </div>
              <div className="text-lg text-gray-600 dark:text-[#E5E7EB]">
                Products
              </div>
            </div>
            <div
              id="counter-90"
              className="p-8 bg-white dark:bg-[#112B3C] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
            >
              <div className="text-4xl font-bold text-[#1C3B2C] dark:text-[#4F7D66] mb-2">
                {count90}%
              </div>
              <div className="text-lg text-gray-600 dark:text-[#E5E7EB]">
                Customer Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white dark:bg-[#0D1B2A] transition-all duration-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-4">
              Our Featured Products
            </h2>
            <p className="text-lg text-gray-600 dark:text-[#E5E7EB] max-w-2xl mx-auto">
              Discover our premium collection of textile products, crafted with
              precision and designed for excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#112B3C] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] animate-fadeInUp stagger-item"
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
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-[#E5E7EB] mb-4">
                    {product.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#1C3B2C] text-[#1C3B2C] hover:bg-[#1C3B2C] hover:text-white dark:border-[#4F7D66] dark:text-[#4F7D66] dark:hover:bg-[#4F7D66] dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
                    onClick={() => handleLearnMore(product.link)}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-[#1C3B2C] hover:bg-[#4F7D66] text-white hover:-translate-y-1 transition-all duration-300"
              onClick={() => (window.location.href = "/catalog")}
            >
              View Full Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// About Us Page Component
function AboutPage() {
  const whyChooseUs = [
    {
      title: "15+ Years Experience",
      description:
        "Over a decade of expertise in premium textile manufacturing and export.",
    },
    {
      title: "Premium Jacquard Machines",
      description:
        "State-of-the-art machinery ensuring the highest quality fabric production.",
    },
    {
      title: "Trusted by Global Clients",
      description:
        "Serving customers across 10+ countries with consistent quality and reliability.",
    },
    {
      title: "Custom Designs Available",
      description:
        "Tailored solutions to meet your specific textile requirements and designs.",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-[#0D1B2A] transition-all duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-6">
            About BURSA HILAL ÖRME TEKSTİL
          </h1>
          <p className="text-xl text-gray-600 dark:text-[#E5E7EB] max-w-3xl mx-auto">
            A legacy of excellence in textile manufacturing, combining
            traditional craftsmanship with modern innovation.
          </p>
        </div>

        {/* Company History */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInLeft">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-[#E5E7EB]">
                Our Heritage
              </h2>
              <p className="text-lg text-gray-600 dark:text-[#E5E7EB] leading-relaxed">
                With over 65 years of combined experience in the textile
                industry, BURSA HILAL ÖRME TEKSTİL LTD.ŞTİ has established
                itself as a premier manufacturer of high-quality fabrics.
                Founded on the principles of excellence, innovation, and
                customer satisfaction, we have grown from a small local
                operation to an internationally recognized textile company.
              </p>
              <p className="text-lg text-gray-600 dark:text-[#E5E7EB] leading-relaxed">
                Our journey began with a simple vision: to create exceptional
                textiles that combine traditional Turkish craftsmanship with
                modern manufacturing techniques. Today, we proudly serve clients
                across more than 10 countries, delivering premium fabrics that
                meet the highest international standards.
              </p>
              <p className="text-lg text-gray-600 dark:text-[#E5E7EB] leading-relaxed">
                Located in the heart of Bursa, Turkey's textile capital, we
                leverage our strategic position to source the finest materials
                and employ skilled artisans who bring decades of experience to
                every product we create. Our commitment to quality and
                innovation has made us a trusted partner for fashion designers,
                home decor manufacturers, and textile distributors worldwide.
              </p>
              <p className="text-lg text-gray-600 dark:text-[#E5E7EB] leading-relaxed">
                As we look to the future, we remain dedicated to pushing the
                boundaries of textile manufacturing while maintaining the
                traditional values that have made us successful. Our investment
                in cutting-edge technology, combined with our respect for
                time-honored techniques, ensures that every fabric we produce
                meets the evolving needs of our global clientele.
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
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover what sets us apart in the competitive world of textile
              manufacturing.
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
function CatalogPage() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("furnishing-fabrics");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (location.state?.scrollTo) {
      setActiveSection(location.state.scrollTo);
    }
  }, [location.state]);

  const sections = [
    { id: "furnishing-fabrics", name: "Upholstery Fabrics", icon: couchIcon },
    { id: "cushions", name: "Cushions", icon: cushionIcon },
    { id: "carpets", name: "Carpets", icon: carpetIcon },
  ];

  const products = {
    "furnishing-fabrics": [
      {
        id: 1,
        name: "Premium Jacquard Velvet",
        category: "jacquard",
        description: "Elegant grey jacquard velvet with sophisticated patterns",
        image: fabricSampleImage,
        productId: "JK-002",
        composition: "100% Polyester",
        width: "140cm",
        weight: "280 g/m²",
        isNew: true,
      },
      {
        id: 2,
        name: "Classic Jacquard Design",
        category: "jacquard",
        description: "Traditional patterns with modern appeal",
        images: [jakar1, jakar2, jakarGri2],
        image: jakar1,
        productId: "JK-001",
        composition: "100% Polyester",
        width: "140cm",
        weight: "270 g/m²",
        isJacquard: true,
      },
      {
        id: 3,
        name: "Contemporary Soho Fabric",
        category: "soho",
        description: "Modern textile for fashion and decor",
        images: [sohoImage],
        image: sohoImage,
        productId: "SH-001",
        composition: "65% Cotton, 35% Polyester",
        width: "150cm",
        weight: "220 g/m²",
      },
      {
        id: 4,
        name: "Urban Soho Collection",
        category: "soho",
        description: "Versatile fabrics for contemporary designs",
        image: soho1Image,
        productId: "SH-002",
        composition: "70% Cotton, 30% Polyester",
        width: "150cm",
        weight: "240 g/m²",
      },
      {
        id: 5,
        name: "Gentle Babyface Cotton",
        category: "babyface",
        description: "Soft and safe fabrics for children",
        images: [babyfaceColor1, babyfaceColor2, babyfaceColor3],
        image: babyfaceColor1,
        productId: "BF-001",
        composition: "100% Organic Cotton",
        width: "120cm",
        weight: "180 g/m²",
      },
      {
        id: 6,
        name: "Organic Babyface Series",
        category: "babyface",
        description: "Natural and hypoallergenic materials",
        image: darkColorTailoring,
        productId: "BF-002",
        composition: "100% Organic Cotton",
        width: "120cm",
        weight: "190 g/m²",
      },
      {
        id: 7,
        name: "Luxury Velvet Makhmal",
        category: "velvet",
        description: "Premium velvet fabric for upholstery",
        images: [velvet1, velvet2],
        image: velvet1,
        productId: "VM-001",
        composition: "100% Polyester",
        width: "140cm",
        weight: "320 g/m²",
      },
      {
        id: 8,
        name: "Soft Nubuck Texture",
        category: "nubuck",
        description: "Suede-like texture for premium applications",
        image: nubuk002,
        productId: "NB-001",
        composition: "100% Polyester",
        width: "140cm",
        weight: "290 g/m²",
        isNew: true,
      },
    ],
    cushions: [
      {
        id: 9,
        name: "Decorative Cushion Cover",
        category: "cushion",
        description: "Beautiful cushion covers for home decoration",
        image: decoratedInterior,
        productId: "CS-001",
        composition: "100% Cotton",
        width: "45cm x 45cm",
        weight: "150 g/m²",
      },
      {
        id: 10,
        name: "Premium Velvet Cushion",
        category: "cushion",
        description: "Luxurious velvet cushions for comfort",
        image: "/api/placeholder/400/400",
        productId: "CS-002",
        composition: "100% Polyester Velvet",
        width: "50cm x 50cm",
        weight: "200 g/m²",
      },
    ],
    carpets: [
      {
        id: 11,
        name: "Traditional Prayer Rug",
        category: "carpet",
        description: "Handcrafted prayer rugs with traditional patterns",
        image: prayer1251,
        productId: "CR-001",
        composition: "100% Wool",
        width: "120cm x 80cm",
        weight: "800 g/m²",
        isNew: true,
      },
      {
        id: 12,
        name: "Modern Area Rug",
        category: "carpet",
        description: "Contemporary designs for modern spaces",
        image: "/api/placeholder/400/400",
        productId: "CR-002",
        composition: "80% Wool, 20% Silk",
        width: "200cm x 150cm",
        weight: "900 g/m²",
      },
    ],
  };

  const currentProducts = products[activeSection] || [];

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-[#0D1B2A] transition-all duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-6">
            Fabric Catalog
          </h1>
          <p className="text-xl text-gray-600 dark:text-[#E5E7EB] max-w-3xl mx-auto">
            Explore our comprehensive collection of premium textiles, each
            crafted with precision and attention to detail.
          </p>
        </div>

        {/* Section Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 ${
                activeSection === section.id
                  ? "bg-[#0b3d2e] text-white shadow-lg"
                  : "bg-white text-[#0b3d2e] border-2 border-[#0b3d2e] hover:bg-[#0b3d2e] hover:text-white dark:bg-[#112B3C] dark:text-[#4F7D66] dark:border-[#4F7D66] dark:hover:bg-[#4F7D66] dark:hover:text-white"
              }`}
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white dark:bg-[#112B3C] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] animate-fadeInUp"
            >
              {/* New Label */}
              {product.isNew && (
                <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-md shadow-lg">
                  NEW
                </div>
              )}
              {/* Jacquard Label */}
              {product.isJacquard && (
                <div className="absolute top-3 right-3 z-10 bg-blue-500 text-white px-2 py-1 text-xs font-bold rounded-md shadow-lg">
                  Jacquard
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
                  className="w-full border-[#1C3B2C] text-[#1C3B2C] hover:bg-[#1C3B2C] hover:text-white dark:border-[#4F7D66] dark:text-[#4F7D66] dark:hover:bg-[#4F7D66] dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
                  onClick={() => handleViewDetails(product)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  View Details
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
      />
    </div>
  );
}

// Gallery Page Component
function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      title: "Company Logo Wall",
      description: "Our brand identity displayed prominently",
      image: BURSA1,
    },
    {
      id: 2,
      title: "Storefront View",
      description: "Our modern textile showroom entrance",
      image: BURSA2,
    },
    {
      id: 3,
      title: "Interior Showroom",
      description: "Inside our fabric display area",
      image: BURSA3,
    },
    {
      id: 4,
      title: "Container & Factory",
      description: "Our manufacturing and shipping facilities",
      image: BURSA4,
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-[#0D1B2A] transition-all duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-6">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 dark:text-[#E5E7EB] max-w-3xl mx-auto">
            Take a visual journey through our manufacturing processes,
            facilities, and premium textile products.
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
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-[#0D1B2A] transition-all duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-[#E5E7EB] max-w-3xl mx-auto">
            Get in touch with our team for inquiries, orders, or any questions
            about our premium textile products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-[#112B3C] p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-[#E5E7EB] mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4F7D66] focus:border-transparent dark:bg-[#0D1B2A] dark:text-[#E5E7EB]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-[#E5E7EB] mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4F7D66] focus:border-transparent dark:bg-[#0D1B2A] dark:text-[#E5E7EB]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-[#E5E7EB] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4F7D66] focus:border-transparent dark:bg-[#0D1B2A] dark:text-[#E5E7EB]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#1C3B2C] hover:bg-[#4F7D66] text-white py-3 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-[#112B3C] p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#4F7D66] mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-[#E5E7EB]">
                      Address
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
                      Phone
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
                      Phone
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
                      Email
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
            <div className="bg-white dark:bg-[#112B3C] p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-[#E5E7EB] mb-4">
                Find Us
              </h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d29.0!3d40.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEyJzAwLjAiTiAyOcKwMDAnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
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
function Footer() {
  return (
    <footer className="bg-[#1C3B2C] dark:bg-[#081521] text-white py-12 transition-all duration-400">
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
                <div className="text-lg font-semibold">BURSA HILAL ÖRME</div>
                <div className="text-sm opacity-80">TEKSTİL LTD.ŞTİ</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Premium textile manufacturing with 15+ years of expertise. Serving
              clients worldwide with exceptional quality and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/catalog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Fabric Catalog
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <a
                href="https://maps.app.goo.gl/btQ1xjfyhzsRtj2c2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F7D66] hover:text-white transition-colors flex items-center mt-3"
              >
                <MapPin className="h-4 w-4 mr-2" />
                <span className="leading-6">
                  Küçükbalıklı, 5. Bilgin Sk. No:10,
                  <br />
                  16250 Osmangazi/Bursa
                </span>
              </a>

              <div className="space-y-3">
                <a
                  href="tel:+905380351773"
                  className="flex items-center text-[#4F7D66] hover:text-[#25D366] transition-colors bg-white/10 rounded-lg p-3 hover:bg-white/20"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <div>
                    <div className="font-medium">Mustafa Alkhatib</div>
                    <div className="text-sm opacity-80">+90 538 035 17 73</div>
                  </div>
                </a>
                <a
                  href="tel:+905343168831"
                  className="flex items-center text-[#4F7D66] hover:text-[#25D366] transition-colors bg-white/10 rounded-lg p-3 hover:bg-white/20"
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
                className="text-[#4F7D66] hover:text-white transition-colors flex items-center mt-3"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@bursahilal.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 BURSA HILAL ÖRME TEKSTİL LTD.ŞTİ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
