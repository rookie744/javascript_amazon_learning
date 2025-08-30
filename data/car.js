class Car {
    #brand;
    #model;
    speed = 0;
    isTruncOpen;
    constructor(carkey)
    {
        this.brand = carkey.brand;
        this.model = carkey.model;
    }
    displayinfo ()
    {
        console.log(`${this.brand} ${this.model} , Speed : ${this.speed}`)
    }
    go()
    {
        if (this.speed < 200)
            this.speed += 5;
    }
    break()
    {
        if (this.speed > 0)
            this.speed -= 5;
    }
    openTrunc ()
    {
        this.isTruncOpen = true;
    }
    closeTrunc ()
    {
        this.isTruncOpen = false;
    }
};

class RaceCar extends Car{
    accleration;
    constructor(carkey)
    {
        super(carkey);
        this.accleration = carkey.accleration;
    }
    go()
    {
        if (this.speed < 300)
            this.speed += this.accleration;
    }
    openTrunc ()
    {
        this.isTruncOpen = false;
    }
    closeTrunc ()
    {
        this.isTruncOpen = false;
    }
}

// const Car1 = new Car();
const Cardetails = [{
    brand : 'Toyato',
    model :'Etios'
},
{
    brand : 'Tesla',
    model : 'Model3' 
},
{
    brand : 'Mclaren',
    model : 'F1',
    accleration : 20
}].map((car) => 
    car.accleration ?  new RaceCar(car) : new Car(car));

// console.log(Cardetails);

console.log(Cardetails.forEach((car) => 
{
    console.log(`car ${car.model} started ... `)
    for (i=0 ; i < 20 ; i++)
    {
        if (Math.random() > 0.5)
        {
            car.openTrunc();
        }
        else
        {
            car.closeTrunc();
        }
        if (Math.random() < 0.5)
        {
            car.go();
            car.displayinfo();
        }
        else
        {
            car.break();
            car.displayinfo();
        }
        if (car.isTruncOpen)
        {
            break;
        }
    }

    console.log(`Final speed of ${car.model} ${car.speed} ${car.isTruncOpen ? `Trunk was open car stopped` : ``}`);
}));