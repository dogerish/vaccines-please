var newsTemplate = '<div class="news-wrapper">'
                    + '<img class="news-image" src={image}>'
                    + '<h3 class="news-title">{name} <span>{author}</span></h3>'
                    + '<p class="news-paragraph">{content}</p>'
                    + '<button class="news-cancel" onclick="cancelSource(this)">CANCEL</button>'
                    + '</div>';
var statusTemplate = '<li>Your {who} is <span id="result-{who}">{status}</span></li>';

// takes in a template and replaces things in curly brackets with key values
// keys should be an object with key value pairs
function substituteKeys(template, keys){
	for(let key of Object.keys(keys)){
		template = template.replaceAll(`{${key}}`, keys[key]);
	}
	return template;
}
