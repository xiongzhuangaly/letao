
$(document).ajaxStart(function(){
	// 开启进度条
   NProgress.start();
})
$(document).ajaxStop(function(){
	 //结束进度条
NProgress.done();

})
