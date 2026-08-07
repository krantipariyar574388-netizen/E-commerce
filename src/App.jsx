import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import "./App.css";
import Greet from "./components/greet";
import kranti from "./assets/kranti.jpg";
import gucci from "./assets/guccibag1.jpg";
import UserCard from "./components/userCard";
import ProductCard from "./components/productCard";
import Button from "./components/button";
import Counter from "./components/counter";
import Dashboard from "./components/dashboard";
import RegisterForm from "./components/registerForm";

function App() {

    const [inputValue, setInputValue] = useState("");
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);
    const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with value : ", inputValue);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    // console.log(e.target);
    console.log("Clicked");
  };
  
  // let x = 5;
  // let y = 10;
  const isLoggedIn = true;

  const user = {
    name: "Kranti Pariyar",
    email: "kranti@gmail",
    active: true
  };

  console.log("app re render");
  //useEffect : api call , timer, event listener, subscription, localstorage

  // every re render
  // useEffect(() => {
  //   console.log("effect run");
  // });

  // first render
  useEffect(() => {
    console.log("First render");
    const fetchUsers = async () => {
      try {
        const response = await fetch (
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  },[]);

  //when dependency changed
  // useEffect(() => {
  //   console.log("effect run");
  // },[text, count]);

  // useMemo
  // const result = useMemo(() => {
  //   console.log("calculating");
  //   let total = 10;
  //   for ( let i = 1; i <= 99999999; i++) {
  //     // total +=1
  //   }
  //   return total * count + 1;
  // }, [count]);

  useEffect(() => {
        inputRef.current.focus();
        inputRef.current.style.color = "red";
        inputRef.current.style.borderColor = "red";
        }, []);

  //useCallback
    const calculate = useCallback(() => {
    console.log("calculating");
    let total = 10;
    for ( let i = 1; i <= 99999999; i++) {
      // total +=1
    }
    return total * count + 1;
  }, [count]);

  const result = useMemo(() => {
    console.log("calculating");
    let total = 10;
    for (let i = 1; i <= 999999999; i++) {
      // total += i;
    }
    return total * count + 1;
  }, [count]);

  return (
    <main
      // onClick={(e) => {
      //   console.log("main");
      //   console.log(e.target);
      // }}
      className="box"
    >
      

      <h1 className="" id="">Hello World!</h1>
      <RegisterForm />
      <p>{count}</p>
      <h1>{count}</h1>
      <h1>{result}</h1>
      {/* <p>{countRef.current}</p> */}
      <Button
      onClick={() =>{
        setCount(count+1);
      }}
      label="Re render" />
      <Button
        onClick={() => {
          countRef.current++;
        }}
        label="Count Ref"
      />
      

      {/* <P>{ x + y }</P> */}

      <Greet name="kranti" role="User" isLoggedIn={true} year={2002} />

      

      <input
        ref={inputRef}
        name="full_name"
        type="text"
        placeholder="Enter full name"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <section style = {{display : "flex", gap : "20px", flexWrap : "wrap", margin : "40px"}}>
        {
          users.map((user)=> {
            return <UserCard key={user.id} user={user} />;
          })}
      </section>


      <Counter />


      

      <Dashboard isLoggedIn={true} error={null} role={"Admin"} />
      { isLoggedIn ? <Button label="Dashboard" /> : <Button label="Login" /> }
      <Button label="Register" />
      <br />
      <Button label = "Manage Users"/>
      
      


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
        {/* // <button
        // type="submit"
        //   name="click_me"
        //   onClick={handleClick}
        //   onMouseEnter={() => {
        //     console.log("mouse enter");
        //   }}
        //   onMouseLeave={() => {
        //     console.log("mouse leave");
        //   }}
        // > Click me
        </button>)} */}
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


// SPA || MPA
// DOM
// VDOM
// Rendering
// CSR & SSR