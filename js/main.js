//constants

const DATA_END_POINT = 'https://dev-dsk-singhzns-2b-b8458a0d.us-west-2.amazon.com:8443/hackathon';

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

        // if (!endPoint) {
            return new Promise(function(resolve, reject) {

                var data = {
                    "BudgetBuckets": [229, 460, 802, 1080, 1349, 1578, 1722, 1747, 1709, 1796, 1785, 1652, 1512, 1409, 1591, 1573, 1631, 1589, 1046, 798, 408, 224, 153, 145], 
                    "ClicksPercent": 
                        [0.00821281760617407, 0.016439948244077268, 0.02867759037248234, 0.038596521360768556, 0.04820056565101394, 0.05636185634296314, 0.06150595994641201, 0.06241054355169295, 0.061050805537425715, 0.064151008209955, 0.0637845945976893, 0.05902980545727274, 0.05402024435207768, 0.05034752041038325, 0.05683418639002439, 0.0562130008129802, 0.058251176531208135, 0.05676262123137875, 0.03737418845110096, 0.028525872236153573, 0.01457352890659888, 0.008009572555620442, 0.0054818911522563065, 0.005184180092290429], 
                    "PredictedClicks": 
                        [2869, 5743, 10018, 13483, 16838, 19689, 21486, 21802, 21327, 22410, 22282, 20621, 18871, 17588, 19854, 19637, 20349, 19829, 13056, 9965, 5091, 2798, 1915, 1811], 
                    "TotalBudget": 2800
                };

                resolve(data);
            });
    }

    return {
        getData : _getBudgetData
    }
    
})(DATA_END_POINT);

var dataPromise = ChartDataApi.getData();
/**
 * Chart factory
 */
var ChartFactory = (function(dataSource) {

    var statusFlags = {
        showTooltips: true
    };

    var chartRef = null;

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
                // type: 'area'
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
                tickInterval: 1,
                crosshair: {
                    width: 2,
                    color: 'gray',
                    dashStyle: 'shortdot'
                }
            },
            yAxis: {
                title: {
                    text: 'Budget Value'
                },
                labels: {
                    formatter: function () {
                        return this.value ;
                    }
                }
            },
            tooltip: {
                shared: false,
                formatter: function() {
                    if (statusFlags.showTooltips === false ) {
                        return false;
                    } 
                    else if (this.series.name === "Predicted Budget") {
                        return this.series.name+ ': ' + this.y * 100;
                    }
                    else {
                        return this.series.name + ': '+ this.y + '%';
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
            series: []
        };
    }

    function _render(ctr, config) {
        dataSource.then(function(chartData) {

            chartRef = Highcharts.chart(ctr, config);

            chartRef.addSeries({
                type: 'line',
                data: chartData.BudgetBuckets.map(function(val){  return parseInt(val) /100;}),
                color: "#90ee7e",
                name: "Predicted Budget"
            });

            chartRef.addSeries({
                type: 'area',
                data: chartData.ClicksPercent.map(function(val) { return Math.round(val* 100.0, 2); }),
                name: "Predicted Click Percentage"
            });

        })
    }

    return {
        configure: _configure,
        render: _render,
        getChartRef: function() { return chartRef; }
    }

})(dataPromise);


/******* TIMER RELATED DATA *******/

/** Ticker **/

var Timer = (function(task, tickDuration, ticksInOneHour, generateColorArrayTask) {

    var totalElapsed = 0;
    var currHours = 0;

    var budgetFinishedEvent = new Event('budgetFinished');
    var hourFinishedEvent = new Event('hourFinished');
    

    function _tick() {
        console.log('TICK HOUR:' + currHours + ' ELAPSED_TIME:' + totalElapsed);
        task(currHours, totalElapsed);
        totalElapsed += tickDuration;
        if (totalElapsed === ticksInOneHour) {
            console.log("Hour:" + currHours + " is over!");
            totalElapsed = 0;
            currHours++;
        }
        if (currHours === 24) {
            console.log("Day over");
            document.dispatchEvent(budgetFinishedEvent);
        }
    }

    function _stop() {
        console.log('STOP');
    }

    return {
        tick: _tick,
        getElapsed: function() { return totalElapsed; },
        getCurrentHour: function() { return currHours;}
    }
});




var  TickerTask = (function(generateColorArrayTask) {
    
    var residualBudget = 0;
    
    function _doTask(currHour, timeElapsed) {
        dataPromise.then(function(data) {
            var budgetData = data.BudgetBuckets;
            var predictedClicks = data.PredictedClicks;
            _perform(budgetData, predictedClicks, currHour, timeElapsed);
        });
    }

    function _getSpend(budgetData, hour) {
        
        var isPositive = Math.random() > 0.5;
        var uncertainty = 0.4;

        if (isPositive) {
            return Math.ceil((budgetData[hour]/10) + (budgetData[hour]/10) * uncertainty * Math.random());
        } else {
            return Math.floor((budgetData[hour]/10) - (budgetData[hour]/10) * uncertainty * Math.random());
        }
    }


    function _perform(budgetData, predictedClicks, currHour, timeElapsed) {

        // Redistribute budget if this is the begining of the hour
        if (timeElapsed === 0) {
            console.log("begining of hour:" + currHour);
            _redistributeResidualBudget(budgetData, predictedClicks, currHour);
        }

        var currBudget = budgetData[currHour];
        currBudget = parseInt(currBudget);
        var currSpend = _getSpend(budgetData, currHour);

        console.log('Spend:' + currSpend);

        var remainingBudget = currBudget - currSpend;
        remainingBudget < 0 ? generateColorArrayTask.colorArray("r") : generateColorArrayTask.colorArray("g");
        currBudget = remainingBudget;
        budgetData[currHour] = currBudget;

        _updateResidualBudget(remainingBudget);
    }

    function _updateResidualBudget(remainingBudget) {
        residualBudget = remainingBudget > 0 ? remainingBudget : 0;
        console.log("updating residualBudget with value: " + residualBudget);
    }

    // Redistributes residual budget starting from currHour inclusive
    function _redistributeResidualBudget(budgetData, predictedClicks, currHour) {

        console.log("redistributing residualBudget budget:" + residualBudget);
        console.log("budgetData before redistribution:" + budgetData);

        var clicksPercents = [];
        var totalClicks = 0;
        for (var i = 0 ; i < 24 ; i++) {
            if (i >= currHour) {
                totalClicks += predictedClicks[i];
            }
        }
        for (var i = 0 ; i < 24 ; i++) {
            if (i < currHour) {
                clicksPercents.push(1);
            } else {
                clicksPercents.push(predictedClicks[i]/totalClicks);
            }
        }
        for (var i = currHour ; i < 24 ; i++) {
            budgetData[i] += residualBudget * clicksPercents[i];
        }
        _updateResidualBudget(0);
        console.log("budgetData after redistribution:" + budgetData);
    }

    return {
        doTask: _doTask
    }

});

var GenerateColorArrayTask = (function(){

    var colorArray = [];

    function _colorArray(color) {
        colorArray.push(color);
    }

    function _getColorAtPosition(position) {
        return colorArray[position];
    }

    return {
        colorArray: _colorArray,
        getColorAtPosition: _getColorAtPosition
    }
});



//Task Runner
function runTask() {

    var generateColorArrayTask = GenerateColorArrayTask();
    var tickerTask = TickerTask(generateColorArrayTask);
    var timer = Timer(tickerTask.doTask, 10, 100);

     //right arrow key
     $(document).on('keyup', function(e) {
        if (e.which === 39) {
            timer.tick();
        }
    });
}

//Run the task
runTask();

/****** TIMER RELATD ENDS ********/



function bindEvents() {
    ///******** Timeline  *******///
    $(".circle" ).click(function() {
        var id = ($(this).parent().attr("time_data_value"));
        $(".default-hidden").hide(); 
        $(".content").hide();
        var Editable = 'contenteditable';
        $('.budget-input').attr(Editable, true).click();
        var elements = document.getElementsByClassName(id);
        for (var i = 0; i < elements.length; i++){
          elements[i].style.display = 'block';
        }
      });
      
      $(".decrement").click(function() {
        var sel = $(this).closest('div').find('.budget-input');
        var new_value = sel.html(function(i, val) { return +val-100 });
      });
      
      $(".increment").click(function() {
        var sel = $(this).closest('div').find('.budget-input');
        var new_value = sel.html(function(i, val) { return +val+100 });
      });
    
    
      //Collapse, expand the containers as needed.
      $('#actions-button').on('click', function() {
        
            $(this).hide();
            $(this).removeClass("up").addClass("down");
            $(".graph-container").css('height', '70%');
            $("#timeline-container").slideToggle(500, function() {
                $(this).css("display", "flex");
                $('#action-button').toggleClass("down");

                ChartFactory.getChartRef().reflow();
            });
      });

     

    $(document).on('budgetFinished', function(e) {
        console.log('====================================');
        console.log('Simulation Over !');
        console.dir(e.budgetData);
        console.log('====================================');
    });

    //   $(".budget-editor-content").on('blur', function() {
    //       $(this).fadeOut(500);
    //   })
} 

