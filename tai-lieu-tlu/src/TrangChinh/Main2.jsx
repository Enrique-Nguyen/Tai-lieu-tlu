import React, { useState } from "react";
import { Layout, Typography, Form, Input, Button, Select, Space, Card, Col, Row, Breadcrumb } from "antd";
import logoTruong from "../Anh_logo/Logo_truong.png"; // Import the image

const { Header, Content, Footer} = Layout;
const { Title, Paragraph, Text} = {Typography}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const { Option } = Select;
const { Meta } = Card;

export default function GiaoDienChinh() {
  const [form] = Form.useForm();
  const [selectedKhoa, setSelectedKhoa] = useState("");
  const [selectedNganh, setSelectedNganh] = useState("");

  const onFinish = values => {
    console.log(values);
    setSelectedKhoa(values.Khoa);
    setSelectedNganh(values.Nganh);
  };
  
  const onReset = () => {
    form.resetFields();
    setSelectedKhoa("");
    setSelectedNganh("");
  };

  // Function to get the full name for display
  const getKhoaName = (value) => {
    switch(value) {
      case "CNTT": return "Công nghệ thông tin";
      case "CK": return "Cơ khí";
      default: return "";
    }
  };

  const getNganhName = (value) => {
    switch(value) {
      case "CNTT": return "Công nghệ thông tin";
      case "TTNT": return "Trí tuệ nhân tạo và khoa học dữ liệu";
      case "KTPM": return "Kĩ thuật phần mềm";
      case "HTTT": return "Hệ thống thông tin";
      case "ANM": return "An ninh mạng";
      default: return "";
    }
  };


  return(
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={logoTruong} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
        <Typography.Title level={2} style={{color: "white", paddingTop: '8px'}}>Welcome to tài liệu TLU!</Typography.Title>
      </Header>
      <Content>
        <Form 
        {...layout}
        form={form}
        name="Chon"
        onFinish={onFinish}
        style={{paddingTop: '4vh'}}>
          <Form.Item name="Khoa" label="Khoa">
            <Select placeholder="Chọn khoa chủ quản">
              <Option value="CNTT">Công nghệ thông tin</Option>
              <Option value='CK'>Cơ khí</Option>
            </Select>
          </Form.Item>
          <Form.Item name="Nganh" label="Ngành" >
            <Select
              placeholder="Chọn ngành học"
              allowClear
            >
              <Option value="CNTT">Công nghệ thông tin</Option>
              <Option value="TTNT">Trí tuệ nhân tạo và khoa học dữ liệu</Option>
              <Option value="KTPM">Kĩ thuật phần mềm</Option>
              <Option value="HTTT">Hệ thống thông tin</Option>
              <Option value='ANM'>An ninh mạng</Option>
            </Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                Chọn
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Chọn lại
              </Button>
              </Space>
          </Form.Item>
        </Form>
        <Breadcrumb
        style={{padding: '0 10vh', fontSize: 'large'}}
          items={[
            { title: "Trang chủ", href: '/'},
            ...(selectedKhoa ? [{ title: getKhoaName(selectedKhoa) }] : []),
            ...(selectedNganh ? [{ title: getNganhName(selectedNganh) }] : [])
          ]}
        />
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="start" wrap style={{margin: '10vh 10vh'}}>
          <Col xs={24} sm={12} md={8} lg={6}  >
            <Card
              hoverable
              size="small"
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>  
          <Col xs={24} sm={12} md={8} lg={6}  >
            <Card
              hoverable
              size="small"
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} >
            <Card
              hoverable              
              size="small"
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} >
            <Card
              hoverable
              size="small"
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}