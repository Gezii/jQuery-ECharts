/**
 * Created by Gezii on 2015/5/12.
 */

/**
 * jQuery与echarts的整合插件
 */
;(function($,echarts){
    'use strict';

    var Chart = function (element, options) {
        this.chart      = null;
        this.options    = null;
        this.$element   = null;

        this.init(element, options);
    };

    Chart.VERSION  = '1.0.0';

    Chart.TRANSITION_DURATION = 150;

    Chart.DEFAULTS = {
        showLoading: true,
        loadingOption : {
            text : "数据读取中...",
            effect : 'whirling',
            textStyle : {
                fontSize : 20
            }
        },
        on     : "",      //绑定的事件，参见echarts的chart.on
        theme  : {},
        option : {},      //echarts画图的option对象 或 可返回option对象的function
        url    : "",      //待加载数据的URL地址
        data   : {}       //待发送 Key/value 参数
    };

    Chart.prototype.init = function (element, options) {
        this.$element  = $(element);
        this.options   = options.series ? options : this.getOptions(options);

        this.chart     = echarts.init(this.$element.get(0),this.options.theme);
    };

    Chart.prototype.getDefaults = function () {
        return Chart.DEFAULTS;
    };

    Chart.prototype.getOptions = function (options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options);

        return options
    };

    Chart.prototype.getDelegateOptions = function () {
        var options  = {};
        var defaults = this.getDefaults();

        this._options && $.each(this._options, function (key, value) {
            if (defaults[key] != value) options[key] = value
        });

        return options
    };

    Chart.prototype.draw = function () {
        var that = this;
        var opt = this.options;
        opt.showLoading ? this.chart.showLoading(opt.loadingOption) : null;

        if (opt.series){
            this.setOption(opt);
            return;
        }

        if (opt.url) {
            $.get(opt.url, opt.data, function(json){
                if (typeof opt.option == 'function') {
                    var option = opt.option.call(this,json,that.chart);
                    that.setOption(option);
                }
            });
        } else {
            var option = typeof opt.option == 'function' ?
                opt.option.call(this) :
                opt.option;
            this.setOption(option);
        }
    };

    Chart.prototype.setOption = function(option) {
        this.options.on ? this.chart.on = this.options.on : null;   //绑定事件
        this.chart.setOption(option);
        this.chart.hideLoading();
    };

    function Plugin(option) {
        return this.each(function () {
            var $this   = $(this);
            var data    = $this.data('jquery.echarts');
            var options = $.extend({}, Chart.DEFAULTS, $this.data(), typeof option == 'object' && option);

            if (!data) $this.data('jquery.echarts', (data = new Chart(this, options)));

            data.draw();
        })
    }

    var old = $.fn.chart;

    $.fn.chart = Plugin;
    $.fn.chart.Constructor = Chart;

    // chart NO CONFLICT
    // ===================

    $.fn.chart.noConflict = function () {
        $.fn.chart = old;
        return this
    }
})(jQuery,echarts);