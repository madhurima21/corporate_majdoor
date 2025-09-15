import React, { useState } from "react";
import '../all_css/LoginRegister.css';

export default function LoginRegister() {
  const [isRegister, setIsRegister] = useState(false);
  const [showModal, setShowModal] = useState(false); // ✅ Modal state
  const [modalMessage, setModalMessage] = useState(""); // ✅ Message for modal

  // 🔹 State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setName("");
    setEmail("");
    setPassword("");
  };

  // 🔹 Handle Login API
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  //document upload
  const handleUpload = async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById("fileInput");
  if (!fileInput.files[0]) {
    alert("Please select a file");
    return;
  }

  const formData = new FormData();
  formData.append("document", fileInput.files[0]);
  try {
    const response = await fetch("http://127.0.0.1:5000/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      alert("Document uploaded successfully ✅");
      setShowModal(false);
      toggleForm();
    } else {
      alert(data.message || "Upload failed");
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    alert("Something went wrong. Please try again.");
  }
};
  // 🔹 Handle Register API
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setModalMessage(data.message); // ✅ Save success message
        setShowModal(true); // ✅ Open modal
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="login-register-container">
        <div className="form-box">
          <h2>{isRegister ? "Register Yourself" : "Login"}</h2>

          {isRegister ? (
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Register</button>
              <p>
                Already have an account?{" "}
                <span className="toggle" onClick={toggleForm}>
                  Login
                </span>
              </p>
            </form>
          ) : (
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
              <p>
                First time here?{" "}
                <span className="toggle" onClick={toggleForm}>
                  Register
                </span>
              </p>
            </form>
          )}
        </div>
      </div>

      {/* ✅ Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Registration Successful 🎉</h2>
            <p>{modalMessage}</p>

            {/* ✅ Document Upload Form */}
                <form onSubmit={handleUpload}>
                    <div className="file-upload-wrapper">
                      <input
                        type="file"
                        id="fileInput"
                        className="file-input"
                        onChange={(e) =>
                          document.getElementById("file-name").textContent =
                            e.target.files[0]?.name || "No file chosen"
                        }
                        required
                      />
                      <label htmlFor="fileInput" className="file-label">
                        📂 Choose File
                      </label>
                      <span id="file-name" className="file-name">No file chosen</span>
                    </div>

                    <button type="submit" className="upload-btn">
                      Upload Document
                    </button>
                </form>

            <button
              className="go-login-btn"
              onClick={() => {
                setShowModal(false);
                toggleForm();
              }}
            >
              Skip & Go to Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}
