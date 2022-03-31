const themes = {
	"dark": {
		"background": "#222",
		"primary": "#eee",
		"secondary": "#aaa",
		"uicolor": "green",
		"uihover": "darkgreen",
		"accent": "#fff",
		"accent-hover": "#bbb"
	},
	"light": {
		"background": "#fff",
		"primary": "#222",
		"secondary": "#555",
		"uicolor": "lightgreen",
		"uihover": "lime",
		"accent": "#333",
		"accent-hover": "#000"
	},
	"mint": {
		"background": "#1f262a",
		"primary": "#aac9a3",
		"secondary": "#56764e",
		"uicolor": "#004040",
		"uihover": "#003333",
		"accent": "#00b300",
		"accent-hover": "#00b300"
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
	let selector = document.getElementById("theme-select");
	for (let theme of getAvailableThemes())
		selector.innerHTML += `<option value="${theme}">${theme}</option>`;
	selector.onchange = function() { applyTheme(this.value); };
}
applyTheme("dark");
