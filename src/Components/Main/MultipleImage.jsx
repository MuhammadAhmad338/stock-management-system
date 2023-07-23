import React, { useContext, useState } from 'react';
import { Context } from '../Context/Context';

const MultipleImage = () => {

    const [images, setImages] = useState([]);
    const { addProduct } = useContext(Context);

    const handleChange = (e) => {
        const files = e.target.files;
        handlePreview(files)
    }

    const handlePreview = (files) => {
        const imageArray = [];
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.onloadend = () => {
                imageArray.push(reader.result);

                if (imageArray.length === files.length) {
                    setImages([...imageArray]);
                }
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!images.length) return;
        handleImages(images);
    }

    const handleImages = (base64URLencoded) => {
         addProduct(base64URLencoded);
    }

    return (
        <div>
            <input type="file" name='file' multiple onChange={handleChange} />
            <button onClick={handleSubmit}>Upload Images</button>
            {images.length && images?.map((image) => (
                <img key={image} src={image} alt="" height={100} width={100} />
            ))}
        </div>
    )
}

export default MultipleImage