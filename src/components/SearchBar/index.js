function SearchBar (props) {
    function changeHandler(e) {
        props.setFilter(e.target.value);
    }

    return (
        <div>
            <input
                onChange = {changeHandler}
                placeholder="Search by name"
            />
        </div>
    );
}

export default SearchBar;