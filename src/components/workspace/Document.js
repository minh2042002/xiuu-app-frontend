import React from "react";
import { Space } from 'antd';
const Document = (props) => {
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex', marginBottom: '10px' }}>
        <strong>User requirement</strong>
        <p style={{ fontSize: "17px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper
          lectus id mi placerat fermentum. Proin dignissim, velit vitae blandit
          finibus, neque neque rhoncus ligula, at dignissim odio arcu sit amet
          tortor.
        </p>
      </Space>
      <Space direction="vertical" size="middle" style={{ display: 'flex', marginBottom: '10px' }}>
        <strong>Report</strong>
        <div>
          <a href="/">Write report document link here</a>
        </div>
      </Space>
      <Space direction="vertical" size="middle" style={{ display: 'flex', marginBottom: '10px' }}>
        <strong>Slide</strong>
        <div>
          <a href="/">Write slide document link here</a>
        </div>
      </Space>
    </div>
  );
};

export default Document;
