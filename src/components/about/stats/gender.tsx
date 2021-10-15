import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const AboutGender = ({data}) => {
    const getDataset = () => ({
        data: [
            data?.genders?.filter(g => g.gender === 1)[0].count,
            data?.genders?.filter(g => g.gender === 2)[0].count,
        ],
        backgroundColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 0.8)',
        ]
    })

    return (
        <div className="m-auto" style={{ maxWidth: 300 }}>
            <Doughnut
                data={{
                    labels: ['Male', 'Female'],
                    datasets: [getDataset()]
                }}
            />
        </div>
    );
};

export default AboutGender;