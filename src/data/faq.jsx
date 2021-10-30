import React from "react";

export default
[
    {
        "question": "Is this a quiz?",
        "keywords": ["quiz"],
        "response": [
            "No. InCTF is a Capture The Flag Championship, which is a more practical hands-on computer security competition."
        ],
        "answer": <>
            No. InCTF is a Capture The Flag Championship, which is a more practical hands-on computer security competition.
            Unlike quizzes, a participant will be working with actual tools & using problem solving skills to solve
            challenges and obtain a flag that earns them points.
        </>,
        tags: ['getting-started']
    },
    {
        "question": "What is a Capture The Flag competition?",
        "keywords": ["capture", "flag", "competition", "inctf"],
        "response": [
            "CTFs (Abbreviation for Capture The Flag) are a type of computer security competition. Contestants are presented with a set of challenges which test their creativity, technical (and googling)"
        ],
        "answer": <>
            <p>
                CTFs (Abbreviation for Capture The Flag) are a type of computer security competition.
                Contestants are presented with a set of challenges which test their creativity, technical (and googling)
                skills, and problem-solving ability. Challenges usually cover a number of categories, and when solved,
                each yields a string (called a flag) which is submitted to an online scoring service.
            </p>
            <p>
                CTFs are a great way to learn a wide array of computer security skills in a safe, legal environment,
                and are hosted and played by many security groups around the world for fun and practice.
            </p>
        </>,
        tags: ['getting-started']
    },
    {
        "question": "Do I need a laptop/PC to participate?",
        "keywords": ["laptop", "pc", "participate"],
        "response": [
            "Unfortunately, yes. You will need to have a laptop or a PC in-order to participate in InCTF."
        ],
        "answer": <>
            Unfortunately, yes. You will need to have a laptop or a PC in-order to participate in InCTF.
            You would need use techniques and some tools that only are available on a PC/Laptop.
        </>,
        tags: ['requirements']
    },
    {
        "question": "How much does it cost to participate in Amrita InCTF?",
        "keywords": ["cost", "participate"],
        "response": [
            "Participation is fully free: there are no fees for participating in the contest."
        ],
        "answer": <>
            Participation is fully free: there are no fees for participating in the contest.
        </>,
        tags: ['getting-started', 'requirements']
    },
    {
        "question": "Why should I participate in this?",
        "keywords": ["why", "participate"],
        "response": [
            "Developing skills in the area of cyber security opens up a whole new range of career opportunities for skilled graduates."
        ],
        "answer": <>
            <p>
                Developing skills in the area of cyber security opens up a whole new range of career opportunities for
                skilled graduates. Today graduates with expertise in cyber security are in great demand for the
                positions of security analysts in top private computer firms in India.
            </p>
            <p>
                Of course apart from the private computer firms, the Electronic and Computer Science Division of DRDO
                (Defence Research and Development Organization), which is the government wing that currently handles
                the national cyber security, is also in need of cyber security professionals with skills, agility and
                a fresh and updated outlook at cyber security.
            </p>
        </>,
        tags: ['getting-started']
    },
    {
        "question": "Where does this happen?",
        "keywords": ["venue", "where"],
        "response": [
            "The Internet! The competition will be indefinitely available online at this website."
        ],
        "answer": <>
            The Internet! The competition will be indefinitely available online at this website. As long as you
            have the ability to install software and have unfiltered Internet access, the participants can compete
            from anywhere in India.
        </>,
        tags: ['getting-started',]
    },
    
    {
        "question": "What do I need for this competition?",
        "keywords": ["need", "requirement"],
        "response": [
            "Full participation in the competition requires only -"
        ],
        "answer": <>
            Full participation in the competition requires only -
            <ul className="mx-1">
                <li>a computer (preferably running Linux operating system)</li>
                <li>a modern web browser</li>
                <li>the ability to install applications</li>
                <li>(and of course) Internet access</li>
            </ul>
        </>,
        tags: ['requirements']
    },
    {
        "question": "What are the topics included?",
        "keywords": ["topic", "topics"],
        "response": [
            "The following topics will be used for the challenges"
        ],
        "answer": <>
            Our categories are
            <ol>
                <li>Reverse engineering</li>
                <li>Binary exploitation</li>
                <li>Web exploitation</li>
                <li>Cryptography</li>
                <li>Forensics</li>
                <li>Trivia</li>
            </ol>
        </>,
        tags: ['getting-started']
    },
    {
        "question": "What do I get if I win?",
        "keywords": ["win", "winning"],
        "response": [
            "Students finishing at top of the CTF leaderboard will be awarded with exciting goodies and prizes."
        ],
        "answer": <>
            Students finishing at top of the CTF leaderboard will be awarded with exciting goodies and prizes,
            and they will also get access to exclusive online cyber-security training following the contest.
            All other participants will also receive certificates.
        </>,
        tags: ['prizes']
    },
    
  
    {
        "question": "I have some doubts, where can I ask?",
        "keywords": ["doubt", "doubts"],
        "response": [
            "You can contact us through our discord community or email us."
        ],
        "answer": <>
            You can contact us through our discord community <a href="/discord" target="_blank">(Join)</a> for priority reply
            or email us at <a href="mailto:inctf@am.amrita.edu">inctf@am.amrita.edu</a>.
        </>,
        tags: ['support']
    },
    
   
    {
        "question": "Will I get a certificate of participation?",
        "keywords": [
            "certificate of participation", "participation certificate"
        ],
        "response": [
            "Yes! You will get a digital participation certificate if you register and complete at-least 1 challenge for the qualifiers."
        ],
        "answer": <>
            Yes! You will get a digital participation certificate if you register and complete
            at-least 1 challenge for the qualifiers. However, there is no participation certificate
            for the learning round.
        </>,
        tags: ["certificate",]
    },
    
    
    
    {
        "question": "Is changing profile information possible after registration?",
        "keywords": ["profile", "information"],
        "response": [
            "Until the qualifier CTF starts, participants are allowed to change some of their profile information such as name, school etc."
        ],
        "answer": <>
            Until the qualifier CTF starts, participants are allowed to change some of their profile information
            such as name, school etc. You can perform this by going to <a href="https://app.traboda.com/profile/edit">app.traboda.com/profile/edit</a>.
            However, some information such as your email address used to register the account cannot be changed.
        </>,
        tags: ['traboda', 'help']
    },
    {
        "question": "I forgot my password, what can I do?",
        "keywords": ['password', 'forgot'],
        "response": [
            "There is a password reset functionality available on Traboda."
        ],
        "answer": <>
            <p>
                There is a password reset functionality available on Traboda. You can go to the login page/login popup,
                and click on "forgot password" option. Upon entering your registered email address, you shall be emailed
                a password reset link, using which you can change your password.
            </p>
            <p>
                If you have used a gmail (google) email address to register, you can also use the login with google
                option and get access to your account without needing a password (or password reset).
            </p>
        </>,
        tags: ['traboda', 'help', 'password']
    },
    {
        "question": "What are the different types of Certificates I can get?",
        keywords: ["certificate", "types"],
        "response": [
            "A Participant may be eligible for the following types of certificates -"
        ],
        "answer": <>
            <p>A Participant may be eligible for the following types of certificates -</p>
            <ul>
                <li>
                    <b>Participation Certificate</b> - shall be issued to all eligible Participants who have
                    at least solved 1 challenge in the Contest qualifiers round. This shall be a digital
                    certificate, and shall be emailed at the end of the Contest.
                </li>
                <li>
                    <b>Certificate of Appreciation</b> -  shall be issued to all eligible Participants who have
                    at least completed solving 35% of challenges released during the Contest qualifiers round.
                    This shall be a digital certificate, and shall be emailed at the end of the Contest.
                </li>
                <li>
                    <b>Certificate of Excellence</b> - shall be issued to all eligible Participants who have
                    qualified for the national level finals of the Contest. This shall be a physical certificate,
                    and shall be mailed to the address provided by the Participant.
                </li>
                <li>
                    <b>Certificate of Achievement</b> - shall be issued to eligible Participants who are winners
                    of some prize/award at the national level finals of the Contest. This shall be a physical
                    certificate, and shall be mailed to the address provided by the Participant.
                </li>
            </ul>
        </>,
        tags: ['certificate']
    }
];