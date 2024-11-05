import React, { useState, useEffect } from 'react';
import { updateStudent } from '../api';

const EditStudent = ({ student, onUpdate }) => {
  const [name, setName] = useState(student.name);
  const [age, setAge] = useState(student.age);
  const [className, setClassName] = useState(student.class);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedStudent = { name, age, class: className };
    await updateStudent(student._id, updatedStudent);
    onUpdate({ ...student, ...updatedStudent });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} placeholder="Class" />
      <button type="submit">Update Student</button>
    </form>
  );
};

export default EditStudent;
