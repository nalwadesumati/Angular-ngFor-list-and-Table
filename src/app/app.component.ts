import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OurFirstProjects';
  hobbies: Array<string> = [
    'Chess',
    'Cricket',
    'Cooking',
    'Crafting',
    'BadMintaon',
  ];
  countries: Array<string> = ['India', 'USA', 'Canada', 'Australia', 'Germany'];
  languages: Array<string> = [
    'Marathi',
    'English',
    'Hindi',
    'Spanish',
    'French',
  ];

  fruits: Array<string> = ['Banana', 'Apple', 'Mango', 'Grapes', 'PineApple'];
  books: Array<string> = [
    'The Alchemist',
    'Rich Dad Poor Dad',
    'Atomic Habits',
    'Think and Grow Rich',
    'The Power of Now',
  ];
  movies: Array<string> = [
    '3 Idiots',
    'Inception',
    'Avengers: Endgame',
    'Interstellar',
    'The Dark Knight',
  ];

  cities: Array<string> = ['Mumbai', 'Pune', 'Delhi', 'Bangalore', 'Hyderabad'];
  animals: Array<string> = ['Dog', 'Cat', 'Lion', 'Tiger', 'Elephant'];
  colors: Array<string> = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];

  students: Array<{ id: number; name: string; course: string; marks: number }> =
    [
      { id: 1, name: 'Suresh', course: 'Angular', marks: 90 },
      { id: 2, name: 'Jhon', course: 'Typscript', marks: 85 },
      { id: 3, name: 'May', course: 'Bootstrap', marks: 95 },
      { id: 4, name: 'July', course: 'HTML', marks: 98 },
    ];

  employees: Array<{ id: number; name: string; dept: string; salary: number }> =
    [
      { id: 101, name: 'Amit', dept: 'IT', salary: 45000 },
      { id: 102, name: 'Neha', dept: 'HR', salary: 40000 },
      { id: 103, name: 'Rohit', dept: 'Finance', salary: 50000 },
      { id: 104, name: 'Mohit', dept: 'IT', salary: 80000 },
    ];

  books2: Array<{ id: number; title: string; author: string; price: number }> =
    [
      { id: 1, title: 'Atomic Habits', author: 'James Clear', price: 450 },
      { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', price: 350 },
      { id: 3, title: 'Wings of Fire', author: 'APJ Abdul Kalam', price: 500 },
      { id: 4, title: 'Atomic Habits', author: 'James Clear', price: 450 },
      { id: 5, title: 'The Alchemist', author: 'Paulo Coelho', price: 350 },
    ];
  products: Array<{
    id: number;
    name: string;
    category: string;
    price: number;
  }> = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 55000 },
    { id: 2, name: 'Mobile', category: 'Electronics', price: 30000 },
    { id: 3, name: 'Chair', category: 'Furniture', price: 4500 },
    { id: 4, name: 'TV', category: 'Electronics', price: 50000 },
    { id: 5, name: 'Chair', category: 'Furniture', price: 4500 },
  ];

  movies2: Array<{ id: number; title: string; genre: string; rating: number }> =
    [
      { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 9 },
      { id: 2, title: '3 Idiots', genre: 'Drama', rating: 8 },
      { id: 3, title: 'Interstellar', genre: 'Sci-Fi', rating: 9 },
      { id: 3, title: 'Animal', genre: 'Sci-Fi', rating: 9 },
      { id: 3, title: 'Pushpa', genre: 'Sci-Fi', rating: 10 },
    ];
  games: Array<{ id: number; title: string; genre: string; rating: number }> = [
    { id: 1, title: 'PUBG', genre: 'Battle Royale', rating: 8 },
    { id: 2, title: 'GTA V', genre: 'Action', rating: 10 },
    { id: 3, title: 'FIFA 23', genre: 'Sports', rating: 9 },
    { id: 4, title: 'Call of Duty', genre: 'Shooter', rating: 9 },
    { id: 5, title: 'Minecraft', genre: 'Sandbox', rating: 10 },
  ];
  cities2: Array<{
    id: number;
    name: string;
    state: string;
    population: string;
  }> = [
    { id: 1, name: 'Mumbai', state: 'Maharashtra', population: '20M' },
    { id: 2, name: 'Pune', state: 'Maharashtra', population: '7M' },
    { id: 3, name: 'Delhi', state: 'Delhi', population: '18M' },
    { id: 4, name: 'Bangalore', state: 'Karnataka', population: '12M' },
    { id: 5, name: 'Hyderabad', state: 'Telangana', population: '10M' },
  ];
  countriesA: Array<{
    id: number;
    name: string;
    capital: string;
    population: string;
  }> = [
    { id: 1, name: 'India', capital: 'New Delhi', population: '1.4B' },
    { id: 2, name: 'USA', capital: 'Washington D.C.', population: '331M' },
    { id: 3, name: 'Canada', capital: 'Ottawa', population: '38M' },
    { id: 4, name: 'Australia', capital: 'Canberra', population: '26M' },
    { id: 5, name: 'Germany', capital: 'Berlin', population: '83M' },
  ];
  vehicles: Array<{
    id: number;
    name: string;
    type: string;
    price: string;
  }> = [
    { id: 1, name: 'Honda City', type: 'Car', price: '₹12L' },
    { id: 2, name: 'Royal Enfield Classic 350', type: 'Bike', price: '₹2L' },
    { id: 3, name: 'Hyundai Creta', type: 'Car', price: '₹15L' },
    { id: 4, name: 'Tata Nexon', type: 'SUV', price: '₹14L' },
    { id: 5, name: 'Suzuki Swift', type: 'Car', price: '₹9L' },
  ];

  bikes: Array<{
    id: number;
    name: string;
    brand: string;
    price: string;
  }> = [
    {
      id: 1,
      name: 'Royal Enfield Classic 350',
      brand: 'Royal Enfield',
      price: '₹2.1L',
    },
    { id: 2, name: 'Yamaha R15', brand: 'Yamaha', price: '₹1.8L' },
    { id: 3, name: 'KTM Duke 390', brand: 'KTM', price: '₹3.0L' },
    { id: 4, name: 'Bajaj Pulsar 220F', brand: 'Bajaj', price: '₹1.6L' },
    { id: 5, name: 'Honda Shine', brand: 'Honda', price: '₹0.8L' },
  ];
  cars: Array<{
    id: number;
    name: string;
    brand: string;
    price: string;
  }> = [
    { id: 1, name: 'Honda City', brand: 'Honda', price: '₹12L' },
    { id: 2, name: 'Hyundai Creta', brand: 'Hyundai', price: '₹15L' },
    { id: 3, name: 'Tata Nexon', brand: 'Tata', price: '₹14L' },
    { id: 4, name: 'Maruti Suzuki Swift', brand: 'Maruti', price: '₹9L' },
    { id: 5, name: 'Kia Seltos', brand: 'Kia', price: '₹16L' },
  ];
  Company: Array<{ id: number; name: string; value: string }> = [
    { id: 1, name: 'Company', value: 'ABC Pvt Ltd' },
    { id: 2, name: 'Location', value: 'Mumbai' },
    { id: 3, name: 'Email', value: 'info@abc.com' },
    { id: 4, name: 'Phone', value: '+91 9876543210' },
  ];
}
