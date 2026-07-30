import { useState } from "react";
import "./App.css";
import Greet from "./components/greet";
import kranti from "./assets/kranti.jpg";
import gucci from "./assets/guccibag1.jpg";
import UserCard from "./components/userCard";
import ProductCard from "./components/productCard";

function App() {
  // let x = 5;
  // let y = 10;
  const user = { name: "Kranti Pariyar", email: "kranti@gmail", active: true };

  const handleClick = (e) => {
    e.stopPropagation();
    console.log(e.target);
    console.log("Clicked");
  };

  return (
    <main
      onClick={(e) => {
        console.log("main");
        console.log(e.target);
      }}
      className="box"
    >
      <h1>Hello World!</h1>
      {/* <P>{ x + y }</P> */}
      <Greet />

      {/* <UserCard user = {{name = "Kranti Pariyar", email = "kranti@gmail.com", active : false}} /> */}
      <UserCard user={user} />

      <ProductCard name="GG Emblem small shoulder bag" />

      {/* <section className='section'>
        <h2>User Card</h2>
        <div className='card-grid'>
          <UserCard />
        </div>
      </section>

      <section className='section'>
        <h2>Product Card</h2>
        <div className='card-grid'>
          <ProductCard />
        </div>
      </section> */}

      <div
        style={{
          height: "200px",
          width: "200px",
          border: "1px solid gray",
        }}
        onClick={(e) => {
          console.log("Parent clicked");
          console.log(e.target);
        }}
      >
        <button
          name="click_me"
          onClick={handleClick}
          onMouseEnter={() => {
            console.log("mouse enter");
          }}
          onMouseLeave={() => {
            console.log("mouse leave");
          }}
        >
          Click me
        </button>
      </div>

      <input
        name="full_name"
        type="text"
        placeholder="Enter full name"
        onChange={(e) => {
          console.log("Input changed");
          console.log(e.target.value);
        }}
        onFocus={() => {
          console.log("Focus");
        }}
        onBlur={() => {
          console.log("Blur");
        }}
      ></input>
    </main>
  );
}

export default App;

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

// form -> submit -> onSubmit
// event delegation
// event capturing
// event bubbling advantage/disadvantage
