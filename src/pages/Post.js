import React, { useState, useRef } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate  } from 'react-router-dom';

function Post() {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  let navigate = useNavigate();

  const adPhoto = useRef();

  async function handleSubmit(event) {
    event.preventDefault();

    const token = Cookies.get('token');
    if (!token) {
      navigate.push('/login');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('thumbnail', thumbnail);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', price);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    };

    try {
      const timestamp = new Date().getTime();
      const response = await axios.post(`http://localhost:8000/api/ads?timestamp=${timestamp}`, formData, config);
      console.log(response.data)
      navigate.push('/myCijiji');
    } catch (error) {
      setErrorMessage('Failed to create ad.');
    }
  }

  function handleThumbnailChange(event) {
    setThumbnail(event.target.files[0]);
  }

  return (
    <div>
      <h1>Create Ad</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="thumbnail">Thumbnail:</label>
          <input
            type="file"
            id="thumbnail"
            ref={adPhoto}
            onChange={handleThumbnailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="autos">autos</option>
            <option value="tech">tech</option>
            <option value="homes">homes</option>
            <option value="pets">pets & Garden</option>
          </select>
        </div>
        <button type="submit">Create Ad</button>
      </form>
    </div>
  );
}

export default Post;

