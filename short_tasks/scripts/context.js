const person = {
  _id: '5d8f881c59acc00a4ad2c76c',
  index: 0,
  guid: 'fee2831b-b978-4bbd-8a3d-09fb6bd368b4',
  isActive: true,
  balance: '$3,304.39',
  picture: 'http://placehold.it/32x32',
  age: 39,
  eyeColor: 'green',
  name: {
    first: 'May',
    last: 'Lang',
  },
  company: 'KONGENE',
  email: 'may.lang@kongene.com',
  phone: '+1 (891) 552-3812',
  address: '159 Minna Street, Bodega, Virginia, 4881',
  registered: 'Saturday, March 29, 2014 9:41 PM',
  latitude: '67.175985',
  longitude: '-134.135539',
  tags: ['esse', 'minim', 'anim', 'adipisicing', 'nostrud'],
  friends: [
    { id: 0, name: 'Lenora Berger' },
    { id: 1, name: 'Heath Hess' },
    { id: 2, name: 'Fulton Thomas' },
    { id: 3, name: 'Cathryn Weiss' },
    { id: 4, name: 'King Barker' },
  ],
};

const summary = {
  fullName: undefined,
  balance: undefined,
  friendsMap: undefined,
  filteredTags: undefined,
  formattedAddress: undefined,
  coordinates: undefined,
};

function getFullName() {
  return `${this.name.first} ${this.name.last}`;
}
function getFriendsMap() {
  const map = new Map();
  this.friends.forEach((value, index) => {
    map.set(index, value);
  });
  return map;
}

function getFilteredTags(filterName) {
  return this.tags.filter((el) => el === filterName);
}

function getFormattedAddress() {
  let str = this.address;
  const start = str.indexOf(',') + 1;
  const end = str.lastIndexOf(',') - 1;
  str = str.slice(start, end) + str.slice(end + 2);
  return str;
}

function getCoordinates(...keys) {
  const obj = {};
  for (const key of keys) {
    obj[key] = this[key];
  }
  return obj;
}

const fillFunctions = {
  fullName: getFullName,
  friendsMap: getFriendsMap,
  filteredTags: getFilteredTags,
  formattedAddress: getFormattedAddress,
  coordinates: getCoordinates,
};

function fillObject(obj) {
  for (const key in obj) {
    if (fillFunctions[key]) {
      if (key.includes('filter')) {
        obj[key] = fillFunctions[key].call(this, 'anim');
      } else if (key === 'coordinates') {
        obj[key] = fillFunctions[key].apply(this, ['latitude', 'longitude']);
      } else {
        obj[key] = fillFunctions[key].call(this);
      }
    } else {
      obj[key] = this[key];
    }
  }
  console.log(obj);
}

fillObject.call(person, summary);

// Use this with call, apply, or bind:
// Do not access the person object directly.
// Use this to refer to the person properties inside your functions,
// and use call, apply, or bind to invoke these functions.

// {
//     fullName: "May Lang",
//     balance: $3,304.39,
//     friendsMap: Map(5) {
//         0 => { id: 0, name: "Lenora Berger" },
//         1 => { id: 1, name: "Heath Hess" },
//         2 => { id: 2, name: "Fulton Thomas" },
//         3 => { id: 3, name: "Cathryn Weiss" },
//         4 => { id: 4, name: "King Barker" }
//     },
//     filteredTags: ["anim"],
//     formattedAddress: "Bodega, Virginia 4881",
//     coordinates: { latitude: 67.175985, longitude: -134.135539 }
// }
