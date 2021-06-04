function SearchBar (props) {
    function changeHandler(e) {
        props.setFilter(e.target.value);
    }

    return (
        <div>
            <input
                onChange = {changeHandler}
            />
            <button>Search</button>
        </div>
    );
}

export default SearchBar;