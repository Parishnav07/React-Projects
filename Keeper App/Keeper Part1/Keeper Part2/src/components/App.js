import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

{
  /*
function myNote(note){
    return (
        <Note                            -----> step 2_b
        key={note.key}
        title={note.title}
        content={note.content}
      />

    );
}
*/
}

function App() {
  return (
    <div>
      <Header />
      {/* 
      <Note
        key={notes[0].key}              ---- step 1 
        title={notes[0].title}
        content={notes[0].content}
      /> */}

      {/* { notes.map(myNote)}       ----> step 2_a */}

      {notes.map((note) => {
        return (
          <Note key={note.id} title={note.title} content={note.description} />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
