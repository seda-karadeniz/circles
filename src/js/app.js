import Circle from "./Circle";

const animation = {
    canvas: document.querySelector('canvas'),
    circles: [],
    circlesCount: 10,
    ctx: null,
    mouse  :{
        x : undefined,
        y : undefined,
        zoneSize : 50
    },
    init() {
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        for (let i = 0; i < this.circlesCount; i++) {
            this.circles.push(new Circle(animation));
        }
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
        window.addEventListener('mousemove', event => {
            this.mouse.x = event.x;
            this.mouse.y = event.y;
        })
        this.animate();
    },
    animate(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.circles.forEach(circle=>{
            circle.update()
        })
        window.requestAnimationFrame(() => {
            this.animate();
        })
    }
}
animation.init();