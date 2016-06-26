
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

var contentImgData = {
	data : marked([
			'欢迎来到`Sheel`的博客：\n\n',
			'博主现就读于黑龙江大学2013级电子商务专业\n\n',
			'爱好：看书、象棋、足球、跑步、游戏、睡觉、动漫\n\n',
			'现在是一枚前端攻城狮(菜鸟级别)\n\n',
			'——丁泽华'
		].join(''))
}

export {contentImgData};
