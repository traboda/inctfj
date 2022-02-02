import {useEffect} from "react";
import {useRouter} from "next/router";
import SiteView from "../src/components/SiteView";

const DiscordRedirect = () => {

    const router = useRouter();

    useEffect(() => {
        router.push('https://discord.gg/QVXewGh7sP')
    }, []);

    return <SiteView meta={{ title: 'Join InCTF Jr Discord Server' }}>
        <h1>Please wait while we redirect you.</h1>
    </SiteView>;
};

export default DiscordRedirect;