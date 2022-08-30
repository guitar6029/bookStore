import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [ {
      name : 'clean code',
      author : "Rober C. Martin",
      imageSrc : "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
      amount : 20
  
    },
    {
      name : 'the pragmatic programmer',
      author: 'David Thomas',
      imageSrc: "https://m.media-amazon.com/images/P/B07VRS84D1.01._SCLZZZZZZZ_SX500_.jpg",
      amount : 35
    },
    {
      name: 'learning angular : A no-nonse beginner\'s guide to building web applications',
      author: "aristeidis bampakos, pablo deeleman",
      imageSrc: "https://m.media-amazon.com/images/I/61+Qbwu03kL._AC_UL800_QL65_.jpg",
      amount: 35.42
    },
    {
      name: "Beginning ReactJS Foundations Building user Interfaces with ReactJS: An Approachable Guide",
      author: "Chris Minnick",
      imageSrc: "https://m.media-amazon.com/images/I/71f7ATQsGwL._AC_UL800_QL65_.jpg",
      amount : 32.99
    },
    {
      name: 'python basics',
      author: "David Amos",
      imageSrc: 'https://m.media-amazon.com/images/I/617xgoDHJXL._AC_UL800_QL65_.jpg',
      amount: 37.99
    }]
  }


}


