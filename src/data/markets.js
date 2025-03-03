export const categories = [
  { id: 'politics', name: 'Politics', icon: '🗳️' },
  { id: 'cricket', name: 'Cricket', icon: '🏏' },
  { id: 'bollywood', name: 'Bollywood', icon: '🎬' },
  { id: 'tollywood', name: 'Tollywood', icon: '🎥' },
  { id: 'government', name: 'Government', icon: '🏛️' },
  { id: 'tech', name: 'Technology', icon: '💻' },
  { id: 'economy', name: 'Economy', icon: '📈' },
];

export const markets = {
  politics: [
    {
      id: 'p1',
      title: 'Will BJP win 400+ seats in 2024?',
      description: 'BJP to secure more than 400 seats in the 2024 Lok Sabha elections',
      yesPrice: 45,
      noPrice: 55,
      volume: '₹15.2L',
      category: 'Politics',
      endDate: '2024-05-31',
    },
    {
      id: 'p2',
      title: 'Will Rahul Gandhi become PM in 2024?',
      description: 'Rahul Gandhi to become the Prime Minister after 2024 elections',
      yesPrice: 20,
      noPrice: 80,
      volume: '₹8.5L',
      category: 'Politics',
      endDate: '2024-05-31',
    },
  ],
  cricket: [
    {
      id: 'c1',
      title: 'India to win T20 World Cup 2024?',
      description: 'India to win the ICC T20 World Cup 2024',
      yesPrice: 60,
      noPrice: 40,
      volume: '₹25.1L',
      category: 'Cricket',
      endDate: '2024-06-30',
    },
    {
      id: 'c2',
      title: 'Virat Kohli 50th ODI Century in 2024?',
      description: 'Virat Kohli to score his 50th ODI century in 2024',
      yesPrice: 65,
      noPrice: 35,
      volume: '₹12.8L',
      category: 'Cricket',
      endDate: '2024-12-31',
    },
  ],
  bollywood: [
    {
      id: 'b1',
      title: 'Dunki 1000 Cr Worldwide?',
      description: 'Will Dunki cross ₹1000 Cr worldwide box office collection?',
      yesPrice: 40,
      noPrice: 60,
      volume: '₹18.5L',
      category: 'Bollywood',
      endDate: '2024-01-31',
    },
    {
      id: 'b2',
      title: 'Tiger vs Pathaan Release in 2024?',
      description: 'Will Tiger vs Pathaan release in 2024?',
      yesPrice: 75,
      noPrice: 25,
      volume: '₹9.2L',
      category: 'Bollywood',
      endDate: '2024-12-31',
    },
  ],
  tollywood: [
    {
      id: 't1',
      title: 'Pushpa 2 ₹1000 Cr First Week?',
      description: 'Will Pushpa 2 collect ₹1000 Cr worldwide in first week?',
      yesPrice: 55,
      noPrice: 45,
      volume: '₹21.3L',
      category: 'Tollywood',
      endDate: '2024-08-15',
    },
    {
      id: 't2',
      title: 'Game Changer Release in April?',
      description: "Will Ram Charan's Game Changer release in April 2024?",
      yesPrice: 70,
      noPrice: 30,
      volume: '₹11.6L',
      category: 'Tollywood',
      endDate: '2024-04-30',
    },
    {
      id: 'pushpa2-box-office',
      title: 'Will Pushpa 2: The Rule cross ₹1000 crores worldwide in its first month?',
      description:
        "Predict if Allu Arjun's Pushpa 2 will cross ₹1000 crore worldwide box office collection within first 30 days of release.",
      endDate: '2024-09-15',
      category: 'tollywood',
      volume: '₹2.5M',
      yesPrice: '0.65',
      noPrice: '0.35',
      icon: '🎬',
    },
    {
      id: 'kalki-release-date',
      title: 'Will Kalki 2898 AD release before September 2024?',
      description:
        'Predict if Prabhas starrer Kalki 2898 AD will have its theatrical release before September 2024.',
      endDate: '2024-09-01',
      category: 'tollywood',
      volume: '₹1.8M',
      yesPrice: '0.45',
      noPrice: '0.55',
      icon: '🎥',
    },
    {
      id: 'devara-opening-day',
      title: 'Will Devara Part 1 collect over ₹50 crores on opening day in India?',
      description:
        "Predict if Jr NTR's Devara Part 1 will collect more than ₹50 crores net in India on its opening day.",
      endDate: '2024-10-11',
      category: 'tollywood',
      volume: '₹2.1M',
      yesPrice: '0.72',
      noPrice: '0.28',
      icon: '💰',
    },
    {
      id: 'game-changer-politics',
      title: 'Will Game Changer release before the 2024 general elections?',
      description:
        "Predict if Ram Charan's political thriller Game Changer will release before the 2024 Indian general elections.",
      endDate: '2024-04-30',
      category: 'tollywood',
      volume: '₹1.5M',
      yesPrice: '0.38',
      noPrice: '0.62',
      icon: '🗳️',
    },
    {
      id: 'pushpa2-national-award',
      title: 'Will Pushpa 2 receive at least one National Film Award?',
      description:
        'Predict if Pushpa 2: The Rule will win at least one National Film Award in any category for the year 2024.',
      endDate: '2025-08-01',
      category: 'tollywood',
      volume: '₹900K',
      yesPrice: '0.58',
      noPrice: '0.42',
      icon: '🏆',
    },
    {
      id: 'kalki-vfx-record',
      title: "Will Kalki 2898 AD break RRR's VFX budget record?",
      description:
        "Predict if Kalki 2898 AD's VFX budget will exceed RRR's reported VFX budget of ₹150 crores.",
      endDate: '2024-12-31',
      category: 'tollywood',
      volume: '₹1.2M',
      yesPrice: '0.75',
      noPrice: '0.25',
      icon: '🎮',
    },
    {
      id: 'devara-overseas',
      title: 'Will Devara cross $10M in US box office?',
      description:
        "Predict if Jr NTR's Devara will collect more than $10 million at the United States box office.",
      endDate: '2024-11-15',
      category: 'tollywood',
      volume: '₹1.6M',
      yesPrice: '0.68',
      noPrice: '0.32',
      icon: '🌎',
    },
    {
      id: 'game-changer-reviews',
      title: 'Will Game Changer receive over 8.0 rating on IMDb?',
      description:
        "Predict if Ram Charan's Game Changer will receive an IMDb rating higher than 8.0 within first month of release.",
      endDate: '2024-12-31',
      category: 'tollywood',
      volume: '₹800K',
      yesPrice: '0.42',
      noPrice: '0.58',
      icon: '⭐',
    },
    {
      id: 'pushpa2-day1-record',
      title: 'Will Pushpa 2 break first-day worldwide collection record?',
      description:
        'Predict if Pushpa 2 will break the existing first-day worldwide collection record for an Indian film.',
      endDate: '2024-08-16',
      category: 'tollywood',
      volume: '₹2.8M',
      yesPrice: '0.62',
      noPrice: '0.38',
      icon: '📊',
    },
    {
      id: 'kalki-prabhas-comeback',
      title: "Will Kalki 2898 AD be called Prabhas's biggest comeback?",
      description:
        "Predict if major film critics and media will label Kalki 2898 AD as Prabhas's biggest comeback after Baahubali series.",
      endDate: '2024-12-31',
      category: 'tollywood',
      volume: '₹1.4M',
      yesPrice: '0.55',
      noPrice: '0.45',
      icon: '🌟',
    },
  ],
  government: [
    {
      id: 'g1',
      title: 'UPI Transactions Cross 50B in March?',
      description: 'Will monthly UPI transactions cross 50 billion in March 2024?',
      yesPrice: 80,
      noPrice: 20,
      volume: '₹16.7L',
      category: 'Government',
      endDate: '2024-03-31',
    },
    {
      id: 'g2',
      title: 'Digital Rupee Full Launch in 2024?',
      description: 'Will RBI fully launch Digital Rupee for retail use in 2024?',
      yesPrice: 35,
      noPrice: 65,
      volume: '₹13.9L',
      category: 'Government',
      endDate: '2024-12-31',
    },
  ],
  tech: [
    {
      id: 'tech1',
      title: 'Chandrayaan-4 Launch in 2024?',
      description: 'Will ISRO launch Chandrayaan-4 mission in 2024?',
      yesPrice: 45,
      noPrice: 55,
      volume: '₹14.3L',
      category: 'Technology',
      endDate: '2024-12-31',
    },
  ],
  economy: [
    {
      id: 'e1',
      title: 'India GDP Growth > 7% in FY24?',
      description: "Will India's GDP growth rate exceed 7% in FY 2023-24?",
      yesPrice: 65,
      noPrice: 35,
      volume: '₹19.8L',
      category: 'Economy',
      endDate: '2024-03-31',
    },
  ],
};
