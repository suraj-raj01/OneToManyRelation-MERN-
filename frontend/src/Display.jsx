import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import {MDBIcon} from "mdb-react-ui-kit"
import { useNavigate } from "react-router-dom";
const Display = () => {
  const navigate = useNavigate();
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:8000/author/displaydata";
    const response = await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addmoreBook = (id) => {
    navigate(`/addbook/${id}`);
  };

  const delBook=(id)=>{
    alert(id)
  }

  const editBook=(id)=>{
    alert(id)
  }

  const res = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.authorname}</td>
          <td>
            {key.books.map((key1) => {
              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      padding: "0px 10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontWeight: "600",
                    }}
                  >
                    <td style={{textTransform:'uppercase'}}> Book title :- {key1.booktitle}</td>
                    <td style={{textTransform:'uppercase'}}>
                    <div style={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'space-between',
                        gap:'20px'
                      }}>
                        Price : {key1.bookprice}
                        <span onClick={()=>{delBook(key1._id)}}><MDBIcon fas icon="trash" /></span>
                        <span onClick={()=>{editBook(key1._id)}}><MDBIcon fas icon="pen-square" /></span>
                      </div>
                    </td>
                  </div>
                </>
              );
            })}
          </td>
          <td>
            <button
              onClick={() => {
                addmoreBook(key._id);
              }}
            >
             Add <MDBIcon fas icon="plus-circle" />
            </button>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div>
      <h1>Display</h1>
      <br />
      <Table bordered responsive hover striped id="table">
        <thead>
          <tr>
            <th>Author Name</th>
            <th>Book Details</th>
            <th>Add Book</th>
          </tr>
        </thead>
        <tbody>{res}</tbody>
      </Table>
    </div>
  );
};

export default Display;
