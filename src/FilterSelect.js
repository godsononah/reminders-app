import PropTypes from 'prop-types';

function FilterSelect(props) {
    const handleChange = (e) => {
        props.setSelectedFilter(e.target.value);
    }

    return (
        <label htmlFor="filterReminders">Show tasks due:
            <select id="filterReminders" value={props.selectedFilter} onChange={handleChange}>
                <option value="2day">within 2 Days</option>
                <option value="1week">within 1 Week</option>
                <option value="30days">within 30 Days</option>
                <option value="all">any time</option>
            </select>
        </label>
    );
}

// Props Type Checking
FilterSelect.propTypes = {
    selectedFilter: PropTypes.string,
    setSelectedFilter: PropTypes.func
}

// Setting Default Props
FilterSelect.defaultProps = {
    selectedFilter: 'all'
}

export default FilterSelect;