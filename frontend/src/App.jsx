import { useState } from "react";
import StudentList from "./components/StudentsList.jsx";
import AddStudent from "./components/AddStudent.jsx";
import EditStudent from "./components/EditStudent.jsx";
import { deleteStudent } from "./api";
import "./app.css";

const App = () => {
  const [editingStudent, setEditingStudent] = useState(null);

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      alert("Student deleted successfully");
    } catch (error) {
      console.error("Failed to delete student:", error);
    }
  };

  const handleEditUpdate = (updatedStudent) => {
    setEditingStudent(null); // Close the edit form after updating
  };

  return (
    <div>
      <h1>Satyawan Student Management</h1>
      <AddStudent onAdd={(newStudent) => console.log(newStudent)} />
      <StudentList onEdit={setEditingStudent} onDelete={handleDelete} />
      {editingStudent && (
        <EditStudent student={editingStudent} onUpdate={handleEditUpdate} />
      )}
    </div>
  );
};

export default App;
