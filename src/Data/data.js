const queue = require('./queue');

const cats = new queue();
const dogs = new queue();

// Cats
cats.enqueue(
  {
    image: 'http://www.catloversdiary.com/wp-content/uploads/2013/01/Scottish_Fold.jpg',
    description: 'A grey hair Scottish fold.',
    name: 'Tony',
    sex: 'male',
    age: '5 years old',
    breed: 'Scottish fold',
    story: 'Acquired from British royalty.'
  });

cats.enqueue({
  image: 'http://www.catloversdiary.com/wp-content/uploads/2012/11/Persian_Cat.jpg',
  description: 'A lazy cat who needs grooming.',
  name: 'Sheela',
  sex: 'female',
  age: '7 years old',
  breed: 'Persian',
  story: 'Found in a palm tree.'
});

cats.enqueue({
  image: 'http://www.pethealthnetwork.com/sites/default/files/styles/large/public/the-norwegian-forest_0.jpg?itok=p_ypnCij',
  description: 'Disappears often, loves chowder.',
  name: 'Sheen',
  sex: 'male',
  age: '3 years old',
  breed: 'Norwegian Forest Cat',
  story: 'Got lost in the woods.'
});

// Dogs
dogs.enqueue({
  image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225402/Pug-MP.jpg',
  description: 'Loves running and sitting',
  name: 'Gary',
  sex: 'male',
  age: '2 years old',
  breed: 'Pug',
  story: 'Found in underwater crystal cave.'
});

dogs.enqueue({
  image: 'https://dgicdplf3pvka.cloudfront.net/2512536/chow-chow-puppy-picture-aa121d4d-875f-41a3-96bf-d2021b801852.jpg',
  description: 'Is a tiny dog',
  name: 'Betsy',
  sex: 'female',
  age: '2 years old',
  breed: 'Chow Chow',
  story: 'Was born in a castle and got lost.'
});

dogs.enqueue({
  image: 'https://images.puppyfinder.com/Breed/b/6/2/b623633429640900_xqhi6de_image1.jpg',
  description: 'Loves hiking, has a golden coat.',
  name: 'Lady',
  sex: 'female',
  age: '5 years old',
  breed: 'Golden Shepherd',
  story: 'Stranded at the beach.'
});

//console.log(cats);
//console.log(dogs);

module.exports = { cats, dogs };