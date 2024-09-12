// src/VideoModal.js
import React, { useRef, useState, useEffect } from 'react';
import './VideoModal.css';
import Card from '../Card.js/Card';
import OutputAha from '../Tv shows/Aha/OutputAha';
import OutputKoren from '../Koren/Output';

const VideoModal = ({ isOpen, onRequestClose, video }) => {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(video);

  useEffect(() => {
    setCurrentVideo(video);
  }, [video]);

  if (!isOpen) {
    return null;
  }

  const handleComponentClick = (newVideoSrc, newTitle, newHeroName) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
    setCurrentVideo({ productpic: newVideoSrc, title: newTitle, heroName: newHeroName });
  };

  return (
    <div className="modal-overlay" onClick={onRequestClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onRequestClose}>X</button>
        {currentVideo && (
          <>
            <video
              className="modal-video"
              src={`http://localhost:4000/images/${currentVideo.anotherfile}`}
              controls
              autoPlay
              ref={videoRef}
              onSelect={Audio}
            />
            <div className="modal-info">
              <h2>{currentVideo.title}</h2>
              <p>{currentVideo.heroName}</p>
            </div>
          </>
        )}
        <div onClick={() => handleComponentClick('koren-video-source.mp4', 'Koren Video Title', 'Koren Hero')}>
          <OutputKoren />
        </div>
        <div onClick={() => handleComponentClick('card-video-source.mp4', 'Card Video Title', 'Card Hero')}>
          <Card />
        </div>
        <div onClick={() => handleComponentClick('aha-video-source.mp4', 'Aha Video Title', 'Aha Hero')}>
          <OutputAha />
        </div>
      </div>   
    </div>
  );
};

export default VideoModal;


