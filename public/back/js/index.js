$(function(){
	
	$(".nav .flgl").click(function(){
		$(".erjq").stop().slideToggle();
	})
	
	
	$(".upside .a").click(function(){
		$(".lt_aside").toggleClass("xsyc");
		$(".upside").toggleClass("ss");
		$(".mainbody").toggleClass("ztzt");
	})
	
	
	
	
	//模态框
	$(".upside .b").click(function(){
		$('#myModal').modal("show");
	})
	
	$("#tc").click(function(){
		$.ajax({
			type:"get",
			url:"/user/logout",
			dataType:"json",
			success:function(data){
				if(data.success){
					location.href="login.html";
				}
			}
		});
	});
		
		
		
	

})
