import './App.css';
import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
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
              <Nav.Link href="/">Wiki</Nav.Link>
              <Nav.Link href="https://xjtlu.zone">Zone</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='academic' element={<AcademicResources />} />
          <Route path='knowledge' element={<KnowledgeShare />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

function Home() {
  return (
    <div>
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
        <ImageLink imageSrc="academic.jpg" title="学术资料" link="academic" />
        <ImageLink imageSrc="knowledge_base.jpg" title="知识科普" link="knowledge"/>
        <ImageLink imageSrc="history.jpg" title="史料库" link="/" />
        <ImageLink imageSrc="uni_knowledge_base.jpg" title="校园百科" link="/" />
        <ImageLink imageSrc="under_construction.jpg" title="建设中" link="/" />
        <ImageLink imageSrc="under_construction.jpg" title="建设中" link="/" />
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

function AcademicResources() {
  return (
    <div>
      <br/>
      <h1>我们目前为您提供了这些资料：</h1>
      <div className='sections-nav' style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <ImageLink imageSrc="CCT.jpg" title="CCT" link="/docs/学术资料/CCT" />
        <ImageLink imageSrc="computer.jpg" title="计算机" link="docs/学术资料/计算机"/>
      </div>
    </div>
  )
}

function KnowledgeShare() {
  return (
    <div>
      <br/>
      <div className='sections-nav' style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <ImageLink imageSrc="/knowledge_base.jpg" title="大脑Project" link="/docs/知识科普/大脑Project" />
        <ImageLink imageSrc="/knowledge_base.jpg" title="春秋历史" link="docs/知识科普/春秋历史"/>
        <ImageLink imageSrc="/knowledge_base.jpg" title="人工智能" link="docs/知识科普/人工智能"/>
        <ImageLink imageSrc="/knowledge_base.jpg" title="南斗天文" link="docs/知识科普/南斗天文"/>
        <ImageLink imageSrc="/knowledge_base.jpg" title="西翼航空" link="docs/知识科普/西翼航空"/>
        <ImageLink imageSrc="/knowledge_base.jpg" title="CLCU" link="docs/知识科普/CLCU"/>
        <ImageLink imageSrc="/knowledge_base.jpg" title="剑术协会" link="docs/知识科普/剑术协会"/>
      </div>
    </div>
  )
}

export default App;
