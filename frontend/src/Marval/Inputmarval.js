import { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function InputMarval() {
  const [formdata, setFormdata] = useState({
    title: "",
    productpic: [],
    anotherfile: [], // Initialize as an array
    heroName: ""
  });

  let backend_api = "http://localhost:4000/Marval";

  const handlesubmit = (e) => {
    e.preventDefault();
    const Inputfields = new FormData();
    formdata.productpic.forEach((file) => {
      Inputfields.append('myfile', file);
    });
    formdata.anotherfile.forEach((file) => {
      Inputfields.append('anotherfile', file); // Append each file in anotherfile array
    });
    Inputfields.append('title', formdata.title);
    Inputfields.append('heroName', formdata.heroName);

    axios.post(backend_api, Inputfields).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("success");
      }
    });
  };

  return (
    <div className="container mt-5">
      <h1>User Form</h1>
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
            multiple
            onChange={(e) => setFormdata({ ...formdata, anotherfile: Array.from(e.target.files) })}
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

export default InputMarval;
