import { Component, Input, Output , EventEmitter ,OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  @Input() book: Book = {} as Book;
  //@Output() bookEmitter = new EventEmitter<Book>() 
  
  constructor(private cartService : CartService) { }
  
  isInCart : boolean = false;
  
  addToCart(){
    this.cartService.add(this.book);
    this.isInCart = true;
    //this.bookEmitter.emit(this.book);
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

  ngOnInit(): void {
  }

}
