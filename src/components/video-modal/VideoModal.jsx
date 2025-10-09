// components/video-modal/VideoModal.jsx
"use client";
import { useState } from 'react';
import styles from './VideoModal.module.css';


const newStyles = {
  opacity: 1,
  transform: 'translateY(15px)',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  
};

const imgStyle = {
  maxWidth : '1.5rem'
}

export default function VideoModal({ videoUrl, thumbnail, title = "", isLocal = false }) {
  const [isOpen, setIsOpen] = useState(false);

  // Determina si es YouTube/Vimeo o local
  const isEmbedUrl = videoUrl?.includes('youtube') || videoUrl?.includes('vimeo') || videoUrl?.includes('embed');

  return (
    <div className={styles.container}>
      {/* Thumbnail */}
      <div 
        className={`mil-image-frame mil-horizontal ${styles.thumbnail}`}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={thumbnail}
          alt={`Video de ${title}`}
          className="mil-scale-img"
        />
        {/* Botón play */}
        <div style={newStyles} className={`${styles.playButton}`}>
          <img style={imgStyle} src="/img/icons/play.png" alt="play video" />
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
            
            {/* Video - Diferente según el tipo */}
            <div className={styles.videoContainer}>
              {isEmbedUrl ? (
                // Para YouTube/Vimeo
                <iframe
                  src={videoUrl}
                  className={styles.videoIframe}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Video de ${title}`}
                />
              ) : (
                // Para video local
                <video
                  controls
                  autoPlay
                  className={styles.videoElement}
                >
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