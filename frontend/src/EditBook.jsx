import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useParams } from 'react-router-dom';
const EditBook = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const[input,setInput] = useState({});

    const loadData=async()=>{
        let api='http://localhost:8000/author/editdisplay';
        try {
            const response = await axios.post(api,{id:id})
            setInput(response.data);
            console.log(response.data);
        } catch (error) {
            message.error(error.response.data.msg);
        }
    }

    useEffect(()=>{
        loadData();
    },[])

    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput((values)=>({...value,[name]:value}));
        console.log(input);
    }

    const handleSubmit=async()=>{
        let api = 'http://localhost:8000/author/editdatasave';
        try {
            const response = await axios.post(api,{id:id,...input});
            message.success(response.data.msg);
            navigate("/display")
        } catch (error) {
            message.error(error.response.data.msg);
        }
    }
  return (
    <div>
        <h1>EditBook</h1>
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

export default EditBook