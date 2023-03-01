import "./Footer.css";
import Container from "../Container";

const Footer = () => (
  <Container>
    <footer className="footer">
      &copy; Eugene Lanets {new Date().getFullYear()}
    </footer>
  </Container>
);

export default Footer;
