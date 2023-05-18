import React from 'react';
import { Line } from 'react-chartjs-2';

const DailyGraph = ({ data }) => {
  const generateDataset = () => ({
    label: '',
    data: data?.regDateLogs?.map(date => {
      const _date = { ...date };
      delete _date.date;
      return Number(Object.values(_date)[0]);
    }),
    backgroundColor: 'rgba(100, 155, 100, 1)',
    fill: true,
    fillOpacity: 0.4,
    lineTension: 0.4,
  });

  return (
    <div className="m-auto" style={{ maxWidth: 500 }}>
      <Line
        data={{
          labels: data?.regDateLogs?.map(date => date.date),
          datasets: [generateDataset()],
        }}
        options={{
          plugins: { // @ts-ignore
            legend: false,
          },
          // scales: {
          //     y: { display: false },
          //     x: { display: false }
          // }
        }}
      />
    </div>
  );
};

export default DailyGraph;