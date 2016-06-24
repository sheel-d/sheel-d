
import marked from 'marked';

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

var data = [
	{
		content : 'hello',
		time : '2016-6-12'
	},
	{
		content : 'hello2',
		time : '2016-6-13'
	}
]; 

export {data};