import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Post.css';

function Post() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [thumbnail, setThumbnail] = useState(null);
  const [category, setCategory] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const adData = new FormData();
    adData.append('title', title);
    adData.append('description', description);
    adData.append('price', price);
    adData.append('thumbnail', thumbnail);
    adData.append('category', category);
    axios.post('http://localhost:8000/api/ads', adData)
      .then(response => {
        console.log(response.data);
        // Here you can do anything you want with the server response
      })
      .catch(error => {
        console.error(error);
        // Here you can handle any errors that occurred during the request
      });
  };

  return (
    <div className="Post-container">
      <h1 className="Post-title">Post an Ad</h1>
      <form className="Post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="Post-label" htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control Post-input"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="Post-label" htmlFor="description">Description</label>
          <textarea
            className="form-control Post-input"
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="Post-label" htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control Post-input"
            id="price"
            placeholder="Enter price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="Post-label" htmlFor="thumbnail">Thumbnail</label>
          <input
            type="file"
            className="form-control-file Post-input-file"
            id="thumbnail"
            onChange={handleThumbnailChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="Post-label" htmlFor="category">Category</label>
          <select
            className="form-control Post-input"
            id="category"
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Choose category...</option>
            <option value="Autos">Autos</option>
            <option value="Tech">Tech</option>
            <option value="Homes">Homes</option>
            <option value="Pets">Pets</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary Post-submit">Submit</button>
      </form>
    </div>
  );
  
}

export default Post;
