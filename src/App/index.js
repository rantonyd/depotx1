import { 
    Form,
     Button,
    
    Input }
    from "antd";
  import img1 from "../../assets/Frame 177.png"
  import WebsiteHeader from "../../component/websiteHeader";
  import "./style.css"
  function HomeScreen(){
    
      return(
        <div className="homeScreen">
         
          <div className="homeScreen-Box1">
            <div>
              <img className="img1" src={ img1 } alt="" /> 
              <div className="header-overlay">
                <WebsiteHeader />
              </div>
            </div>
            <div className="homeScreen-Box2">
              <div className="homeScreen-Box3">
                <div>
                  <div className="homeScreen-Txt1">Storage in Dubai</div>
                  <div  className="homeScreen-Txt2">Unlimited storage anywhere</div>
                  <div  className="homeScreen-Txt3"> anytime at minimum cost</div>
                </div>
                <div className="homeScreen-Box4">
              <div className="quote-Box">
                <div className="quote-Box1">Get Free Quote</div>
                <div className="quote-Box2" >Submit your requirements and Leave
                <br/> everything else to us!</div>
                <div className="quote-Box3">
                <Form layout="vertical" onFinish={onFinish}>
    <Form.Item
      label="Name"
      name="fieldA"
      rules={[{ required: true, message: '' }]}
      style={{ marginBottom: 0 }}
    >
      <Input placeholder="Input placeholder for Field A" />
    </Form.Item>
  
    <Form.Item
      label="Phone"
      name="fieldB"
      rules={[{ required: true, message: 'Please input Field B!' }]}
      style={{ marginBottom: 0 }}
    >
      <Input placeholder="Input placeholder for Field B" />
    </Form.Item>
  
    <Form.Item
      label="Email"
      name="fieldC"
      rules={[{ required: true, message: 'Please input Field C!' }]}
      style={{ marginBottom: 0 }}
    >
      <Input placeholder="Input placeholder for Field C" />
    </Form.Item>
  
    <Form.Item
      label="Notes"
      name="fieldD"
      rules={[{ required: true, message: 'Please input Field D!' }]}
      // style={{ marginBottom: 0 }}
    ><Input.TextArea />
    </Form.Item>
  
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      {/* Center the submit button */}
      
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  
                {/* <Form
        layout="vertical" // Set the form layout to vertical
        onFinish={onFinish}
      >
        <Form.Item label="Field A" name="fieldA" rules={[{ required: true, message: 'Please input Field A!' }]}>
          <Input placeholder="Input placeholder for Field A" />
        </Form.Item>
  
        <Form.Item label="Field B" name="fieldB" rules={[{ required: true, message: 'Please input Field B!' }]}>
          <Input placeholder="Input placeholder for Field B" />
        </Form.Item>
        <Form.Item label="Field B" name="fieldB" rules={[{ required: true, message: 'Please input Field B!' }]}>
          <Input placeholder="Input placeholder for Field B" />
        </Form.Item>
        <Form.Item label="Field B" name="fieldB" rules={[{ required: true, message: 'Please input Field B!' }]}>
          <Input placeholder="Input placeholder for Field B" />
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          {/* Center the submit button */}
          {/* <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */} 
                 {/* <Form>
                   
                 <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <br/>
          <Input />
          </Form.Item>
          
                <Form.Item
          label="Phone"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          </Form.Item>
          <Input />
   <Form.Item
          label="Email"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          </Form.Item>
          <Input />
   {/* <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          </Form.Item>
          <Input /> */}
                  
                  
                  
                 {/* </Form> */}
                </div> 
              </div>
            
              </div>
              </div>
              {/* <div className="homeScreen-Box4">
              <div className="quote-Box">
                <div className="quote-Box1">Get Free Quote</div>
                <div className="quote-Box2" >Submit your requirements and Leave
                <br/> everything else to us!</div>
                <div className="quote-Box3">
                 <Form>
                   
                 
                
                  
                  
                  
                 </Form>
                </div>
              </div>
            
              </div> */}
            </div>
          </div>
        </div>
      )
  }
  export default HomeScreen;
  
  