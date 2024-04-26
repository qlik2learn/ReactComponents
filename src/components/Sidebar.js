import { useState } from "react";
import logo from "../images/Qlik2LearnLogo.jpg"; 
import "../styles/Sidebar.css";

const navItems = [
  { text: "Home", icon: "fas fa-home" },
  { text: "About", icon: "fas fa-info-circle" },
  { text: "Contact Us", icon: "fas fa-envelope" },
  { text: "Services", icon: "fas fa-cogs" },
  { text: "Blog", icon: "fas fa-newspaper" }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button type="button" className="sidebar-burger" onClick={() => setIsOpen(!isOpen)}>
            <span>{isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}</span>
          </button>
          <img src={logo} className="sidebar-logo" alt="Logo" />
        </header>
        <nav className="sidebar-menu">
          {navItems.map(item => (
            <button key={item.text} className="sidebar-button">
              <span><i className={item.icon}></i></span>
              <span>{item.text}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
