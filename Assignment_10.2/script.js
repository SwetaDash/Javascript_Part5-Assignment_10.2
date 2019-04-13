class Airplane {
    constructor(_name, _occupancy, _speed) {  //CONSTRUCTOR
    }

    get Name(){           //GET VALUE FOR NAME  - GETTER
       return this.name;
    }
    
    set Name(_name) {     //VALIDATION FOR NAME  - SETTER
        if (_name == undefined || _name == "") {
            throw new Error("Name cannot be empty or undefined");
        }
        this.name = _name;
    }
    get Occupancy(){         //GET VALUE FOR OCCUPANCY  - GETTER
        return this.occupancy;
    }
        set Occupancy(_occupancy) {      //VALIDATION FOR OCCUPANCY  - SETTER
        if (_occupancy == undefined || _occupancy == "" || _occupancy < 0 || _occupancy > 180) {
            throw new Error("Occupancy cannot be empty or negative and should be less than 180");
        }
        this.occupancy = _occupancy;
    }
    get Speed(){               //GET VALUE FOR SPEED  - GETTER
        return this.speed;
    }
    
    set Speed(_speed) {       //VALIDATION FOR SPEED  - SETTER
        if (_speed == undefined || _speed == "" || _speed < 0 || _speed > 900) {
            throw new Error("Speed cannot be empty or negative and should be less than 900");
        }
        this.speed = _speed;
        
    }
    
    get Status() {      //GET AIRPLANE DETAILS
        console.log(this.name + " with "+ this.occupancy+ " occupancy, is movimg at "+ this.speed+ " km/hr");
    }      

}
let air= new Airplane();  //OBJECT FOR AIRPLANE
air.Name = "Indigo";  //GET VALUE FOR NAME
air.Occupancy=120;  //GET VALUE FOR OCCUPANCY
air.Speed=90;  // GET VALUE FOR SPEED 
console.log(air.Name);  
console.log(air.Occupancy);
console.log(air.Speed);
air.Status;

Airplane.prototype.increaseSpeed = function(is){  //ADD NEW FUNCTION FOR AIRPLANE CLASS TO INCREASE SPEED
    this.Speed = this.speed + is;
    console.log("Increased Speed is "+this.Speed+ "km/hr and is increased by "+ is+ "km/hr");
}

Airplane.prototype.decreaseSpeed = function(ds){  // ADD NEW FUNCTION FOR AIRPLANE CLASS TO DECREASE SPEED
    this.Speed = this.speed - ds;
    console.log("Decreased Speed is "+this.Speed+ "km/hr and is decreased by "+ ds + "km/hr");
}

let air1 = new Airplane(200);  //1ST OBJECT
air1.Name = "Air India";
air1.Occupancy=170;
air1.Speed=200;
console.log("Flight1 Details:\n");
air1.Status;
air1.increaseSpeed(200);   //SPEED INCREASE BY 200
air1.decreaseSpeed(100);  //SPEED DECREASE BY 100


let air2 = new Airplane();  // 2ND OBJECT
air2.Name = "Boeing 777";
air2.Occupancy=180;
air2.Speed=670;
console.log("Flight2 Details:\n");
air2.Status;
air2.increaseSpeed(200); //SPEED INCREASE BY 200
air2.decreaseSpeed(120);  //SPEED DECREASE BY 120

let air3 = new Airplane();  // 3RD OBJECT
air3.Name = "Jet Airways";
air3.Occupancy=150;
air3.Speed=650;
console.log("Flight3 Details:\n");
air3.Status;
air3.increaseSpeed(200);  // SPEED INCREASE BY 200
air3.decreaseSpeed(50);  //SPEED DECREASE BY 50

    


