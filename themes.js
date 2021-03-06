const themes = {
	"mint": {
		"background": "#1f262a",
		"primary": "#aac9a3",
		"secondary": "#56764e",
		"uicolor": "#004040",
		"uihover": "#003333",
		"madcolor": "darkred",
		"madhover": "#d20505",
		"accent": "#00b300",
		"accent-hover": "#00b300"
	},
	"dark": {
		"background": "#222",
		"primary": "#eee",
		"secondary": "#aaa",
		"uicolor": "green",
		"uihover": "darkgreen",
		"madcolor": "#af2616",
		"madhover": "red",
		"accent": "#fff",
		"accent-hover": "#bbb"
	},
	"light": {
		"background": "#fff",
		"primary": "#222",
		"secondary": "#555",
		"uicolor": "lightgreen",
		"uihover": "lime",
		"madcolor": "red",
		"madhover": "salmon",
		"accent": "#333",
		"accent-hover": "#000"
	}
}

function applyTheme(name)
{
	let root = document.querySelector(":root");
	let theme = themes[name];
	for (let prop of Object.keys(theme))
		root.style.setProperty("--theme-" + prop, theme[prop]);
}
function getAvailableThemes()
{
	return Object.keys(themes);
}

{
	let selector = $("theme-select");
	for (let theme of getAvailableThemes())
		selector.innerHTML += `<option value="${theme}">${theme}</option>`;
	selector.onchange = function() { applyTheme(this.value); };
	selector.onchange();
}
