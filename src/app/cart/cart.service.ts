import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : Book[] = [];

  //add book to cart
  add(book: Book){
    console.log(book);
    this.cart.push(book);
  }

  //remove book from cart
  remove(book: Book){
    console.log(book);
    this.cart = this.cart.filter( (book) => book != book);
  }

  get(){
    return this.cart;
  }

  constructor() { }
}
