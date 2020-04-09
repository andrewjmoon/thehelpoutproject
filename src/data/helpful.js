let data = [
  {
    id: 1,
    name: 'Reuze',
    type: 'Reusing & sanitizing PPE',
    description:
      'Healthcare professionals submitting their own strategies for protecting personal equipment',
    info: 'https://reuze.covid.tools/',
  },
  {
    id: 2,
    name: 'Next Door Neighborhood Help Map',
    type: 'Helping neighbors',
    description:
      'Helping to connect neighbors together through maps and groups to help those in need of assistance',
    info:
      'https://blog.nextdoor.com/2020/03/18/nextdoor-launches-help-map-and-groups-to-bring-neighbors-together/',
  },
  {
    id: 3,
    name: 'What You Should Know about Face Masks',
    type: 'Face Masks',
    description: 'WebMDs information about Face Masks',
    info: 'https://www.webmd.com/lung/coronavirus-face-masks#1',
  },
  {
    id: 4,
    name: 'Cleaning and Reusing a N95 mask',
    type: 'Face Masks',
    description: 'Ways to keep your N95 mask clean',
    info: 'https://www.cnet.com/how-to/how-to-clean-and-reuse-an-n95-mask/',
  },
  {
    id: 5,
    name: 'Cleaning and Sterilizing homemade face mask',
    type: 'Face Masks',
    description: 'Ways to keep your homemade masks clean',
    info:
      'https://www.digitaltrends.com/health-fitness/how-to-clean-and-sterilize-your-homemade-face-mask/',
  },
  {
    id: 6,
    name: 'How to prevent Covid-19 scams online',
    type: 'Preventing Scams',
    description: 'Tips to keep away from scams',
    info:
      'https://www.cnet.com/how-to/coronavirus-stimulus-scams-are-here-how-to-identify-these-new-online-and-text-attacks/',
  },
  {
    id: 7,
    name: 'Zoom at your own risk',
    type: 'Preventing Scams',
    description: 'There are several security flaws with Zoom',
    info: 'https://techcrunch.com/2020/03/31/zoom-at-your-own-risk/',
  },
  {
    id: 8,
    name: 'Boosting your immune system with 15 foods',
    type: 'Immune System',
    description: 'Boosting your immune system',
    info:
      'https://www.healthline.com/health/food-nutrition/foods-that-boost-the-immune-system',
  },
  {
    id: 9,
    name: 'Ways to boost your immune system',
    type: 'Immune System',
    description: 'Harvard Medical School tips for a strong immune system',
    info:
      'https://www.health.harvard.edu/staying-healthy/how-to-boost-your-immune-system',
  },
  {
    id: 10,
    name: 'Boosting your immune system during cancer treatment',
    type: 'Immune System',
    description: '5 ways to keep your immunity strong from WebMD',
    info:
      'https://www.webmd.com/cancer/cancer-treatment-protect-immune-system#1',
  },
  {
    id: 11,
    name: 'Boosting your immune system with Vitamin D',
    type: 'Immune System',
    description: 'The need for Vitamin D',
    info:
      'https://www.pharmacytimes.com/news/vitamin-d-helps-the-immune-system-during-cold-and-flu-season',
  },
  {
    id: 12,
    name: 'Getting Vitamin D from sunlight',
    type: 'Immune System',
    description: 'Vitamin D and sunlight during midday',
    info: 'https://www.healthline.com/nutrition/vitamin-d-from-sun#time-of-day',
  },
  {
    id: 13,
    name: 'The importance of Zinc',
    type: 'Immune System',
    description: 'The need for zinc',
    info: 'https://www.healthline.com/nutrition/zinc',
  },
];

export const fetchData = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 500);
  });
