import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminHomeSector = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    setData(storedData);
  }, []);

  const addData = () => {
    if (
      name.trim() !== "" &&
      lastName.trim() !== "" &&
      position.trim() !== ""
    ) {
      const newData = [
        ...data,
        { id: data.length + 1, name, lastName, position },
      ];
      setData(newData);
      localStorage.setItem("data", JSON.stringify(newData));
      setName("");
      setLastName("");
      setPosition("");
    } else {
      alert("Please make sure to fill in all fields.");
    }
  };

  const deleteData = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  const deleteAllData = () => {
    setData([]);
    localStorage.removeItem("data");
  };

  return (
    <div className="p-16 flex-col text-center">
      <h1 className="text-2xl font-bold mb-4">Home - Admin Sector</h1>
      <div className="mb-4">
        <Link
          to="/user-home"
          className="bg-blue-500 text-white p-2 mr-2 rounded-lg"
        >
          User Home Sector
        </Link>
        <Link
          to="/admin-home"
          className="bg-green-500 text-white p-2 rounded-lg"
        >
          Admin Home Sector
        </Link>
      </div>
      <div className="mb-4">
        <h2 className="flex justify-center text-2xl font-bold mt-6">
          Create User Here
        </h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2 mr-2 rounded-lg"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          className="border p-2 mr-2 rounded-lg"
        />
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Position"
          className="border p-2 mr-2 rounded-lg"
        />
        <button
          onClick={addData}
          className="bg-blue-500 text-white p-2 mr-2 rounded-lg"
        >
          Save
        </button>
        <button
          onClick={deleteAllData}
          className="bg-red-500 text-white p-2 rounded-lg"
        >
          Delete All
        </button>
      </div>
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Last Name</th>
            <th className="py-2">Position</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{item.name}</td>
              <td className="py-2">{item.lastName}</td>
              <td className="py-2">{item.position}</td>
              <td className="py-2">
                <button
                  onClick={() => deleteData(item.id)}
                  className="bg-red-500 text-white p-2 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHomeSector;
