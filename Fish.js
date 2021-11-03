class Fish{
    constructor(x,y,width,height){
        var options={
             //restitution:
             //friction:
             //density:
        }
        this.body=Bodies.rectangle(160,350,20,20,options)
        this.width=20
        this.height=20
        World.add(world, this.body)
    }

}