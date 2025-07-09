import "./HomePage.css";
import { Typography, Button, Flex, FloatButton } from 'antd';
import { GithubFilled, EnterOutlined, MailOutlined, QuestionCircleOutlined } from '@ant-design/icons';

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
        <Button type="primary" size="large" icon={<EnterOutlined />}>Truy cập</Button>
        <Button size="large" icon={<GithubFilled />} href="https://github.com/Enrique-Nguyen/Tai-lieu-tlu.git">Source code</Button>
      </Flex>
      <FloatButton icon={<MailOutlined />} type="primary" style={{ insetInlineEnd: 24 }} />
      <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ insetInlineEnd: 94 }} />
    </div>
  )
};