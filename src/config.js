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
				home: {
					id: "home",
					props: {
						
					}
				}
			}
		},
		"/about/:customParam?": {
			id: "about",
			title: "About",
			components: {
				about: {
					id: "about",
					props: {
						
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
				title: "Footer title",
				links: [
					[
						{text: "Link 1", url: "https://github.com"},
					 	{text: "Link 2", "url": "https://microsoft.com"}
					],
					[
						{text: "Link 3", url: "https://npmjs.com"},
					 	{text: "Link 4", "url": "https://google.com"}
					],
					[
						{text: "Link 5", url: "https://gitlab.com"},
					 	{text: "Link 6", "url": "https://amazon.com"}
					]
				]
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