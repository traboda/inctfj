import {useRouter} from "next/router";
import {useEffect} from "react";
import Base from "../src/components/shared/Base";

const PrivacyPage = () => {

    const router = useRouter();

    useEffect(() => {
        router.push('https://app.traboda.com/priacy')
    }, []);

    return <Base meta={{ title: 'Privacy Policy' }}>
        <h1>Please wait while we redirect you.</h1>
    </Base>;
};

export default PrivacyPage;