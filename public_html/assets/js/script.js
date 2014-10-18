/* this is where the magic happens - Ian can write the next bit... */
// HINT - it's javascript 

var efforts = ["1","2","3","4","5"];

var data = $.ajax({
	url: 'http://activex.local/data.php?param=http://matchthecity.org/regions/1/opportunities.json',
	dataType: 'json',
	success: function(data) {
		var ops = data;

		console.log(ops);
		
				
		var theUL = $('ul').first();
		$(ops).each(function(){
			var op = $(this)[0];
			theUL.append('<li>Desc: '+op.description
				+' '+ op.day_of_week
				+'<br />'+op.venue.name
				+'<br />'+op.start_time
				+'<br />'+'</li>');
		});
	}
});

