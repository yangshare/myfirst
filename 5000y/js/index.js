//var urls;//全局URL
//$(function(){
//	
//	//alert("");
//	urls=getCookie("urls");
////	alert("urls="+urls);
//	if(urls==null||urls==""){		
//		$(".Ymain iframe").attr("src","wIndex/index.html");
//	}else{
//		$(".Ymain iframe").attr("src",urls);
//	}
//	$(document).delegate("a",'click',function(){
//		if($(this).attr("target")=="Yindex_iframe"){
//			urls=$(this).attr("href");		
//	//		alert("urls="+urls);
//			setCookie("urls",urls)
//			$(".Ymain iframe").attr("src",urls);
//		}
//	});
//	
//
//});
//
////设置cookie使页面刷新不回默认页面
//function setCookie(name,value)
//{
//  var Days = 30; //此 cookie 将被保存 30 天
//  var exp  = new Date();    //new Date("December 31, 9998");
//  exp.setTime(exp.getTime() + Days*60*1000);
//  document.cookie = name + "="+ escape(value) +";expires="+ exp.toGMTString();
//}
//function getCookie(name)
//{
//  var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
//  if(arr != null) return unescape(arr[2]); return null;
//}
//function delCookie(name)
//{
//  var exp = new Date();
//  exp.setTime(exp.getTime() - 1);
//  var cval=getCookie(name);
//  if(cval!=null) document.cookie=name +"="+cval+";expires="+exp.toGMTString();
//}


