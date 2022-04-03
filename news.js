var newsTemplate = '<div class="news-wrapper">'
                    + '<img class="news-image" src={image}>'
                    + '<h3 class="news-title">{name}</h3>'
					+ '<p class="news-paragraph">{content}</p>'
					+ '<button class="news-cancel" onclick="cancelSource(this)">CANCEL</button>'
				    + '</div>';

// takes in a template and replaces things in curly brackets with key values
// keys should be an object with key value pairs
function substituteKeys(template, keys){
	for(let key of Object.keys(keys)){
		template = template.replace(`{${key}}`, keys[key]);
	}
	return template;
}
