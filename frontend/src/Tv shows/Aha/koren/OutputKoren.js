import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';   
import VideoModal from '../../../short_video/VideoModal';
import '../../../Card.js/card.css';

const NextArrow = ({ onClick }) => <div className="slick-next" onClick={onClick}>Next</div>;
const PrevArrow = ({ onClick }) => <div className="slick-prev" onClick={onClick}>Previous</div>;

const Card = () => {
  const [data, setData] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/Korenoutput')
      .then((res) => setData(res.data))
      .catch((error) => console.error("Error fetching data:", error));

    const storedIndex = localStorage.getItem('currentVideoIndex');
    if (storedIndex !== null) {
      setCurrentVideoIndex(parseInt(storedIndex, 10));
    }
  }, []);

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Define breakpoints for responsive design
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-section bg-black">
      <div className="cs__content-container">
      <div className="cs__header d-flex justify-content-between align-items-center">
          <h2 className="h1-heading cs__header-title">Horror</h2>
          <a href='/AllAha' className="cs__see-more d-flex align-items-center">
            <div className="cs__sm-text">View All</div>
            <svg viewBox="0 0 30 30" className="cs__sm-icon">
              <use href="#right-arrow"></use>
            </svg>
          </a>
        </div>

        <div className="d__horizontal-carousel">
          <Slider {...settings}>
            {data.map((ele, i) => ( 
              <div className="col-12 col-sm-6 col-md-3" key={i}>
                <div className="card-wrapper">
                  <div className="portrait-container">
                   
                      <div className="card-content-wrap " >
                        <div className="card-image-content">
                          <div className="image-card portrait-img base-card-image">
                            <img 
                              data-src={`http://localhost:4000/images/${ele.productpics[0]}`} 
                              alt={ele.title} 
                              title={ele.title} 
                              className="original-image" 
                              src={`http://localhost:4000/images/${ele.productpics[0]}`} 
                              onClick={() => handleVideoClick(i)}
                              style={{ cursor: 'pointer' }}
                            />
                            {currentVideoIndex === i && (
                              <video
                                className="card-video"
                                src={`http://localhost:4000/images/${ele.anotherfile}`}
                                autoPlay
                                controls
                                muted
                              />
                            )}
                          </div>
                        </div>
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
          onRequestClose={closeModal}
          video={data[currentVideoIndex]}
        />
      )}
    </div>
  );
};

export default Card;