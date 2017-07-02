'use strict';

function beep(){ 
	//process.stderr.write('\x07');
	console.log('\x07');
}
function beepN(n){
	if(n > 0){
		beep();
		n = n - 1;
		setTimeout( function () {
			console.log('wait for beep')
			beepN(n);
		}, 500);
	}
}
module.exports = beepN;
