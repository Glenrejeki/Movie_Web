// Abstraksi -> menyembunyikan detail implementasi dan hanya menampilkan fungsionalitas penting kepada pengguna

class Shape {
    constructor(name) {
        if (this.constructor === Shape) {
            throw new Error('Cannot instantiate abstract class');
        }
        this.name = name;
    }

    calculateArea() {
        throw new Error('Abstract method must be implemented');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

// --- Penggunaan ---
let myRectangle = new Rectangle(10, 2);
console.log(myRectangle.calculateArea()); // Output: 20
