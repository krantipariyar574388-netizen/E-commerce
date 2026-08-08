import "./App.css";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import HomePage from "./pages/homePage";
import NotFound from "./pages/not-found";
import Nav from "./components/nav";
import UserDetail from "./components/userDetail";
import ProductDetailPage from "./pages/productDetailPage";
import ProductPage from "./pages/productPage";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return <main>
    <Router>
      <Nav />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/about" element = {<AboutPage />} />
        <Route path = "/product" element = {<ProductPage />} />
        <Route path = "/contact" element = {<ContactPage />} />

        {/* dynamic */}
        <Route path = "/products/:id" element={<ProductDetailPage />} />
        <Route path="/users/:id" element={<UserDetail />} />

        {/* page not found */}
        <Route path = "*" element = {<NotFound />} />

      </Routes>
    </Router>
  </main>
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