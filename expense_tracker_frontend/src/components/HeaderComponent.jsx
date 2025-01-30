import React from "react";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar bg-dark border-bottom border-body">
          <h2 className="navbar-brand mb-0 h1" style={{ color: "white" }}>
            Expense Tracker
          </h2>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
