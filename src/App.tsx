import React, { TimeHTMLAttributes, useState } from 'react';

import './App.css';

function App() {
  const [notes, setNotes] = useState<{
    id: string,
    title: string,
    notes: string,
    color: string,
    date: string
  }[]>([{
    id: (new Date).toString(),
    title: "Meeting",
    notes: "Meeting with developers",
    color: "#dfgfe",
    date: (new Date).toString()
  }

  ])

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
