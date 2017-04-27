import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ isDisabled, handleSearch }) => {
	return (
		<div className="search">
			<input
				type="search"
				placeholder="Digite o nome de Usuario do Github"
				disabled={isDisabled}
				onKeyUp={ handleSearch }
			/>
		</div>
	);
};

Search.propTypes = {
	handleSearch: PropTypes.func.isRequired,
	isDisabled: PropTypes.bool
};
Search.defaultProps = {};

export default Search;
