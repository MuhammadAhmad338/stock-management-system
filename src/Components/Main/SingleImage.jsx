import { useContext, useState } from 'react';
import { Context } from '../Context/Context';

const SingleImage = () => {

    const [previewFile, setPreviewFile] = useState("");
    const { addProduct } = useContext(Context);

    const catchImage = (e) => {
        const file = e.target.files[0];
        handleFile(file);
    }

    const handleFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewFile(reader.result);
        }
    }

    const handleSubmitValue = (e) => {
        e.preventDefault();
        if (!previewFile) return;
        handleImage(previewFile);
    }

    const handleImage = (base64EncodedImage) => {
        addProduct(base64EncodedImage);
    }

    return (
        <div>
            <input type="file" name='file' multiple onChange={catchImage} />
            <button onClick={handleSubmitValue}>Upload</button>
            {previewFile && <img src={previewFile} alt="" height={50} width={50} />  }
        </div>
    );
}

export default SingleImage