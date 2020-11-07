import React, { useState, useEffect } from 'react';

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import {useAuthState} from "../src/states";


export default () => {

    const [hasLoaded, setLoaded] = useState(false);
    const [isLoggedIn] = useAuthState('isLoggedIn');

    useEffect(() => { setLoaded(true); }, []);

    return hasLoaded ? isLoggedIn ? <Base meta={{ title: "About InCTF Jr." }}>
        <TopBar includeSpace={false} />
        <h1>LoggedIn</h1>
    </Base> : <Base meta={{ title: "Login required" }}>
        <TopBar includeSpace={false} />
        <h1>Login Required</h1>
    </Base> : null;

};