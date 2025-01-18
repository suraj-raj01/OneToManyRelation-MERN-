import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Insert = () => {
    const navigage = useNavigate();
    const[input,setInput] = useState({});

    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput((values)=>({...values,[name]:value}));
        console.log(input);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api='http://localhost:8000/author/insert';
        try {
          const response = axios.post(api,input);
          alert("Data insert success")
          navigage("/display")
        } catch (error) {
          
        }
    }
  return (
    <div>
      <h1>Insert</h1>

      <Form id="form">
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Author_Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="authorname" value={input.authorname} onChange={handleInput} />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Book_Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="booktitle" value={input.booktitle} onChange={handleInput} />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Book_Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" name="bookprice" value={input.bookprice} onChange={handleInput} />
          </Col>
        </Form.Group> 
        <Button id="btn" onClick={handleSubmit}>Submit</Button>
       </Form>
    </div>
  );
};

export default Insert;
