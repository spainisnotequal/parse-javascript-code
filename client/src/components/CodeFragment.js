import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CodeFragment = props => {
  const {author, source, code, ast} = props;
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>Author:</Label>
            <Input type="text" value={author} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Source:</Label>
            <Input type="url" value={source} />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label>JavaScript code</Label>
        <Input type="text" value={code}/>
      </FormGroup>
      <FormGroup>
        <Label>Abstract Syntax Tree</Label>
        <Input type="text" value={ast}/>
      </FormGroup>
      <Button
        className="remove-btn"
        color="secondary"
        size="sm"
        style={{ float: 'right', marginBotton: '2rem' }}
        onClick={() => console.log("Delete Code Fragment (to be implemented...)")}
        >
        Delete
      </Button>
    </Form>
  );
};

export default CodeFragment;
