import React from 'react';

import HeaderMenuPage from "./components/HeaderMenuPage";
import HomePage from "./components/HomePage";
import TableOfContentsComponent from "./components/TableOfContents";

import { Footer } from "@carbon/ibmdotcom-react";

function App() {
  return (
    <div className="App">
      <HeaderMenuPage />
      <HomePage />
      <TableOfContentsComponent />
      <Footer type="micro" disableLocaleButton={true}/>
    </div>
  );
}

export default App;
