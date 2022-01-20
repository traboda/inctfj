import {useEffect} from "react";
import {useRouter} from "next/router";
import Base from "../src/components/shared/Base";

const DiscordRedirect = () => {

    const router = useRouter();

    useEffect(() => {
        router.push('https://us02web.zoom.us/j/84498173321')
    }, []);

    return <Base meta={{ title: 'Join InCTF Conference' }}>
        <h1>Please wait while we redirect you to the conference link.</h1>
    </Base>;
};

export default DiscordRedirect;