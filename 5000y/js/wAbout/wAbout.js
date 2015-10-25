
$(function(){
	$(".About_People").delegate('li','mouseover',function(){//产品遮罩
//		alert("点击:"+$(this).text());
		$(this).find('.mark').css('top', '0px'); 
	
	});
		$(".About_People").delegate('li','mouseout',function(){//产品遮罩
//		alert("点击:"+$(this).text());
		$(this).find('.mark').css('top', '-270px'); 
	
	});	
	//子项div的显隐
	$(".subnav").delegate('li','click',function(){
//		alert("点击:"+$(this).text());
		$(this).siblings().removeClass("hover");
		 $(this).addClass("hover");
		switch($(this).text())
					{
					case "五千言":
						$(".About_About").show(1000);
						$(".About_About").siblings().hide(1000);					 
					  break;
					case "公司动态":
					    $(".About_News").show(1000);
						$(".About_News").siblings().hide(1000);
						 ajax_news();
					  break;
					 case "招贤纳士":
					     $(".About_Hires").show(1000);
						$(".About_Hires").siblings().hide(1000);
						 ajax_hires();
					  break;
					default:
						 $(".About_People").show(1000);
						 $(".About_People").siblings().hide(1000);
						  ajax_people();
					  break;
					}

	});
	/*加载关于五千言*/
 $.ajax({
		  		
							url:"http://picp.zicp.net/wuqianyan/wAbout_WgetIntroduces",
							dataType: 'jsonp',			
							jsonp: "callback",
							
							beforeSend:function(XMLHttpRequest){
								$(".About_About").html("<center><img src=\"img/loading.gif\" /></center>");
							},
							success:function (data){
								//alert(data.json[0].introduce);
								 $(".About_About").html("");	
								  $(".About_About").html(data.json[0].introduce);	
								 
												
								
							},
						   error:function(data){
							  
								alert("维护中，请稍后访问！");
							}
});
/*加载单个新闻*/
/*$(".About_News").delegate(".more","click",function(){
	
			 $.ajax({
							
										url:"http://picp.zicp.net/wuqianyan/wAbout _WgetNews",
										dataType: 'jsonp',			
										jsonp: "callback",
										data:{newsName:$(this).parent("li").find(".About_news_title").text()},
										beforeSend:function(XMLHttpRequest){
											$(".About_oneNew").html("<center><img src=\"img/loading.gif\" width=\"32px\" height=\"32px\"/></center>");
										},
										success:function (data){
										//	alert(data.json[0].newsName);
											 $(".About_News").hide(1000);	
											 $(".About_oneNew").html(data.json[0].newsIntroduce+'<div class="About_News_show backButton"><a href="javascript:void(0);">返回</a></div>');	
											  $(".About_oneNew").show(1000);
															
											
										},
									   error:function(data){
										  
											alert("维护中，请稍后访问！");
										}
			});
	});
	//新闻列表和单个新闻div显隐
		$(document).delegate(".About_News_show","click",function(){
				$(".About_oneNew").hide(1000);
				$(".About_News").show(1000);
		});*/
/*加载单个招聘*/
$(".About_Hires").delegate(".more","click",function(){
	
			 $.ajax({
							
										url:"http://picp.zicp.net/wuqianyan/wAbout_WgetHires",
										dataType: 'jsonp',			
										jsonp: "callback",
										data:{hireName:$(this).parent("li").find(".About_news_title").text()},
										beforeSend:function(XMLHttpRequest){
											$(".About_oneNew").html("<center><img src=\"img/loading.gif\" width=\"32px\" height=\"32px\"/></center>");
										},
										success:function (data){
										//	alert(data.json[0].newsName);
											 $(".About_Hires").hide(1000);	
											 $(".About_oneHire").html(data.json[0].newsIntroduce+'<div class="About_Hires_show backButton"><a href="javascript:void(0);">返回</a></div>');	
											  $(".About_oneHire").show(1000);
															
											
										},
									   error:function(data){
										  
											alert("维护中，请稍后访问！");
										}
			});
	});
	//招聘列表和单个招聘div显隐
		$(document).delegate(".About_Hires_show","click",function(){
				$(".About_oneHire").hide(1000);
				$(".About_Hires").show(1000);
		});
/*加载单个成员*/
			$(".About_People").delegate('li','click',function(){//产品遮罩

				//alert($(this).find('.mark a').attr("alt"));
			  $.ajax({
		  		
                url:"http://picp.zicp.net/wuqianyan/wAbout_people",
                dataType: 'jsonp',			
				jsonp: "callback",
				data:{id:$(this).find('.mark a').attr("alt")},
                beforeSend:function(XMLHttpRequest){
                    $(".About_DanPeople").html("<center><img src=\"http://www.kuitao8.com/images/loading.gif\" /></center>");
                },
                success:function (data){
					//alert(data.json.length);
					 $(".About_DanPeople").html("");
					
				$(".About_People").hide(1000);
				
	
					
                 	$(".About_DanPeople").show(1000).html(data.json[0].introduce+'<div class="About_People_show backButton"><a href="javascript:void(0);">返回</a></div>');
			 	
               

                },
               error:function(data){
				  
                    alert("维护中，请稍后访问！");
                }
            });
	});
	$(document).delegate(".About_People_show","click",function(){
				$(".About_DanPeople").hide(1000);
				$(".About_People").show(1000);
		});
		
	
//function ajax_news(){
//		/*加载公司动态*/
//			 $.ajax({
//							
//										url:"http://picp.zicp.net/wuqianyan/wAbout_WgetAllNews",
//										dataType: 'jsonp',			
//										jsonp: "callback",
//										
//										beforeSend:function(XMLHttpRequest){
//											$(".About_News").html("<center><img src=\"img/loading.gif\" width=\"32px\" height=\"32px\"/></center>");
//										},
//										success:function (data){
//										//	alert(data.json[0].newsName);
//											 $(".About_News").html("");
//										
//														NewsfenYe(data.json);
//										},
//									   error:function(data){
//										  
//											alert("维护中，请稍后访问！");
//										}
//			});
//}

function ajax_hires(){
		/*加载招聘信息*/
			 $.ajax({
							
										url:"http://picp.zicp.net/wuqianyan/wAbout_WgetAllHires",
										dataType: 'jsonp',			
										jsonp: "callback",
										
										beforeSend:function(XMLHttpRequest){
											$(".About_Hires").html("<center><img src=\"img/loading.gif\" width=\"32px\" height=\"32px\"/></center>");
										},
										success:function (data){
										//	alert(data.json[0].newsName);
											 $(".About_Hires").html("");
											
														HiresfenYe(data.json);
										},
									   error:function(data){
										  
											alert("维护中，请稍后访问！");
										}
			});
}

function ajax_people(){
		/*加载团队成员信息*/
			 $.ajax({
							
										url:"http://picp.zicp.net/wuqianyan/wAbout_Allpeople",
										dataType: 'jsonp',			
										jsonp: "callback",
										
										beforeSend:function(XMLHttpRequest){
											$(".About_People").html("<center><img src=\"img/loading.gif\" width=\"32px\" height=\"32px\"/></center>");
										},
										success:function (data){
										//	alert(data.json[0].newsName);
											 $(".About_People").html(' ');
											 var str="";
											 str=' <img src="http://www.5000y.cn.img.800cdn.com/uploads/150226/1_175232_1.jpg" alt="图片" width="1096" height="616" /><ul class="three_case">';
											for(var i=0;i<data.json.length;i++){
												str+='<li class="block"> <div><img src="'+data.json[i].usImg+'" class="lazy" style="display: block;"></div><div class="mark" style="top: -270px;"><a href="javascript:void(0);" alt="'+data.json[i].id+'">'+data.json[i].name+'</a></div></li>';
												}
												str+="</ul>"
											 $(".About_People").html(str);
													
										},
									   error:function(data){
										  
											alert("维护中，请稍后访问！");
										}
			});
}

/**
 * 新闻列表分页方法
 */	
// function NewsfenYe(data){	
// 
//	 list_length=data.length;//项数
//	
//	 pageSize=6;//每页项数
//	 pageNum=0;//页数
//	 
//	 pageCurrent=1;//当前页
//
//	
//	if(list_length%pageSize==0){
//		pageNum=list_length/pageSize;
//	}else{
//		pageNum=Math.floor(list_length/pageSize)+1;//floor向下取整
//	}
//	/*初始化，显示第一页*/
//		 caseContent="";
//		 caseContent='<ul class="list-article">';
//	 if(pageSize<list_length){//每页数小于总项数
//		for(var i=pageCurrent*pageSize-pageSize;i<pageCurrent*pageSize;i++){
//			    caseContent += '<li class="clear"><a href="javascript:void(0);" class="litpic"><img  src="'+data[i].newsImg+'" class="lazy" style="display: block;"></a><h2><a href="javascript:void(0);" class="About_news_title">'+data[i].newsName+'</a></h2><p class="des">'+data[i].newsExplain+'</p><p class="info"><img src="http://www.cyid.cn.img.800cdn.com/static/newarr.png">发布日期：<span>'+data[i].newsTime+'</span><img src="http://www.cyid.cn/static/dot.png">&nbsp;浏览:：<span>'+data[i].newsClicks+'</span> 次</p><a href="javascript:void(0);" class="more">more</a></li>';
//				}
//	}else{
//		for(var i=pageCurrent*pageSize-pageSize;i<list_length;i++){
//			   caseContent += '<li class="clear"><a href="javascript:void(0);" class="litpic"><img  src="'+data[i].newsImg+'" class="lazy" style="display: block;"></a><h2><a href="javascript:void(0);" class="About_news_title">'+data[i].newsName+'</a></h2><p class="des">'+data[i].newsExplain+'</p><p class="info"><img src="http://www.cyid.cn.img.800cdn.com/static/newarr.png">发布日期：<span>'+data[i].newsTime+'</span><img src="http://www.cyid.cn/static/dot.png">&nbsp;浏览:：<span>'+data[i].newsClicks+'</span> 次</p><a href="javascript:void(0);" class="more">more</a></li>';
//				}
//	}
//	caseContent+='</ul><div class="clear"><a class="pagePre" href="javascript:void(0);">上一页</a>'+pageCurrent+'/'+pageNum+'<a class="pageNext" href="javascript:void(0);">下一页</a></div>'
//	$(".About_News").html(caseContent);
//	
//	$(".About_News").delegate(".pagePre",'click',function(){//上一页
//		if(pageCurrent==1){
//			return false;
//		}else{
//			caseContent='';
//			caseContent='<ul class="list-article">';
//			pageCurrent=pageCurrent-1;//当前页减一；
//			for(var i=pageCurrent*pageSize-pageSize;i<pageCurrent*pageSize;i++){
//				   caseContent += '<li class="clear"><a href="javascript:void(0);" class="litpic"><img  src="'+data[i].newsImg+'" class="lazy" style="display: block;"></a><h2><a href="javascript:void(0);" class="About_news_title">'+data[i].newsName+'</a></h2><p class="des">'+data[i].newsExplain+'</p><p class="info"><img src="http://www.cyid.cn.img.800cdn.com/static/newarr.png">发布日期：<span>'+data[i].newsTime+'</span><img src="http://www.cyid.cn/static/dot.png">&nbsp;浏览:：<span>'+data[i].newsClicks+'</span> 次</p><a href="javascript:void(0);" class="more">more</a></li>';
//				}
//			caseContent+='</ul><div class="clear"><a class="pagePre" href="javascript:void(0);">上一页</a>'+pageCurrent+'/'+pageNum+'<a class="pageNext" href="javascript:void(0);">下一页</a></div>'
//			$(".About_News").html(caseContent);
//		}
//	});
//	
//	$(".About_News").delegate(".pageNext",'click',function(){//下一页
//		if(pageCurrent==pageNum){
//			return false;
//		}else{
//			caseContent='';
//			caseContent='<ul class="list-article">';
//			pageCurrent=pageCurrent+1;//当前页加一；
//			if(pageCurrent==pageNum){//如果到最后一页
//				for(var i=pageCurrent*pageSize-pageSize;i<list_length;i++){
//					  caseContent += '<li class="clear"><a href="javascript:void(0);" class="litpic"><img  src="'+data[i].newsImg+'" class="lazy" style="display: block;"></a><h2><a href="javascript:void(0);" class="About_news_title">'+data[i].newsName+'</a></h2><p class="des">'+data[i].newsExplain+'</p><p class="info"><img src="http://www.cyid.cn.img.800cdn.com/static/newarr.png">发布日期：<span>'+data[i].newsTime+'</span><img src="http://www.cyid.cn/static/dot.png">&nbsp;浏览:：<span>'+data[i].newsClicks+'</span> 次</p><a href="javascript:void(0);" class="more">more</a></li>';
//				}
//			}else{
//				for(var i=pageCurrent*pageSize-pageSize;i<pageCurrent*pageSize;i++){
//					  caseContent += '<li class="clear"><a href="javascript:void(0);" class="litpic"><img  src="'+data[i].newsImg+'" class="lazy" style="display: block;"></a><h2><a href="javascript:void(0);" class="About_news_title">'+data[i].newsName+'</a></h2><p class="des">'+data[i].newsExplain+'</p><p class="info"><img src="http://www.cyid.cn.img.800cdn.com/static/newarr.png">发布日期：<span>'+data[i].newsTime+'</span><img src="http://www.cyid.cn/static/dot.png">&nbsp;浏览:：<span>'+data[i].newsClicks+'</span> 次</p><a href="javascript:void(0);" class="more">more</a></li>';
//				}
//			}
//			caseContent+='</ul><div class="clear"><a class="pagePre" href="javascript:void(0);">上一页</a>'+pageCurrent+'/'+pageNum+'<a class="pageNext" href="javascript:void(0);">下一页</a></div>'
//			$(".About_News").html(caseContent);
//		}
//	});
//
//
//	
// }/*分页方法结束*/	
	
/**
 * 招聘信息列表分页方法
 */	
 function HiresfenYe(data){	
 
	 list_length=data.length;//项数
	
	 pageSize=6;//每页项数
	 pageNum=0;//页数
	 
	 pageCurrent=1;//当前页

	
	if(list_length%pageSize==0){
		pageNum=list_length/pageSize;
	}else{
		pageNum=Math.floor(list_length/pageSize)+1;//floor向下取整
	}
	/*初始化，显示第一页*/
		 caseContent="";
		 caseContent='<ul class="list-article">';
	 if(pageSize<list_length){//每页数小于总项数
		for(var i=pageCurrent*pageSize-pageSize;i<pageCurrent*pageSize;i++){
			    caseContent += '<li class="clear"><a href="javascript:void(0);" class="litpic"><img  src="'+data[i].hireImg+'" class="lazy" style="display: block;"></a><h2><a href="javascript:void(0);" class="About_news_title">'+data[i].hireName+'</a></h2><p class="des">'+data[i].hireExplain+'</p><p class="info"><img src="http://www.cyid.cn.img.800cdn.com/static/newarr.png">发布日期：<span>'+data[i].hireTime+'</span><img src="http://www.cyid.cn/static/dot.png">&nbsp;浏览:：<span>'+data[i].hireClicks+'</span> 次</p><a href="javascript:void(0);" class="more">more</a></li>';
				}
	}else{
		for(var i=pageCurrent*pageSize-pageSize;i<list_length;i++){
			   caseContent += '<li class="clear"><a href="javascript:void(0);" class="litpic"><img  src="'+data[i].hireImg+'" class="lazy" style="display: block;"></a><h2><a href="javascript:void(0);" class="About_news_title">'+data[i].hireName+'</a></h2><p class="des">'+data[i].hireExplain+'</p><p class="info"><img src="http://www.cyid.cn.img.800cdn.com/static/newarr.png">发布日期：<span>'+data[i].hireTime+'</span><img src="http://www.cyid.cn/static/dot.png">&nbsp;浏览:：<span>'+data[i].hireClicks+'</span> 次</p><a href="javascript:void(0);" class="more">more</a></li>';
				}
	}
	caseContent+='</ul><div class="clear"><a class="pagePre" href="javascript:void(0);">上一页</a>'+pageCurrent+'/'+pageNum+'<a class="pageNext" href="javascript:void(0);">下一页</a></div>'
	$(".About_Hires").html(caseContent);
	
	$(".About_Hires").delegate(".pagePre",'click',function(){//上一页
		if(pageCurrent==1){
			return false;
		}else{
			caseContent='';
			caseContent='<ul class="list-article">';
			pageCurrent=pageCurrent-1;//当前页减一；
			for(var i=pageCurrent*pageSize-pageSize;i<pageCurrent*pageSize;i++){
				   caseContent += '<li class="clear"><a href="javascript:void(0);" class="litpic"><img  src="'+data[i].hireImg+'" class="lazy" style="display: block;"></a><h2><a href="javascript:void(0);" class="About_news_title">'+data[i].hireName+'</a></h2><p class="des">'+data[i].hireExplain+'</p><p class="info"><img src="http://www.cyid.cn.img.800cdn.com/static/newarr.png">发布日期：<span>'+data[i].hireTime+'</span><img src="http://www.cyid.cn/static/dot.png">&nbsp;浏览:：<span>'+data[i].hireClicks+'</span> 次</p><a href="javascript:void(0);" class="more">more</a></li>';
				}
			caseContent+='</ul><div class="clear"><a class="pagePre" href="javascript:void(0);">上一页</a>'+pageCurrent+'/'+pageNum+'<a class="pageNext" href="javascript:void(0);">下一页</a></div>'
			$(".About_Hires").html(caseContent);
		}
	});
	
	$(".About_Hires").delegate(".pageNext",'click',function(){//下一页
		if(pageCurrent==pageNum){
			return false;
		}else{
			caseContent='';
			caseContent='<ul class="list-article">';
			pageCurrent=pageCurrent+1;//当前页加一；
			if(pageCurrent==pageNum){//如果到最后一页
				for(var i=pageCurrent*pageSize-pageSize;i<list_length;i++){
					  caseContent += '<li class="clear"><a href="javascript:void(0);" class="litpic"><img  src="'+data[i].hireImg+'" class="lazy" style="display: block;"></a><h2><a href="javascript:void(0);" class="About_news_title">'+data[i].hireName+'</a></h2><p class="des">'+data[i].hireExplain+'</p><p class="info"><img src="http://www.cyid.cn.img.800cdn.com/static/newarr.png">发布日期：<span>'+data[i].hireTime+'</span><img src="http://www.cyid.cn/static/dot.png">&nbsp;浏览:：<span>'+data[i].hireClicks+'</span> 次</p><a href="javascript:void(0);" class="more">more</a></li>';
				}
			}else{
				for(var i=pageCurrent*pageSize-pageSize;i<pageCurrent*pageSize;i++){
					  caseContent += '<li class="clear"><a href="javascript:void(0);" class="litpic"><img  src="'+data[i].hireImg+'" class="lazy" style="display: block;"></a><h2><a href="javascript:void(0);" class="About_news_title">'+data[i].hireName+'</a></h2><p class="des">'+data[i].hireExplain+'</p><p class="info"><img src="http://www.cyid.cn.img.800cdn.com/static/newarr.png">发布日期：<span>'+data[i].hireTime+'</span><img src="http://www.cyid.cn/static/dot.png">&nbsp;浏览:：<span>'+data[i].hireClicks+'</span> 次</p><a href="javascript:void(0);" class="more">more</a></li>';
				}
			}
			caseContent+='</ul><div class="clear"><a class="pagePre" href="javascript:void(0);">上一页</a>'+pageCurrent+'/'+pageNum+'<a class="pageNext" href="javascript:void(0);">下一页</a></div>'
			$(".About_Hires").html(caseContent);
		}
	});


	
 }/*分页方法结束*/	
});

