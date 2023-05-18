import React from 'react';
import 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../../data/${eventID}/talentIncubation.json`);


const Graph = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {data.graphs.map((graph, index) => (
        <div>
          <Bar
            data={{
              labels: graph.labels,
              datasets: graph.datasets,
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: graph.Header,
                  font: { size: 24 },
                },
                legend: {
                  display: false,
                },
                datalabels: {
                  display: true,
                  color: 'black',
                  align: 'end',
                  anchor: 'end',
                  formatter: Math.round,
                  font: { size: 14 },
                },
              },
            }}
          />
        </div>
      ))}

    </div>
  );
};

export default Graph;