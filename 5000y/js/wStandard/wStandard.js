
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
					case "硬装设计制图标准":
						$(".About_About").show(1000);
						$(".About_About").siblings().hide(1000);					 
					  break;
					case "施工标准工艺":
					    $(".About_News").show(1000);
						$(".About_News").siblings().hide(1000);
						 ajax_news();
					  break;
					 default://手绘制图和软装设计
					     $(".About_People").show(1000);
						$(".About_People").siblings().hide(1000);
						ajax_people();
					  break;
				
					}

	});
	/*加载 硬装设计制图标准*/
 $.ajax({
		  		
							url:"http://picp.zicp.net/wuqianyan/wStandard_WgetContent",
							dataType: 'jsonp',			
							jsonp: "callback",
							data:{standardType:'硬装设计制图标准'},
							beforeSend:function(XMLHttpRequest){
								$(".About_About").html("<center><img src=\"img/loading.gif\" /></center>");
							},
							success:function (data){
								//alert(data.json[0].introduce);
								 $(".About_About").html("");	
								  $(".About_About").html('<img src="'+data.json[0].standardImg+'" style="margin-bottom:15px"/>'+data.json[0].standardIntroduce);	
								 
												
								
							},
						   error:function(data){
							  
								alert("维护中，请稍后访问！");
							}
});



function ajax_news(){
		/*加载施工标准工艺*/
			 $.ajax({
							
										url:"http://picp.zicp.net/wuqianyan/wStandard_WgetContent",
										dataType: 'jsonp',			
										jsonp: "callback",
										data:{standardType:'施工标准工艺'},
										beforeSend:function(XMLHttpRequest){
											$(".About_News").html("<center><img src=\"img/loading.gif\" width=\"32px\" height=\"32px\"/></center>");
										},
										success:function (data){
										//	alert(data.json[0].newsName);
											 $(".About_News").html('<img src="'+data.json[0].standardImg+'" style="margin-bottom:15px"/>'+data.json[0].standardIntroduce);	
										
													
										},
									   error:function(data){
										  
											alert("维护中，请稍后访问！");
										}
			});
}



function ajax_people(){
		/*加载手绘制图和软装设计*/
			 $.ajax({
							
										url:"http://picp.zicp.net/wuqianyan/wStandard_WgetPaintType",
										dataType: 'jsonp',			
										jsonp: "callback",
										
										beforeSend:function(XMLHttpRequest){
											$(".About_People").html("<center><img src=\"img/loading.gif\" width=\"32px\" height=\"32px\"/></center>");
										},
										success:function (data){
										//	alert(data.json[0].newsName);
											 $(".About_People").html(' ');
											fenYe(data.json);
													
										},
									   error:function(data){
										  
											alert("维护中，请稍后访问！");
										}
			});
}


	
/**
 * 分页方法
 */	
 function fenYe(data){	
 
	 list_length=data.length;//项数
	
	 pageSize=9;//每页项数
	 pageNum=0;//页数
	 
	 pageCurrent=1;//当前页

	
	if(list_length%pageSize==0){
		pageNum=list_length/pageSize;
	}else{
		pageNum=Math.floor(list_length/pageSize)+1;//floor向下取整
	}
	/*初始化，显示第一页*/
		 caseContent="<ul class='three_case'>";
	 if(pageSize<list_length){//每页数小于总项数
		for(var i=pageCurrent*pageSize-pageSize;i<pageCurrent*pageSize;i++){
			    caseContent += '<li class="block" ><div><img  src="'+data[i].standardImg+'" class="lazy" style="display: block;"></div><div class="mark" style="top: -207px;"><a href="javascript:void(0);" alt="'+data[i].id+'">'+data[i].standardName+'</a></div></li>';
				}
	}else{
		for(var i=pageCurrent*pageSize-pageSize;i<list_length;i++){
			   caseContent += '<li class="block" ><div><img  src="'+data[i].standardImg+'" class="lazy" style="display: block;"></div><div class="mark" style="top: -207px;"><a href="javascript:void(0);" alt="'+data[i].id+'">'+data[i].standardName+'</a></div></li>';
				}
	}
	caseContent+='</ul><div class="clear"><a class="pagePre" href="javascript:void(0);">上一页</a>'+pageCurrent+'/'+pageNum+'<a class="pageNext" href="javascript:void(0);">下一页</a></div>'
	$(".About_People").html(caseContent);
	
	$(document).delegate(".pagePre",'click',function(){//上一页
		if(pageCurrent==1){
			return false;
		}else{
			caseContent='';
			 caseContent="<ul class='three_case'>";
			pageCurrent=pageCurrent-1;//当前页减一；
			for(var i=pageCurrent*pageSize-pageSize;i<pageCurrent*pageSize;i++){
				 caseContent += '<li class="block" ><div><img  src="'+data[i].standardImg+'" class="lazy" style="display: block;"></div><div class="mark" style="top: -207px;"><a href="javascript:void(0);" alt="'+data[i].id+'">'+data[i].standardName+'</a></div></li>';
				}
			caseContent+='</ul><div class="clear"><a class="pagePre" href="javascript:void(0);">上一页</a>'+pageCurrent+'/'+pageNum+'<a class="pageNext" href="javascript:void(0);">下一页</a></div>'
			$(".About_People").html(caseContent);
		}
	});
	
	$(document).delegate(".pageNext",'click',function(){//下一页
		if(pageCurrent==pageNum){
			return false;
		}else{
			caseContent='';
			 caseContent="<ul class='three_case'>";
			pageCurrent=pageCurrent+1;//当前页加一；
			if(pageCurrent==pageNum){//如果到最后一页
				for(var i=pageCurrent*pageSize-pageSize;i<list_length;i++){
					  caseContent += '<li class="block" ><div><img  src="'+data[i].standardImg+'" class="lazy" style="display: block;"></div><div class="mark" style="top: -207px;"><a href="javascript:void(0);" alt="'+data[i].id+'">'+data[i].standardName+'</a></div></li>';
					}
			}else{
				for(var i=pageCurrent*pageSize-pageSize;i<pageCurrent*pageSize;i++){
					 caseContent += '<li class="block" ><div><img  src="'+data[i].standardImg+'" class="lazy" style="display: block;"></div><div class="mark" style="top: -207px;"><a href="javascript:void(0);" alt="'+data[i].id+'">'+data[i].standardName+'</a></div></li>';
					}
			}
			caseContent+='</ul><div class="clear"><a class="pagePre" href="javascript:void(0);">上一页</a>'+pageCurrent+'/'+pageNum+'<a class="pageNext" href="javascript:void(0);">下一页</a></div>'
			$(".About_People").html(caseContent);
		}
	});


	
 }/*分页方法结束*/	
 
 /*加载单个成员*/
			$(".About_People").delegate('li','click',function(){//产品遮罩

				//alert($(this).find('.mark a').attr("alt"));
			  $.ajax({
		  		
                url:"http://picp.zicp.net/wuqianyan/wStandard_WgetPaintContent",
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
				
	
					
                 	$(".About_DanPeople").show(1000).html(data.json[0].standardContent+'<div class="About_People_show backButton"><a href="javascript:void(0);">返回</a></div>');
			 	
               

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
		
		
});

