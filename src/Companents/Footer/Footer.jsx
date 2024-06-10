import React from "react";
import "./Footer.css"

const FooterContainer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Manzillar</h5>
            <ul>
              <li><a href="#">Bosh sahifa</a></li>
              <li><a href="#">Xizmatlar</a></li>
              <li><a href="#">Biz haqimizda</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Biz haqimizda</h5>
            <p>Loxudan kichik dalg'asiga qadar, biz sizni biz haqimizda bilib oling.</p>
          </div>
          <div className="col-md-4">
            <h5>Bog'lanish</h5>
            <p>Agar savollar yoki takliflar bo'lsa, biz bilan bog'laning.</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
        <p className="text-muted">Barcha huquqlar himoyalangan &copy; 2024</p>
      </div>
    </footer>
  );
};

export default FooterContainer;
