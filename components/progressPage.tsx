import React from "react";
import { ProgressBar } from "react-bootstrap";

function ProgressPage() {
  return (
    <>
      <div className="row justify-content-center mt-3 align-items-center">
        <div className="col-auto">
          <div className="progress" style={{ width: 500 }}>
            <ProgressBar />
          </div>
        </div>
        <div className="col-auto">15/31</div>
      </div>
      <div className="row justify-content-center mt-3 align-items-center">
        <div className="col-auto">
          <div className="progress" style={{ width: 500 }}>
            <ProgressBar />
          </div>
        </div>
        <div className="col-auto">15/31</div>
      </div>
      <div className="row justify-content-center mt-3 mb-3 align-items-center">
        <div className="col-auto">
          <div className="progress" style={{ width: 500 }}>
            <ProgressBar />
          </div>
        </div>
        <div className="col-auto">15/31</div>
      </div>
    </>
  );
}

export default ProgressPage;
