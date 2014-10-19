/* this is where the magic happens - Ian can write the next bit... */
// HINT - it's javascript 

var efforts = ["1","2","3","4","5"];

$(document).ready(function() {
	$('.sweat-set').on('click',function(){
		var sweat = $(this).data('sweat');
		var theUL = $('ul#activities');
		var location = $('select.location').val();
		if (location == 2) {
			alert('This location is incomplete');
		}
		
		console.log('Loading sweat level ' + sweat);
		theUL.html("<li>Wait for it...</li>");
		
		var data = $.ajax({
			url: 'http://fitlike.local/data.php?param=http://matchthecity.org/regions/' + location + '/opportunities.json?effort_rating=' + sweat,
			dataType: 'json',
			success: function(data) {
				var ops = data;
				
				theUL.empty();
				
				if (ops == "") {
				
					theUL.html("<li>No results, sorry about that. Why not try a slightly different sweat level?</li>");
					
				} else {
				
					$(ops).each(function(){
						var op = $(this)[0];
						theUL.append('<li>Desc: '+op.description
							+' '+ op.day_of_week
							+'<br />'+op.venue.name
							+'<br />'+op.start_time
							+'<br />'+'</li>');
					});
					
					console.log('Done. Found ' + ops.length + ' items.');
					
				}
			}
		});

	});
});

