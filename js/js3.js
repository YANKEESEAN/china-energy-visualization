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
        data: ['水力发电量', '火力发电量'],
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

        data: ['2019年', '2020年', '2021年', '2022年', '2023年']

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
          name: '水力发电量',
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
              color: 'rgb(110, 187, 202)',
              borderColor: 'rgb(110, 187, 202)',
              borderWidth: 12
            }
          },
          data: [13044.38, 13552.09, 13300.00, 13521.95, 12858.50]

        }, {
          name: '火力发电量',
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
              color: 'rgb(115, 230, 151)',
              borderColor: 'rgb(115, 230, 151)',
              borderWidth: 12
            }
          },
          data: [52201.48, 53302.48, 58058.68, 58887.95, 62657.40]
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
    var myChart = echarts.init(document.getElementById('echart3'));
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['进口量', '出口量'],
        align: 'right',
        right: '40%',
        top: '0%',
        textStyle: {
          color: "#fff",
          fontSize: '16',

        },
        itemWidth: 16,
        itemHeight: 16,
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
        data: ['焦炭', '汽油', '柴油', '煤油', '燃料油', '液化石油气', '石油制品', '天然气', '电力'],
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
          //formatter: '{value} %'
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
        name: '进口量',
        type: 'bar',
        data: [133, 36, 157, 76, 1381, 2478, 2629, 1674, 59],
        barWidth: '15', //柱子宽度
        // barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: '#2f89cf',
            opacity: 1,
            barBorderRadius: 5,
          }
        }
      }, {
        name: '出口量',
        type: 'bar',
        data: [643, 1454, 858, 1721, 1961, 99, 360, 55, 202],
        barWidth: '15',
        // barGap: 1,
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

    /*   */
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
        data: ['发电量（亿千瓦时）', '比上年增长'],
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

          data: ['水电', '核电', '风电', '太阳能'],
          axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
          axisLabel: {
            textStyle: { color: "rgba(255,255,255,.7)", fontSize: '14', },
          },

        },
      ],
      "yAxis": [
        {
          "type": "value",
          "name": "亿千瓦时",
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
          "name": "发电量（亿千瓦时）",
          "type": "bar",
          "data": [12858.5, 4347.2, 8858.7, 5841.5],
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
          "name": "比上年增长",
          "type": "line",
          "yAxisIndex": 1,

          "data": [-4.9, 4.1, 16.2, 36.7],
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

    option = {

      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['进口量', '出口量'],
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
        data: ['钢材', '铜材', '铝材'],
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
        name: '进口量',
        type: 'bar',
        stack: 'a',
        barWidth: '30', barGap: 0,
        itemStyle: {
          normal: {
            color: 'rgb(85, 207, 105)',
          }
        },
        data: [765, 668, 271]
      },
      {
        name: '出口量',
        type: 'bar',
        stack: 'a',
        barWidth: '30', barGap: 0,
        itemStyle: {
          normal: {
            color: 'rgb(85, 126, 207)',
            barBorderRadius: 0,
          }
        },
        data: [9026, 74.4434, 486]
      },
      ]
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
              color: '#eaff00',
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
