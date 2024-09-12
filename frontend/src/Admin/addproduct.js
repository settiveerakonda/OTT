import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Addproduct() {
  const [formdata, setFormdata] = useState({
    title: "",
    productpic: [],
    anotherfile: null,
    heroName: ""
  });

  const { id } = useParams(); // Get the id from URL parameters
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:4000/getproduct/${id}`)
        .then(res => {
          const product = res.data;
          setFormdata({
            title: product.title,
            productpic: [],
            anotherfile: null,
            heroName: product.heroName
          });
        })
        .catch(error => console.error("Error fetching product data:", error));
    }
  }, [id]);

  const handlesubmit = (e) => {
    e.preventDefault();
    const Inputfields = new FormData();
    formdata.productpic.forEach((file) => {
      Inputfields.append('myfile', file);
    });
    if (formdata.anotherfile) {
      Inputfields.append('anotherfile', formdata.anotherfile);
    }
    Inputfields.append('title', formdata.title);
    Inputfields.append('heroName', formdata.heroName);

    const apiUrl = id ? `http://localhost:4000/updateProduct/${id}` : "http://localhost:4000/addproduct";
    const method = id ? 'put' : 'post';

    axios[method](apiUrl, Inputfields).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("success");
        navigate("/"); // Redirect to the homepage after successful submission
      }
    });
  };

  return (
    <div className="container mt-5">
      <h1>{id ? "Update Product" : "Add Product"}</h1>
      <form onSubmit={handlesubmit} action="post">
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formdata.title}
            onChange={(e) => setFormdata({ ...formdata, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload:</label>
          <input
            type="file"
            className="form-control"
            name="myfile"
            multiple
            onChange={(e) => setFormdata({ ...formdata, productpic: Array.from(e.target.files) })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Video:</label>
          <input
            type="file"
            className="form-control"
            name="anotherfile"
            onChange={(e) => setFormdata({ ...formdata, anotherfile: e.target.files[0] })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hero Name:</label>
          <input
            type="text"
            className="form-control"
            name="heroName"
            value={formdata.heroName}
            onChange={(e) => setFormdata({ ...formdata, heroName: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Addproduct;
