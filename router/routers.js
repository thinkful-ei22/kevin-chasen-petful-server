'use strict';
const express = require('express');

const Queue = require('../classes/queue-class');
const {peekQueue, displayQueue} = require('../classes/queue-helpers');

const CatQueue = new Queue();
const DogQueue = new Queue();

const router = express.Router();

//7 indexes
const catArr = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL:'https://pixfeeds.com/images/cats/640-648561826-rusian-blue-cat.jpg', 
    imageDescription: 'Russian Blue cat that is chiling on the deck',
    name: 'Kit-Kat',
    sex: 'Female',
    age: 2,
    breed: 'Russian Blue',
    story: 'Found on the street'
  },
  {
    imageURL:'https://i.ytimg.com/vi/I78BlZtJXS4/hqdefault.jpg', 
    imageDescription: 'Maine Coon cat aths is hanging out on a blanket',
    name: 'Gizmo',
    sex: 'Male',
    age: 2,
    breed: 'Maine Coon',
    story: 'Owner got a new job traveling and needs to find new owner'
  }
];
//6 indexes of dog
const dogArr = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus' ,
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'https://data.whicdn.com/images/140250502/large.jpg',
    imageDescription: 'A Bernese Mountain Dog trying to give you a high five.',
    name: 'Sully',
    sex: 'Male',
    age: '6 months',
    breed: 'Bernese Mountain Dog',
    story: 'Just Born'
  },
  {
    imageURL: 'https://vetstreet.brightspotcdn.com/dims4/default/5e4bb18/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fa9%2Fd5%2F9f8aa6d040ada32feaf997a6e36a%2Fnewfoundland-AP-1NGNAA-645sm12913.jpg',
    imageDescription: 'A Newfy that is ready for a new Home.',
    name: 'Remington',
    sex: 'Female'  ,
    age: '2 months',
    breed: 'Newfoundland',
    story: 'Owner trying to it give away'
  },
  {
    imageURL: 'https://pixfeeds.com/images/dogs/1280-651913942-chocolate-labrador-puppy.jpg',
    imageDescription: 'A sad chocolate lab that is ready for a home.',
    name: 'Roo',
    sex: 'Female',
    age: 1,
    breed: 'Chocolate Lab',
    story: 'Lost puppy'
  }
];

CatQueue.enqueue(catArr[0]);
CatQueue.enqueue(catArr[1]);
CatQueue.enqueue(catArr[2]);
CatQueue.enqueue(catArr[3]);
CatQueue.enqueue(catArr[4]);
CatQueue.enqueue(catArr[5]);
CatQueue.enqueue(catArr[6]);

DogQueue.enqueue(dogArr[0]);
DogQueue.enqueue(dogArr[1]);
DogQueue.enqueue(dogArr[2]);
DogQueue.enqueue(dogArr[3]);
DogQueue.enqueue(dogArr[4]);
DogQueue.enqueue(dogArr[5]);
// console.log(JSON.stringify(displayQueue(CatQueue)), null, 2);
// console.log(JSON.stringify(displayQueue(DogQueue)), null, 2);

router.get('/api/cat', (req, res, next) => {
  res.json(peekQueue(CatQueue));
});
router.get('/api/dog', (req, res, next) => {
  res.json(peekQueue(DogQueue));
});

router.delete('/api/cat', (req, res, next) => {
  console.log(JSON.stringify(displayQueue(CatQueue)), null, 2);
  res.json(CatQueue.dequeue()).sendStatus(200);
});

router.delete('/api/dog', (req, res, next) => {
  console.log(JSON.stringify(displayQueue(DogQueue)), null, 2);
  res.json(DogQueue.dequeue()).sendStatus(200);
});

module.exports = router;