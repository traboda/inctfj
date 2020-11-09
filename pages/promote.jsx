import React from 'react';

const PromotePage = () => {
    return <div />
}

export default PromotePage;

export const getStaticProps = () => ({
    redirect: {
        destination: '/publicize',
        permanent: false
    }
})