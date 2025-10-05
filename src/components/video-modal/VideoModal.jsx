// @components/VideoModal.jsx
"use client";
import { useState } from 'react';
import styles from './VideoModal.module.css';

export default function VideoModal({ videoUrl, thumbnail, title = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* Thumbnail */}
      <div 
        className={`mil-image-frame mil-horizontal mil-drag ${styles.thumbnail}`}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={thumbnail}
          alt={`Video de ${title}`}
          className="mil-scale-img"
        />
        {/* Botón play */}
        <div className={`mil-zoom-btn ${styles.playButton}`}>
          <img src="/img/icons/play.svg" alt="play video" />
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
        >
          <div 
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className={styles.closeButton}
            >
              ✕
            </button>
            
            {/* Video */}
            <div className={styles.videoContainer}>
              <iframe
                src={videoUrl}
                className={styles.videoIframe}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Video de ${title}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}