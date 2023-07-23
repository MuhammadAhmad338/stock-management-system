import React, { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../Context/Context';
import './Home.css';

const Home = () => {

  const [productForm, setProductForm] = useState({});
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState([]);
  const { products, addProduct } = useContext(Context);

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    handlePreviewImage(file);
  };

  const handlePreviewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setThumbnail(reader.result);
      setProductForm({...productForm, thumbnail: reader.result })
    }
  }

  const handleImagesChange = (e) => {
    e.preventDefault();
    const files = e.target.files;
    handlePreviewImages(files);
  }

  const handlePreviewImages = (files) => {
    const imageArray = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onloadend = () => {
        imageArray.push(reader.result);

        if (imageArray.length === files.length) {
          setImages([...imageArray]);
          setProductForm({...productForm, images: [...imageArray] })
        }
      }
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    setProductForm({...productForm, [e.target.name]: e.target.value, thumbnail, images}) 
  }

  const submitIT = () => {
    addProduct(productForm);
  }

  return (
    <>
      {/* The form div starts Here */}
      <div className="container">
        <h2>Create a New POST</h2>
        <label for="title">Title:</label>
        <input onChange={handleChange} type="text" id="title" name="title" required />

        <label for="subtitle">Subtitle:</label>
        <input onChange={handleChange} type="text" id="subtitle" name="subtitle" />

        <label for="description">Description:</label>
        <textarea onChange={handleChange} id="description" name="description" rows="4" cols="50" required></textarea>

        <label for="price">Price:</label>
        <input onChange={handleChange} type="number" id="price" name="price" step="0.01" required />

        <label for="original_price">Original Price:</label>
        <input onChange={handleChange} type="number" id="original_price" name="original_price" step="0.01" />

        <label for="thumbnailImage">Thumbnail Image:</label>
        <input onChange={handleImageChange} type="file" id="thumbnailImage" name="thumbnailImage" accept="image/*" required />

        <label for="multipleImage">Multiple Images:</label>
        <input onChange={handleImagesChange} type="file" id="multipleImage" name="multipleImage" accept="image/*" multiple />

        <button onClick={submitIT}>Upload</button>
        {thumbnail && <img src={thumbnail} alt="" height={50} width={50} />}
        {images.length && images?.map((image) => (
          <img key={image} src={image} alt="" height={100} width={100} />
        ))}
      </div>
      {/* The div ends here */}
      {/*  The table starts here */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Description</th>
            <th>Price</th>
            <th>Original Price</th>
            <th>Thumbnail Image</th>
            <th>Multiple Images</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr>
              <td>{product.title}</td>
              <td>{product.subtitle}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.original_price}</td>
              <td><img src={product.thumbnail} alt="" height={100} width={100} /></td>
              <td>{product.images?.map((image) => (
                <img src={image.secure_url} alt='' height={50} width={50} />
              ))}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* The table ends here*/}
    </>
  );
}

export default Home;