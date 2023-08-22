import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { FC } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// Defining ApexCharts options for the line chart
const lineChartOptions: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  xaxis: {
    type:"category",
    categories:["0","Week 1", "Week 2", "Week 3","Week 4"],
    
    max:4,
    labels: {
      
      style: {
       colors: "#858585",
        fontSize: "14px",
      },
    },
  },
  yaxis: {
    
    
    labels: {
     
      style: {
        colors: "#858585",
        fontSize: "14px",
      },
    },
  },
  grid: {
    strokeDashArray: 5,
  },
  colors: ["#E9A0A0", "#9BDD7C"],
};

const LineChart: FC = () => {
  // Defining line chart data
  const lineChartData = [
    {
      name: "Guest",
      data: [200,390,210,300],
    },
    {
      name: "User",
      data: [100,475, 150, 499],
    },
  ];

  return (
    <ReactApexChart
      options={lineChartOptions}
      series={lineChartData}
      type="line"
      width="100%"
      height="100%"
    />
  );
};

export default LineChart;
