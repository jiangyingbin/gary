     $(function(){
            	$("img").lazyload({effect: "fadeIn",failurelimit : 7,threshold: 30});
            	$(window).scroll(function(){
            	    /* 判断是否到达底部*/           
            		if($(document).scrollTop() >= $(document).height() - $(window).height()){
            	  	$('img').addClass('fl');            	  	           	  	
            	  }
            	})
            })