var timelineData = [{
      time: '00',
      budget: '1000'
    }, {
      time: '01',
      budget: '3000'
    }, {
      time: '03',
      budget: '1000'
    }, {
      time: '04',
      budget: '900'
    }, {
      time: '05',
      budget: '1000'
    }, {
      time: '06',
      budget: '1000'
    }, {
      time: '07',
      budget: '1000'
    }, {
      time: '08',
      budget: '1000'
    }, {
      time: '09',
      budget: '1000'
    }, {
      time: '10',
      budget: '1000'
    }, {
      time: '11',
      budget: '1000'
    }, {
      time: '12',
      budget: '1000'
    }, {
      time: '13',
      budget: '1000'
    }, {
      time: '14',
      budget: '1000'
    }, {
      time: '15',
      budget: '1000'
    }, {
      time: '16',
      budget: '1000'
    }, {
      time: '17',
      budget: '1000'
    }, {
      time: '18',
      budget: '1000'
    }, {
      time: '19',
      budget: '1000'
    }, {
      time: '20',
      budget: '1000'
    }, {
      time: '21',
      budget: '1000'
    }, {
      time: '22',
      budget: '1000'
    }, {
      time: '23',
      budget: '1000'
    }
];

var TimeLine = (function(data, container) {
    
    var hourTemplate = $('#timeline-template').html();
    hourTemplate = hourTemplate.trim();
    
    var template = Handlebars.compile(hourTemplate);

    $(container).html(
        template({"timelineData": data})
    );

})(timelineData, $('#timeline'));


/**
 * Chart Data Source
 */

var ChartDataApi = (function(endPoint) {

    function _getBudgetData() {

        if (!endPoint) {
            return new Promise(function(resolve, reject) {
                var data  = {"BIDValues": ["5897", "215923", "100131", "275363", "43358", "4868", "132979", "39238", "931169", "870", "55788", "942583", "992460", "7354", "305551", "13714", "39000", "30000", "104493", "806182", "706169", "8405", "39707", "58642"], 
               "Values": 
                ["58197", "115923", "200131", "275563", "343358", "394868", "432979", "439238", "431169", "458870", "455788", "425983", "392460", "387354", "395551", "383714", "395837", "388527", "304493", "206182", "106169", "58405", "39707", "38642"]
              };
                resolve(data);
            });
        }

    }

    return {
        getData : _getBudgetData
    }
    
})();


/**
 * Chart factory
 */
var ChartFactory = (function(dataSource) {

    function _themify() {
        Highcharts.theme = {
            colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
                '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                    stops: [
                        [0, '#2a2a2b'],
                        [1, '#3e3e40']
                    ]
                },
                plotBorderColor: '#606063',
                backgroundColor: null
            },
            title: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '20px'
                }
            },
            subtitle: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase'
                }
            },
            xAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                title: {
                    style: {
                        color: '#A0A0A3'
        
                    }
                }
            },
            yAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#F0F0F0'
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        color: '#B0B0B3'
                    },
                    marker: {
                        lineColor: '#333'
                    },
                    animation: {
                        duration: 2000
                    }
                },
                boxplot: {
                    fillColor: '#505053'
                },
                candlestick: {
                    lineColor: 'white'
                },
                errorbar: {
                    color: 'white'
                }
            },
            legend: {
                itemStyle: {
                    color: '#E0E0E3'
                },
                itemHoverStyle: {
                    color: '#FFF'
                },
                itemHiddenStyle: {
                    color: '#606063'
                }
            },
            credits: {
                style: {
                    color: '#666'
                }
            },
            labels: {
                style: {
                    color: '#707073'
                }
            },
        
            drilldown: {
                activeAxisLabelStyle: {
                    color: '#F0F0F3'
                },
                activeDataLabelStyle: {
                    color: '#F0F0F3'
                }
            },
        
            navigation: {
                buttonOptions: {
                    symbolStroke: '#DDDDDD',
                    theme: {
                        fill: '#505053'
                    }
                }
            },
        
            // scroll charts
            rangeSelector: {
                buttonTheme: {
                    fill: '#505053',
                    stroke: '#000000',
                    style: {
                        color: '#CCC'
                    },
                    states: {
                        hover: {
                            fill: '#707073',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        },
                        select: {
                            fill: '#000003',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        }
                    }
                },
                inputBoxBorderColor: '#505053',
                inputStyle: {
                    backgroundColor: '#333',
                    color: 'silver'
                },
                labelStyle: {
                    color: 'silver'
                }
            },
        
            navigator: {
                handles: {
                    backgroundColor: '#666',
                    borderColor: '#AAA'
                },
                outlineColor: '#CCC',
                maskFill: 'rgba(255,255,255,0.1)',
                series: {
                    color: '#7798BF',
                    lineColor: '#A6C7ED'
                },
                xAxis: {
                    gridLineColor: '#505053'
                }
            },
        
            scrollbar: {
                barBackgroundColor: '#808083',
                barBorderColor: '#808083',
                buttonArrowColor: '#CCC',
                buttonBackgroundColor: '#606063',
                buttonBorderColor: '#606063',
                rifleColor: '#FFF',
                trackBackgroundColor: '#404043',
                trackBorderColor: '#404043'
            },
        
            // special colors for some of the
            legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
            background2: '#505053',
            dataLabelsColor: '#B0B0B3',
            textColor: '#C0C0C0',
            contrastTextColor: '#F0F0F3',
            maskColor: 'rgba(255,255,255,0.3)'
        };
        
        // Apply the theme
        Highcharts.setOptions(Highcharts.theme);
    }

    function _configure() {
        _themify();
        return {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Budget Pacing Trend(s)'
            },
            subtitle: {
                text: 'Historical vs Predictive Data'
            },
            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function () {
                        if (this.value < 10) {
                            return '0'+this.value+":00";
                        }
                        return this.value+ ":00"; // clean, unformatted number for year
                    }
                },
                tickInterval: 1
            },
            yAxis: {
                title: {
                    text: 'Budget Value'
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000 + 'k INR';
                    }
                }
            },
            tooltip: {
                pointFormat: '{series.name} has allocated <b>{point.y:,.0f}</b><br/>k INR at {point.x}'
            },
            plotOptions: {
                area: {
                    pointStart: 0,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                },
                series: {
                    marker: {
                        enabled: true,
                        radius: 5
                    }
                }
            },
            series: [{
                name: 'Current',
                data: [
                    null, null, null, null, null, 6, 11, 32, 110, 235,
                    369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
                    20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
                    26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                    24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
                    21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
                    10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
                    5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
                ]
            }, {
                name: 'Predicted',
                data: [null, null, null, null, null, null, null, null, null, null,
                    5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
                    1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
                    11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
                    30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
                    37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                    21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
                    12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
                ]
            }]
        };
    }

    function _render(ctr, config) {
        dataSource.then(function(chartData) {
            console.log(chartData);
            var chart = Highcharts.chart(ctr, config);
            chart.series[1].setData(chartData.BIDValues.map(function(val){ return parseInt(val);}));
            chart.series[0].setData(chartData.Values.map(function(val){ return parseInt(val);}));
        })
    }

    return {
        configure: _configure,
        render: _render
    }

})(ChartDataApi.getData());

