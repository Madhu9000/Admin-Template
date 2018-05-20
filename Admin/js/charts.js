window.onload = function() {
    CanvasJS.addColorSet("colorSet-1", [ //colorSet Array

        "#64b5f6"
    ]);
    CanvasJS.addColorSet("colorSet-2", [ //colorSet Array
        "#ec407a",
        "#ab47bc",
        "#7e57c2",
        "#26a69a",
        "#ff7043 ",
        "#78909c"

    ]);
    var chart = new CanvasJS.Chart('chartContainer-app', {
        animationEnabled: true,
        colorSet: "colorSet-1",
        theme: 'light-2', // "light1", "light2", "dark1", "dark2"
        title: {
            text: 'Application Utilization',
            fontColor: "#607d8b",
            fontSize: 26,
            fontStyle: "oblique",
            fontWeight: "normal",
        },
        axisY: {
            title: 'Utilization(%)'
        },
        data: [{
            type: 'column',
            showInLegend: true,
            //legendMarkerColor: 'red',
            dataPoints: [{
                    y: 40,
                    label: 'Chrome'
                },
                {
                    y: 60,
                    label: 'Photoshop'
                },
                {
                    y: 50,
                    label: 'Eclipse'
                },
                {
                    y: 20,
                    label: 'Android'
                },
                {
                    y: 90,
                    label: 'Portal'
                },
                {
                    y: 70,
                    label: 'Pycharm'
                },
                {
                    y: 55,
                    label: 'VScode'
                },
                {
                    y: 68,
                    label: 'ArduinoIDE'
                }
            ]
        }]
    });
    chart.render();
    /*Chart - resorces*/
    var chart = new CanvasJS.Chart('chartContainer-res', {
        animationEnabled: true,
        colorSet: "colorSet-2",
        title: {
            text: 'Resource Utilization',
            horizontalAlign: 'left',
            fontColor: "#607d8b",
            fontSize: 26,
            fontStyle: "oblique",
            fontWeight: "normal",
        },
        data: [{
            type: 'doughnut',
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabel: '{label} - #percent%',
            toolTipContent: '<b>{label}:</b> {y} (#percent%)',
            dataPoints: [{
                    y: 67,
                    label: 'Network'
                },
                {
                    y: 28,
                    label: 'Printer'
                },
                {
                    y: 10,
                    label: 'phone'
                },
                {
                    y: 7,
                    label: 'Server'
                },
                {
                    y: 15,
                    label: 'Beverages'
                },
                {
                    y: 6,
                    label: 'Power'
                }
            ]
        }]
    });
    chart.render();
};