import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 20;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return false;
};

const App = (props) => {
  const {image, set, title }= props;

  const handleChange = (info) => {
    getBase64(info.file, (url) => {
      set(url);
    });
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div className='flex flex-col items-center'>
      <Upload
        accept='image/*'
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {image ? <img className='rounded-lg' src={image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>

      { title && <p className='mt-4'>{title}</p> }
    </div>
  );
};

export default App;