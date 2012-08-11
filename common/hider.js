function showItDude(){
	checkItDude(true);
}

function checkItDude(show){
	var thumbsUpImg = $('#thumbsupimg');
	var thumbsDownImg = $('#thumbsdownimg');

	var isVoted = (thumbsUpImg.css('border-color') != "rgb(255, 255, 255)") || (thumbsDownImg.css('border-color') != "rgb(255, 255, 255)");

	if(!show && !isVoted){
		$('font').css('display', 'none');
		$('font[color=green]').after('<font color="green" class="removeThisCrap">??</font>');
		$('font[color=red]').after('<font color="red" class="removeThisCrap">??</font>');
	} else {
		$('font').css('display', 'inline');
		$('font.removeThisCrap').remove();
	}
}

$('#thumbsupimg').parent().click(showItDude);
$('#thumbsdownimg').parent().click(showItDude);

checkItDude(false);
