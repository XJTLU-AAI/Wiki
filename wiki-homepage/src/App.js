import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { SearchBox } from './SearchBox.js';
import { ImageLink } from './ImageLink.js';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image src='logo.png' style={{ width: 50}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Wiki</Nav.Link>
              <Nav.Link href="#link">Zone</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 style={{ marginTop: 50, fontWeight: 'bold', fontSize: 50}}>wiki</h1>
      <h2 style={{ fontSize: 14, fontWeight: 'bolder'}}>这里是大图书馆。</h2>
      <Container>
        <SearchBox />
        <br/>
      </Container>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <ImageLink imageSrc="image1.png" title="学术资料" link="https://xjtlu.zone" />
        <ImageLink imageSrc="image1.png" title="知识科普" link="https://www.xjtlu.edu.cn"/>
        <ImageLink imageSrc="image1.png" title="史料库" link="https://baidu.com" />
        <ImageLink imageSrc="image1.png" title="校园百科" link="https://xjtlu.zone" />
        <ImageLink imageSrc="image1.png" title="建设中" link="https://xjtlu.zone" />
        <ImageLink imageSrc="image1.png" title="建设中" link="https://xjtlu.zone" />
      </div>

      <h4 style={{marginTop: 200}}>Supporter</h4>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <ImageLink imageSrc="image1.png" title="Support1" />
        <ImageLink imageSrc="image1.png" title="Support2"/>
        <ImageLink imageSrc="image1.png" title="Support3"/>
        <ImageLink imageSrc="image1.png" title="Support4"/>
        <ImageLink imageSrc="image1.png" title="Support5"/>
        <ImageLink imageSrc="image1.png" title="Support6" />
      </div>
    </div>
  );
}

export default App;
