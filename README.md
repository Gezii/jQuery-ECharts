# jQuery-ECharts
jQuery与ECharts整合的插件

# Usage
Just install, import and write

## require
需要引入 [jQuery](http://jquery.com/) 和 [ECharts](http://echarts.baidu.com/index.html)

## Import
	<head>
		<script type="text/javascript" src="jquery.echarts.js"></script>
	</head>	

## Run

* $(".chart").chart(option);	//option为echarts所需option对象;
* $("#chart").chart(options);	//options为参数对象
	default = {
        showLoading: true,
        loadingOption : {
            text : "数据读取中...",
            effect : 'whirling',
            textStyle : {
                fontSize : 20
            }
        },
        on     : "",      //绑定的事件，参见echarts的chart.on
        theme  : {},	  //echarts主题对象
        option : {},      //echarts画图的option对象 或 可返回option对象的function
        url    : "",      //待加载数据的URL地址
        data   : {}       //待发送 Key/value 参数
    }

## parameter

* options.showLoading -- 可选，默认为true， 是否显示londing动画
* options.loadingOption -- 可选， echarts的loading对象
* options.on -- 可选， echarts绑定的事件，参见echarts的chart.on
* options.theme -- 可选， echarts主题对象
* options.option -- 为Object类型时， 作为echarts的option对象传入； 为Function类型时，作为异步加载数据的回调函数传入两个参数(rtData,chart)
* options.url -- 异步加载($.get方法)的url参数
* options.data -- 异步加载($.get方法)的data参数