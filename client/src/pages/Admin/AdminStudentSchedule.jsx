import React, { useState } from "react";
import styles from "../../styles/AdminStudentSchedule.module.css";
import Sidebar from "../../components/Admin/Sidebar.jsx";

const AdminStudentSchedule = () => {
  // Sample schedule data
  const [schedules, setSchedules] = useState([]);
  const [formData, setFormData] = useState({
    studentName: "",
    class: "",
    subject: "",
    teacher: "",
    time: "", // Added time field
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.studentName &&
      formData.class &&
      formData.subject &&
      formData.teacher &&
      formData.time // Ensure time is provided
    ) {
      setSchedules([...schedules, { ...formData, id: Date.now() }]);
      setFormData({
        studentName: "",
        class: "",
        subject: "",
        teacher: "",
        time: "",
      });
    }
  };

  return (
    <div className={`container ${styles.studentScheduleContainer}`}>
      <Sidebar />
      <div className="card shadow-lg">
        <div className={`card-header ${styles.cardHeader}`}>
          <h3 className={styles.headerTitle}>Student Schedule</h3>
        </div>
        <div className="card-body">
          {/* Schedule Form */}
          <form onSubmit={handleSubmit} className={styles.scheduleForm}>
            <div className="row g-3">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  name="studentName"
                  placeholder="Student Name"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-2">
                <input
                  type="text"
                  className="form-control"
                  name="class"
                  placeholder="Class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-2">
                <input
                  type="text"
                  className="form-control"
                  name="teacher"
                  placeholder="Teacher"
                  value={formData.teacher}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-2">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-1">
                <button type="submit" className="btn btn-primary w-100">
                  Add
                </button>
              </div>
            </div>
          </form>

          {/* Schedule Table */}
          <table className="table table-striped table-hover mt-4">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Time</th> {/* New column for Time */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {schedules.length > 0 ? (
                schedules.map((schedule, index) => (
                  <tr key={schedule.id}>
                    <td>{index + 1}</td>
                    <td>{schedule.studentName}</td>
                    <td>{schedule.class}</td>
                    <td>{schedule.subject}</td>
                    <td>{schedule.teacher}</td>
                    <td>{schedule.time}</td> {/* Display the time */}
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          setSchedules((prev) =>
                            prev.filter((s) => s.id !== schedule.id)
                          )
                        }
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No schedules available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminStudentSchedule;
