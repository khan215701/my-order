const SearchInput = () => {
  return (
    <>
      <li>
        <form className="app-search">
          <div className="app-search-box">
            <div className="input-group">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  id="top-search"
                />
                <button className="btn input-group-text" type="submit">
                  <i className="fe-search"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </li>
    </>
  );
};

export default SearchInput;
