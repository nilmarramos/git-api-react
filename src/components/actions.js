import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({ getRepos, getStarred }) => {
	return (
		<div className="actions">
			<button onClick={ getRepos }>Ver repositorios</button>
			<button onClick={ getStarred }>Ver favoritos</button>
		</div>
	);
};

Actions.propTypes = {
	getRepos: PropTypes.func.isRequired,
	getStarred: PropTypes.func.isRequired
};
Actions.defaultProps = {};

export default Actions;
