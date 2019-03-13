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

    var statusFlags = {
        showTooltips: true
    };

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
                backgroundColor: null,
                style: {
                    fontFamily: "Amazon Ember"
                }
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
                // pointFormat: '{series.name} has allocated <b>{point.y:,.0f}</b><br/>k INR at {point.x}',
                shared: false,
                formatter: function() {
                    if (statusFlags.showTooltips === false ) {
                        return false;
                    } else {
                        return this.series.name + ' : '+ this.y; 
                    }
                }
            },
            plotOptions: {
                area: {
                    pointStart: 0,
                    marker: {
                        enabled: true,
                        symbol: 'circle',
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    },
                    cursor: "ns-resize"
                },
                series: {
                    stickyTracking: true,
                    dragDrop: {
                        draggableY: true,
                        liveRedraw: true
                    },
                    point: {
                        events: {
                            dragStart: function (e) {
                                statusFlags.showTooltips = false;
                            },
                            drag: function(e) {
                                statusFlags.showTooltips = false;
                                if (this.series.name !== "Current") {
                                    return false;
                                }

                            },
                            drop: function (e) {
                                if (this.series.name !== "Current") {
                                    return false;
                                }
                                statusFlags.showTooltips = true;
                            }
                        }
                    },
                    animation: {
                        duration: 2000
                    }
                    
                }
                
            },
            series: [{
                name: 'Current'
            }, {
                name: 'Predicted'
            }]
        };
    }

    function _render(ctr, config) {
        dataSource.then(function(chartData) {
            console.log(chartData);
            var chart = Highcharts.chart(ctr, config);
            chart.series[1].setData(chartData.BIDValues.map(function(val){ return parseInt(val);}));
            chart.series[0].setData(chartData.Values.map(function(val){ return parseInt(val);}));
            // debugger;
        })
    }

    return {
        configure: _configure,
        render: _render
    }

})(ChartDataApi.getData());

