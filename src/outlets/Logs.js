import { useState } from "react";
import { Container, Table, Pagination } from "react-bootstrap";
import { useData } from "../context/DataContext";
import classes from "./Logs.module.css";
const Logs = () => {
  const { logs } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const [logsPerPage] = useState(10); // Change this to adjust the number of logs per page
  // Replace this with your logs data

  // Get current logs
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = logs.slice(indexOfFirstLog, indexOfLastLog);

  // Change page
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className={"p-3 position-relative " + classes.main}>
      <h4 className={classes.mtext}>System Logs</h4>
      <div className={classes.tableMinHeight}>
        <Table striped bordered hover>
          <thead className={"table-dark " + classes.thead}>
            <tr>
              <th>Date</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {currentLogs.map((log) => (
              <tr key={log.lid}>
                <td>{log.date}</td>
                <td>{log.message}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div
        style={{ bottom: "10%" }}
        className="d-flex position-absolute justify-content-center w-100"
      >
        <Pagination>
          {Array.from(
            { length: Math.ceil(logs.length / logsPerPage) },
            (_, index) => (
              <Pagination.Item
                key={index}
                active={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </div>
    </Container>
  );
};

export default Logs;
