import { useState } from "react";
import { Input, Button, Card, Row, Col, Typography, Empty } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const documents = [
  {
    id: 1,
    title: "Giáo trình Toán Cao Cấp",
    subject: "Toán học",
    year: 2022,
    type: "Giáo trình",
    description: "Tài liệu cơ bản cho môn Toán Cao Cấp.",
  },
  {
    id: 2,
    title: "Đề thi cuối kỳ Vật lý 1",
    subject: "Vật lý",
    year: 2023,
    type: "Đề thi",
    description: "Đề thi chính thức học kỳ 1 năm 2023.",
  },
];

export default function HomePage() {
  const [query, setQuery] = useState("");

  const filteredDocs = documents.filter((doc) =>
    doc.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <Title level={2}>Tài liệu Đại học</Title>

      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        <Input
          placeholder="Tìm kiếm tài liệu..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          allowClear
        />
        <Button type="primary" icon={<SearchOutlined />}>
          Tìm
        </Button>
      </div>

      <Row gutter={[16, 16]}>
        {filteredDocs.map((doc) => (
          <Col xs={24} sm={12} key={doc.id}>
            <Card
              title={doc.title}
              bordered
              extra={<Text type="secondary">{doc.type}</Text>}
              style={{ borderRadius: 12 }}
            >
              <Text type="secondary">
                {doc.subject} • {doc.year}
              </Text>
              <Paragraph style={{ marginTop: 8 }}>{doc.description}</Paragraph>
              <Button type="default">Xem chi tiết</Button>
            </Card>
          </Col>
        ))}

        {filteredDocs.length === 0 && (
          <Col span={24} style={{ textAlign: "center", marginTop: 32 }}>
            <Empty description="Không tìm thấy tài liệu nào" />
          </Col>
        )}
      </Row>
    </div>
  );
}
