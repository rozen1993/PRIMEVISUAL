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

export default function VideoModal({
  videoUrl,
  thumbnail,
  title = "",
  isLocal = false,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const isEmbedUrl =
    videoUrl?.includes("youtube") ||
    videoUrl?.includes("vimeo") ||
    videoUrl?.includes("embed");

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
          priority={false}
        />

        {/* Botón play */}
        <div style={newStyles} className={`${styles.playButton}`}>
          <IoMdPlay size={25} color="white" className="play-icon" />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className={styles.closeButton}
            >
              ✕
            </button>

            <div className={styles.videoContainer}>
              {isEmbedUrl ? (
                <iframe
                  src={videoUrl}
                  className={styles.videoIframe}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Video de ${title}`}
                />
              ) : (
                <video controls autoPlay className={styles.videoElement}>
                  <source src={videoUrl} type="video/mp4" />
                  <source src={videoUrl} type="video/webm" />
                  Tu navegador no soporta el elemento de video.
                </video>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
