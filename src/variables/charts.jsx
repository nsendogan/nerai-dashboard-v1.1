/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
var years = [];
let DPC = [];
let ERV = [];
let IC = [];
let REB = [];
let INS = [];
for (let i = 1980; i < 2016; i++) {
  years.push(i);
  DPC.push(Math.random() * 100);
  ERV.push(Math.random() * 100);
  REB.push(Math.random() * 100);
  IC.push(Math.random() * 100);
  INS.push(Math.random() * 100);
}

const dashboard24HoursPerformanceChart = {
  data: canvas => {
    return {
      labels: years,
      datasets: [
        {
          data: DPC,
          label: 'DPC',
          backgroundColor: '#3e95cd',
        },
        {
          data: ERV,
          label: 'ERV',
          backgroundColor: '#8e5ea2',
        },
        {
          data: IC,
          label: 'IC',
          backgroundColor: '#ffff00',
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: '#9f9f9f',
            beginAtZero: false,
            maxTicksLimit: 5,
            //padding: 20
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: '#ccc',
            color: 'rgba(255,255,255,0.05)',
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(255,255,255,0.1)',
            zeroLineColor: 'transparent',
            display: false,
          },
          ticks: {
            padding: 20,
            fontColor: '#9f9f9f',
          },
        },
      ],
    },
  },
};

module.exports = {
  dashboard24HoursPerformanceChart,
};
