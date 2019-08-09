        option1 = {
            backgroundColor: ' #171d2a',
            title: {
                text: echarts_title[0],
                left: 50,
                top: 20,
                textStyle: {
                    color: '#8e8e8e',
                    fontSize: 20
                }
            },
            textStyle: {
                color: '#8e8e8e'
            },
            xAxis: [
                {
                    show: true,
                    type: 'value',
                    scale: true,
                    splitLine: { show: false },
                    name: '',
                    max: 1500,
                    min: 0,
                    boundaryGap: [0.2, 0.2],
                    splitNumber: 6,
                    axisLabel: {
                        formatter: function (value) {
                            var texts = [];
                            if (value == 0) {
                                texts.push('0s');
                            }
                            else if (value <= 300) {
                                texts.push('2s');
                            }
                            else if (value <= 600) {
                                texts.push('4s');
                            }
                            else if (value <= 900) {
                                texts.push('6s');
                            }
                            else if (value <= 1200) {
                                texts.push('8s');
                            }
                            else if (value <= 1500) {
                                texts.push('10s');
                            }
                            return texts;
                        }
                    }
                },
                {
                    show: false,
                    type: 'category',
                    boundaryGap: [0.2, 0.2],       
                    data: (function () {
                        var res = [];
                        var len = 10;
                        while (len--) {
                            res.push(10 - len - 1);
                        }
                        return res;
                    })()
                }
            ],
            yAxis: [
                {
                    show: false,
                    type: 'value',
                    scale: true,
                    name: '价格',
                    max: 1500,
                    min: 0,
                    boundaryGap: [0.2, 0.2],
                },
                {
                    show: true,
                    type: 'value',
                    scale: true,
                    splitLine: { show: false },
                    name: '预购量',
                    max: 1500,
                    min: 0,
                    boundaryGap: [0.2, 0.2],
                    splitNumber: 3,
                    axisLabel: {
                        formatter: function (value) {
                            var texts = [];
                            if (value == 0) {
                                texts.push('');
                            }
                            else if (value <= 500) {
                                texts.push('20%');
                            }
                            else if (value <= 1000) {
                                texts.push('40%');
                            }
                            else if (value <= 1500) {
                                texts.push('60%');
                            }
                            return texts;
                        }
                    }
                }
            ],
            grid: {
                left: 50,
                top: 50,
                right: 50,
                bottom: 30
            },
            series: [
                {
                    name: '预购队列',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: (function () {
                        var res = [];
                        var len = 0;
                        while (len < 10) {
                            res.push(echart_data[len] * 1000);
                            len++
                        }
                        return res;
                    })(),
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                let echarts_color = ['#69c4d7', '#00b0a7', '#c78d2f']
                                if (params.data < 333) {
                                    return echarts_color[0]
                                } else if (params.data > 333 && params.data < 666) {
                                    return echarts_color[1]
                                } else {
                                    return echarts_color[2]
                                }
                            }
                        },
                        emphasis: {
                            color: function (params) {
                                let echarts_hovercolor = ['#80e9ff', '#00dfd4', '#f2ad3e']
                                if (params.data < 333) {
                                    return echarts_color[0]
                                } else if (params.data > 333 && params.data < 666) {
                                    return echarts_color[1]
                                } else {
                                    return echarts_color[2]
                                }
                            }
                        }
                    }
                },
                {
                    name: '最新成交价',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: (function () {
                        var res = [];
                        var len = 0;
                        while (len < 10) {
                          res.push((echart_data[len] * 1000).toFixed(1) - 0)
                            len++;
                            console.log(res)
                        }
                        return res;
                    })()
                }
            ]
        };