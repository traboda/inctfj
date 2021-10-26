import React from 'react';
import "chartjs-plugin-datalabels";
import { Bar } from 'react-chartjs-2';

const Graph = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <Bar
                    data={{
                        labels: [2015, 2016, 2017, 2018, 2019],
                        datasets: [{
                            label: 'Number of Participants',
                            data: [690, 873, 1159, 2719, 3145],
                            backgroundColor: '#4472c4'
                        }]
                    }}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: 'Number of Participants',
                                font: { size: 24 }
                            },
                            legend: {
                                display: false
                            },
                            datalabels: {
                                display: true,
                                color: "black",
                                align: "end",
                                anchor: "end",
                                formatter: Math.round,
                                font: { size: 14 }
                            }
                        }
                    }}
                />
            </div>

            <div>
                <Bar
                    data={{
                        labels: [2015, 2016, 2017, 2018, 2019],
                        datasets: [{
                            label: 'Number of Schools',
                            data: [45, 67, 95, 128, 214],
                            backgroundColor: '#4472c4'
                        }]
                    }}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: 'Number of Schools',
                                font: { size: 24 }
                            },
                            legend: {
                                display: false
                            },
                            datalabels: {
                                display: true,
                                color: "black",
                                align: "end",
                                anchor: "end",
                                font: { size: 14 }
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Graph;