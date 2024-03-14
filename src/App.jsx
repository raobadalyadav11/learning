import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home,About,Header,Blog,Contact,Course,Footer, Login, Signup} from './config/index'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/blog" Component={Blog} />
          <Route exact path="/course" Component={Course} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/signup" Component={Signup} />
          <Route exact path="/login" Component={Login} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
