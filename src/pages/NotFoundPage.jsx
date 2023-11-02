import React from "react";

const NotFoundPage = () => {
  return (
    <div className="App">
      <div
        className="not-found-page"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: "43px" }}>404 Not Found</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
