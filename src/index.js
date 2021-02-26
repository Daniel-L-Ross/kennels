import React from 'react';
import ReactDOM from 'react-dom';
// browserRouter is imported from react and is necessary to use router/route in the
import { BrowserRouter as Router } from "react-router-dom"
import { Kennel } from './components/Kennel'

// index.js is the javascript file we use to render our main react compononent.

ReactDOM.render(

  // The React.StrictMode wrapper is a development tool that highlights potential problems.
  // It runs in development mode only and does not affect the production build
  <React.StrictMode>

    {/* the router  tag *MUST* go around any component that holds a switch or path*/}
    <Router>

      {/* kennel renders our main component */}
      <Kennel />

    </Router>
  </React.StrictMode>,

  // this targets on the only harcoded html element
  document.getElementById('root')
);

