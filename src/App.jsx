import { useState } from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {
  const [editData, setEditData] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <AddStudent refresh={refresh} editData={editData} setEditData={setEditData} />
      <StudentList setEditData={setEditData} key={refreshFlag} />
    </div>
  );
}

export default App;