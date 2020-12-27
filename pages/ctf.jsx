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
    const [statusFetched, setStatusFeteched] = useState(false);

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
                        setStatusFeteched(true);
                        setCTFMode(data?.frontendmanagement?.status === 0);
                    }
                }
            )
        }
    };

    useEffect(fetchCTFStatus, [hasLoaded]);

    return hasLoaded ? isLoggedIn ?
    <Base meta={{ title: "CTF Arena" }}>
        { CTFMode ? <CTFModule /> :
        <div className="bg-dark min-vh-100 d-flex align-items-center text-light justify-content-center">
            {statusFetched ?
                <h1>Checkout Traboda</h1> :
                <h1>Loading CTF</h1>
            }
        </div>
        }
    </Base> : <Base meta={{ title: "Login required" }}>
        <TopBar includeSpace={false} />
        <h1>Login Required</h1>
    </Base> : <div className="min-vh-100 w-100" style={{ background: '#222' }} />;

};

export default DashboardPage;