

var footerData = [
	{
	 	imgUrl : './img/'+minMaxNum(1,10)+'.jpg',
	 	author : 'sheel',
	 	time : '2016-6-15',
	 	content : '我是第一个留言的，嘻嘻'
	}
];

function minMaxNum(min,max){
	return Math.round(Math.random()*(max-min)+min);
}

export {footerData};