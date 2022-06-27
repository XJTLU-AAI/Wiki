import './App.css';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { SearchBox } from './SearchBox.js';
import { ImageLink } from './ImageLink.js';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <Image src='logo.png' style={{ width: 50}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="docs">Wiki</Nav.Link>
              <Nav.Link href="https://xjtlu.zone">Zone</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 style={{ marginTop: 100, fontWeight: 'bold', fontSize: 66}}>wiki</h1>
      <h2 style={{ fontSize: 20}}>这里是大图书馆</h2>
      <Container>
        <SearchBox />
        <br/>
      </Container>

      <div className='sections-nav' style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <ImageLink imageSrc="academic.jpg" title="学术资料" link="https://xjtlu.zone" />
        <ImageLink imageSrc="knowledge_base.jpg" title="知识科普" link="https://www.xjtlu.edu.cn"/>
        <ImageLink imageSrc="history.jpg" title="史料库" link="https://baidu.com" />
        <ImageLink imageSrc="uni_knowledge_base.jpg" title="校园百科" link="https://xjtlu.zone" />
        <ImageLink imageSrc="under_construction.jpg" title="建设中" link="https://xjtlu.zone" />
        <ImageLink imageSrc="under_construction.jpg" title="建设中" link="https://xjtlu.zone" />
      </div>

      <h4 style={{marginTop: 120, fontSize: 17}}>Supporter</h4>

      <div className='supporters-nav' style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <ImageLink imageSrc="supporters/AAI.png" />
        <ImageLink imageSrc="supporters/Astronomy.png"/>
        <ImageLink imageSrc="supporters/HistoryClub.png"/>
        <ImageLink imageSrc="supporters/AviationWings.png"/>
        <ImageLink imageSrc="supporters/CLCU.png"/>
        <ImageLink imageSrc="supporters/HMA_Kendo.png" />
      </div>
    </div>
  );
}

export default App;
