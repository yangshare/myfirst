$(function(){
	
	$(".Case_CanPing").delegate('li','mouseover',function(){//产品遮罩
//		alert("点击:"+$(this).text());
		$(this).find('.mark').css('top', '0px'); 
	
	});
		$(".Case_CanPing").delegate('li','mouseout',function(){//产品遮罩
//		alert("点击:"+$(this).text());
		$(this).find('.mark').css('top', '-270px'); 
	
	});
	 //查看指定类型产品
		 $(".Case_DaoHang").delegate("a","click",function(){
			//表示选择的类型
			  $(this).parent().siblings().children('a').css('border-bottom', '0px');
			   $(this).css('border-bottom', '2px solid #c40e24');
			   $(".Case_CanPing").show();
			     $(".Case_DanCanPing").hide();
					 $.ajax({
		  		
							url:"http://picp.zicp.net/wuqianyan/wCase_WgetCaseByType",
							dataType: 'jsonp',			
							jsonp: "callback",
							data:{typeName:$(this).text()},
							beforeSend:function(XMLHttpRequest){
								$(".Case_CanPing").html('<center><img src=\"img/loading.gif\" width=\"32px\" height=\"32px\"/></center>');
							},
							success:function (data){
								//alert(data.json.length);
								 $(".Case_CanPing").html("");		
								 
												
								 fenYe(data.json);//分页处理
							},
						   error:function(data){
							  
								alert("维护中，请稍后访问！");
							}
					});
			});	
						 		
	
	/*加载单个产品*/
			$(".Case_CanPing").delegate('li','click',function(){//产品遮罩

				//alert($(this).find('.mark a').attr("alt"));
			  $.ajax({
		  		
                url:"http://picp.zicp.net/wuqianyan/wCase_WgetCase",
                dataType: 'jsonp',			
				jsonp: "callback",
				data:{id:$(this).find('.mark a').attr("alt")},
                beforeSend:function(XMLHttpRequest){
                    $(".Case_DanCanPing").html("<center><img src=\"img/loading.gif\" width=\"32px\" height=\"32px\"/></center>");
                },
                success:function (data){
					//alert(data.json.length);
					 $(".Case_DanCanPing").html("");
					
				$(".Case_CanPing").hide(1000);
				
	
					
                 	$(".Case_DanCanPing").show(1000).html(data.json[0].caseContent+'<div class="Case_CanPing_show backButton"><a href="javascript:void(0);">返回</a></div>');
			 	
               

                },
               error:function(data){
				  
                    alert("维护中，请稍后访问！");
                }
            });
	});
	$(document).delegate(".Case_CanPing_show","click",function(){
				$(".Case_DanCanPing").hide(1000);
				$(".Case_CanPing").show(1000);
		});
	/*加载上边菜单项*/
	  $.ajax({
		  		
                url:"http://picp.zicp.net/wuqianyan/wCase_WgetType",
                dataType: 'jsonp',			
				jsonp: "callback",
                beforeSend:function(XMLHttpRequest){
                    $(".Case_DaoHang").html("<center><img src=\"http://www.kuitao8.com/images/loading.gif\" /></center>");
                },
                success:function (data){
					//alert(data.json.length);
					 $(".Case_DaoHang").html("");
					
					 caseContent="<center><span><ul>";
	
					for(var i=0;i<data.json.length;i++){
						  caseContent += '<li><a href="javascript:void(0);">'+data.json[i]+'</a></li>';
					}
					 caseContent+="</ul></span></center>";
                 	$(".Case_DaoHang").html(caseContent);
			 	
               

                },
               error:function(data){
				  
                    alert("维护中，请稍后访问！");
                }
            });
            
          	/*加载产品项*/
			 $.ajax({
		  		
                url:"http://picp.zicp.net/wuqianyan/wCase_WgetAllcase",
                dataType: 'jsonp',			
				jsonp: "callback",
                beforeSend:function(XMLHttpRequest){
                    $(".Case_CanPing").html("<center><img src=\"img/loading.gif\" width=\"32px\" height=\"32px\"/></center>");
                },
                success:function (data){
					//alert(data.json.length);
					 $(".Case_CanPing").html("");		
					 
									
					 fenYe(data.json);//分页处理
				},
               error:function(data){
				  
                    alert("维护中，请稍后访问！");
                }
            });
		
			
/**
 * 分页方法
 */	
 function fenYe(data){	
 
	 list_length=data.length;//项数
	
	 pageSize=12;//每页项数
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
			    caseContent += '<li class="block" ><div><img  src="'+data[i].caseImg+'" class="lazy" style="display: block;"></div><div class="mark" style="top: -207px;"><a href="javascript:void(0);" alt="'+data[i].id+'">'+data[i].caseName+'</a></div></li>';
				}
	}else{
		for(var i=pageCurrent*pageSize-pageSize;i<list_length;i++){
			   caseContent += '<li class="block" ><div><img  src="'+data[i].caseImg+'" class="lazy" style="display: block;"></div><div class="mark" style="top: -207px;"><a href="javascript:void(0);" alt="'+data[i].id+'">'+data[i].caseName+'</a></div></li>';
				}
	}
	caseContent+='</ul><div class="clear"><a class="pagePre" href="javascript:void(0);">上一页</a>'+pageCurrent+'/'+pageNum+'<a class="pageNext" href="javascript:void(0);">下一页</a></div>'
	$(".Case_CanPing").html(caseContent);
	
	$(document).delegate(".pagePre",'click',function(){//上一页
		if(pageCurrent==1){
			return false;
		}else{
			caseContent='';
			 caseContent="<ul class='three_case'>";
			pageCurrent=pageCurrent-1;//当前页减一；
			for(var i=pageCurrent*pageSize-pageSize;i<pageCurrent*pageSize;i++){
				 caseContent += '<li class="block" ><div><img  src="'+data[i].caseImg+'" class="lazy" style="display: block;"></div><div class="mark" style="top: -207px;"><a href="javascript:void(0);" alt="'+data[i].id+'">'+data[i].caseName+'</a></div></li>';
				}
			caseContent+='</ul><div class="clear"><a class="pagePre" href="javascript:void(0);">上一页</a>'+pageCurrent+'/'+pageNum+'<a class="pageNext" href="javascript:void(0);">下一页</a></div>'
			$(".Case_CanPing").html(caseContent);
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
					  caseContent += '<li class="block" ><div><img  src="'+data[i].caseImg+'" class="lazy" style="display: block;"></div><div class="mark" style="top: -207px;"><a href="javascript:void(0);" alt="'+data[i].id+'">'+data[i].caseName+'</a></div></li>';
					}
			}else{
				for(var i=pageCurrent*pageSize-pageSize;i<pageCurrent*pageSize;i++){
					 caseContent += '<li class="block" ><div><img  src="'+data[i].caseImg+'" class="lazy" style="display: block;"></div><div class="mark" style="top: -207px;"><a href="javascript:void(0);" alt="'+data[i].id+'">'+data[i].caseName+'</a></div></li>';
					}
			}
			caseContent+='</ul><div class="clear"><a class="pagePre" href="javascript:void(0);">上一页</a>'+pageCurrent+'/'+pageNum+'<a class="pageNext" href="javascript:void(0);">下一页</a></div>'
			$(".Case_CanPing").html(caseContent);
		}
	});


	
 }/*分页方法结束*/	



});

