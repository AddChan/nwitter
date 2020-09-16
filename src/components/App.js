import React, { useState } from 'react';
import { AppRouter } from './AppRouter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer> &copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
