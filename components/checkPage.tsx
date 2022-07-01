import React from "react";

function CheckPage() {
  const todayDate = new Date();
  return (
    <>
      {/* 今日と日付 */}
      <div className="row justify-content-center">
        <div className="col-auto">今日</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          {todayDate.getFullYear() +
            "/" +
            todayDate.getMonth() +
            "/" +
            todayDate.getDay()}
        </div>
      </div>
      {/* スタンプ */}
      <div className="row justify-content-center">
        <div className="col-auto">
          <div style={{ border: "solid", width: "50px", height: "50px" }}></div>
        </div>
        <div className="col-auto">
          <div style={{ border: "solid", width: "50px", height: "50px" }}></div>
        </div>
        <div className="col-auto">
          <div style={{ border: "solid", width: "50px", height: "50px" }}></div>
        </div>
        <div className="col-auto">
          <div style={{ border: "solid", width: "50px", height: "50px" }}></div>
        </div>
      </div>
      <div className="row justify-content-center mt-1">
        <div className="col-auto">
          <div style={{ border: "solid", width: "50px", height: "50px" }}></div>
        </div>
        <div className="col-auto">
          <div style={{ border: "solid", width: "50px", height: "50px" }}></div>
        </div>
        <div className="col-auto">
          <div style={{ border: "solid", width: "50px", height: "50px" }}></div>
        </div>
        <div className="col-auto">
          <div style={{ border: "solid", width: "50px", height: "50px" }}></div>
        </div>
      </div>
    </>
  );
}

export default CheckPage;
