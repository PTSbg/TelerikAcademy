function solve(args) {
	var regex = new RegExp('<a href="(.*?)">(.*?)</a>', "g");
	var text = args[0].replace(regex, function(none, href, content) {
		return '[' + content + '](' + href + ')';
	});

	console.log(text);
}

solve(['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ]);