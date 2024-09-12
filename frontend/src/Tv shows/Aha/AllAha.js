import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoModal from '../../short_video/VideoModal';
  // Ensure to create this file for custom styling

const AllAha = () => {
  const [data, setData] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/Ahaoutput')
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

  return (
    <div className="container-fluid bg-black">
      <div className="row bg-black">
        {data.map((ele, i) => (
          <div className="col-md-3 col-sm-4 col-6 mb-4" key={i}>
            <div className="card h-100 bg-black">
              <div className="img position-relative">
                <video
                  className="card-img-top"
                  style={{ height: '200px', width: '100%' }}
                  src={`http://localhost:4000/images/${ele.anotherfile}`}
                  muted={i !== currentVideoIndex}
                  onClick={() => handleVideoClick(i)}
                />
                <img
                  className="card-img-top overlay-image" 
                  style={{ height: '200px', width: '100%', cursor: 'pointer', position: 'absolute', top: '-10px', left: '0',}}
                  src={`http://localhost:4000/images/${ele.productpics[0]}`}
                  alt={ele.title}
                  onClick={() => handleVideoClick(i)}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-white title-margin">{ele.title}</h5>
              </div>
            </div>
          </div>
        ))}
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

export default AllAha;
