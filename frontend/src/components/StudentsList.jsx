import React, { useEffect, useState } from 'react';
import { fetchStudents } from '../api';

const StudentList = ({ onEdit, onDelete }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const response = await fetchStudents();
    setStudents(response.data);
  };

  const handleDelete = async (id) => {
    await onDelete(id);
    loadStudents(); // Reload students after deletion
  };

  return (
    <div>
      <h2>Students</h2>
      {students.map((student) => (
        <div key={student._id}>
          <p>{student.name} - Age: {student.age} - Class: {student.class}</p>
          <button onClick={() => onEdit(student)}>Edit</button>
          <button onClick={() => handleDelete(student._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
