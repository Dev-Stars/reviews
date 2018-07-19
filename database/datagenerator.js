const db = require('./index');

const restos = ['The Forest Trumpet',
  'The Pearl Well',
  'The First Flavour',
  'The Polar Grove',
  'The Coriander Jewel',
  'The Nightingale',
  'Basil',
  'Meadows',
  'Parlay',
  'The Pearl',
  'The Sailing Street',
  'The Crystal Bay',
  'The Big Heart',
  'The Fable Bistro',
  'The Spiced Hog',
  'Gem',
  'Butlers',
  'Aqua',
  'The Eclipse',
  'Interlude',
  'The Karma Tulip',
  'The Solar Pantry',
  'The Moroccan Pizzeria',
  'The Delhi Bites',
  'The Arctic Door',
  'Unwind',
  'Sapphire',
  'Grace',
  'The Hive',
  'Meadows',
  'The Oval Devil',
  'The Light Bay',
  'The Bengal Walk',
  'The Harmonic Dream',
  'The Underwater Rose',
  'Roadhouse',
  'The Gallery',
  'Castle',
  'Roast',
  'Moonlight',
  'The Olive House',
  'The Aqua Place',
  'The Clear Pig',
  'The Cool Cat Goddess',
  'The Magical Boar',
  'The Nomad',
  'The Boutique',
  'Paragon',
  'The Hive',
  'Shambles',
  'The Boiling Elephant',
  'The Pepper Blend',
  'The Magical Street',
  'The Vintage Victory',
  'The Juniper Bay',
  'Friends',
  'Simmer Down',
  'The Crown',
  'Fluorescence',
  'Indigo',
  'The Palm Tower',
  'The Grand Night',
  'The Cinnamon Walk',
  'The Orange Elephant',
  'The Brimstone Grove',
  'Gentle',
  'The Nomad',
  'Splash',
  'Bounty',
  'Gastrognome',
  'The Sour Room',
  'The Brimstone Heaven',
  'The Jazz Junction',
  'The Friendly Parlour',
  'The Holy Garden',
  'Potroast',
  'Paramount',
  'The Hive',
  'Happening',
  'Fabled',
  'The Painted Leaf',
  'The Karma Place',
  'The River Lounge',
  'The Pink Harvest',
  'The Crystal Lane',
  'The Bell Tower',
  'Mirrors',
  'Roadhouse',
  'Medallion',
  'Kingsize',
  'The Cinnamon Ranch',
  'The Incredible Bites',
  'The Little Eats',
  'The Mellow Courtyard',
  'The Dwarf Bay',
  'The Lotus',
  'The Turban',
  'Paragon',
  'Jewel',
  'Aquas'];


const paras = ['Lorem ipsum dolor amet fanny pack thundercats church-key glossier, swag jianbing semiotics deep v everyday carry flannel craft beer. Hexagon succulents pitchfork, etsy slow-carb bespoke raclette jean shorts. Edison bulb williamsburg listicle iceland. Authentic ennui bitters before they sold out retro beard paleo poke whatever locavore synth. Keffiyeh meh neutra subway tile, taiyaki sriracha vice put a bird on it. Readymade tumblr brooklyn vaporware seitan health goth vexillologist pitchfork crucifix kitsch chillwave four loko ethical blue bottle air plant. Gluten-free vaporware photo booth kombucha.',

  'Ethical tote bag keffiyeh activated charcoal single-origin coffee DIY. YOLO stumptown intelligentsia vexillologist single-origin coffee readymade. Kogi marfa semiotics, keffiyeh unicorn affogato stumptown activated charcoal godard everyday carry vinyl seitan try-hard pour-over cardigan. Chicharrones migas VHS taxidermy selvage. Hexagon disrupt squid hashtag.',

  'Gochujang air plant meh, franzen butcher post-ironic dreamcatcher vegan subway tile. Lyft green juice gastropub meggings dreamcatcher cray direct trade franzen yr unicorn. Chambray occupy wolf vaporware, bitters gentrify letterpress franzen prism artisan salvia listicle four dollar toast tilde vegan. Etsy umami street art activated charcoal vexillologist, seitan craft beer. Distillery single-origin coffee bushwick, palo santo readymade snackwave fam af. Wayfarers la croix microdosing coloring book, before they sold out snackwave cliche beard butcher roof party swag pop-up viral copper mug. Narwhal schlitz bicycle rights health goth listicle.',


  'Thundercats street art literally direct trade 90s helvetica hell of. Tattooed selfies man bun marfa, authentic plaid artisan. Butcher VHS migas hoodie jean shorts stumptown brooklyn. Cornhole keffiyeh activated charcoal sriracha.',

  'Hella vexillologist pok pok yr meh distillery jean shorts. Freegan tattooed iceland lo-fi, thundercats schlitz poutine messenger bag kogi shoreditch. Tumblr ugh helvetica vexillologist, polaroid vegan pork belly next level banh mi chia cornhole jean shorts la croix skateboard. Prism you probably haven\'t heard of them migas blue bottle adaptogen shoreditch af. Kickstarter sustainable yr chicharrones poke lumbersexual helvetica vaporware. Asymmetrical gluten-free biodiesel, roof party skateboard cronut tote bag adaptogen distillery typewriter listicle church-key.',
];


const names = ['Opie Taylor', 'Aunt Bee', 'Floyd Lawson', 'Andy Taylor', 'Gomer Pyle', 'Barney Fife', 'Goober Pyle', 'Otis Campbell', 'Ellie', 'Thelma Lou'];

const makeData = function makeBothData(fakeNames, restaurants, paragraphs, callback) {
  fakeNames.forEach((name) => {
    db.query('INSERT INTO users (name, location, numFriends, numPhotos, numReviews) VALUES (?, ?, ?, ?, ?)', [name, 'San Francisco, Ca', 12, 2, 5]);
  });
  callback(restaurants, paragraphs);
};

const second = function generateReviews(restaurants, paragraphs) {
  restaurants.forEach((resto, idx) => {
    let userID = idx % 10;
    if (userID === 0) {
      userID = 10;
    }
    const stars = Math.ceil(Math.random() * 5);
    db.query('INSERT INTO reviews (id, message, stars, posted, userID) VALUES (?, ?, ?, ?, ?)', [idx + 1, paragraphs[idx % 5], stars, 'April 1, 2017', (idx % 10) + 1], (err) => {
      if (err) {
        throw err;
      }
    });
  });
};


makeData(names, restos, paras, second);
