
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
		content : marked([
			'### 清静经\n\n',
			'老君曰：\n\n',
			'大道无形，生育天地；大道无情，运行日月；大道无名，长养万物；吾不知其名，强名曰道。\n\n',
			'夫道者：有清有浊，有动有静；天清地浊，天动地静。男清女浊，男动女静。降本流末，而生万物。\n\n',
			'清者浊之源，动者静之基。人能常清静，天地悉皆归。 夫人神好清，而心扰之；人心好静，而欲牵之。\n\n',
			'常能遣其欲，而心自静，澄其心而神自清。自然六欲不生，三毒消灭。所以不能者，为心未澄，欲未遣也。\n\n',
			'能遣之者，内观其心，心无其心；外观其形，形无其形；远观其物，物无其物。三者既悟，唯见於空；观空亦空，空无所空；\n\n',
			'所空既无，无无亦无；无无既无，湛然常寂；寂无所寂，欲岂能生？欲既不生，即是真静。真常应物，真常得性；\n\n',
			'常应常静，常清静矣。如此清静，渐入真道；既入真道，名为得道，虽名得道，实无所得；为化众生，名为得道；\n\n',
			'能悟之者，可传圣道。\n\n',
			'老君曰：\n\n',
			'上士无争，下士好争；上德不德，下德执德。执著之者，不名道德。众生所以不得真道者，为有妄心。\n\n',
			'既有妄心，即惊其神；既惊其神，即著万物；既著万物，即生贪求；即生贪求，即是烦恼。烦恼妄想，忧苦身心。\n\n',
			'但遭浊辱。流浪生死，常沉苦海，永失真道。真常之道，悟者自得，得悟道者，常清静矣。\n\n'
		].join('')),
		time : '2016-6-20'
	}
]; 

export {data};