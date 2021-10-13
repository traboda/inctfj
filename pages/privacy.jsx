
const PrivacyPage = () => <div />;

export async function getServerSideProps(context) {
    return {
        redirect: {
            destination: 'https://traboda.com/privacy',
            permanent: false,
        },
    }
};

export default PrivacyPage;