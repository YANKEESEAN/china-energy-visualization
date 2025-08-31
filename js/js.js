/*   */
$(function () {
    echarts_1();
    echarts_2();
    echarts_32();
    echarts_33();
    echarts_4();

    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        var data = [{
            title: '2017年能源工业投资情况'
        },
        ['2017年'],
        [{
            name: '电力、蒸汽、热水生产和供应业',
            max: 30000
        }, {
            name: '石油和天然气开采业',
            max: 30000
        }, {
            name: '石油加工及炼焦业',
            max: 30000
        }, {
            name: '煤炭采选业',
            max: 30000
        }, {
            name: '煤气生产和供应业',
            max: 30000
        }],
        [24284.99, 2648.93, 2676.77, 2648.38, 2229.78],
        ]
        option = {
            color: ['#9DD060', '#35C96E', '#4DCEF8'],
            tooltip: {},
            radar: {
                center: ['50%', '50%'],
                radius: ["25%", "70%"],

                name: {
                    textStyle: {
                        color: '#72ACD1'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.0',
                        width: 2
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)',
                        width: 1,
                        type: 'dotted'
                    },
                },
                splitArea: {
                    areaStyle: {
                        color: ['rgba(255,255,255,.1)', 'rgba(255,255,255,0)']
                    }
                },
                indicator: data[2]
            },
            series: [{
                name: '',
                type: 'radar',
                data: [{
                    areaStyle: {
                        normal: {
                            opacity: 0.3,
                        }
                    },
                    value: data[3],
                    name: data[1][0]
                },
                {
                    areaStyle: {
                        normal: {
                            opacity: 0.3,
                        }
                    },
                    value: data[4],
                    name: data[1][1]
                },
                {
                    areaStyle: {
                        normal: {
                            opacity: 0.3,
                        }
                    },
                    value: data[5],
                    name: data[1][2]
                }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['煤炭', '石油', '天然气', '煤层气', '页岩气'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [
                {

                    type: 'bar',
                    data: [2070.12, 38.06, 65690.12, 3659.69, 5605.59],
                    barWidth: '35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color: '#27d08a',
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    }
                }

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
        option = {
            title: [{
                text: '一次能源生产量',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['原煤', '原油', '天然气', '一次电力及其它能源'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '一次能源生产量',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value: 314084, name: '原煤' },
                        { value: 29358, name: '原油' },
                        { value: 27494, name: '天然气' },
                        { value: 95064, name: '一次电力及其它能源' },
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
        option = {
            title: [{
                text: '能源消费量',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['煤炭', '石油', '天然气', '一次电力及其它能源'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '能源消费量',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value: 304042, name: '煤炭' },
                        { value: 96839, name: '石油' },
                        { value: 45444, name: '天然气' },
                        { value: 94675, name: '一次电力及其它能源' },
                    ]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['能源生产弹性系数', '能源消费弹性系数'],
                align: 'right',
                right: '0%',
                top: '0%',
                textStyle: {
                    color: "#fff",
                    fontSize: '13',
                    fontFamily: '宋体',
                },
                itemGap: 35
            },
            grid: {
                left: '0%',
                top: '40px',
                right: '0%',
                bottom: '2%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['2017年', '2018年', '2019年', '2020年', '2021年', '2022年'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '16',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '16',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [{
                name: '能源生产弹性系数',
                type: 'line',
                data: [0.54, 0.84, 0.82, 0.14, 0.58, 3.07],
                itemStyle: {
                    normal: {
                        color: '#2f89cf',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }, {
                name: '能源消费弹性系数',
                type: 'line',
                data: [0.46, 0.52, 0.55, 1.00, 0.65, 0.97],
                itemStyle: {
                    normal: {
                        color: '#62c98d',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            },
            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})