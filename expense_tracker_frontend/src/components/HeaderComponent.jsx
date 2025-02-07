import React from "react";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar bg-dark border-bottom border-body">
          <h1 className="navbar-brand mb-0 h1  m-2" style={{ color: "white" }}>
            Expense Tracker
          </h1>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
