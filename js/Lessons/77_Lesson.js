'use strict';

// Принципы классов
 // 1.абстракция - состоит из отдельной конценции и экземплярах
// концепция

//2 наследование

class Rectangle {
   constructor(height, width) {
       this.height = height;
       this.width = width;
   }

   calcArea() {
       return this.height * this.width;
   }
}

// Наследование
class ColoredRectangleWithText extends Rectangle {
   constructor(height, width, text, bgColor) {
       // обязательно первой строкой супер
       super(height, width); // вызывает суперконструктор родителя. т.е класса Rectangle
       this.text = text;
       this.bgColor = bgColor;
   }
    showMyProps() {
       console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps(); // Текст: Hello World, цвет: red
console.log(div.calcArea()); // 250
//  // экземпляры класса
//  const square = new Rectangle(10, 10);
//  const long = new Rectangle(20, 100); 

//  console.log(square.calcArea()); // 100
//  console.log(long.calcArea()); // 2000