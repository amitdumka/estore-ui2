import React from "react";
import { Link } from "react-router-dom";
import "./styles.less";

const home = () => {

  function createDB() {
}

  return (
    <div>
      <div className="container text-primary pt-5">
        <h1>React - CRUD Example with React Hook Form</h1>
        <div className="h3">
          Create DB File 
          <button className="btn btn-sm btn-danger btn-delete-store ml-5" onClick={() => createDB()}>Create                                </button>
        </div>
      </div>
    </div>
  );
};

export default home;
