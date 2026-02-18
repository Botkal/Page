import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <a
          rel="noopener"
          href="https://github.com/botkal"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Laszlo Botka
          </span>
        </a>{" "}
      </Container>
    </footer>
  );
};

export default Footer;
