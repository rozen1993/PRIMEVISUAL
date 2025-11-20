"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./VideoModal.module.css";
import { IoMdPlay } from "react-icons/io";

const newStyles = {
  opacity: 1,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
};

/* 🔥 Función para extraer ID de YouTube */
function getYouTubeId(url) {
  if (!url) return null;

  // Si ya es un ID sin URL
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;

  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
    if (u.hostname.includes("youtu.be")) return u.pathname.substring(1);
  } catch {
    return null;
  }
}

export default function VideoModal({
  videoUrl,
  thumbnail,
  title = "",
  isLocal = false,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const ytId = getYouTubeId(videoUrl);
  const isYouTube = Boolean(ytId);

  const embedUrl = isYouTube
    ? `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`
    : videoUrl;

  return (
    <div className={styles.container}>
      {/* Thumbnail */}
      <div
        className={`mil-image-frame mil-horizontal ${styles.thumbnail}`}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={thumbnail}
          alt={`Video de ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="mil-scale-img"
          style={{ objectFit: "cover"}}
        />

        <div style={newStyles} className={styles.playButton}>
          <IoMdPlay size={25} color="white" />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
              ✕
            </button>

            <div className={styles.videoContainer}>
              {isYouTube ? (
                <iframe
                  src={embedUrl}
                  className={styles.videoIframe}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Video de ${title}`}
                />
              ) : (
                <video controls autoPlay className={styles.videoElement}>
                  <source src={videoUrl} type="video/mp4" />
                  <source src={videoUrl} type="video/webm" />
                </video>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
