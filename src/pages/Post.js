import { React, useRef } from 'react';
import axios from 'axios';
// import '../styles/Post.css';

function Post() {
  const adTitle = useRef();
  const adDescription = useRef();
  const adPrice = useRef();
  const adPhoto = useRef();
  const adCategory = useRef();

  async function handleCreateAd (event) {
    event.preventDefault();


      const data = {
        title: adTitle.current.value,
        description: adDescription.current.value,
        price: adPrice.current.value,
        thumbnail_url: adPhoto.current.value,
        category: adCategory.current.value,

      }

      const URL_CIJIJI_API = 'http://localhost:8000/api/ads';
      const adCreated = await axios.post
      (URL_CIJIJI_API, data)
      .then(window.location = "/myCijiji")
      console.log(adCreated);
  }

  return (
    <div className="Post-container">
      <h1 className="Post-title">Post an Ad</h1>
      <form className="Post-form" onSubmit={handleCreateAd}>
        <div className="form-group">
          <label className="Post-label" htmlFor="title">Title</label>
          <input
            ref={adTitle}
            type="text"
            className="form-control Post-input"
            id="title"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="form-group">
          <label className="Post-label" htmlFor="description">Description</label>
          <textarea
            ref={adDescription}
            className="form-control Post-input"
            id="description"
            placeholder="Enter description"
            required
          />
        </div>
        <div className="form-group">
          <label className="Post-label" htmlFor="price">Price</label>
          <input
            ref={adPrice}
            type="number"
            className="form-control Post-input"
            id="price"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="form-group">
          <label className="Post-label" htmlFor="thumbnail_url">Thumbnail</label>
          <input
            ref={adPhoto}
            type="file"
            className="form-control-file Post-input-file"
            id="thumbnail_url"
            required
          />
        </div>
        <div className="form-group">
          <label className="Post-label" htmlFor="category">Category</label>
          <select
            ref={adCategory}
            className="form-control Post-input"
            id="category"
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
