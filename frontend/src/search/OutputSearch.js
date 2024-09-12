import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom CSS for styling

const OutputMarval = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  useEffect(() => {
    // Fetch data from multiple endpoints
    const fetchData = async () => {
      try {
        const [
          outputMarvalRes,
          outputPrabashRes,
          ramcharanoRes,
          outputPawanRes,
          showpRes,
          ahaOutputRes,
          korenOutputRes
        ] = await Promise.all([
          axios.get('http://localhost:4000/OutputMarval'),
          axios.get('http://localhost:4000/Outputprabash'),
          axios.get('http://localhost:4000/Ramcharano/p'),
          axios.get('http://localhost:4000/Outputpawan'),
          axios.get('http://localhost:4000/Showp'),
          axios.get('http://localhost:4000/Ahaoutput'),
          axios.get('http://localhost:4000/Korenoutput'),
        ]);

        // Combine all data sets and set state
        const combinedData = [
          ...outputMarvalRes.data,
          ...outputPrabashRes.data,
          ...ramcharanoRes.data,
          ...outputPawanRes.data,
          ...showpRes.data,
          ...ahaOutputRes.data,
          ...korenOutputRes.data,
        ];
        setData(combinedData);
        setFilteredData(combinedData); // Initialize filtered data with combined data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter data based on search term
    const filtered = data.filter((item) =>
      (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.heroName && item.heroName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <div className="container-fluid">
      {/* Search Bar */}
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Search</button>
        </div>
      </div>

      {/* Output Section */}
      <div className="row bg-black" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        {filteredData.map((ele, i) => (
          <div className='col-12 mb-3' key={i}>
            <div className="card bg-dark text-white">
              <div className="row no-gutters">
                <div className="col-12 col-md-2">
                  <div className="embed-responsive embed-responsive-16by9 video-container">
                    {ele.productpics && ele.productpics[0] && (
                      <img 
                        data-src={`http://localhost:4000/images/${ele.productpics[0]}`} 
                        alt={ele.title} 
                        title={ele.title} 
                        className="original-image" 
                        src={`http://localhost:4000/images/${ele.productpics[0]}`} 
                        onClick={() => handleVideoClick(i)}
                        style={{ cursor: 'pointer' }}
                      />
                    )}
                    {currentVideoIndex === i && ele.anotherfile && ele.anotherfile[0] && (
                      <video
                        className="card-video"
                        src={`http://localhost:4000/images/${ele.anotherfile[0]}`}
                        autoPlay
                        controls
                        muted
                      />
                    )}
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    <p className="card-text">{ele.heroName}</p>
                    <p className="text-warning">
                      Lorem ipsum dolor sit amet, <a href="#" className="text-warning text-decoration-underline">consectetur adipisicing elit</a>.
                      Veniam id deleniti molestiae unde error adipisci facere obcaecati corrupti aliquam architecto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className='bg-white' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutputMarval;
