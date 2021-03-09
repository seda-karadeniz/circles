class Circle {
    constructor(animation) {
        this.mouse = animation.mouse;
        this.ctx = animation.ctx;
        this.canvas = animation.canvas;
        this.radius = 5 + Math.random() * 6;
        this.position = {
            x: this.radius + Math.floor(Math.random() * (this.canvas.width - (2 * this.radius))),
            y: this.radius + Math.floor(Math.random() * (this.canvas.height - (2 * this.radius)))
        };
        this.speed = {
            x: (-2 + Math.random() * 4),
            y: (-2 + Math.random() * 4)
        };
        this.minRadius = this.radius;
        //this.maxRadius = this.radius * 3;
        this.color = Circle.colors.sort(() => 0.5 - Math.random())[0];
        //this.update();
    }
    draw() {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
    update() {
        //checking edges
        if (this.position.y + this.radius > this.canvas.height || this.position.y - this.radius < 0) {
            this.speed.y = -this.speed.y
        }
        if (this.position.x + this.radius > this.canvas.width || this.position.x - this.radius < 0) {
            this.speed.x = -this.speed.x
        }
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        // interact with the mouse
        if (this.position.x >= this.mouse.x - this.mouse.zoneSize/2 &&
            this.position.x <= this.mouse.x + this.mouse.zoneSize/2 &&
            this.position.y >= this.mouse.y - this.mouse.zoneSize/2 &&
            this.position.y <= this.mouse.y + this.mouse.zoneSize/2) {
            if(this.radius < Circle.maxRadius){
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius){
            this.radius -= 1
        }
        this.draw();
    }
    // static colors = ['#a77f8b', '#8b7bcf', '#7bbe72', '#d4a65d', '#D6384F']
    static get colors() {
        return ['#a77f8b', '#8b7bcf', '#7bbe72', '#d4a65d', '#D6384F'];
    }
    static get maxRadius(){
        return 30
    }
}
export default Circle