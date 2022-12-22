var options = {
    chart: {
        height: 280,
        type: "area"
    },
    dataLabels: {
        enabled: false
    },
    series: [
        {
            name: "Follower(Family)",
            data: [15, 25, 38, 55, 69, 83, 99]
        }
    ],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 4,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
    xaxis: {
        categories: [
            "01 Jan",
            "02 Feb",
            "03 March",
            "04 April",
            "05 May",
            "06 June",
            "07 July"
        ]
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();