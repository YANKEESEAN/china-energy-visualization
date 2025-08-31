/*   */
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));
        var data = [
                        { name: '拉萨', value: 0.11 },
                        { name: '上海', value: 0.00 },
                        { name: '福州', value: 1.92 },
                        { name: '南宁', value: 1.51 },
                        { name: '广州', value: 0.00 },
                        { name: '太原', value: 483.1 },
                        { name: '昆明', value: 67.13 },
                        { name: '海口', value: 0.00 },
                        { name: '沈阳', value: 10.72 },
                        { name: '长春', value: 4.88 },
                        { name: '银川', value: 54.18 },
                        { name: '南昌', value: 1.84 },
                        { name: '吉林', value: 4.88 },
                        { name: '呼和浩特', value: 411.22},
                        { name: '成都', value: 10.78 },
                        { name: '西安', value: 290.97 },
                        { name: '重庆', value: 0.00 },
                        { name: '南京', value: 3.09 },
                        { name: '北京', value: 0.97 },
                        { name: '乌鲁木齐', value: 341.86 },
                        { name: '杭州', value: 0.15 },
                        { name: '济南', value: 32.85 },
                        { name: '兰州', value: 40.38 },
                        { name: '天津', value: 0.00 },
                        { name: '郑州', value: 44.43 },
                        { name: '哈尔滨', value: 36.68 },
                        { name: '石家庄', value: 24.22 },
                        { name: '长沙', value: 2.57 },
                        { name: '合肥', value: 57.25 },
                        { name: '武汉', value: 0.13 },
            
        ];
        var geoCoordMap = {
            '上海': [121.48, 31.22],
            '福州': [119.3, 26.08],
            '南宁': [108.33, 22.84],
            '广州': [113.23, 23.16],
            '太原': [112.53, 37.87],
            '昆明': [102.73, 25.04],
            '深圳': [114.07, 22.62],
            '海口': [110.35, 20.02],
            '沈阳': [123.38, 41.8],
            '银川': [106.27, 38.47],
            '拉萨': [91.11, 29.97],
            '南昌': [115.89, 28.68],
            '吉林': [126.57, 43.87],
            '呼和浩特': [111.65, 40.82],
            '成都': [104.06, 30.67],
            '西安': [108.95, 34.27],
            '重庆': [106.54, 29.59],
            '南京': [118.78, 32.04],
            '贵阳': [106.71, 26.57],
            '北京': [116.46, 39.92],
            '杭州': [120.19, 30.26],
            '济南': [117, 36.65],
            '兰州': [103.73, 36.03],
            '天津': [117.2, 39.13],
            '郑州': [113.65, 34.76],
            '哈尔滨': [126.63, 45.75],
            '乌鲁木齐': [87.68, 43.77],
            '石家庄': [114.48, 38.03],
            '长沙': [113, 28.21],
            '合肥': [117.27, 31.86],
            '武汉': [114.31, 30.52],

        };
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        option = {
            title: {
                text: '中国煤炭资源分布',
                subtext: '单位：亿吨；来源：国家统计局',
                left: 'center',
                top: '20%',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (typeof (params.value)[2] == "undefined") {
                        return params.name + ' : \n' + '煤炭储量：' + params.value;
                    } else {
                        return params.name + ' : ' + params.value[2];
                    }
                }
            },

            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: false,//禁止其放大缩小
                itemStyle: {
                    normal: {
                        areaColor: '#4c60ff',
                        borderColor: '#002097'
                    },
                    emphasis: {
                        areaColor: '#293fff'
                    }
                }
            },
            series: [
                {
                    name: '能源储量',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function (val) {
                        if (val[2]<10){
                        return val[2]*2;
                        }
                        return val[2] / 10;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ffeb7b'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

})

