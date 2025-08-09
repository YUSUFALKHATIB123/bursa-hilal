import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappChatButton = () => (
  <a
    href="https://wa.me/message/BMTJUMLKSUUQB1"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="تواصل عبر واتساب"
    style={{
      position: "fixed",
      bottom: 32,
      right: 32,
      width: 56,
      height: 56,
      background: "linear-gradient(120deg, #0b3d2e 0%, #4F7D66 100%)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 24px rgba(79,125,102,0.18)",
      zIndex: 1000,
      cursor: "pointer",
      transition: "transform 0.18s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.16s",
      animation: "whatsapp-pop 0.45s cubic-bezier(.68,-0.55,.27,1.55)",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "scale(1.11)";
      e.currentTarget.style.boxShadow = "0 8px 32px rgba(79,125,102,0.28)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 24px rgba(79,125,102,0.18)";
    }}
  >
    <FaWhatsapp size={32} color="#fff" style={{ display: "block" }} />
    <style>{`
      @keyframes whatsapp-pop {
        0% { transform: scale(0.5); opacity: 0; }
        80% { transform: scale(1.08); opacity: 1; }
        100% { transform: scale(1); opacity: 1; }
      }
    `}</style>
  </a>
);

export default WhatsappChatButton; 