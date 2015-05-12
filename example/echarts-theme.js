/**
 * Created by Gezii on 2015/5/6.
 */
(function(window){
    function getTheme(opt){
        var option = opt || {};

        if (!option.color) {    // 默认色板
            option.color = [
                '#73e0ff','#ff8a7e','#50aae9','#f4bc5b','#f59595','#a2dff8',
                '#c2eebc','#b6a2de','#5ab1ef','#ffb980','#d87a80',
                '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
                '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
                '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
            ];
        }

        if (!option.title) {     // 图表标题
            option.title = {
                itemGap: 8,
                    textStyle: {
                    fontWeight: 'normal',
                        fontSize : 16,
                        color: '#000000'          // 主标题文字颜色
                }
            };
        }

        if (!option.legend) {   // 图例
            option.legend = {
                itemGap: 15,
                x : 'right'
            }
        }

        if (!option.dataRange) {    // 值域
            option.dataRange = {
                itemWidth: 15,
                    //color:['#1e90ff','#afeeee']
                    color: ['#2ec7c9','#b6a2de']
            }
        }

        if (!option.toolbox) {
            option.toolbox = {
                color : ['#1e90ff', '#1e90ff', '#1e90ff', '#1e90ff'],
                    effectiveColor : '#ff4500',
                    itemGap: 8
            }
        }

        if (!option.tooltip) {  // 提示框
            option.tooltip = {
                backgroundColor: 'rgba(50,50,50,0.5)',     // 提示背景颜色，默认为透明度为0.7的黑色
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
                        lineStyle : {          // 直线指示器样式设置
                        color: '#008acd'
                    },
                    crossStyle: {
                        color: '#008acd'
                    },
                    shadowStyle : {                     // 阴影指示器样式设置
                        color: 'rgba(200,200,200,0.2)'
                    }
                }
            }
        }

        if (!option.dataZoom) {     // 区域缩放控制器
            option.dataZoom = {
                dataBackgroundColor: '#efefff',            // 数据背景颜色
                    fillerColor: 'rgba(182,162,222,0.2)',   // 填充颜色
                    handleColor: '#008acd'    // 手柄颜色
            }
        }

        if (!option.grid) {     // 网格
            option.grid = {
//        borderColor: '#eee'
                borderWidth : 0
            }
        }

        if (!option.categoryAxis) {     // 类目轴
            option.categoryAxis = {
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#D1D4DA'
                    }
                },
                splitLine: {           // 分隔线
                    show : false,
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: ['#eee']
                    }
                },
                axisTick : {
                    show : false
                }
            }
        }

        if (!option.valueAxis) {        // 数值型坐标轴默认参数
            option.valueAxis = {
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#D1D4DA'
                    }
                },
                splitArea : {
                    show : false,
                    areaStyle : {
                        color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
                    }
                },
                splitLine: {           // 分隔线
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: ['#eee']
                    }
                }
            }
        }

        if (!option.polar) {
            option.polar = {
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#ddd'
                    }
                },
                splitArea : {
                    show : true,
                    areaStyle : {
                        color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
                    }
                },
                splitLine : {
                    lineStyle : {
                        color : '#ddd'
                    }
                }
            }
        }

        if (!option.timeline) {
            option.timeline = {
                lineStyle : {
                    color : '#008acd'
                },
                controlStyle : {
                    normal : { color : '#008acd'},
                    emphasis : { color : '#008acd'}
                },
                symbol : 'emptyCircle',
                symbolSize : 3
            }
        }

        if (!option.bar) {      // 柱形图默认参数
            option.bar = {
                itemStyle: {
                    normal: {
                        barBorderRadius: 0
                    },
                    emphasis: {
                        barBorderRadius: 0
                    }
                }
            }
        }

        if (!option.line) {     // 折线图默认参数
            option.line = {
                smooth : true,
                symbol: 'emptyCircle',  // 拐点图形类型
                symbolSize: 3           // 拐点图形大小
            }
        }

        if (!option.k) {        // K线图默认参数
            option.k = {
                itemStyle: {
                    normal: {
                        color: '#d87a80',       // 阳线填充颜色
                        color0: '#2ec7c9',      // 阴线填充颜色
                        lineStyle: {
                            width: 1,
                            color: '#d87a80',   // 阳线边框颜色
                            color0: '#2ec7c9'   // 阴线边框颜色
                        }
                    }
                }
            }
        }

        if (!option.scatter) {  // 散点图默认参数
            option.scatter = {
                symbol: 'circle',    // 图形类型
                    symbolSize: 4        // 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            }
        }

        if (!option.radar) {    // 雷达图默认参数
            option.radar = {
                symbol: 'emptyCircle',    // 图形类型
                symbolSize:3
                //symbol: null,         // 拐点图形类型
                //symbolRotate : null,  // 图形旋转控制
            }
        }

        if (!option.map) {
            option.map = {
                itemStyle: {
                    normal: {
                        areaStyle: {
                            color: '#ddd'
                        },
                        label: {
                            textStyle: {
                                color: '#d87a80'
                            }
                        }
                    },
                    emphasis: {                 // 也是选中样式
                        areaStyle: {
                            color: '#fe994e'
                        },
                        label: {
                            textStyle: {
                                color: 'rgb(100,0,0)'
                            }
                        }
                    }
                }
            }
        }

        if (!option.force) {
            option.force = {
                itemStyle: {
                    normal: {
                        linkStyle : {
                            strokeColor : '#1e90ff'
                        }
                    }
                }
            }
        }

        if (!option.chord) {
            option.chord = {
                padding : 4,
                itemStyle : {
                    normal : {
                        lineStyle : {
                            width : 1,
                            color : 'rgba(128, 128, 128, 0.5)'
                        },
                        chordStyle : {
                            lineStyle : {
                                width : 1,
                                color : 'rgba(128, 128, 128, 0.5)'
                            }
                        }
                    },
                    emphasis : {
                        lineStyle : {
                            width : 1,
                            color : 'rgba(128, 128, 128, 0.5)'
                        },
                        chordStyle : {
                            lineStyle : {
                                width : 1,
                                color : 'rgba(128, 128, 128, 0.5)'
                            }
                        }
                    }
                }
            }
        }

        if (!option.gauge) {
            option.gauge = {
                startAngle: 225,
                endAngle : -45,
                axisLine: {            // 坐标轴线
                    show: true,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, '#2ec7c9'],[0.8, '#5ab1ef'],[1, '#d87a80']],
                        width: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    splitNumber: 10,   // 每份split细分多少段
                    length :15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length :22,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer : {
                    width : 5,
                    color : 'auto'
                },
                title : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: '#333'
                    }
                },
                detail : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: 'auto'
                    }
                }
            }
        }

        if (!option.textStyle) {
            option.textStyle = {
                fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
            }

        }

        return option;
    }

    // 主题,可根据不同情况修改不同图表类型的主题
    var EchartsThemes = {
        getTheme:getTheme,      //自定义主题方法

        default: getTheme(),    //默认主题

        bar: getTheme(),

        line: getTheme({
            grid : {
                borderWidth : 0,
                y: 80
            },
            legend: {
                data:[],
                x : "right",
                padding: [50,40,5,5]
            }
        }),

        map: getTheme(),

        pie: getTheme()
    };

    window.EchartsThemes = EchartsThemes;

})(window);



