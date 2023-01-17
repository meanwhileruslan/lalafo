

const Search = () => {
    return (
        <div className=" content_search ">
            {/* Поиск */}
            <form className="search_content d-flex pt-5" role="search">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Я ищу..."
                    aria-label="Search" />
                <button
                    className="btn bi bi-search"
                    type="submit"
                    style={{ backgroundColor: "#f0f2f7" }}>
                </button>
            </form>
        </div>
    );
}

export default Search;

