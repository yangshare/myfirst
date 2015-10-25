$(document).ready(function(){
	
	/*------------------------------------导航js begin------------------------- */
	var Emenus = ['Case','About','Contact','Service','Product','Standard'];
	var Cmenus = ['案 例','关 于','联系我们','服务流程','产品配套','设计施工标准'];
	
	$(".nav li a").hover(function(){
  		
		var index = $(".nav li a").index($(this));
		$(this).text(Cmenus[index]).addClass("strong");
		
		},function(){
			
		var index = $(".nav li a").index($(this));
		$(this).text(Emenus[index]).removeClass('strong');
									
	});

	

	
	$("#order img").click(function(){alert("提交成功！");})
});