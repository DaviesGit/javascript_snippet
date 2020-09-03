function waituntil(checker, callback, delay) {
	if (!delay)
		delay = 100;
	if ('function' !== typeof checker)
		return callback();
	if (checker())
		return callback();
	setTimeout(() => {
		waituntil(checker, callback, delay);
	}, delay);
}

// [
// {
// 	wait: function() {
// 		return true;
// 	},
// 	function: function() {

// 	}
// },
// ]

function run_wait_chain(function_chain, callback, delay) {
	let index = 0;
	!delay&&(delay=0);
	!callback&&(callback=function(){});
	function _loop() {
		if (index >= function_chain.length)
			return callback();
		let fun = function_chain[index];
		waituntil(fun.wait, function() {
			fun.function();
			++index;
			_loop();
		}, delay);
	}
	_loop();
}