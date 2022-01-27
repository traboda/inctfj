import React, {useState} from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import qualifiers21 from '../src/data/hall-of-fame/2021-quals';
import qualifiersPro21 from '../src/data/hall-of-fame/2021-quals-pro';

import YearlyLeaderboard from "../src/components/HallOfFame/YearlyLeaderboard";
import Footer from "../src/components/shared/Footer";
import PageHeader from "../src/components/PageHeader";

const PageWrap = styled.div`
    min-height: 50vh;
    background: #FAFAFA;
    display: flex;
    justify-content: center;
`;

const TabButton = styled.button`
      padding: 0.5rem 1rem 0.5rem 0;
      font-size: 24px;
      background: none;
      border: none;
      font-weight: 600;
      color: ${({isActive}) => isActive ? `#fd7e14` : '#333'};
      &:hover, &:focus {
        outline: none!important;
      }
`;

const Stats = () => {

    const [year, setYear] = useState(2021);

    const editions = [
        {
           
            year: 2021,
            stats: {
                totalRegistrations: 1587,
                totalStates: 16,
                totalFinalists: 190,
            },
            champions: [
                {
                    "name": "Team tce",
                    "school": "Chandigarh Group of Colleges",
                    "title": "First Prize Winners",
                    "members": "Harshit Joshi, Vishek Chaudhary",
                    "avatar": require('../src/assets/images/champions/cgc.png')
                },
                {
                    "name": "Team 1nf1n1ty",
                    "school": "SASTRA University, Thanjavur",
                    "title": "Second Prize Winners",
                    "members": "Shyam Sunder Saravanan, Brijesharun Gurumurthy, RAGHUL P S, Vigneshwaran, Hariharan Sundar",
                    "avatar": require('../src/assets/images/champions/Sastra.png')
                },
                {
                    "name": "Team cabal_of_crackers909",
                    "school": "Chennai Institute of Technology",
                    "title": "Third Prize Winners",
                    "members": "Sai Sabarish, Roshan Jagadish, Vinay Saran, Abishua Bezalel Raj J, Pavan Kalyan",
                    "avatar": require('../src/assets/images/champions/ciot.png')
                },
            ],
            experienced: [

                {
                    "name": "Team iitbreachers",
                    "school": "Indian Institute of Technology, Bombay (IIT-B)",
                    "title": "First Prize Winners",
                    "members": "Sahil Jain, Pulkit Agrawal, Girish Srivatsa, Neel Aryan",
                    "avatar": require('../src/assets/images/champions/iitbombay.png')
                },
                {
                    "name": "Team team_sist",
                    "school": "Sathyabama Institute of Science and Technology",
                    "title": "Second Prize Winners",
                    "members": "Abisheik Magesh, Abhishek Bajpai, jones, Chella dhanush, Hasan Firnas",
                    "avatar": require('../src/assets/images/champions/sathyabama.png')
                },
                {
                    "name": "Team sappi_sippi354",
                    "school": "Government College of Engineering, Srirangam",
                    "title": "Third Prize Winners",
                    "members": "Saravanakumar K, Suriya muthusamy",
                    "avatar": require('../src/assets/images/champions/gcesrirangam.jpeg')
                }
            ],
            womenHackers: [

                {
                    "name": "Team powerpuff_girls",
                    "school": "Lovely Professional University (LPU), Punjab",
                    "title": "First Prize Winners",
                    "members": "Manasi Jha, Megha Jha",
                    "avatar": require('../src/assets/images/champions/lovelypu.png')
                },
                {
                    "name": "Team f.o.g.m.j",
                    "school": "Manipal Institute of Technology",
                    "title": "Second prize Winners",
                    "members": "Jyothsna Ashok",
                    "avatar": require('../src/assets/images/champions/Manipal_University_logo.png')
                }
            ],
            professionals: [

                {
                    "name": "Team SSOD",
                    "school": "Company name not specified",
                    "title": "First prize Winners",
                    "members": "Ajay Suresh kumar, G S Nagendran, yuvaraj you_we(UV), Monish Kumar, Johan",
                    "avatar": require('../src/assets/images/champions/professionals.png')
                },
                {
                    "name": "Team ValueMentor",
                    "school": "Company name not specified",
                    "title": "Second prize Winners",
                    "members": "Hemant Boban, Kishor B, Hariharan S, Rishikesh KS",
                    "avatar": require('../src/assets/images/champions/professionals.png')
                }
            ],
            leaderboard: qualifiers21,
            
        },
        {
            year: 2019,
            stats: {
                totalRegistrations: 1587,
                totalStates: 16,
                totalFinalists: 190,
            },
            champions: [
                {
                    "name": "Bandaru Vara Prasad",
                    "school": "Rajiv Gandhi University of Knowledge and Technology",
                    "place": "Nuzividu, Andhra Pradesh",
                    "title": "First Prize Winner",
                    "avatar": require('../src/assets/images/champions/bandaruu.jpeg')
                },
                {
                    "name": "Abhay Nair",
                    "school": "Manipal Institute of Technology",
                    "place": "Manipal, Karnataka",
                    "title": "Second prize Winner",
                    "avatar": require('../src/assets/images/champions/abhay.png')
                },
                {
                    "name": "Swapnil Kumbhare",
                    "school": "SASTRA Deemed to be University",
                    "place": "Thanjavur, Tamil Nadu ",
                    "title": "Third prize Winner",
                    "avatar": require('../src/assets/images/champions/swapnil.jpg')
                }
            ],
            womenHackers: [

                {
                    "name": "Sreesruthi PK",
                    "school": "Amrita Vishwa Vidyapeetham",
                    "place": "Amritapuri, Kerala",
                    "title": "Women CTF Winner",
                    "avatar": require('../src/assets/images/champions/sreesruthi.png')
                }
            ],
        },
        {
            year: 2018,
            champions: [
                {
                    "name": "Team Invaders",
                    "school": "Rajiv Gandhi University of Knowledge and Technology",
                    "place": " Nuzividu, Andhra Pradesh",
                    "title": "1st prize winners",
                    "avatar": require('../src/assets/images/champions/invaders.jpg')
                },
                {
                    "name": "Team CTF_Probably",
                    "school": "K. J. Somaiya College of Engineering",
                    "place": "Mumbai",
                    "title": "2nd prize winners",
                    "avatar": require('../src/assets/images/champions/ctfprobably.png')
                },
                {
                    "name": "Team Init0",
                    "school": "NIT",
                    "place": "Rourkela, Odisha",
                    "title": "3rd prize winners",
                    "avatar": require('../src/assets/images/champions/inito.png')
                },
            ],
        },
    ]

    return <Base meta={{ title: "Statistics & Rankings" }}>
        <TopBar darkenOnSidebar includeSpace={false} />
        <PageHeader
            title="Statistics & Rankings"
            breadcrumb={[
                {
                    link: '/championship',
                    title: 'Championship'
                },
                {
                    link: '/organizers',
                    isActive: true,
                    title: 'Organizers'
                }
            ]}
        />
        <PageWrap>
            <div style={{ maxWidth: '1100px', width: '100%' }}>
                <div className="d-flex align-items-center">
                    <div className="container-lg mt-6 px-4">
                        {editions.map((y) =>
                            <TabButton isActive={y.year===year} onClick={() => setYear(y.year)}>{y.year}</TabButton>
                        )}
                    </div>
                </div>
                <div className="container-lg px-4 py-5">
                    {editions.filter((y) => y.year === year).map((y) =>
                        <YearlyLeaderboard {...y} />
                    )}
                </div>
            </div>
        </PageWrap>
        <Footer />
    </Base>;

};

export default Stats;