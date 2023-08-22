import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// Defining ApexCharts options for the Pie chart
const pieChartOptions: ApexOptions = {
  chart: {
    type: "pie",
  },
  labels: ['<strong>  Basic Tees</strong> ',
  '<strong>  Custom Short Pants </strong>  ',
  '<strong>  Super Hoodies </strong>'],
  colors: ["#98D89E", "#F6DC7D", "#EE8484"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 0,
  },
  responsive: [
    {
      breakpoint: 580,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const PieChart = () => {
  // Defining Pie chart data
  const PieChartData = [55,31,14]
  return (
    <div id="chart">
      <ReactApexChart
        options={pieChartOptions}
        series={PieChartData}
        type="pie"
        width={350}
      />
    </div>
  );
};

export default PieChart;
