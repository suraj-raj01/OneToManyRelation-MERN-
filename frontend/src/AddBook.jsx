import React from 'react'
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
const AddBook = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const[input,setInput] = useState({});

    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput((values)=>({...values,[name]:value}));
        console.log(input);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api='http://localhost:8000/author/addbook';
        try {
          const response = axios.post(api,{id:id,...input});
          alert("Data insert success")
          navigate("/display")
        } catch (error) {
          alert(error);
        }
    }


  return (
    <div>
        <h1>AddBook</h1>
        <Form id="form">

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            BookTitle
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
            BookPrice
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" name="bookprice" value={input.bookprice} onChange={handleInput} />
          </Col>
        </Form.Group>
        <Button id="btn" onClick={handleSubmit}>Submit</Button>
       </Form>
    </div>
  )
}

export default AddBook