import React, { useState } from 'react';
import './FileUpload.css'; // Nhập tệp CSS

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        if (selectedFile) {
            const fileURL = URL.createObjectURL(selectedFile);
            setImagePreview(fileURL);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Vui lòng chọn một file trước khi upload.');
            return;
        }
        setLoading(true);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://127.0.0.1:8000/uploadfile/', {
                method: 'POST',
                body: formData,
            });
            console.log(response)
            if (response.ok) {
                const data = await response.json();
                setMessage(data.info);
            } else {
                setMessage('Có lỗi xảy ra khi upload.');
            }
        } catch (error) {
            setMessage('Có lỗi xảy ra: ' + error.message);
        } finally {
            setLoading(false); // Kết thúc hiển thị hiệu ứng spin
        }
    };

    return (
        <div className="file-upload-container">
            <h2 className="file-upload-header">Hình ảnh Yêu thích của Bạn</h2>
            <input type="file" onChange={handleFileChange} className="file-upload-input" />
            <button onClick={handleUpload} className="file-upload-button">Upload</button>
            {loading && <div className="spinner"></div>}
            {message && <p className="file-upload-message">Kết quả: {message}</p>}
            {imagePreview && (
                <div className="image-preview">
                    <h3>Image Preview:</h3>
                    <img src={imagePreview} alt="Preview" className="preview-image" />
                </div>
            )}
        </div>
    );
};

export default FileUpload;