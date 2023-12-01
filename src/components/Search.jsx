const Search = ({ search, setSearch }) => {
  const onSubmitSearch = (e) => {
    //e.preventDefault();
    if (!search) return;
  };
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="h-32 flex flex-row justify-center items-center">
      <form onSubmit={onSubmitSearch}>
        <div className="border border-black rounded-xl">
          <select className="px-3 focus:outline-none" name="select">
            <option value="title">제목</option>
            <option value="writer">저자</option>
          </select>
          <input
            className="w-[300px] focus:outline-none"
            type="text"
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요"
          />
          <input className="py-4 pr-3" type="submit" value="검색" />
        </div>
      </form>
    </div>
  );
};

export default Search;
