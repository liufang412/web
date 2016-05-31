
$(function(){

	$('.first-ul li:eq(0)').hover(
		function(){
			$('.first-ul li').css({'background-color':''});
			$(this).css({'background-color':'#008CD6'});
			$('.first img').attr({'src':'image/h-jjfa.jpg'});
			$('.first img').addClass('active');
			// $('.first img').css({'margin-left':'-22%',
			// 	'transition':'all 0.5s'});
		},
		function(){

			$(this).css({'background-color':'#008CD6'});
			$('.first img').attr({'src':'image/h-jjfa.jpg'});
			// $('.first img').css({'margin-left':'-22%',
			// 	'transition':'all 0.5s'});
	});
	$('.first-ul li:eq(1)').hover(
		function(){
			$('.first-ul li').css({'background-color':''});
			$(this).css({'background-color':'#008CD6'});
			$('.first img').attr({'src':'image/2.jpg'});
			$('.first img').addClass('active');
			// $('.first img').css({'margin-left':'-22%',
			// 	'transition':'all 0.5s'});
		},
		function(){
			$(this).css({'background-color':'#008CD6'});
			$('.first img').attr({'src':'image/2.jpg'});
			// $('.first img').css({'margin-left':'-22%',
			// 	'transition':'all 0.5s'});
	});
	$('.first-ul li:eq(2)').hover(
		function(){
			$('.first-ul li').css({'background-color':''});
			$(this).css({'background-color':'#008CD6'});
			$('.first img').attr({'src':'image/3.jpg'});
			// $('.first img').css({'margin-left':'-43%',
			// 	'transition':'all 0.5s'});
			$('.first img').addClass('active');
			
		},
		function(){
			$(this).css({'background-color':'#008CD6'});
			$('.first img').attr({'src':'image/3.jpg'});
			// $('.first img').css({'margin-left':'-43%',
			// 	'transition':'all 0.5s'});
			
	});
	$('.first-ul li:eq(3)').hover(
		function(){
			$('.first-ul li').css({'background-color':''});
			$(this).css({'background-color':'#008CD6'});
			$('.first img').attr({'src':'image/4.jpg'});
			$('.first img').addClass('active');
			// $('.first img').css({'margin-right':'123%',
			// 	'transition':'all 0.5s'});
			
		},
		function(){
			$(this).css({'background-color':'#008CD6'});
			$('.first img').attr({'src':'image/4.jpg'});
			
	});
	
	$('.down-left a').hover(
		function(){
			$('.down-left').css({'border-color':'#008CD6'});
			$('#xwzx-a').css({'color':'#008CD6'});
		},
		function(){
			$('.down-left').css({'border-color':'#7D6666'});
			$('#xwzx-a').css({'color':'#666666'});
		}
		);
	$('#xwzx-a').hover(
		function(){
			$('.down-left a').css({'background-color':'#008CD6'});
			$('.down-left').css({'border-color':'#008CD6'});
			$('#xwzx-a').css({'color':'#008CD6'});
		},
		function(){
			$('.down-left a').css({'background-color':''});
			$('.down-left').css({'border-color':'#7D6666'});
			$('#xwzx-a').css({'color':'#666666'});
		}
		);
	
	
	$('.hyal-center li').each(function(i){
		if(i>0&&i<9){
			$(this).hover(
				function(){
					$('.hyal-last-right').css({'display':'none'});
					$('.hyal-last img').css({'display':'none'});
					$('.hyal-last img').css({'transform':' scale(1,1)',
						'transition':'all ease 0.1s'});
					$(this).css({'background-image':'url(image/icase_nav_on.png)'});
					$('.font2').eq(i).css({'color':'#fff'});
					$('.li2').eq(i).css({'background-image':
						'url(image/case.png)','transition':'all 0.5s'});
					$('.hyal-last img').eq(i).css({'display':'block',
						'transform':' scale(1.1,1.1)',
						'transition':'all ease 0.5s'});
					$('.hyal-last-right').eq(i).css({'display':'block'});
					
				},
				function(){
					$(this).css({'background-image':''});
					$('.li2').eq(i).css({'background-image':''});
					$('.font2').eq(i).css({'color':'','-webkit-transform':''});
					$('.hyal-last img').css({'transform':' scale(1,1)',
						'transition':'all ease 0.1s'});
					
					
				}
			)
		}else if(i==0){
				$(this).hover(
					function(){
						// $('.hyal-last-right').css({'display':'none'});
						$('.hyal-last img').css({'display':'none'});
						$('.hyal-last img').css({'transform':' scale(1.0,1.0)',
						'transition':'all ease 0.1s'});
						$(this).css({'background-image':'url(image/icase.png)'});
						$('.li2').eq(i).css({'background-image':
						'url(image/case.png)','transition':'all 0.5s'});
						$('.font2').eq(i).css({'color':'#fff'});
						$('.hyal-last img').eq(i).css({'transform':' scale(1.1,1.1)',
						'transition':'all ease 0.5s'});
						$('.hyal-last img').eq(i).css({'display':'block'});
						$('.hyal-last-right').eq(i).css({'display':'block'});
					},
					function(){
						$(this).css({'background-image':''});
						$('.li2').css({'background-image':''});
						$('.font2').eq(i).css({'color':''});
						
					}
				)
			}else if(i==9){
				$(this).hover(
					function(){
						$('.hyal-last-right').css({'display':'none'});
						$('.hyal-last img').css({'display':'none'});
						$('.hyal-last img').css({'transform':' scale(1.0,1.0)',
						'transition':'all ease 0.1s'});
						$(this).css({'background-image':'url(image/icase_nav_last_on.png)'});
						$('.li2').eq(i).css({'background-image':
						'url(image/case.png)','transition':'all 0.5s'});
						$('.font2').eq(i).css({'color':'#fff'});
						$('.hyal-last img').eq(i).css({'transform':' scale(1.1,1.1)',
						'transition':'all ease 0.5s'});
						$('.hyal-last img').eq(i).css({'display':'block'});
						$('.hyal-last-right').eq(i).css({'display':'block'});
					},
					function(){
						$(this).css({'background-image':''});
						$('.li2').eq(i).css({'background-image':''});
						$('.font2').eq(i).css({'color':''});
						
					}
				)
			}
	});
	$('.hyal-center li').each(function(i){
		$(this).hover(
			function(){
				$('.hyal-last-right').addClass('active2');
			},
			function(){
				$('.hyal-last-right').addClass('active2');
			}
		);
	});
	
	
});
