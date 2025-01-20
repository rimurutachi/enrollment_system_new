import React, { useEffect, useState } from "react";
import styles from "../../styles/FacultyPageSchedule.module.css";
import FacultyPageNavbar from "../../components/Faculty/FacultyPageNavbar";

const FacultyPageSchedule = () => {
  const [subjects, setSubjects] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch("/api/subjects"); // Update with your API endpoint
        const data = await response.json();
        setSubjects(data);
      } catch (error) {
        console.error("Failed to fetch subjects:", error);
      }
    };

    fetchSubjects();
  }, []);

  const timeSlots = [
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Sample data for subjects (to be replaced with actual data)
  const scheduleData = [
    { day: "Monday", time: "7:00 AM", subject: "COSC 101 (Room 301)" },
    { day: "Monday", time: "8:00 AM", subject: "DCIT 22 (CL 5)" },
    { day: "Monday", time: "9:00 AM", subject: "DCIT 22 (CL 5)" },
    { day: "Wednesday", time: "9:00 AM", subject: "COSC 101 (Room 301)" },
    // Add more schedule data as needed
  ];

  // Generate the schedule table based on the data
  const generateSchedule = () => {
    const table = [];

    for (let day of days) {
      const dayRow = [];
      for (let time of timeSlots) {
        const subject = scheduleData.find(
          (entry) => entry.day === day && entry.time === time
        );
        dayRow.push(subject ? subject.subject : "");
      }
      table.push(dayRow);
    }

    return table;
  };

  const scheduleTable = generateSchedule();

  return (
    <div className={styles.container}>
      <FacultyPageNavbar />
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Time</th>
              {days.map((day, index) => (
                <th key={index}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time, rowIndex) => (
              <tr key={rowIndex}>
                <td>{time}</td>
                {scheduleTable.map((dayRow, dayIndex) => (
                  <td key={dayIndex}>{dayRow[rowIndex]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyPageSchedule;
