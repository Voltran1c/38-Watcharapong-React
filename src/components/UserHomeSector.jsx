import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserHomeSector = () => {
  const [data, setData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    return storedData;
  });

  return (
    <div className="p-16 flex-col text-center">
      <h1 className="text-2xl font-bold mb-4">Home - User Sector</h1>
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
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Last Name</th>
            <th className="py-2">Position</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{item.name}</td>
              <td className="py-2">{item.lastName}</td>
              <td className="py-2">{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserHomeSector;
