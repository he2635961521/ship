import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { getFirstImageToVideo } from './get-first-image';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'video/mov' || 'video/quicktime';
  if (isJpgOrPng) {
    message.error('You can not upload video/mov file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 20;
  if (!isLt2M) {
    message.error('video must smaller than 20MB!');
  }
  return false;
};

const App = (props) => {
  const {image, set, title }= props;
  const [firstImage, setFirst] = useState('');

  const handleChange = (info) => {
    getBase64(info.file, (url) => {
      set(url);
    });
  };

  useEffect(() => {
    getFirstImageToVideo(image, setFirst);
  }, [image])

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div className='flex flex-col items-center'>
      <Upload
        accept='video/*'
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {firstImage ? <img className='rounded-lg' src={firstImage} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>

      { title && <p className='mt-4'>{title}</p> }
    </div>
  );
};

export default App;