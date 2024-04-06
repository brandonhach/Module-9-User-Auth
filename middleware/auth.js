exports.isGuest = (req, res, next) => {
	if (!req.session.user) {
		return next();
	} else {
		req.flash('error', 'You are logged in already');
		return res.redirect('/users/profile');
	}
};

exports.isLoggedIn = (req, res, next) => {
	if (!req.session.user) {
		return next();
	} else {
		req.flash('error', 'You need to log in first');
		return res.redirect('/users/login');
	}
};
