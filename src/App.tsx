import React, { TimeHTMLAttributes, useState } from 'react';
import Header from './components/Headers';
import NotesLists from './components/NotesLists';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Notes } from './models/noets.models';
import CreateNotes from './components/CreateNotes';

function App() {

  const [notes, setNotes] = useState<Notes[]>([{
    id: (new Date).toString(),
    title: "Meeting",
    notes: "Meeting with developers",
    color: "#FAFAFA",
    date: (new Date).toString()
  }

  ])

  return (
    <>
      <Header />

      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesLists notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>

      <Container className='mt-5'>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
