		// 扩展API是否准备好，如果没有准备好则监听'plusready'事件
		if(window.plus){
			plusReady();
		}else{
			document.addEventListener("plusready",plusReady,false );
		}
		// 扩展API准备完成后要执行的操作
		function plusReady(){
			var self = plus.webview.currentWebview();//pw回车可输出plus.webview
			
		}
		
		
		
		
