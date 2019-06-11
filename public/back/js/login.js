$(function(){
	$("#form").bootstrapValidator({
		   fields: {
		   	username:{
		   		 validators: {
		   		 	 notEmpty: {
		   		 	 	 message: "用户名不能为空"
		   		 	 },
		   		 	  stringLength: {
			            min: 2,
			            max: 6,
			            message: "用户名长度必须在 2-6 位"
			          },
			          callback:{
			          	 message: "当前用户不存在"
			          }
		   		 }
		   	},
		   	password:{
		   		 validators: {
		   		 	 notEmpty: {
		   		 	 	 message: "密码不能为空"
		   		 	 },
		   		 	 stringLength: {
			            min: 6,
			            max: 12,
			            message: "密码长度必须在 6-12 位"
			         },
			         callback:{
			         	message:"当前密码错误"
			         }
		   		 }
		   	}
		   }
	});
	
	
	
	
   $("#form").on("success.form.bv",function(e){
   	e.preventDefault();
   	var username=$("#username").val();
   	var password=$("#password").val();
   	console.log(username);
   	$.ajax({
   		 type:"post",
   		 url:"/employee/employeeLogin",
   		 data:{
   		 	"username":username,
   		 	"password":password
   		 },
   		 dataType:"json",
   		 success:function(data){
   		 	 console.log(data);
   		 	//判断当前data是否为真，如果为真的话，表示当前账号和密码正确
   		 	 if(data.success){
   		 	 	location.href="index.html";
   		 	 }
   		 	 
   		 	 //如果返回1000的话，表示当前用户不存在
   		 	 if(data.error==1000){
   		 	 	console.log("当前用户不存在");
   		 	   $('#form').data("bootstrapValidator").updateStatus("username", "INVALID", "callback");
   		 	 }
   		 	 //如果返回1001的话，表示当前密码错误
   		 	 if(data.error==1001){
   		 	 	console.log("当前密码错误");
   		 	 	$("#form").data("bootstrapValidator").updateStatus("password", "INVALID", "callback");
   		 	 }
   		 }
   	});
   })
	
	
	$('[type="reset"]').click(function(){
		alert("ok");
		$("#form").data("bootstrapValidator").resetForm();
	})
	
	
	
		//登入拦截功能
		if(location.href.indexOf("login.html")===-1){
			 $.ajax({
				type:"get",
				url:"/employee/checkRootLogin",
				dataType:"json",
				success:function(data){
					console.log(data);
					if(data.error==400){
						location.href="login.html";
					}
				}
			});
		}
	
	
	
	
})
