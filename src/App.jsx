import React, { useState, useEffect } from "react";
import axios from "axios";
import Records from "./components/Records";
import Pagination from "./components/Pagination";

function App() {
  // To hold the actual data
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  
const DELIVERY_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    axios
      .get(DELIVERY_URL, {
        headers: {
          Authorization:
            `Bearer ${process.env.REACT_APP_TOKEN}`,
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
