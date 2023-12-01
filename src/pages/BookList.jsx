import { useState } from "react";
import Search from "../components/Search";

import BookCard from "../components/BookCard";
import Header from "../components/Header";
import Category from "../components/Category";

const BookList = () => {
  const [search, setSearch] = useState();
  const [category, setCategory] = useState("");

  return (
    <>
      <Header />
      <div className="min-h-screen border m-10 rounded-md shadow-2xl">
        <Search search={search} setSearch={setSearch} />
        <div className="flex flex-row min-h-screen">
          <Category setCategory={setCategory} />
          <BookCard category={category} search={search} />
        </div>
      </div>
    </>
  );
};

export default BookList;
