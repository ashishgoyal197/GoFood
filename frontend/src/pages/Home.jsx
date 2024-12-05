import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Carousal from "../components/Carousal.jsx";
import Cards from "../components/Cards.jsx";

export default function Home() {
  const [search, setSearch] = React.useState("");
  const [item, setItem] = React.useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(search);
  };

  return (
    <div>
      <div>
        <Navbar search={setSearch} />
      </div>
      <div>
        <Carousal
          search={search}
          onSearch={handleSearch}
          onSubmit={handleSubmit}
        />
      </div>
      <div>
        <Cards search={item} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
