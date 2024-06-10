import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-16 flex-col text-center">
      <h1 className="text-2xl font-bold mb-4">
        Generation Thailand
        <br />
        React - Assessment
      </h1>
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
    </div>
  );
};

export default Home;
