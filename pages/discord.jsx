const DiscordRedirect = () => <div />;

export async function getStaticProps(context) {
    return {
        redirect: {
            destination: 'https://discord.gg/QVXewGh7sP',
            permanent: false,
        },
    }
};

export default DiscordRedirect;