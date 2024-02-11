class Star {
    constructor(x, y, a) {
        // Where it is now
        this.x = x;
        this.y = y;
        this.a = a;

        // Where it was originally
        this.originX = x;
        this.originY = y;

        // Where it will be next
        this.nextX = x;
        this.nextY = y;
    }

    setDestination(xPercent, yPercent) {
        console.log(`xPercent, yPercent = ${xPercent}, ${yPercent}`)
        this.nextX = Math.floor(this.originX + (this.originX * (xPercent - 0.5)))
        this.nextY = Math.floor(this.originY + (this.originY * (yPercent - 0.5)))
        console.log(`nextX, nextY = ${this.nextX}, ${this.nextY}`)
    }

    // Center is 50% 50%
    // Top left is 0% 0%
    // Bottom right is 100% 100%
    // If (originX, originY) = (300, 150) and (xPercent, yPercent) = (50%, 50%) => (nextX, nextY) = (300, 150)
    
    // 300 + (300 * (0.5 - 0.5)) = 300
    // 300 + (300 * (0.5 - 1.0)) = 150
    // 300 + (300 * (1.0 - 0.5)) = 450

    update() {
        // console.log(`At ${this.x}, ${this.y}`)

        this.x = this.x + Math.floor((this.x - this.nextX) / 5)
        this.y = this.y + Math.floor((this.y - this.nextY) / 5)

        // console.log(`Now at ${this.x}, ${this.y}`)
    }
}

class Starfield {
    constructor(id, numStars) {
        this.element = document.getElementById(id)
        this.ctx = this.element.getContext("2d")
        this.canvasData = this.ctx.getImageData(0,0, this.element.width, this.element.height)
        this.stars = []

        for( let i = 0; i < numStars; i++ ) {
            this.add()
        }

        setInterval(() => {
            this.draw()
        }, 100)

        // addEventListener("mousemove", (event) => {
        //     this.move(
        //         (event.clientX / window.visualViewport.width), 
        //         (event.clientY / window.visualViewport.height)
        //     )
        // })

        setInterval(() => {
            this.move(0.05, 0.05)
        }, 2000)
    }

    add() {
        let x = Math.floor(Math.random(100) * (this.element.width * 1.5))
        let y = Math.floor(Math.random(100) * (this.element.height * 1.5))
        let a = Math.floor(Math.random(100) * 255)

        this.stars.push(new Star(x, y, a))
    }

    draw() {
        console.log("Drawing")
        for( let star of this.stars ) {
            // Undraw or reset the pixel
            var index = (star.x + star.y * this.element.width) * 4;
        
            this.canvasData.data[index + 0] = 0;
            this.canvasData.data[index + 1] = 0;
            this.canvasData.data[index + 2] = 0;
            this.canvasData.data[index + 3] = 0;

            // Move the star
            star.update()

            // Draw
            index = (star.x + star.y * this.element.width) * 4;
        
            this.canvasData.data[index + 0] = 255;
            this.canvasData.data[index + 1] = 255;
            this.canvasData.data[index + 2] = 255;
            this.canvasData.data[index + 3] = star.a;
        }
        this.ctx.putImageData(this.canvasData, 0, 0);
    }

    move(xOffset, yOffset) {
        console.log(`Moving by ${xOffset}, ${yOffset}`)

        for( let star of this.stars ) {
            star.setDestination(xOffset, yOffset)
        }
    }
}

const starfield = new Starfield('sky', 1);