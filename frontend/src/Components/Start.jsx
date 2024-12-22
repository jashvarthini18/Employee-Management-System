import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:3000/verify")
      .then((result) => {
        if (result.data.Status) {
          if (result.data.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/employee_detail/" + result.data.id);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // Inline styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
  };

  const formStyle = {
    padding: "2rem",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "1rem",
  };

  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const employeeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#007bff",
    color: "#fff",
  };

  const adminButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745",
    color: "#fff",
  };

  const hoverStyle = (color) => ({
    backgroundColor: color,
  });

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={headingStyle}>Login As</h2>
        <div style={buttonGroupStyle}>
          <button
            style={employeeButtonStyle}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = hoverStyle("#0056b3").backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = employeeButtonStyle.backgroundColor)
            }
            onClick={() => {
              navigate("/employee_login");
            }}
          >
            Employee
          </button>
          <button
            style={adminButtonStyle}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = hoverStyle("#218838").backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = adminButtonStyle.backgroundColor)
            }
            onClick={() => {
              navigate("/adminlogin");
            }}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
