import React, { useState } from 'react';
import { createStudent } from '../api';

const AddStudent = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [className, setClassName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudent = { name, age, class: className };
    const res = await createStudent(newStudent);
    onAdd(res.data);
    setName('');
    setAge('');
    setClassName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} placeholder="Class" />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
