import React from "react";
import Landing from "./components/Landing";
import Vote from "./components/Vote";
import Ladder from "./components/Ladder";
import Lot from "./components/Lot";
import CreateLot from "./components/Lot/CreateLot";

import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/embed" element={<Landing />} />x
      <Route path="/create-lot" element={<CreateLot />} />
      <Route path="/lot" element={<Lot />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/ladder" element={<Ladder />} />
    </Routes>
  );
}

export default Router;
