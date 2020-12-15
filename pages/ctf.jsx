import React, { useState, useEffect } from 'react';
import {useRouter} from "next/router";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import {useAuthState} from "../src/states";
import CTFModule from "../src/components/ctf";
import {APIFetch} from "../src/utils/APIFetch";
import {statusFetchQuery} from "../src/graphql/ctf";


const DashboardPage = () => {
    const router = useRouter();

    const [hasLoaded, setLoaded] = useState(false);
    const [isLoggedIn] = useAuthState('isLoggedIn');
    const [CTFMode, setCTFMode] = useState(false);

    useEffect(() => { setLoaded(true); }, []);

    useEffect(() => {
        if(!isLoggedIn && hasLoaded) {
            router.push('/login');
        }
    }, [hasLoaded, isLoggedIn]);

    const fetchCTFStatus = () => {
        if(hasLoaded){
            APIFetch({ query: statusFetchQuery }).then(
                ({ success, data, errors }) => {
                    if(success){
                        console.log(data);
                        setCTFMode(data?.frontendmanagement?.status === 0);
                    }
                }
            )
        }
    };

    useEffect(fetchCTFStatus, [hasLoaded]);

    return hasLoaded ? isLoggedIn ?
    <Base meta={{ title: "CTF Arena" }}>
        { CTFMode ? <CTFModule /> : <h1>CTF NOT STARTED</h1>}
    </Base> : <Base meta={{ title: "Login required" }}>
        <TopBar includeSpace={false} />
        <h1>Login Required</h1>
    </Base> : <div className="min-vh-100 w-100" style={{ background: '#222' }} />;

};

export default DashboardPage;