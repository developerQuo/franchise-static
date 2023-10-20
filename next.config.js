const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.icons8.com",
				port: "",
				pathname: "/ios-filled/**",
			},
		],
	},
});
