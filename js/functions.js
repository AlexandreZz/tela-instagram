$(function(){

	// VERIFICACAO DO FORMULARIO

	$('input[type=text],input[type=password]').focus(function(){

		let verificar = ()=>{
			if($("input[type=text]").val().length > 0 && $("input[type=password]").val().length > 0){
				$('input[type=submit]').css('background-color','rgb(0,149,246)').css('cursor','pointer');
				$('div.block').css('display','none');
			}else if($("input[type=text]").val().length <= 0 || $("input[type=password]").val().length <= 0){
				$('input[type=submit]').css('background-color','rgba(0,149,246,0.4)').css('cursor','context-menu');
				$('div.block').css('display','block');
			}
		}

		let id = setInterval(verificar,1000);

	});

	let count = 0,
		 imgAlvo = document.getElementsByClassName('img-wraper-slider');

	imgAlvo[0].style.opacity = '1';

	setInterval(()=>{
		imgAlvo[count].style.opacity = '0';
		count++;

		if(count == imgAlvo.length)
			count = 0
		
		imgAlvo[count].style.opacity = '1';
	},5500)

})