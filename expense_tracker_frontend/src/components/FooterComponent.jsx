import { BsGithub } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <div>
    <footer className="footer bg-dark text-center p-3 fixed-bottom d-flex justify-content-center align-items-center gap-2">
      
      <a
        href="https://github.com/sahil0126/Expense_Tracker_Using_Spring_Boot_MySql_ReactJs"
        target="_blank"
        rel="noopener noreferrer"
        className="text-light"
      >
        <BsGithub size={24} /> 
      </a>
      
    </footer>
  </div>
  );
};

export default FooterComponent;
