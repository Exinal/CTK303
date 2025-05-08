let myCars = [];
        let carAmount = 1000;

        function setup() {
            let cnv = createCanvas(windowWidth, windowHeight);
            cnv.id("canvas1");
            cnv.parent("movecanvas");
            noStroke();
            textSize(40);

            for (let i = 0; i < carAmount; i++) {
                myCars.push(new Car());
                }
        }

        function draw() {
            

            for (let i = 0; i < carAmount; i++) {
                myCars[i].display();
                myCars[i].move();
            }
        }

        class Car {
        // constructor
        constructor() {
            this.x = width / 2 + random(-width / 2, width / 2);
            this.y = 0 - random(0, 100);
            this.r = random(0, 255);
            this.g = random(0, 255);
            this.b = random(0, 255);
            this.o = random(0, 255);
            this.size = random(10, 40);
            this.speed = random(0.1, 5);
            // initialize your attributes here
        }

        // methods

        display() {
            fill(this.r, this.g, this.b, this.o);
            circle(this.x, this.y, this.size);
        }

        move() {
            this.y = this.y + this.speed;
            if (this.y > height + this.size) {
            this.y = 0 - this.size;
            }
            this.o = map(this.y, 0, height, 255, 0);
        }
        }