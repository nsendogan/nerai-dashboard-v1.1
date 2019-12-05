let alertTweets = [
  {
    text:
      'RT @sciencemagazine: A reduction in cerebral blood volume in the human brain allows inflow of cerebrospinal fluid, which may facilitate com…',
    username: 'Kim Taguchi',
    img: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
  },
  {
    text:
      'RT @ToriGlass: So having worked in a neuroscience lab for three years, I’m at the point where I no longer believe that kids misbehave. Kids…',
    username: 'Biggles',
    img: 'https://pbs.twimg.com/profile_images/1160885283090382848/Gq21FxI2_normal.jpg',
  },
  {
    text:
      'Currently being taught neuroscience by a wonderfully charismatic and incredibly intelligent African American woman.… https://t.co/8ubaDPTFy6',
    username: 'Ruthy',
    img: 'https://pbs.twimg.com/profile_images/1186855073235628032/DkkGtnVU_normal.jpg',
  },
  {
    text:
      'RT @ACRMartsneuro: Are you in Chicago for #ACRM2019?? Come to our Meet &amp; Greet tonight at 8:00pm! We are meeting at 8pm in the Hilton Hotel…',
    username: 'ACRM Stroke Group',
    img: 'https://pbs.twimg.com/profile_images/601806834102456320/wZX80gtf_normal.jpg',
  },
  {
    text:
      'RT @BNightsCRPS: Snail venoms prove useful for #chronicpain relief. https://t.co/cevVWLXppg',
    username: 'Irene Bull',
    img: 'https://pbs.twimg.com/profile_images/1164953568627122178/-9GcXkPf_normal.jpg',
  },
  {
    text:
      'RT @Liz89130691: Part 3 #hemiplegicmigraine #migraine #migraineawarness #paralysis #RareDiseases #migrainehelp #neuro #neuroscience https:/…',
    username: 'beautifulmessyball',
    img: 'https://pbs.twimg.com/profile_images/1189651859356696577/0AwMdGCC_normal.jpg',
  },
  {
    text:
      'RT @teacher_deb: A great lecture on neuroscience and trauma in children which linked perfectly to what I learned from @MrsRuggsLeeds and @J…',
    username: 'Mary Ruggles',
    img: 'https://pbs.twimg.com/profile_images/599920060212338688/oTy3aivF_normal.jpg',
  },
  {
    text:
      'RT @innovateCaltech: Caltech Innovation Day presents cutting edge research in neuroscience, medical engineering, molecular medicine, single…',
    username: 'David Van Valen',
    img: 'https://pbs.twimg.com/profile_images/548000405893177345/8_vGYpLK_normal.jpeg',
  },
  {
    text: 'RT @AdelMHajjay: 😅😅 Neuroscience https://t.co/NyNOV7RyE8',
    username: '➰',
    img: 'https://pbs.twimg.com/profile_images/1107898144992444417/NqKdq9PO_normal.jpg',
  },
  {
    text:
      'RT @whsource: My recent interview with Brad Cooper of Catalyst Health and Wellness Coaching.  We get into the difference between pleasure a…',
    username: 'Paul Plakas',
    img: 'https://pbs.twimg.com/profile_images/1791168883/push_up_row_plank_end_normal.jpg',
  },
  {
    text:
      "RT @LNeuroscience: This year, we're holding the 1st #Liverpool #Neuroscience Winter Gala. A #PublicEngagement event on the theme of Fooling…",
    username: 'Jess Hilton',
    img: 'https://pbs.twimg.com/profile_images/1190305266325213184/N5ihKF_M_normal.jpg',
  },
  {
    text:
      'RT @ShiCooks: This #biodegradable device could help nerves heal \n' +
      '\n' +
      'This powerful device heals, then disappears. All within the human body.…',
    username: 'Shi',
    img: 'https://pbs.twimg.com/profile_images/619323261063565312/lVyXbKeZ_normal.jpg',
  },
  {
    text:
      'RT @sciencemagazine: A reduction in cerebral blood volume in the human brain allows inflow of cerebrospinal fluid, which may facilitate com…',
    username: 'Andy García Salgado',
    img: 'https://pbs.twimg.com/profile_images/1190869887142498304/17Qhl2mP_normal.jpg',
  },
  {
    text:
      'RT @LEAD_Coalition: Making Headway in Treating #Dementia https://t.co/SsyLBrW1Lk via @neurology_live\n' +
      '\n' +
      '#Alzheimers #neuroscience #science @V…',
    username: 'Paul McClintock',
    img: 'https://pbs.twimg.com/profile_images/1172345197704994816/vpSSTGPM_normal.jpg',
  },
  {
    text:
      'RT @BBSutdallas: Dr. Ted Price of @UTDPainLab hosted Dr. Ewan St. John Smith (@psalmotoxin) from the University of Cambridge this morning t…',
    username: 'Sampurna Chakrabarti',
    img: 'https://pbs.twimg.com/profile_images/1181633938269392896/N2d9XavR_normal.jpg',
  },
  {
    text:
      'RT @ToriGlass: So having worked in a neuroscience lab for three years, I’m at the point where I no longer believe that kids misbehave. Kids…',
    username: 'Anahvia',
    img: 'https://pbs.twimg.com/profile_images/1155178437751005184/mBcHXeOD_normal.jpg',
  },
  {
    text:
      'RT @JulieLasselin: Still a few more weeks to submit your paper to our special issue "social features of sickness" in @FrontiersIn Behaviora…',
    username: 'Pyter Lab 👩🏻‍🔬📊📋',
    img: 'https://pbs.twimg.com/profile_images/862362613983969280/6OT5bC_A_normal.jpg',
  },
  {
    text:
      'RT @robertghrist: am teaching network dynamics this week; my fave example comes from neuroscience. TLNs = threshold-linear networks are sim…',
    username: 'nomoreslaves',
    img: 'https://pbs.twimg.com/profile_images/933311659061403649/lkGdOrG1_normal.jpg',
  },
  {
    text:
      "@JustMeReal1612 I wont read it, I'd prefer a couple of great neuroscience or psychology papers to that trash.",
    username: 'The Rare Bird: Jay',
    img: 'https://pbs.twimg.com/profile_images/1150107432573644805/BirPBWSE_normal.png',
  },
  {
    text:
      'RT @ToriGlass: So having worked in a neuroscience lab for three years, I’m at the point where I no longer believe that kids misbehave. Kids…',
    username: 'Heather Ure',
    img: 'https://pbs.twimg.com/profile_images/1121971232226676737/G051kciS_normal.jpg',
  },
  {
    text:
      "RT @NitsanGoldstein: Don't miss the @PhillyNeuroTalk December 4th at 6pm! @IshmailSaboor @FlyBottleEscape and my advisor Nick Betley will g…",
    username: 'AmberAlhadeff',
    img: 'https://pbs.twimg.com/profile_images/1142037901527724032/PBl-bVVL_normal.jpg',
  },
  {
    text:
      'Ma dal punto di vista delle neuroscience i nagazionisti del cambiamento climatico esattamente che problemi anno? #ricominciaredalleamebe',
    username: 'Vale',
    img: 'https://pbs.twimg.com/profile_images/415064771277635585/UV3f0y5n_normal.jpeg',
  },
  {
    text:
      'Still a few more weeks to submit your paper to our special issue "social features of sickness" in @FrontiersIn Beha… https://t.co/IqdTy4O8PL',
    username: 'Julie Lasselin 🌍',
    img: 'https://pbs.twimg.com/profile_images/740533105237368837/FVRpCYzT_normal.jpg',
  },
  {
    text:
      'RT @ACRMartsneuro: Are you in Chicago for #ACRM2019?? Come to our Meet &amp; Greet tonight at 8:00pm! We are meeting at 8pm in the Hilton Hotel…',
    username: 'ACRM Spinal Cord Injury Group',
    img: 'https://pbs.twimg.com/profile_images/1025868671930052609/VSpoFF6i_normal.jpg',
  },
  {
    text:
      'RT @CourtiolJulie: The Virtual Epileptic Patient: from theory to reality! @thevirtualbrain @INS_Umr1106 @univamu @Inserm #thevirtualbrain #…',
    username: 'mvugt',
    img: 'https://pbs.twimg.com/profile_images/1358223151/pasfotoMvV11_normal.jpg',
  },
  {
    text:
      "@HeleenASlagter It's funny how neuroscience is suddenly catching on to  sensorimotor embodiment. Welcome to the party!",
    username: 'Micah Allen',
    img: 'https://pbs.twimg.com/profile_images/1054659240546177025/utG39iL6_normal.jpg',
  },
  {
    text:
      '@caninecognition @smellosopher @nature Interesting, I wonder if the increase in neuroscience within health and medi… https://t.co/g37qjUcj6v',
    username: 'Robert Lawrence',
    img: 'https://pbs.twimg.com/profile_images/976271783878852608/sDD2Xz1h_normal.jpg',
  },
  {
    text:
      'Do We Have Free Will? Neuroscience Might Have an Answer https://t.co/8GFxMAW3Ak https://t.co/4XxIToyzTC',
    username: 'Boris Rasonja',
    img: 'https://pbs.twimg.com/profile_images/1715085518/Main_for_now_normal.jpg',
  },
  {
    text:
      "Don't be responsible for a 'crash in visual processing' -- you may want to re-think showing too many images or slid… https://t.co/5gUAemcch2",
    username: 'Keane Angle',
    img: 'https://pbs.twimg.com/profile_images/1168938194022387713/zHsHtik-_normal.jpg',
  },
  {
    text:
      'RT @AchieveTMS: Our Medical Director, Dr. Manish Sheth, will be speaking on a panel at the Neuroscience Education Institute conference this…',
    username: 'Achieve TMS East',
    img: 'https://pbs.twimg.com/profile_images/798310239883771904/bmY7jici_normal.jpg',
  },
  {
    text:
      'RT @oznurkarakas: https://t.co/bjtOMD0I8u \n' +
      '\n' +
      'Ev içi şiddet beynin kimyasını değiştirerek maruz kalanın ilişkiyi terk etmesini güçleştiriyor,…',
    username: 'Şarlot',
    img: 'https://pbs.twimg.com/profile_images/1192345822609969152/ebPimRHu_normal.jpg',
  },
  {
    text:
      'The #Neuroscience and Experimental Therapeutics , College of #Medicine, Texas A&amp;M University is finally signalling… https://t.co/E0treIm7Lb',
    username: 'Neuroscience and Experimental Therapeutics TAMU',
    img: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
  },
  {
    text:
      'RT @Liz89130691: Part 3 #hemiplegicmigraine #migraine #migraineawarness #paralysis #RareDiseases #migrainehelp #neuro #neuroscience https:/…',
    username: 'Mission migraine',
    img: 'https://pbs.twimg.com/profile_images/911986508990701568/M1X-dOlX_normal.jpg',
  },
  {
    text:
      'As an anosmic, I’m quite jealous! Scientists Find People Who Can Smell Despite Missing Key Part of Their Brain… https://t.co/QLJ4rH6noY',
    username: 'Russ Shilling',
    img: 'https://pbs.twimg.com/profile_images/1167597798029701121/IY2rzcmr_normal.jpg',
  },
  {
    text:
      'Research Assistant in Cognitive Neuroscience\n' +
      'https://t.co/MQpUmQfZqK\n' +
      '#scholarship #phd #master #findscholarship',
    username: 'FindScholarship',
    img: 'https://pbs.twimg.com/profile_images/1072392541683757056/jxX6HZng_normal.jpg',
  },
  {
    text:
      'Research Assistant in Cognitive Neuroscience\n' +
      'https://t.co/RIfuo0unIO\n' +
      '#scholarship #phd #master #findscholarship @FScholarship101',
    username: 'Hunt Scholarship',
    img: 'https://pbs.twimg.com/profile_images/474246094184910848/1QTcajOk_normal.png',
  },
  {
    text:
      'REM is not a good predictor of dreaming.  \n' +
      '\n' +
      'Which means we need a catchy name for the actual EEG pattern (and/or br… https://t.co/ShtxjRrGru',
    username: 'Yohan John',
    img: 'https://pbs.twimg.com/profile_images/1086032073591271426/UEECXZVT_normal.jpg',
  },
  {
    text:
      'Neuroscience Says Highly Success Kids Have Parents Who Teach Them a Simple 4-Step Process to Achieve Their Goals. (… https://t.co/E5wb1JzN7E',
    username: 'Mark Smith, MSW',
    img: 'https://pbs.twimg.com/profile_images/972168907879411713/T6mbVHbF_normal.jpg',
  },
  {
    text:
      'RT @Tribonius: This Visualization Exercise Actually Works, According to Neuroscience via @fastcompany @TaraSwart #neuroscience #careeradvic…',
    username: 'Dr Tara Swart Bieber',
    img: 'https://pbs.twimg.com/profile_images/1158305264552030208/CKINTsDK_normal.jpg',
  },
  {
    text:
      'RT @BBSutdallas: Dr. Ted Price of @UTDPainLab hosted Dr. Ewan St. John Smith (@psalmotoxin) from the University of Cambridge this morning t…',
    username: 'Ted Price of the Dussor/Price Lab',
    img: 'https://pbs.twimg.com/profile_images/1011422250547888128/kXUuOh5E_normal.jpg',
  },
  {
    text:
      'UCLA Joint Seminar in Neuroscience - "Differential Resilience to Perturbation of Circuits with Similar Performance"… https://t.co/JXX8oJLtpX',
    username: 'DGSoM Weekly Digest',
    img: 'https://pbs.twimg.com/profile_images/534770490816987136/zll-vQw__normal.jpeg',
  },
  {
    text:
      '‘I have this constant urge to masturbate, please help me’ - Dr Dhanesh Gopalan, Clinical P https://t.co/EM0BYhdoLv #neuroscience #intoAInews',
    username: 'into.AI - The Global AI Ecosystem #intoAI',
    img: 'https://pbs.twimg.com/profile_images/967341160124608512/LM2Y5Q5m_normal.jpg',
  },
  {
    text:
      'Detection of… – Penn Center for Neuroscience and Society - APA Division 6 Society for Beh https://t.co/0yPvBRf8kD #neuroscience #intoAInews',
    username: 'into.AI - The Global AI Ecosystem #intoAI',
    img: 'https://pbs.twimg.com/profile_images/967341160124608512/LM2Y5Q5m_normal.jpg',
  },
  {
    text:
      'Minerva Neurosciences (NASDAQ:NERV) Stock Price Up 5.2% After Strong Earnings - Minerva https://t.co/aeUBc357ux #neuroscience #intoAInews',
    username: 'into.AI - The Global AI Ecosystem #intoAI',
    img: 'https://pbs.twimg.com/profile_images/967341160124608512/LM2Y5Q5m_normal.jpg',
  },
  {
    text:
      'BioXcel Therapeutics to Host Third Quarter 2019 Operating and Financial Results -  https://t.co/EMLEB7NiRK #neuroscience #intoAInews',
    username: 'into.AI - The Global AI Ecosystem #intoAI',
    img: 'https://pbs.twimg.com/profile_images/967341160124608512/LM2Y5Q5m_normal.jpg',
  },
  {
    text:
      'Choosing Between Marathon Petroleum Corporation (MPC) and Minerva Neurosciences, Inc … -  https://t.co/KTxcXCry81 #neuroscience #intoAInews',
    username: 'into.AI - The Global AI Ecosystem #intoAI',
    img: 'https://pbs.twimg.com/profile_images/967341160124608512/LM2Y5Q5m_normal.jpg',
  },
  {
    text:
      'ters for Amphetamine Extended-Release Tablet at the 2019 … -  https://t.co/fWlTxdr2VB #neuroscience #intoAInews',
    username: 'into.AI - The Global AI Ecosystem #intoAI',
    img: 'https://pbs.twimg.com/profile_images/967341160124608512/LM2Y5Q5m_normal.jpg',
  },
  {
    text:
      'ProMIS Neurosciences outlines best-in-class approach to amyloid-beta-targeting drug -  https://t.co/Il3vrEq05J #neuroscience #intoAInews',
    username: 'into.AI - The Global AI Ecosystem #intoAI',
    img: 'https://pbs.twimg.com/profile_images/967341160124608512/LM2Y5Q5m_normal.jpg',
  },
  {
    text:
      'RT @keetcanada: Bridging the gap between #neuroscience &amp; #clinicians in pediatric pain - the role of clinical assessment tools (PIPP-R) &amp; #…',
    username: 'UAlberta Nursing',
    img: 'https://pbs.twimg.com/profile_images/1059470029706514432/AAbRL3lO_normal.jpg',
  },
  {
    text:
      'Is Minerva Neurosciences, Inc ($NERV) Set To Blow Up? (2019-11-08) - 2019-11-08 (URGENCE https://t.co/64KP3gOkPi #neuroscience #intoAInews',
    username: 'into.AI - The Global AI Ecosystem #intoAI',
    img: 'https://pbs.twimg.com/profile_images/967341160124608512/LM2Y5Q5m_normal.jpg',
  },
];

export default alertTweets;
