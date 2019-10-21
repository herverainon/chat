import React from 'react';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact img="https://randomuser.me/api/portraits/women/88.jpg" name="Anita Sunton" online=""/>
      <Contact img="https://randomuser.me/api/portraits/men/0.jpg" name="Jim George" online='true'/>
      <Contact img="https://randomuser.me/api/portraits/women/33.jpg" name="Charlotte Ryan" online='true'/>  
    </div>
  );
}

export default App;
