let data = [
  {
    id: 1,
    name: 'GetUsPPE',
    type:
      'Helping to provide Personal Protective Equipment to hospital workers on the frontline.',
    area: 'United States and International',
    info: 'https://getusppe.org/donate/',
  },
  {
    id: 2,
    name: 'Network For Good',
    type:
      'Helping NYC Health + Hospitals to provide meals, prepackaged groceries, hotel rooms, laundry service, and scrubs.',
    area: 'New York',
    info: 'https://nychhc.networkforgood.com/',
  },
  {
    id: 3,
    name: 'Feed the Fight',
    type:
      'Feed the Fight raises funds to support local restaurants and their staff by ordering food for delivery to the local healthcare workers at hospitals and medical centers.',
    area: 'DC, Maryland, Virginia, North Carolina, and Wisconsin',
    info: 'https://feedthefight.org/donate/',
  },
  {
    id: 4,
    name: 'Feed the Front Line',
    type:
      'Support local restaurants and their employees by providing meals to healthcare workers.',
    area: 'Houston and Dallas-Fort Worth',
    info: 'https://www.ftfl.org/make-a-donation',
  },
  {
    id: 5,
    name: 'Get Shift Done',
    type:
      'Providing hunger relief to communities and giving jobs to the affected food/beverage workforce.',
    area: 'North Texas and El Paso',
    info: 'https://www.getshiftdone.org/',
  },
  {
    id: 6,
    name: 'Dining Bond Initiative',
    type:
      'A Dining Bond works like a savings bond, where you can purchase a "bond" at a value rate to be redeemed for face value at a future date.',
    area: 'Worldwide',
    info: 'https://diningbond.com/',
  },
  {
    id: 7,
    name: 'Support Local',
    type:
      'A project by USA Today that supports local businesses by buying gift cards for later use.',
    area: 'United States',
    info: 'https://supportlocal.usatoday.com/',
  },
  {
    id: 8,
    name: 'Southern Smoke',
    type: 'Helping the food and beverage industries in the Houston area.',
    area: 'Houston',
    info: 'https://southernsmoke.org/support/',
  },
  {
    id: 9,
    name: 'CityMeals on Wheels',
    type: 'Providing meals to elderly citizens in the New York area.',
    area: 'New York City',
    info: 'https://www.citymeals.org/',
  },
  {
    id: 10,
    name: 'Off Their Plate',
    type: 'Providing meals to hospitals throughout the area.',
    area: 'Boston, SF Bay Area, Los Angeles, New York, Pittsburgh',
    info: 'https://offtheirplate.org/',
  },
  {
    id: 11,
    name: 'Invisible Hands',
    type: 'Delivering food to the elderly for free.',
    area: 'New York City and New Jersey',
    info: 'https://www.invisiblehandsdeliver.com/donate',
  },
  {
    id: 12,
    name: 'Love For the Elderly',
    type: 'Writing Letters to the Elderly in nursing homes.',
    area: 'United States',
    info: 'https://lovefortheelderly.org/covid19',
  },
  {
    id: 13,
    name: 'Feeding America',
    type: 'Donate or provide food to food banks.',
    area: 'United States',
    info: 'https://www.feedingamerica.org/',
  },
  {
    id: 14,
    name: 'OpenTable',
    type: 'Ordering Gift Cards to restaurants.',
    area: 'United States',
    info: 'https://www.opentable.com/gifts',
  },
  {
    id: 15,
    name: 'Meals on Wheels America',
    type: 'Providing Meals to the elderly.',
    area: 'United States',
    info: 'https://www.mealsonwheelsamerica.org/',
  },
  {
    id: 16,
    name: 'Salvation Army',
    type: 'Multiple ways of providing assistance.',
    area: 'United States',
    info: 'https://www.salvationarmyusa.org/usn/covid19/',
  },
  {
    id: 17,
    name: 'Team Rubicon',
    type:
      '#neighborshelpingneighbors campaign, helping neighbors pickup prescriptions or delivering meals to the elderly.',
    area: 'United States',
    info: 'https://teamrubiconusa.org/neighbors/',
  },
  {
    id: 18,
    name: 'Red Cross',
    type:
      'Multiple ways of proving assistance (select Coronavirus Outbreak under the donation options).',
    area: 'United States',
    info: 'https://www.redcross.org/donate/donation.html/',
  },
];

export const fetchData = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 500);
  });
