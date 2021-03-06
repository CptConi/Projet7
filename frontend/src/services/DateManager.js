export default {
	formatDate(pDate) {
		let date = new Date(pDate);
		let now = Date.now();
		let dt = new Date(now - date);

		// Formatage en fonction de la durée:
		if (dt < 120000) {
			return "depuis quelques secondes ";
		} else if (dt < 3600000) {
			return "depuis " + dt.getMinutes() + " minutes";
		} else if (dt < 86400000) {
			return "depuis " + dt.getHours() + " heures";
		} else {
			return "le " + date.getDay + date.getMonth + date.getFullYear;
		}
	},

	formatHour(pDate) {
		let date = new Date(pDate);
		let now = Date.now();
		let dt = new Date(now - date);

		if (dt < 86400000) return date.getHours() + ":" + date.getMinutes();
		else return date.getDay + date.getMonth;
	},
};
