import { Layout, Typography, Form, Input, Button, Select, Space } from "antd";
import logoTruong from "../Anh_logo/Logo_truong.png"; // Import the image

const { Header, Content, Footer} = Layout;
const { Title, Paragraph, Text} = {Typography}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const { Option } = Select;

export default function GiaoDienChinh() {
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
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
        onFinish={onFinish}>
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
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
              </Space>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
}