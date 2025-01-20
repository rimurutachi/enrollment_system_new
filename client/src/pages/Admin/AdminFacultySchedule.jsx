import React, { useState } from "react";
import styles from "../../styles/AdminFacultySchedule.module.css";
import Sidebar from "../../components/Admin/Sidebar.jsx";

const AdminFacultySchedule = () => {
  // Sample teacher data
  const [schedules, setSchedules] = useState([]);
  const [formData, setFormData] = useState({
    teacherName: "",
    subject: "",
    room: "",
    time: "",
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
      formData.teacherName &&
      formData.subject &&
      formData.room &&
      formData.time
    ) {
      setSchedules([...schedules, { ...formData, id: Date.now() }]);
      setFormData({ teacherName: "", subject: "", room: "", time: "" });
    }
  };

  return (
    <div className={`container ${styles.teacherScheduleContainer}`}>
      <Sidebar />
      <div className="card shadow-lg">
        <div className={`card-header ${styles.cardHeader}`}>
          <h3 className={styles.headerTitle}>Teacher Schedule</h3>
        </div>
        <div className="card-body">
          {/* Schedule Form */}
          <form onSubmit={handleSubmit} className={styles.scheduleForm}>
            <div className="row g-3">
              <div className="col-md-3">
                <input
                  type="text"
                  className={`form-control ${styles.formControl}`}
                  name="teacherName"
                  placeholder="Teacher Name"
                  value={formData.teacherName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className={`form-control ${styles.formControl}`}
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
                  className={`form-control ${styles.formControl}`}
                  name="room"
                  placeholder="Room"
                  value={formData.room}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-2">
                <input
                  type="time"
                  className={`form-control ${styles.formControl}`}
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-2">
                <button
                  type="submit"
                  className={`btn btn-primary ${styles.addButton}`}
                >
                  Add Schedule
                </button>
              </div>
            </div>
          </form>

          {/* Schedule Table */}
          <table className="table table-striped table-hover mt-4">
            <thead className={`table-primary ${styles.tableHeader}`}>
              <tr>
                <th>#</th>
                <th>Teacher Name</th>
                <th>Subject</th>
                <th>Room</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {schedules.length > 0 ? (
                schedules.map((schedule, index) => (
                  <tr key={schedule.id}>
                    <td>{index + 1}</td>
                    <td>{schedule.teacherName}</td>
                    <td>{schedule.subject}</td>
                    <td>{schedule.room}</td>
                    <td>{schedule.time}</td>
                    <td>
                      <button
                        className={`btn btn-danger btn-sm ${styles.removeButton}`}
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
                  <td colSpan="6" className="text-center">
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

export default AdminFacultySchedule;
