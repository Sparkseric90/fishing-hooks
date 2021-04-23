import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

return (
    <div className="App container mt-5">
      <Router>
        <div className="row text-center">
          <div className="col">
            <h1> Peg Leg Pete's Pier of Fishing! </h1>
            <Link to="/App.js"><button type="button" class="btn btn-outline-info">Home</button></Link>
          </div>
        </div>
      </Router>
    </div>
  );
}