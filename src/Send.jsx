import React, { useState } from "react";
import { storage } from "./Appwrite"; // Import Appwrite client and services
import { Permission, Role } from "appwrite"; // Permission settings from Appwrite
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported

const Send = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [fileId, setFileId] = useState("");

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    setUploading(true);

    try {
      // Upload the file anonymously with write permissions for everyone
      const result = await storage.createFile(
        "subbu123",  // Replace with your actual bucket ID
        "unique()",  // You can use unique() or a specific file name
        file,
        [
          Permission.read(Role.any()),  // Anyone can read the file
          Permission.write(Role.any())  // Anyone can upload a file (write permission)
        ]
      );
      setFileId(result.$id);
      alert("File uploaded successfully!");
      console.log("Uploaded file:", result);
    } catch (error) {
      console.error("File upload failed:", error);
      alert("File upload failed: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1>File Upload with Appwrite</h1>
        <div className="mb-3">
          <input type="file" onChange={handleFileChange} className="form-control" />
        </div>
        <button onClick={handleUpload} disabled={uploading} className="btn btn-primary">
          {uploading ? "Uploading..." : "Upload"}
        </button>

        {fileId && (
          <p className="mt-3">
            File uploaded successfully! File ID: <strong>{fileId}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Send;
