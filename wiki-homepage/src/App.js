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

      <div className='sections-nav' style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <ImageLink imageSrc="academic.jpg" title="学术资料" link="https://xjtlu.zone" />
        <ImageLink imageSrc="knowledge_base.jpg" title="知识科普" link="https://www.xjtlu.edu.cn"/>
        <ImageLink imageSrc="history.jpg" title="史料库" link="https://baidu.com" />
        <ImageLink imageSrc="uni_knowledge_base.jpg" title="校园百科" link="https://xjtlu.zone" />
        <ImageLink imageSrc="computer.jpg" title="计算机" link="https://xjtlu.zone" />
        <ImageLink imageSrc="CCT.jpg" title="CCT" link="https://xjtlu.zone" />
      </div>

      <h4 style={{marginTop: 200}}>Supporter</h4>

      <div className='supporters-nav' style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <ImageLink imageSrc="supporters/AAI.png" title="AAI" />
        <ImageLink imageSrc="supporters/Astronomy.png" title="天文社"/>
        <ImageLink imageSrc="supporters/HistoryClub.png" title="历史社"/>
        <ImageLink imageSrc="supporters/AviationWings.png" title="航协"/>
        <ImageLink imageSrc="supporters/CLCU.png" title="CLCU"/>
        <ImageLink imageSrc="supporters/HMA_Kendo.png" title="剑术协会" />
      </div>
    </div>
  );
}

export default App;
