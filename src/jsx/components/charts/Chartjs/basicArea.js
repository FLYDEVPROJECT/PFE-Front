import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
   defaultFontFamily: "Poppins",
   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
   datasets: [
      {
         label: "My First dataset",
         data: [25, 20, 60, 41, 66, 45, 80],
         borderColor: "rgba(163, 54, 201, .3)",
         borderWidth: "1",
         backgroundColor: "rgba(54, 201, 95, .5)",
         pointBackgroundColor: "rgba(163, 54, 201, .3)",
      },
   ],
};

const options = {
   legend: false,
   scales: {
      yAxes: [
         {
            ticks: {
               beginAtZero: true,
               max: 100,
               min: 0,
               stepSize: 20,
               padding: 10,
            },
         },
      ],
      xAxes: [
         {
            ticks: {
               padding: 5,
            },
         },
      ],
   },
};
class BasicArea extends Component {
   render() {
      return <Line data={data} options={options} height={150} />;
   }
}

export default BasicArea;
