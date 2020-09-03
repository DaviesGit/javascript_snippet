/**
 *   waituntil checker return ture!
 *   
 **/
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