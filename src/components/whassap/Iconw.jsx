"use client";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./iconw.module.css";

const WhatsAppMobileButton = () => {
  const phoneNumber = "51965683542";
  const defaultMessage = "Hola, me gustaría obtener más información";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles["whatsapp-mobile-btn"]}
    >
      <FaWhatsapp size={36} color="white" />
    </a>
  );
};

export default WhatsAppMobileButton;
