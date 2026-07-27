import { useState } from 'react'
import './App.css'
import kranti from './assets/kranti.jpg';

const UserCard = () => {
  return (
    <div className = "card user-card">
      <img 
      src = {kranti}
      alt = "User Profile"
      className = 'avatar'
      />
      <h3>Kranti Pariyar</h3>
      <p className = "role"> MERN full stack developer </p>
      <p className = "email"> krantipariyar08@gmail.com</p>
      <button className='btn'>Profile</button>
    </div>
  );
};


function App() {
    // let x = 5;
    // let y = 10;
  return (
    <main className='box'>
      <h1>Hello World!</h1>
      {/* <P>{ x + y }</P> */}
      <Greet/>

      <section className='section'>
        <h2>User Card</h2>
        <div className='card-grid'>
          <UserCard/>
        </div>
      </section>
    </main>
  );
}

export default App;

const Greet = () => {
  return (
    <div>
    <h2>Good morning everyone</h2>
    </div>
  );
};

// user card
// product card

// html tags : semantic & non semantic tags, blocks, inline and inline block tags
// form : form, input, label, button: submit and reset
// event
// typography : h1-h6, p, span, i, em, strong, b, a .....
// layout : nav, section, main, div, footer .....
// multimedia : image, vedio, audio

// css
// selectors : class, universal, id, attribute,descendent, direct child, combination
// box model : margin, padding, model
// position : relative, absolute, fixed, static, sticky
// layout : flex box, grid
// pseudo class : :active, :hover, :focus
// pseudo elements : ::placeholder, ::selection, ::before, ::after

