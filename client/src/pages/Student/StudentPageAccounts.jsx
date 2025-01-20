import React from "react";
import styles from "../../styles/StudentPageAccounts.module.css";
import StudentPageNavbar from "../../components/StudentPage/StudentPageNavbar.jsx";

const StudentPageAccounts = () => {
  const data = [
    {
      schoolYear: "2023-2024",
      semester: "First Semester",
      scholarship: "TOTAL AMOUNT DUE",
      orDate: "00/00/0000",
      orNo: "TOTAL AMOUNT DUE",
      assessment: "7,745.00",
      payment: "0.00",
      balance: "7,745.00",
    },
    {
      schoolYear: "2023-2024",
      semester: "First Semester",
      scholarship: "CASH - Free Education (20230727-000423)",
      orDate: "00/00/0000",
      orNo: "CASH - Free Education (20230727-000423)",
      assessment: "0.00",
      payment: "7,745.00",
      balance: "0.00",
    },
    {
      schoolYear: "2023-2024",
      semester: "Second Semester",
      scholarship: "TOTAL AMOUNT DUE",
      orDate: "00/00/0000",
      orNo: "TOTAL AMOUNT DUE",
      assessment: "8,189.00",
      payment: "0.00",
      balance: "8,189.00",
    },
    {
      schoolYear: "2023-2024",
      semester: "Second Semester",
      scholarship: "CASH - Free Education (20240303-000764)",
      orDate: "03/03/2024",
      orNo: "CASH - Free Education (20240303-000764)",
      assessment: "0.00",
      payment: "8,189.00",
      balance: "0.00",
    },
    {
      schoolYear: "2023-2024",
      semester: "First Semester",
      scholarship: "TOTAL AMOUNT DUE",
      orDate: "00/00/0000",
      orNo: "TOTAL AMOUNT DUE",
      assessment: "6,282.00",
      payment: "0.00",
      balance: "6,282.00",
    },
    {
      schoolYear: "2023-2024",
      semester: "First Semester",
      scholarship: "CASH - Free Education (20240829-000272)",
      orDate: "08/29/2024",
      orNo: "CASH - Free Education (20240829-000272)",
      assessment: "0.00",
      payment: "6,282.00",
      balance: "0.00",
    },
  ];

  return (
    <div className={`container mt-4 ${styles.container}`}>
      <StudentPageNavbar />
    {/* "Home" text added here above the name */}
    <div className="mb-4">
      <h2 className={styles.homeHeader}>Accounts</h2>
    </div>

    {/* Main card wrapper for all content */}
    <div className="card shadow-sm">
      <div className="card-body">
        {/* Header Section inside the card */}
        <div className="mb-4">
          <h4 className={styles.header}>
            LOQUE, MARK IVANBERN S. (20222-61615-MN-0)
          </h4>
        </div>
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>School Year</th>
            <th>Semester</th>
            <th>Scholarship</th>
            <th>O.R. Date</th>
            <th>O.R. No.</th>
            <th>Assessment</th>
            <th>Payment</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.schoolYear}</td>
              <td>{row.semester}</td>
              <td>{row.scholarship}</td>
              <td>{row.orDate}</td>
              <td>{row.orNo}</td>
              <td>{row.assessment}</td>
              <td>{row.payment}</td>
              <td>{row.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
  );
};

export default StudentPageAccounts;