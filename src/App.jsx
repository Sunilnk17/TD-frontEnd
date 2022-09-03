import React, { useState, useEffect } from "react";
import axios from "axios";
import Records from "./components/Records";
import Pagination from "./components/Pagination";

function App() {
  // To hold the actual data
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const DELIVERY_URL =
    "https://trade-depot.azurewebsites.net/api/v1/deliveries";

  useEffect(() => {
    axios
      .get(DELIVERY_URL, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiI1Iiwic3ViIjoidGQtZnJlaWdodC10ZXN0IiwiaXNzIjoiMDk4ZjZiY2Q0NjIxZDM3M2NhZGU0ZTgzMjYyN2I0ZjYiLCJpYXQiOjE2NjIxNjg4OTksImF1ZCI6InJlc3RhcGl1c2VyIiwiZXhwIjoxNjYyMzQxNjk5fQ.7Cf0xO7ye51Tlfhuoff9G2urzMxN9V9KCJP5sO6_ncU",
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div className="container mt-5">
      <h2 className="text-align centre"> Trade depot </h2>
      <Records data={currentRecords} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
