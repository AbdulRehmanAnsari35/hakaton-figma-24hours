
// src/app/page.tsx

import React from "react";

import Hero from "./component/Hero"; 
import ProductCards from "./Products/page";

export default function Page() {
  return (
    <div>
      <Hero />
      <ProductCards/>  
    </div>
  );
}
