import "./HomePage.css";
import { Typography, Button, Flex, FloatButton } from 'antd';
import { GithubFilled, EnterOutlined, MailOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

export default function TrangChu() {
  return (
    <div className="nen">
      <Typography style={{paddingTop: '5vh', paddingBottom: '10vh'}}>
        <Title 
        level={1}
          style={{
            color: 'blue',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Giới thiệu
        </Title>

        <Paragraph 
        strong
        style={{
          color: 'black',
          textAlign: 'center',
          fontSize: 'large'
          }}>
          Nhằm mục đích cung cấp tài liệu học tập một cách có hệ thống.
        </Paragraph>

        <Paragraph 
        strong
        style={{
          color: 'black',
          textAlign: 'center',
          fontSize: 'large'
          }}>
          Một website tập hợp tài liệu các môn học ngành CNTT của trường Đại học Thuỷ lợi.
        </Paragraph>
      </Typography>
      <Flex gap="middle" wrap align="center" justify="center" >
        <Button 
          href="/Tai-lieu"
          type="primary" 
          size="large" 
          icon={<EnterOutlined />}
          style={{ 
            height: '60px', 
            fontSize: '18px', 
            padding: '0 30px',
            fontWeight: 'bold' 
          }}
        >
          Truy cập tài liệu
        </Button>
        <Button 
          size="large" 
          icon={<GithubFilled />} 
          href="https://github.com/Enrique-Nguyen/Tai-lieu-tlu.git" 
          target="_blank"
          style={{ 
            height: '60px', 
            fontSize: '18px', 
            padding: '0 30px',
            fontWeight: 'bold' 
          }}
        >
          Source code
        </Button>
      </Flex>
      <FloatButton 
        icon={<MailOutlined />} 
        type="primary" 
        size="large"
        style={{ 
          insetInlineEnd: 24,
          width: '50px',
          height: '50px',
          fontSize: '24px'
        }} 
        description="Email"
      />
      <FloatButton 
        icon={<QuestionCircleOutlined />} 
        type="default" 
        size="large"
        style={{ 
          insetInlineEnd: 114,
          width: '50px',
          height: '50px',
          fontSize: '24px'
        }}
        description="Info"
      />
    </div>
  )
};