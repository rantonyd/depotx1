import React from 'react';
import { 
    Form,
    Button,
    Input }
    from "antd";
import "./style.css";
function QuoteForm() {
  return (
    <div className="quoteform">
    <div className="quoteform-Box">
      <div className="quoteform-Box1">Get Free Quote</div>
      <div className="quoteform-Box2" >Submit your requirements and Leave
      <br/> everything else to us!</div>
      <div className="quoteform-Box3">
        <Form layout="vertical" className="f01">
          <Form.Item
              label="Name"
              name="fieldA"
              style={{ marginBottom: 0 }}
              >
              <Input className='i1'/>
          </Form.Item>
          <Form.Item
              label="Phone"
              name="fieldB"
              style={{ marginBottom: 0 }}
              >
              <Input className='i1' />
          </Form.Item>
          <Form.Item
              label="Email"
              name="fieldC"
              style={{ marginBottom: 0 }}
              >
              <Input className='i1' />
          </Form.Item>
          <Form.Item
              label="Notes"
              name="fieldD"
              >
              <Input.TextArea />
          </Form.Item>
          <Form.Item >
              <Button className="bu1">Get quote</Button>
          </Form.Item>
        </Form>
      </div> 
    </div>
  </div>
  )
}

export default QuoteForm;