import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoModal from '../short_video/VideoModal';
import '../short_video/Outputshort.css';

const NextArrow = ({ onClick }) => <div className="slick-next" onClick={onClick}>Next</div>;
const PrevArrow = ({ onClick }) => <div className="slick-prev" onClick={onClick}>Previous</div>;

const Card = () => {
  const [data, setData] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/OutputShort')
      .then((res) => setData(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
    setModalIsOpen(true);
  };

  const closeVideo = () => {
    setCurrentVideoIndex(null);
    setModalIsOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="card-section bg-black">
      <div className="cs__content-container">
        <div className="d__horizontal-carousel">
          <Slider {...settings}>
            {data.map((ele, i) => (
              <div className="col-12 col-sm-6 col-md-3" key={i}>
                <div className="card-content-wrap">
                  <div className="card-image-content">
                    <div className="image-card portrait-img base-card-image">
                      {currentVideoIndex === i ? (
                        <div className="video-container">
                          <video
                            className="card-video"
                            src={`http://localhost:4000/images/${ele.anotherfile}`}
                            autoPlay
                            controls
                            muted
                            style={{ width: '100%', height: 'auto' }}
                          />
                          <button className="close-video-btn" style={{ color: 'white' }} onClick={closeVideo}>X</button>
                        </div>
                      ) : (
                        ele.productpics && ele.productpics.length > 0 && (
                          <img
                            src={`http://localhost:4000/images/${ele.productpics[0]}`}
                            alt={ele.title}
                            title={ele.title}
                            className="original-image"
                            onClick={() => handleVideoClick(i)}
                            style={{ cursor: 'pointer', width: '100%' }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {currentVideoIndex !== null && (
        <VideoModal
          isOpen={modalIsOpen}
          onRequestClose={closeVideo}
          video={data[currentVideoIndex]}
        />
      )}
    </div>
  );
};

export default Card;
