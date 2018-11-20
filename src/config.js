const config = {
	name:  "Hello World App",
	version: "1.0.0",
	title: "Hello World",
	routes: {
		"/": {
			id: "home",
			title: "Home",
			exact: true,
			components: {

			}
		},
		"/about": {
			id: "about",
			title: "About",
			components: {
				about: {
					id: "about",
					props: {
						style: {
							marginTop: "50px",
							padding: "2rem",
							color: "rgba(0,0,0,0.7)"
						}
					}
				}
			}
		},
		/*The default route when no match is found*/
		default: {
			id: "404",
			name: "Not found",
			title: "Not found",
			components: {
			}
		}
	},
	globals: {
		navbar: {
			id: "navbar",
			position: "top",
			props: {
				items: [{
					text: "Home",
					transition: "goHome"
				},{
					text: "About",
					transition: "goAbout"
				}]
			}
		},
		footer: {
			id: "footer",
			position: "bottom",
			props: {
				style: {
				}
			},
			children: {

			}
		}
	},
	transitions: {
		"goHome": {
			from: null,
			to: "home"
		},
		"goAbout": {
			from: null,
			to: "about"
		}
	}
}

export default config;