import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart6 extends Component {
   render() {
      const data = {
         defaultFontFamily: "Poppins",
         labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
         datasets: [
            {
               label: "Green",
               backgroundColor: "rgba(54, 201, 95, 1)",
               hoverBackgroundColor: "rgba(54, 201, 95, 1)",
               data: ["12", "12", "12", "12", "12", "12", "12"],
            },
            {
               label: "Pink",
               backgroundColor: "rgba(163, 54, 201, 1)",
               hoverBackgroundColor: "rgba(163, 54, 201, 1)",
               data: ["12", "12", "12", "12", "12", "12", "12"],
            },
            {
               label: "Red",
               backgroundColor: "rgba(244, 107, 104, 1)",
               hoverBackgroundColor: "rgba(244, 107, 104, 1)",
               data: ["12", "12", "12", "12", "12", "12", "12"],
            },
         ],
      };
      const options = {
         legend: {
            display: false,
         },
         title: {
            display: false,
         },
         tooltips: {
            mode: "index",
            intersect: false,
         },
         responsive: true,
         scales: {
            xAxes: [
               {
                  stacked: true,
               },
            ],
            yAxes: [
               {
                  stacked: true,
               },
            ],
         },
      };

      return (
         <>
            <Bar data={data} height={150} options={options} />
         </>
      );
   }
}

export default BarChart6;
