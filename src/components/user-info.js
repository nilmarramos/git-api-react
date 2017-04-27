import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userinfo }) => {
	return (
		<div className="user-info">
			<img src={ userinfo.photo } alt=""/>
			<h1 className="username">
				<a href={`https://github.com/${ userinfo.login }`}>
					{ userinfo.userName }
				</a>
			</h1>

			<ul className="repos-info">
				<li>Repositorios: { userinfo.repos }</li>
				<li>Seguidores: { userinfo.followers }</li>
				<li>Seguindo: { userinfo.followers }</li>
			</ul>
		</div>
	);
};

UserInfo.propTypes = {
	userinfo: PropTypes.shape({
		userName: PropTypes.string.isRequired,
		photo: PropTypes.string.isRequired,
		login: PropTypes.string.isRequired,
		repos: PropTypes.number.isRequired,
		followers: PropTypes.number.isRequired,
		following: PropTypes.number.isRequired,
	})
};
UserInfo.defaultProps = {};

export default UserInfo;
