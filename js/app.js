/* Author:
	Gavyn McKenzie
	Initialising plugins from plugins.js
*/

// Mmmmm can't decide whether to jQuery by default or not...
$(document).ready(function(){
	// Does this browser cut the mustard?
	if(querySelector in document
	   && localStorage in window
	   && addEventListener in window) {
		// Decide to run JS
	}
});

