import React, {useState} from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, BookOutlined, CodeOutlined, BankOutlined, ExperimentOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Card, Button } from 'antd';
import documents from "../Data/sampleDocument.json";

const { Header, Content, Footer, Sider } = Layout;

const items1 = ['Năm 1', 'Năm 2', 'Năm 3', "Năm 4"].map((label, index) => ({
  key: String(index + 1),
  label: label,
}));


const Main = () => {
  const [selectedYear, setSelectedYear] = useState("1");
  const [selectedSubject, setSelectedSubject] = useState(null);
  
  const subjectsForSelectedYear = [
    ...new Set(
      documents
        .filter(doc => doc.year === selectedYear)
        .map(doc => doc.subject)
    )
  ];

  const items2 = subjectsForSelectedYear.map((subject, index) => ({
    key: subject,
    icon: React.createElement(BookOutlined),
    label: subject,
  }));

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const filteredDocs = documents.filter(doc => {
    return doc.year === selectedYear &&
      (selectedSubject ? doc.subject === selectedSubject : true);
  });

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedYear]}
          onClick={({ key }) => setSelectedYear(key)}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      
      <div style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[
            { title: 'Trang chủ' }, 
            { title: `Năm ${selectedYear}` }, 
            { title: selectedSubject || 'Tất cả môn học' }
          ]}
        />
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              selectedKeys={[selectedSubject || '']}
              onClick={({ key }) => setSelectedSubject(key)}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {filteredDocs.map(doc => (
              <Card
                key={doc.id}
                title={doc.title}
                style={{ marginBottom: 16 }}
                extra={
                  <Button type="primary" href={doc.downloadLink} download target='_blank'>
                    Tải về
                  </Button>
                }
              >
                <p>{doc.description}</p>
              </Card>
            ))}
          </Content>
        </Layout>
      </div>

      <Footer style={{ textAlign: 'center' }}>
        Tài liệu TLU ©{new Date().getFullYear()} Created by Enrique Nguyen.
      </Footer>
    </Layout>
  );
};

export default Main;