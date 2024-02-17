import React, { useEffect, useState } from 'react';

import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

export const Percentage = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 200,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of a custom formatter function
              return 2554;
            },
          },
        },
      },
    },
    labels: ['Student', 'Parent', 'Teacher', 'Admin'],
  });

  const [chartSeries, setChartSeries] = useState([80, 55, 67, 83]);
  
  useEffect(() => {
    // Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
    // Based on https://gist.github.com/blixt/f17b47c62508be59987b
    let _seed = 42;
    Math.random = function () {
      _seed = (_seed * 16807) % 2147483647;
      return (_seed - 1) / 2147483646;
    };
  }, []);

  return (
    <div className=' w-1/2  shadow-lg  p-4 flex flex-col items-center gap-2   rounded-xl bg-opacity-10 bg-gray-300'>
      <div id="chart">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="radialBar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};


export const ExpenseRatioChart = () => {
  const percentage_rate = 5000   
  const percent_student = 2000 / percentage_rate * 100   
  const percent_parent = 500  / percentage_rate * 100  
  const percent_teacher = 50  / percentage_rate * 100  
  const percent_admin = 40  / percentage_rate * 100  

  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Student', 'Parent', 'Teacher', 'Admin'],
    series: [percent_student, percent_parent, percent_teacher, percent_admin],
    colors: ['#6366F1', '#6EE7B7', '#F43F5E', '#FCD34D', '#60A5FA', '#A5B4FC'],
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
          
        },
      },
    ],

   
  };

  return (
    <div className="w-1/2 h-auto max-sm:w-full shadow-xl  py-8     rounded-xl bg-opacity-10 bg-gray-300">
      <Chart options={options} series={options.series} type="donut" height={300} className="--tw-backdrop-sepia "/>
    </div>
  );
};

export const LineChart = () => {
    useEffect(() => {
      // Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
      // Based on https://gist.github.com/blixt/f17b47c62508be59987b
      let _seed = 42;
      Math.random = function () {
        _seed = (_seed * 16807) % 2147483647;
        return (_seed - 1) / 2147483646;
      };
    }, []);
  
    const options = {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5],
      },
     
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>';
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
          '01 Jan',
          '02 Jan',
          '03 Jan',
          '04 Jan',
          '05 Jan',
          '06 Jan',
          '07 Jan',
          '08 Jan',
          '09 Jan',
          '10 Jan',
          '11 Jan',
          '12 Jan',
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + ' (mins)';
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val + ' per session';
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val;
              },
            },
          },
        ],
      },
      grid: {
        borderColor: '#f1f1f1',
      },
    };
  
    const series = [
      {
        name: 'Session Duration',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
      },
      {
        name: 'Page Views',
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
      },
      {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
      },
    ];
  
    return (
      <div className='w-1/2 h-auto max-sm:w-full shadow-xl py-8       rounded-xl bg-opacity-10 bg-gray-300 ' >
        
          <Chart options={options} series={series} type="line" height={350} className=" dark:text-white"/>

      </div>
    );
  };
  