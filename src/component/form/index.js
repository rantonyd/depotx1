import { 
    Form,
    Button,
    Input }
    from "antd";
import "./style.css";
import React from 'react'

function HomeForm() {
  return (
    <div className="homeScreen-Box4">
      <div className="quote-Box">
        <div className="quote-Box1">Get Free Quote</div>
        <div className="quote-Box2" >Submit your requirements and Leave
        <br/> everything else to us!</div>
        <div className="quote-Box3">
          <Form layout="vertical" className="f1">
            <Form.Item
                label="Name"
                name="fieldA"
                style={{ marginBottom: 0 }}
                >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Phone"
                name="fieldB"
                style={{ marginBottom: 0 }}
                >
                <Input  />
            </Form.Item>
            <Form.Item
                label="Email"
                name="fieldC"
                style={{ marginBottom: 0 }}
                >
                <Input  />
            </Form.Item>
            <Form.Item
                label="Notes"
                name="fieldD"
                >
                <Input.TextArea />
            </Form.Item>
            <Form.Item >
                <Button className="b1">Get quote</Button>
            </Form.Item>
          </Form>
        </div> 
      </div>
    </div>
  )
}

export default HomeForm;