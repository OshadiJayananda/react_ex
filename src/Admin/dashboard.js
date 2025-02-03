import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

function Dashboard() {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserRole(response.data.role);
      } catch (error) {
        alert("Failed to fetch user role: " + error.message);
        navigate("/login");
      }
    };

    fetchUserRole();
  }, [navigate]);

  return (
    <div>
      {userRole === "admin" ? (
        <div>
          <h1>Admin Dashboard</h1>
          <p>Welcome to the admin area.</p>
        </div>
      ) : userRole === "user" ? (
        <div>
          <h1>User Dashboard</h1>
          <p>Welcome to the user area.</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
