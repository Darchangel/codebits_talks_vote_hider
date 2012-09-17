function showItDude(){
	checkItDude(true);
}

function checkItDude(show){
	var thumbsUpImg = $('#thumbsupimg');
	var thumbsDownImg = $('#thumbsdownimg');

	var isVoted = ($('span#votext').length > 0 || $.makeArray($('span#thumbs>a')).reduce(function(prev, curr, idx, arr){return prev || $(curr).css('opacity') != 1;}, false) );

	if(!show && !isVoted){
		$('span#rateup, span#ratedown').each(function(){
			$(this).css('display', 'none');
			$(this).after('<span class="removeThisCrap ' + $(this).attr('class') + '">??</span>');
		});
	} else {
		$('span#rateup, span#ratedown').css('display', 'inline');
		$('span.removeThisCrap').remove();
	}
}

$('#thumbsupimg').parent().click(showItDude);
$('#thumbsdownimg').parent().click(showItDude);

checkItDude(false);
