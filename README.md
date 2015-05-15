# jQuery-Ajax-ECharts
jQuery与ECharts整合的插件， 异步加载数据

# Usage
Just install, import and write

## Require
需要引入 [jQuery](http://jquery.com/) 和 [ECharts](http://echarts.baidu.com/index.html)

## Import
	<head>
		<script type="text/javascript" src="jquery.js"></script>
		<script type="text/javascript" src="echarts.js"></script>
		<script type="text/javascript" src="jquery.echarts.js"></script>
	</head>	

## Run

	$(".chart").chart(option);	//option为echarts所需option对象;
	$("#chart").chart(options);	//options为参数对象， 见下： 

## Parameter

* **options.showLoading** 	-- 可选，默认为true， 是否显示londing动画
* **options.loadingOption** -- 可选， echarts的loading对象
* **options.theme** 		-- 可选， echarts主题对象
* **options.option** 		-- 为Object类型时， 作为echarts的option对象传入； 为Function类型时，作为异步加载数据的回调函数， 传入两个参数(rtData,chart)， 函数需返回echarts的option对象， 可通过传入的chart操作图表（如： 绑定事件） 
* **options.onClick** 		-- 可选， echarts绑定的单击事件，比较常用， 所以单独拿出来 
* **options.url** 			-- 异步加载($.get方法)的url参数
* **options.data** 			-- 异步加载($.get方法)的data参数