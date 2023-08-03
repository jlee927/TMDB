import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>
        Click <Link to="/about">here</Link> to go to the About page.
      </p>
      <p>
        Click <Link to="/contact">here</Link> to go to the Contact page.
      </p>
    </div>
  );
}

export default Home;