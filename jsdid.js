(function(d, logAllIds){
	var allIds = d.querySelectorAll("*[id]"), 
		domHasDuplicateIds = false;
	for( var i = 0, l = allIds.length; i < l; i++){
		var currentId = allIds[i].id,
			idCounter = d.querySelectorAll('#'+currentId).length;
		if(1 !== idCounter){
			domHasDuplicateIds = true;
			console.error(i, currentId, idCounter , allIds[i]);
		} else {
			if(logAllIds){
				console.log(i, currentId, idCounter , allIds[i]);
			}
		}
	}
	if(!domHasDuplicateIds){
		console.info("Everything fine. DOM has no duplicate IDs.");
	}
}(document, false));
