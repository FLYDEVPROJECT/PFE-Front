import React from 'react';
import ChartistGraph from 'react-chartist';



function AreaChart() {
    var data = {
        labels: ['Mon', 'Tuesd', 'Wed', 'Thursd', 'Frid'],
        series: [
            [12, 9, 7, 8, 5],
        ]
    };

    var options = {
        fullWidth: true,
        showArea: true,
		height: 250,
        chartPadding: {
            right: 40
        }
    };

    var type = 'Line'

    return (
        <>
            <ChartistGraph data={data} options={options} type={type} />
        </>
    )
}

export default AreaChart;