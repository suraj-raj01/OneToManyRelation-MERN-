import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
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
                    <td style={{textTransform:'uppercase'}}>Book title :- {key1.booktitle}</td>
                    <td style={{textTransform:'capitalize'}}>Price : {key1.bookprice}</td>
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
              add book
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
