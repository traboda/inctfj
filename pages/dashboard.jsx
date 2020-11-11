import React, { useState, useEffect } from 'react';
import {useRouter} from "next/router";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import {useAuthState} from "../src/states";
import UserDashboard from "../src/components/dashboard";


export default () => {
    const router = useRouter();

    const [hasLoaded, setLoaded] = useState(false);
    const [isLoggedIn] = useAuthState('isLoggedIn');

    useEffect(() => { setLoaded(true); }, []);

    useEffect(() => {
        if(!isLoggedIn && hasLoaded) {
            router.push('/login');
        }
    }, [hasLoaded, isLoggedIn]);

    return hasLoaded ? isLoggedIn ? <Base meta={{ title: "My Dashboard" }}>
        <TopBar includeSpace={false} />
        <UserDashboard />
    </Base> : <Base meta={{ title: "Login required" }}>
        <TopBar includeSpace={false} />
        <h1>Login Required</h1>
    </Base> : <div className="min-vh-100 w-100" style={{ background: '#222' }} />;

};