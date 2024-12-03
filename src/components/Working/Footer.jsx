import React from "react";

// css
import "../../style/footer.scss";

function Footer() {
  return (
    <React.StrictMode>
      <section className="footer">
        <h1>© 2024-2026 Btm.com. All rights reserved.</h1>
        <p>create by Sunil Kapoor</p>

        <a href="#"><i className="fa-solid fa-arrow-up"></i></a>
      </section>
    </React.StrictMode>
  );
}

export default Footer;
