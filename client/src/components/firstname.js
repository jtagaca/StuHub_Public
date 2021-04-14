import React from 'react';

function firstname(props) {
    return (
        <div>
            <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
      </Form>
            
        </div>
    );
}

export default firstname;