// import React from 'react';

// const questions = [
//   {
//     'question': 'Is this a quiz?',
//     'keywords': ['quiz'],
//     'response': [
//       'No. InCTF is a Capture The Flag Championship, which is a more practical hands-on computer security competition.',
//     ],
//     'answer': <>
//       No. InCTF is a Capture The Flag Championship, which is a more practical hands-on computer security competition.
//       Unlike quizzes, a participant will be working with actual tools & using problem solving skills to solve
//       challenges and obtain a flag that earns them points.
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'What is a Capture The Flag competition?',
//     'keywords': ['capture', 'flag', 'competition', 'inctf', 'ctf'],
//     'response': [
//       'CTFs (Abbreviation for Capture The Flag) are a type of computer security competition. Contestants are presented with a set of challenges which test their creativity, technical (and googling)',
//     ],
//     'answer': <>
//       <p>
//         CTFs (Abbreviation for Capture The Flag) are a type of computer security competition.
//         Contestants are presented with a set of challenges which test their creativity, technical (and googling)
//         skills, and problem-solving ability. Challenges usually cover a number of categories, and when solved,
//         each yields a string (called a flag) which is submitted to an online scoring service.
//       </p>
//       <p>
//         CTFs are a great way to learn a wide array of computer security skills in a safe, legal environment,
//         and are hosted and played by many security groups around the world for fun and practice.
//       </p>
//       <br />
//       <a target="_blank" href="https://www.youtube.com/watch?v=8ev9ZX9J45A">
//         Check out this video to learn more. 
//         {' '}
//         <span className="text-blue-500">What is a CTF?</span>
//       </a>
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'Who can participate in Amrita InCTF Junior?',
//     'keywords': ['who', 'participate'],
//     'response': [
//       'Each individual who participates in the competition in order to be eligible for the finals prizes must be: ',
//     ],
//     'answer': <>
//       Each individual who participates in the competition in order to be eligible for
//       the finals / prizes must be:
//       <li>
//         not more than nineteen (19) years of age
//       </li>
//       <li>
//         a citizen of the Republic of India
//       </li>
//       <li>
//         must not have completed 12th or equivalent grade of school.
//       </li>
//     </>,
//     tags: ['eligibility', 'getting-started'],
//   },
//   {
//     'question': 'Do I need a laptop/PC to participate?',
//     'keywords': ['laptop', 'pc', 'participate'],
//     'response': [
//       'Unfortunately, yes. You will need to have a laptop or a PC in-order to participate in InCTF Junior.',
//     ],
//     'answer': <>
//       Unfortunately, yes. You will need to have a laptop or a PC in-order to participate in InCTF Junior.
//       You would need use techniques and some tools that only are available on a PC/Laptop.
//     </>,
//     tags: ['requirements'],
//   },
  // {
  //   'question': 'How can I register to InCTF Junior 2023 ?',
  //   'keywords': ['register'],
  //   'response': [
  //     'Registering is a pretty simple process. Click on the following to watch the step by step guide on how to register. ',
  //   ],
  //   'answer': <>
  //     Registering is a pretty simple process. Click on the following to watch the step by step guide on how to register.
  //     {' '}
  //     <a href="https://www.youtube.com/watch?v=twS3pzPjRzA" target="_blank">How to register ?</a>
  //   </>,
  //   tags: ['getting-started', 'help'],
  // },
  // {
  //   'question': 'how to get into the scoreboard ?',
  //   'keywords': ['scoreboard', 'leaderboard', 'scoreboards', 'leaderboards'],
  //   'response': [
  //     'We have a good tutorial on this particular subject. Click on the following link to watch the step by step guide on how to get into the scoreboard.',
  //   ],
  //   'answer': <>
  //     We have a good tutorial on this particular subject. Click on the following link to watch the step by step guide on how to get into the scoreboard.
  //     {' '}
  //     <a href="https://www.youtube.com/watch?v=767Y-wtDH5A">How to get into the scoreboard</a>
  //   </>,
  //   tags: ['getting-started', 'help'],
  // },
  // {
  //   'question': 'Are there any resources or tutorials about web security ?',
  //   'keywords': ['getting-started'],
  //   'response': [
  //     'There are few resources, mainly YouTube videos, that give an introduction to the whole security ecosystem. Click on the following link to view our collection of videos.',
  //   ],
  //   'answers': <>
  //     There are few resources, mainly YouTube videos, that give an introduction to the whole security ecosystem. Click on the following link to view our collection of videos.
  //     {' '}
  //     <a href="https://junior.inctf.in/resources">Resources</a>
  //   </>,
  //   tags: ['getting-started'],
  // },
//   {
//     'question': 'How much does it cost to participate in Amrita InCTF Junior?',
//     'keywords': ['cost', 'participate'],
//     'response': [
//       'Participation is fully free: there are no fees for participating in the contest.',
//     ],
//     'answer': <>
//       Participation is fully free: there are no fees for participating in the contest.
//     </>,
//     tags: ['getting-started', 'requirements'],
//   },
//   {
//     'question': 'Why should I participate in this?',
//     'keywords': ['why', 'participate'],
//     'response': [
//       'Developing skills in the area of cyber security opens up a whole new range of career opportunities for skilled graduates.',
//     ],
//     'answer': <>
//       <p>
//         Developing skills in the area of cyber security opens up a whole new range of career opportunities for
//         skilled graduates. Today graduates with expertise in cyber security are in great demand for the
//         positions of security analysts in top private computer firms in India.
//       </p>
//       <p>
//         Of course apart from the private computer firms, the Electronic and Computer Science Division of DRDO
//         (Defence Research and Development Organization), which is the government wing that currently handles
//         the national cyber security, is also in need of cyber security professionals with skills, agility and
//         a fresh and updated outlook at cyber security.
//       </p>
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'Where does this happen?',
//     'keywords': ['venue', 'where'],
//     'response': [
//       'The Internet! The competition will be indefinitely available online at this website.',
//     ],
//     'answer': <>
//       The Internet! The competition will be indefinitely available online at this website. As long as you
//       have the ability to install software and have unfiltered Internet access, the participants can compete
//       from anywhere in India.
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'How can I prepare for this competition?',
//     'keywords': ['prepare', 'preparation'],
//     'response': [
//       'The challenges from the previous round of InCTFj are accessible. The detailed solutions to these challenges will be put up later on.',
//     ],
//     'answer': <>
//       <p>
//         The challenges from the previous round of InCTFj are accessible. The detailed solutions to these
//         challenges will be put up later on. New users can use these solutions to learn as the challenges
//         for this round might cover similar concepts as well.
//       </p>
//       <p>
//         It might also be helpful to learn a bit of programming in languages such as C, Python, Javascript and HTML.
//       </p>
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'What do I need for this competition?',
//     'keywords': ['need', 'requirement'],
//     'response': [
//       'Full participation in the competition requires only -',
//     ],
//     'answer': <>
//       Full participation in the competition requires only -
//       <ul className="mx-1 list-disc">
//         <li>a computer (preferably running Linux operating system)</li>
//         <li>a modern web browser</li>
//         <li>the ability to install applications</li>
//         <li>(and of course) Internet access</li>
//       </ul>
//     </>,
//     tags: ['requirements'],
//   },
//   {
//     'question': 'What are the topics included?',
//     'keywords': ['topic', 'topics'],
//     'response': [
//       'The following topics will be used for the challenges',
//     ],
//     'answer': <>
//       Our categories are
//       <ol>
//         <li>Reverse engineering</li>
//         <li>Binary exploitation</li>
//         <li>Web exploitation</li>
//         <li>Cryptography</li>
//         <li>Forensics</li>
//         <li>Trivia</li>
//       </ol>
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'What do I get if I win?',
//     'keywords': ['win', 'winning'],
//     'response': [
//       'Students finishing at top of the CTF leaderboard will be awarded with exciting goodies and prizes.',
//     ],
//     'answer': <>
//       Students finishing at top of the CTF leaderboard will be awarded with exciting goodies and prizes.
//       All other participants will also receive certificates.
//     </>,
//     tags: ['prizes'],
//   },
//   {
//     'question': 'What constitutes as cheating?',
//     'keywords': ['cheating', 'cheat'],
//     'response': [
//       'Attacking the scoring server, other teams, or machines not explicitly designated as targets is cheating.',
//     ],
//     'answer': <ul>
//       <li>
//         Attacking the scoring server, other teams, or machines not explicitly designated as targets is cheating.
//         This includes both breaking into such machines and denying others access to them.
//       </li>
//       <li>
//         Sharing solutions or providing overly-revealing hints with other teams is cheating, as is being
//         directly assisted by personnel other than contest admins (using tools from the internet is OK;
//         asking people on the internet to help you solve the problem is not).
//       </li>
//       <li>
//         We encourage you to solve problems in novel and creative ways using all available resources,
//         but we do require that you solve them yourselves.
//       </li>
//     </ul>,
//     tags: ['rules'],
//   },
//   {
//     'question': 'Are there any similar competitions?',
//     'keywords': ['similar', 'competition'],
//     'response': [
//       'There are a few CTF’s that are intended to help high school students gain some experience',
//     ],
//     'answer': <>
//       There are a few CTF’s that are intended to help high school students gain some experience such as picoCTF, HSCTF
//       etc.
//       You may try out the challenges from these CTF’s.

//       <br />
//       <br />
//       <a href="https://picoctf.org/index.html#picogym" target="_blank" className="text-blue-500">picoCTF practice</a>

//       <br />
//       <br />
//       <a
//         href="https://github.com/sajjadium/ctf-archives/tree/main/ctfs/HSCTF"
//         target="_blank"
//         className="text-blue-500"
//       >
//         HSCTF practice
//       </a>
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'I have some doubts, where can I ask?',
//     'keywords': ['doubt', 'doubts'],
//     'response': [
//       'You can contact us directly through our [discord server](https://discord.gg/NJG6VrCCyB). Or you can always email us at [inctfj@am.amrita.edu](mailto:inctfj@am.amrita.edu).',
//     ],
//     'answer': <>
//       You can contact us through our
//       {' '}
//       <a href="https://discord.gg/NJG6VrCCyB" target="_blank" className="text-blue-500">discord server</a>
//       .
//       {' '}
//       Or you can always email us at
//       {' '}
//       <a href="mailto:inctfj@am.amrita.edu" className="text-blue-500">inctfj@am.amrita.edu</a>
//       .
//     </>,
//     tags: ['support'],
//   },
//   {
//     'question': 'Is InCTF Jr a team event?',
//     'keywords': [
//       'team event', 'participate as a team', 'individually or teams',
//     ],
//     'response': [
//       'No. InCTF Jr is an individual CTF competition exclusively for school students in India.',
//     ],
//     'answer': <>
//       No. InCTF Jr is an individual CTF competition exclusively for school students in India.
//     </>,
//     tags: ['rules', 'eligibility'],
//   },
//   {
//     'question': 'How many students from a school can qualify for the finals?',
//     'keywords': [
//       'students from a school', 'my school',
//     ],
//     'response': [
//       'There is no restriction for the number of students who can participate from a school.',
//     ],
//     'answer': <>
//       There is no restriction for the number of students who can participate from a school.
//       However, to ensure participation & diversity, only a maximum of 10 top students may be
//       qualified from a single school for the finals.
//     </>,
//     tags: ['rules', 'eligibility', 'qualifiers'],
//   },
//   {
//     'question': 'Will I get a certificate of participation?',
//     'keywords': [
//       'certificate of participation', 'participation certificate',
//     ],
//     'response': [
//       'Yes! You will get a digital participation certificate if you register and complete at-least 1 challenge for the qualifiers.',
//     ],
//     'answer': <>
//       Yes! You will get a digital participation certificate if you register and complete
//       at-least 1 challenge for the qualifiers. However, there is no participation certificate
//       for the learning round.
//     </>,
//     tags: ['certificate'],
//   },
//   {
//     'question': 'Can I participate if I an NRI student?',
//     'keywords': ['nri'],
//     'response': [
//       'Yes! InCTF Jr is open for school students who are citizens of India including Non-Residents of India.',
//     ],
//     'answer': <>
//       Yes! InCTF Jr is open for school students who are citizens of India including Non-Residents of India.
//       However, overseas citizens of India, and students of Indian origin not holding an Indian citizenship
//       are not eligible for prizes, though are encouraged to participate.
//     </>,
//     tags: ['eligibility'],
//   },
//   {
//     'question': 'Should I be a school student to participate?',
//     'questions': [
//       'Should I be a school student to participate?',
//       'Can only school students participate?',
//     ],
//     'keywords': ['school student', 'highschool'],
//     'response': [
//       'InCTF Junior is a beginner-level cyber-security programme we organize exclusively for school students in India.',
//     ],
//     'answer': <>
//       <p>
//         InCTF Junior is a beginner-level cyber-security programme we organize exclusively for school students in
//         India. If you are a college student, or a professional, we organize InCTF & InCTF Pro which are for
//         college students & professionals. You can check them out by going to 
//         {' '}
//         <a href="https://inctf.in" target="_blank">inctf.in</a>
//         .
//       </p>
//       <p>
//         If you decide to register for InCTF Junior, you shall be eligible to qualify for the finals
//         and eligible for prizes only after verification of your school ID card.
//       </p>
//     </>,
//     tags: ['eligibility'],
//   },
//   {
//     'question': 'Can I participate if I am not enrolled to any school ?',
//     'keywords': ['not enrolled'],
//     'response': [
//       'If you are a self-study student who have not enrolled in any traditional school under the age of 20,',
//     ],
//     'answer': <>
//       If you are a self-study student who have not enrolled in any traditional school under the age of 20,
//       you can contact us (
//       <a href="mailto:inctfj@am.amrita.edu">inctfj@am.amrita.edu</a>
//       ) to register
//       and participate in the championship & programme.
//     </>,
//     tags: ['eligibility'],
//   },
//   // {
//   //   'question': 'Is changing profile information possible after registration?',
//   //   'keywords': ['profile', 'information'],
//   //   'response': [
//   //     'Until the qualifier CTF starts, participants are allowed to change some of their profile information such as name, school etc.',
//   //   ],
//   //   'answer': <>
//   //     Until the qualifier CTF starts, participants are allowed to change some of their profile information
//   //     such as name, school etc. You can perform this by going to
//   //     {' '}
//   //     <a href="https://app.traboda.com/profile/edit">app.traboda.com/profile/edit</a>
//   //     .
//   //     However, some information such as your email address used to register the account cannot be changed.
//   //   </>,
//   //   tags: ['traboda', 'help'],
//   // },
//   // {
//   // 'question': 'I forgot my password, what can I do?',
//   // 'keywords': ['password', 'forgot'],
//   // 'response': [
//   //   'There is a password reset functionality available on Traboda.',
//   // ],
//   // 'answer': <>
//   //   <p>
//   //     There is a password reset functionality available on Traboda. You can go to the login page/login popup,
//   //     and click on "forgot password" option. Upon entering your registered email address, you shall be emailed
//   //     a password reset link, using which you can change your password.
//   //   </p>
//   //   <p>
//   //     If you have used a gmail (google) email address to register, you can also use the login with google
//   //     option and get access to your account without needing a password (or password reset).
//   //   </p>
//   // </>,
//   // tags: ['traboda', 'help', 'password'],
//   // },
//   {
//     'question': 'What are the different types of Certificates I can get?',
//     keywords: ['certificate', 'types'],
//     'response': [
//       'A Participant may be eligible for the following types of certificates -',
//     ],
//     'answer': <>
//       <p>A Participant may be eligible for the following types of certificates -</p>
//       <ul>
//         <li>
//           <b>Participation Certificate</b>
//           {' '}
//           - shall be issued to all eligible Participants who have
//           at least solved 1 challenge in the Contest qualifiers round. This shall be a digital
//           certificate, and shall be emailed at the end of the Contest.
//         </li>
//         <li>
//           <b>Certificate of Appreciation</b>
//           {' '}
//           -  shall be issued to all eligible Participants who have
//           at least completed solving 35% of challenges released during the Contest qualifiers round.
//           This shall be a digital certificate, and shall be emailed at the end of the Contest.
//         </li>
//         <li>
//           <b>Certificate of Excellence</b>
//           {' '}
//           - shall be issued to all eligible Participants who have
//           qualified for the national level finals of the Contest. This shall be a physical certificate,
//           and shall be mailed to the address provided by the Participant.
//         </li>
//         <li>
//           <b>Certificate of Achievement</b>
//           {' '}
//           - shall be issued to eligible Participants who are winners
//           of some prize/award at the national level finals of the Contest. This shall be a physical
//           certificate, and shall be mailed to the address provided by the Participant.
//         </li>
//       </ul>
//     </>,
//     tags: ['certificate'],
//   },
// ];

// export default questions;


import React from 'react';

const questions = [
  {
   
    'question': 'What is InCTF Junior?',
    'keywords': ['inctf junior', 'what is'],
    'response': [
      'InCTF Junior is a national-level Capture The Flag (CTF) cybersecurity contest exclusively designed for school students.',
    ],
    'answer': <>
      InCTF Junior is a national-level Capture The Flag (CTF) cybersecurity contest exclusively designed for school students, 
      organized by Amrita Vishwa Vidyapeetham. It aims to introduce young minds to ethical hacking and cybersecurity 
      in a fun and educational way.
    </>,
    tags: ['getting-started'],
  },
  {
   
    'question': 'Who can participate in InCTF Junior?',
    'keywords': ['who', 'participate', 'eligibility'],
    'response': [
      'Students from grades 7 to 12 (or equivalent) studying in schools across India are eligible to participate.',
    ],
    'answer': <>
      Students from grades 7 to 12 (or equivalent) studying in schools across India are eligible to participate.
    </>,
    tags: ['eligibility'],
  },
  {
   
    'question': 'Do I need a computer to participate?',
    'keywords': ['computer', 'laptop', 'requirements'],
    'response': [
      'Yes, you\'ll need a computer or laptop with internet access.',
    ],
    'answer': <>
      Yes, you'll need a computer or laptop with internet access. A basic browser is sufficient for most challenges.
    </>,
    tags: ['requirements'],
  },
  {
   
    'question': 'Do I need prior knowledge in cybersecurity?',
    'keywords': ['prior knowledge', 'experience'],
    'response': [
      'No prior experience is required.',
    ],
    'answer': <>
      No prior experience is required. The competition is beginner-friendly, and training resources are provided 
      to help students learn from the ground up.
    </>,
    tags: ['getting-started'],
  },
  {
   
    'question': 'How do I register for InCTF Junior?',
    'keywords': ['register', 'registration'],
    'response': [
      'You can register through the official InCTF Junior website.',
    ],
    'answer': <>
      You can register through the official InCTF Junior website. Follow the registration steps and wait for 
      updates via email.
    </>,
    tags: ['getting-started'],
  },
  {
   
    'question': 'Is there a registration fee?',
    'keywords': ['fee', 'cost'],
    'response': [
      'Yes, a nominal team registration fee is applicable.',
    ],
    'answer': <>
      Yes, a nominal team registration fee is applicable. Please check the website for the current fee structure.
    </>,
    tags: ['requirements'],
  },
  {
   
    'question': 'Can I participate individually or as a team?',
    'keywords': ['team', 'individual'],
    'response': [
      'InCTF Junior is strictly an individual competition.',
    ],
    'answer': <>
      InCTF Junior is strictly an individual competition. You must participate individually — teams are not allowed.
    </>,
    tags: ['rules'],
  },
  {
   
    'question': 'What are the phases in InCTF Junior?',
    'keywords': ['phases', 'stages'],
    'response': [
      'InCTF Junior consists of three phases:',
    ],
    'answer': <>
      InCTF Junior consists of:
      <ul>
        <li>Training Phase: Self-paced learning and practice</li>
        <li>Qualifier Round: Online challenge round</li>
        <li>Final Round: Selected top teams (Offline)</li>
      </ul>
    </>,
    tags: ['structure'],
  },
  {
   
    'question': 'What kind of challenges are included?',
    'keywords': ['challenges', 'topics'],
    'response': [
      'Challenges are age-appropriate and cover various cybersecurity topics.',
    ],
    'answer': <>
      Challenges are age-appropriate and cover topics like basic web security, cryptography, logic puzzles, 
      forensics, and beginner-level coding.
    </>,
    tags: ['content'],
  },
  {
   
    'question': 'What should I know before participating?',
    'keywords': ['prepare', 'knowledge'],
    'response': [
      'Basic computer skills and logical thinking are enough.',
    ],
    'answer': <>
      Basic computer skills, logical thinking, and a willingness to learn are enough. Guidance is provided throughout.
    </>,
    tags: ['getting-started'],
  },
  {
   
    'question': 'Will training be provided?',
    'keywords': ['training', 'resources'],
    'response': [
      'Yes, participants get access to structured training modules.',
    ],
    'answer': <>
      Yes, participants get access to structured training modules, practice problems, and beginner-friendly tutorials.
    </>,
    tags: ['resources'],
  },
  {
   
    'question': 'Do I need to install any software?',
    'keywords': ['software', 'tools'],
    'response': [
      'Most challenges can be solved using a web browser.',
    ],
    'answer': <>
      Most challenges can be solved using a web browser. Some optional tools may be suggested for advanced practice, 
      but installation is not mandatory.
    </>,
    tags: ['requirements'],
  },
  {
   
    'question': 'How long does the event last?',
    'keywords': ['duration', 'time'],
    'response': [
      'The training is open for several weeks.',
    ],
    'answer': <>
      The training is open for several weeks. The qualifier round usually lasts 24 hours, and the final round 
      varies based on the format.
    </>,
    tags: ['schedule'],
  },
  {
   
    'question': 'What support is available during the competition?',
    'keywords': ['support', 'help'],
    'response': [
      'A support channel will be available during the contest.',
    ],
    'answer': <>
      A support channel (such as Discord or email) will be available during the contest to assist participants 
      with any doubts or technical issues.
    </>,
    tags: ['support'],
  },
  {
   
    'question': 'How are the challenges scored?',
    'keywords': ['scoring', 'points'],
    'response': [
      'Each challenge has a point value based on its difficulty.',
    ],
    'answer': <>
      Each challenge has a point value based on its difficulty. Your rank is determined by your total score 
      and the time taken.
    </>,
    tags: ['rules'],
  },
  {
   
    'question': 'Will I receive a certificate?',
    'keywords': ['certificate'],
    'response': [
      'Yes, digital certificates will be provided.',
    ],
    'answer': <>
      Yes, it shall be issued to all eligible Participants who have at least solved 1 challenge in the Contest 
      qualifiers round. This shall be a digital certificate, and shall be emailed at the end of the Contest. 
      Top performers receive additional awards.
    </>,
    tags: ['certificate'],
  },
  {
   
    'question': 'Are there prizes for winners?',
    'keywords': ['prizes', 'awards'],
    'response': [
      'Yes, InCTF Junior includes exciting prizes.',
    ],
    'answer': <>
      Yes, InCTF Junior includes exciting prizes for top-performing participants in both the overall and 
      beginner categories.
    </>,
    tags: ['prizes'],
  },
  {
   
    'question': 'Can international students participate?',
    'keywords': ['international', 'nri'],
    'response': [
      'Currently, InCTF Junior is open only to students studying in India.',
    ],
    'answer': <>
      Currently, InCTF Junior is open only to students studying in India.
    </>,
    tags: ['eligibility'],
  },
  {
   
    'question': 'How do I know if I qualify for the finals?',
    'keywords': ['qualify', 'finals'],
    'response': [
      'Finalist teams will be notified via email.',
    ],
    'answer': <>
      Finalist teams will be notified via email, and the results will be published on the official website.
    </>,
    tags: ['qualifiers'],
  },
  {
   
    'question': 'Where can I find previous challenges?',
    'keywords': ['previous', 'past'],
    'response': [
      'Past challenges are available on the InCTF Junior website.',
    ],
    'answer': <>
      Past challenges and training content are available on the InCTF Junior website and official learning portals.
    </>,
    tags: ['resources'],
  },
  {
   
    'question': 'What tools will I use during the CTF?',
    'keywords': ['tools'],
    'response': [
      'Most tools are browser-based.',
    ],
    'answer': <>
      Most tools are browser-based. For advanced learners, optional tools like CyberChef, basic Linux commands, 
      or Python scripts may be used.
    </>,
    tags: ['requirements'],
  },
  {
   
    'question': 'How do I contact the organizers?',
    'keywords': ['contact', 'organizers'],
    'response': [
      'You can email the InCTF Junior team.',
    ],
    'answer': <>
      You can email the InCTF Junior team or use the contact form on the official website for queries or support.
    </>,
    tags: ['support'],
  },
  {
   
    'question': 'Where can I get updates?',
    'keywords': ['updates', 'announcements'],
    'response': [
      'All official announcements will be made through email and the website.',
    ],
    'answer': <>
      All official announcements will be made through email and the InCTF Junior website and social media channels.
    </>,
    tags: ['support'],
  },
];

export default questions;