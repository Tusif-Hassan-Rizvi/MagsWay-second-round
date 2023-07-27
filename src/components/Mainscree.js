import React from 'react';
import '../style/Mainscreen.css';
import Heading from './Heading';
import Sectionone from './Sectionone';
import Sectiontwo from './Sectiontwo';

function Mainscree() {
  return (
    <div className="container">
      <div className="container-screen">
        {/* heading code  */}
        <Heading></Heading>

        {/* Main box  */}
        <section className="main-box">
          <Sectionone></Sectionone>
          <Sectiontwo></Sectiontwo>
        </section>
      </div>
    </div>
  );
}

export default Mainscree;
