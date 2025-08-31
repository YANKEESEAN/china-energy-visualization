$(window).load(function () {
  $(".loading").fadeOut()
})

/****/
$(document).ready(function () {
  var whei = $(window).width()
  $("html").css({ fontSize: whei / 20 })
  $(window).resize(function () {
    var whei = $(window).width()
    $("html").css({ fontSize: whei / 20 })
  });
});


$(window).load(function () { $(".loading").fadeOut() })
$(function () {
  echarts_2()
  echarts_3()
  echarts_4()
  echarts_5()
  pe01()
  
  function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts2'));

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        // formatter:'{c}' ,
      },
      grid: {
        left: '0',
        top: '30',
        right: '10',
        bottom: '0',
        containLabel: true
      },
      legend: {
        data: ['人均能源消费量', '人均电力消费量'],
        right: 'center',
        top: 0,
        textStyle: {
          color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
      },

      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          rotate: -90,
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },

        data: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年']

      }, {

        axisPointer: { show: false },
        axisLine: { show: false },
        position: 'bottom',
        offset: 20,

      }],

      yAxis: [{
        type: 'value',
        axisTick: { show: false },
        // splitNumber: 6,
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },
        axisLabel: {
          formatter: "{value} ",
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,
          },
        },

        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }],
      series: [
        {
          name: '人均能源消费量',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: 'rgb(115, 230, 151)',
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(228, 228, 126, .2)'
              }, {
                offset: 1,
                color: 'rgba(228, 228, 126, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(115, 230, 151)',
              borderColor: 'rgb(115, 230, 151)',
              borderWidth: 12
            }
          },
          data: [3146.0, 3181.0, 3265.0, 3346.0, 3463.0, 3531.0, 3724.0]

        }, {
          name: '人均电力消费量',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {

            normal: {
              color: 'rgb(110, 187, 202)',
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 128, 128,.2)'
              }, {
                offset: 1,
                color: 'rgba(255, 128, 128, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(110, 187, 202)',
              borderColor: 'rgb(110, 187, 202)',
              borderWidth: 12
            }
          },
          data: [4205.0, 4410.0, 4721.0, 5098.0, 5318.0, 5501.0, 6032.0]
        },
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts3'));

    option = {

      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['生活能源消费量', '生活煤炭消费量'],
        right: 'center',
        top: 0,
        textStyle: {
          color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
      },
      grid: {
        left: '0',
        right: '20',
        bottom: '0',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        axisLine: {
          lineStyle: {
            color: 'white'

          }
        },
        axisLabel: {
          //rotate:-90,
          formatter: function (value) { return value.split("").join("\n"); },
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.3)'
          }
        },
      },

      yAxis: {
        type: 'value',
        splitNumber: 4,
        axisTick: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.1)'
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,
          }
        },
        axisLine: { show: false },
      },

      series: [{
        name: '生活能源消费量',
        type: 'bar',
        stack: 'a',
        barWidth: '30', barGap: 0,
        itemStyle: {
          normal: {
            color: 'rgb(85, 207, 105)',
          }
        },
        data: [50461, 54336, 57459, 60436, 61709, 64380, 67481]
      },
      {
        name: '生活煤炭消费量',
        type: 'bar',
        stack: 'a',
        barWidth: '30', barGap: 0,
        itemStyle: {
          normal: {
            color: 'rgb(85, 126, 207)',
            barBorderRadius: 0,
          }
        },
        data: [9627, 9492, 9283, 7714, 6574, 6283, 5929]
      },
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts5'));

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
      }, "grid": {
        "top": "15%",
        "right": "10%",
        "bottom": "20",
        "left": "10%",
      },
      legend: {
        data: ['能源消费总量(万吨标准煤)', '煤炭占比'],
        right: 'center',
        top: 0,
        textStyle: {
          color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
      },
      "xAxis": [
        {
          "type": "category",

          data: ['2018', '2019', '2020', '2021', '2022', '2023'],
          axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
          axisLabel: {
            textStyle: { color: "rgba(255,255,255,.7)", fontSize: '14', },
          },

        },
      ],
      "yAxis": [
        {
          "type": "value",
          "name": "万吨标准煤",
          splitLine: { show: false },
          axisTick: { show: false },
          "axisLabel": {
            "show": true,
            color: "rgba(255,255,255,.6)"

          },
          axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } },//左线色

        },
        {
          "type": "value",
          "name": "%",
          "show": true,
          axisTick: { show: false },
          "axisLabel": {
            "show": true,
            formatter: "{value} %",
            color: "rgba(255,255,255,.6)"
          },
          axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } },//右线色
          splitLine: { show: true, lineStyle: { color: 'rgba(255,255,255,.1)' } },//x轴线
        },
      ],
      "series": [

        {
          "name": "能源消费总量(万吨标准煤)",
          "type": "bar",
          "data": [
            471925, 487488, 498314, 525896, 541000, 572000],
          "barWidth": "20%",

          "itemStyle": {
            "normal": {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(106, 245, 255)'
              }, {
                offset: 1,
                color: 'rgb(79, 108, 251)'
              }]),
            }
          },
          "barGap": "0"
        },
        {
          "name": "煤炭占比",
          "type": "line",
          "yAxisIndex": 1,

          "data": [59.0, 57.7, 56.9, 55.9, 56.2, 55.3],
          lineStyle: {
            normal: {
              width: 2
            },
          },
          "itemStyle": {
            "normal": {
              "color": "rgb(68, 212, 143)",
            }
          },
          "smooth": true
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
    var myChart = echarts.init(document.getElementById('echarts4'));
    var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3'];
    option = {

      grid: {
        left: '2%',
        top: '1%',
        right: '5%',
        bottom: '0%',
        containLabel: true
      },
      xAxis: [{
        show: false,
      }],
      yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '7',
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '14',
          }
        },
        data: ['新疆', '宁夏', '甘肃', '辽宁', '广西', '安徽', '云南', '内蒙古', '浙江']

      }, {
        name: '单位：件',
        nameGap: '50',
        nameTextStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '16',
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0)'
          }
        },
        data: [],
      }],
      series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: [2.7, 3.7, 3.7, 4.6, 4.8, 6.0, 6.8, 7.1, 10.1],
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: function (param) {
              return param.value + '%';
            },
            textStyle: {
              color: 'rgba(255,255,255,.8)',
              fontSize: '12',
            }
          }
        },
        barWidth: 15,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
              offset: 0,
              color: '#03c893'
            },
            {
              offset: 1,
              color: '#0091ff'
            }
            ]),
            barBorderRadius: 15,
          }
        },
        z: 2
      }, {
        name: '白框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: 'rgba(0,0,0,.2)',
            barBorderRadius: 15,
          }
        },
        z: 1
      }]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function pe01() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pe01'));
    var txt = 55.3
    option = {
      title: {
        text: txt + '%',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          color: '#fff',
          fontSize: '18'
        }
      },
      color: 'rgba(255,255,255,.3)',

      series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '80%'],
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        hoverAnimation: false,
        data: [{
          value: txt,
          name: '已使用',
          itemStyle: {
            normal: {
              color: 'rgb(91, 217, 255)',
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          }
        }, {
          name: '未使用',
          value: 100 - txt
        }]
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
})
