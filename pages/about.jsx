import React from 'react';

import TopBar from "../src/components/shared/TopBar";
import InctfIntro from "../src/components/about/Intro";
import Footer from "../src/components/shared/Footer";
import AboutAchievements from "../src/components/about/Achievements";
import UNSDGSection from "../src/components/about/unsdg";
// import { data } from '../src/components/about/stats/66';
import Parallax from "../src/components/Parallax";
import SiteView from "../src/components/SiteView";
const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../src/data/${eventID}/about.json`);

const AboutPage = () => { 
    const getAvatar = (path) => {
        if(eventID && path)
            return require(`../src/data/inctfj/assets/organizers/${path}`);
        return null;
    }
    // const [stats, setStats] = useState();

    // const fetchStats = () => {
    //     try {
    //         fetch('https://app.traboda.com/api/contest/stats/66')
    //             .then(response => response.ok && response.status === 200 ? response.json() : null)
    //             .then((data) => setStats(data))
    //             .catch((e) => setStats(data))
    //     } catch (e) {}
    // };
    //
    // useEffect(fetchStats, [])

    return <SiteView meta={{ title: "About " }}>
        <TopBar includeSpace={false} />
        <div style={{ background: '#FAFAFA' }}>
            <Parallax
                background={require(`../src/data/${eventID}/${data.coverImage1}`)}
                height="600px"
            />
            <InctfIntro />
            <div className="text-center pt-6">
                <img draggable="false" src={require(`../src/data/${eventID}/${data.CoverImage2}`)} />
            </div>
            <AboutAchievements />
            <UNSDGSection />
        </div>
        <Footer />
    </SiteView>

};

export default AboutPage;