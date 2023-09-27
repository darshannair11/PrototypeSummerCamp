import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary nav">
      <Container>
        <Navbar.Brand href="#home">
          <TempleHinduIcon />
        </Navbar.Brand>
        <Navbar.Text>HTGC</Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Protoype Model</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
