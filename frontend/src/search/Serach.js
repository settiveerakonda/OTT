import { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function ImportAha() {
  const [formdata, setFormdata] = useState({
    title: "",
    productpic: "",
    heroName: "" // Added heroName field to form data state
  });

  let backend_api = "http://localhost:4000/Search";

  const handlesubmit = (e) => {
    e.preventDefault();
    const Inputfields = new FormData();
    Inputfields.append('myfile', formdata.productpic);
    Inputfields.append('title', formdata.title);
    Inputfields.append('heroName', formdata.heroName); // Append heroName to form data

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
            onChange={(e) => setFormdata({ ...formdata, productpic: e.target.files[0] })}
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

export default ImportAha;
