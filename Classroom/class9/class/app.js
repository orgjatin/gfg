
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    static calculateDistance(p1,p2){
        return Math.hypot((p2.y-p1.y),(p2.x-p1.x));
    }
}

const p1 = new Point(3,4);
const p2 = new Point(5,7);