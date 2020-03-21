import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


const author = "spainisnotequal";
const source = "https://github.com/spainisnotequal/foo/blob/master/javascripts/bar.js";
const code = "const a = 0;";
const ast = JSON.stringify('{"type":"Program","start":{"$numberInt":"0"},"end":{"$numberInt":"12"},"body":[{"type":"VariableDeclaration","start":{"$numberInt":"0"},"end":{"$numberInt":"12"},"declarations":[{"type":"VariableDeclarator","start":{"$numberInt":"6"},"end":{"$numberInt":"11"},"id":{"type":"Identifier","start":{"$numberInt":"6"},"end":{"$numberInt":"7"},"name":"a"},"init":{"type":"Literal","start":{"$numberInt":"10"},"end":{"$numberInt":"11"},"value":{"$numberInt":"0"},"raw":"0"}}],"kind":"const"}],"sourceType":"script"}');


const CodeFragment = () => {  
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="author">Author:</Label>
            <Input type="text" value={author} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="source">Source:</Label>
            <Input type="url" value={source} />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="code">JavaScript code</Label>
        <Input type="text" value={code}/>
      </FormGroup>
      <FormGroup>
        <Label for="ast">Abstract Syntax Tree</Label>
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
    // <Button
    //   
    //   
    //   
    //   >
  );
};

export default CodeFragment;
