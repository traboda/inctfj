import {useEffect} from "react";
import {useRouter} from "next/router";
import Base from "../src/components/shared/Base";

const DiscordRedirect = () => {

    const router = useRouter();

    useEffect(() => {
        router.push('https://discord.gg/uZ2yahXyMd')
    }, []);

    return <Base meta={{ title: 'Join InCTF Jr Discord Server' }}>
        <h1>Please wait while we redirect you.</h1>
    </Base>;
};

export default DiscordRedirect;