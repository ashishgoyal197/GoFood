import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
// import Card from "../components/Card.jsx";
import Carousal from "../components/Carousal.jsx";
import Cards from "../components/Cards.jsx";

export default function Home() {
  const [search, setSearch] = React.useState("");
  // for carousal

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal search={search} onSearch={handleSearch} />
      </div>

      <div>
        <Cards search={search} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
