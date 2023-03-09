import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Settings = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Container className="p-3">
      <div className="container">
        <Row>
          <Col>
            <h1>Settings</h1>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row>
          <Col md={8}>
            <Card>
              <Card.Header>General Settings</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="siteName">
                    <Form.Label>Site Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter site name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="siteDescription">
                    <Form.Label>Site Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter site description"
                    />
                  </Form.Group>
                  <Button type="submit">Save</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Header>Settings Menu</Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">General</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Notifications</a>
                  </li>
                  <li>
                    <a href="#">Misc</a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Settings;
