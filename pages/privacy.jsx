
const PrivacyPage = () => <div />;

export async function getStaticProps(context) {
    return {
        redirect: {
            destination: 'https://traboda.com/privacy',
            permanent: false,
        },
    }
};

export default PrivacyPage;