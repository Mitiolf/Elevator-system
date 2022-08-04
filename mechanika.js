class Elevator {
    constructor() {
        this.floor = 0;
        this.destination = [];
        this.run = function () {
            if (this.destination[0] > this.floor) {
                this.floor++;
            }
            else if (this.destination[0] < this.floor) {
                this.floor--;
            }
            this.destination.map(x => {
                if (x == this.floor) {
                    var pos = this.destination.indexOf(x);
                    this.destination.splice(pos, 1);
                }
            })
        };
    }
};
class ElevatorSystem {
    constructor() {
        this.elevators = []
        this.addElevator = function () {
            var elevator = new Elevator;
            this.elevators.push(elevator);
            $("#elevatorsContainer").append(`<div class=elevator><h2>Elevator ${elevatorSystem.elevators.length}</h2><p>Floor: 0</p><p>Destination: Waiting...</p></div`);

        };
        this.runElevators = function () {
            $("#elevatorsContainer").empty();
            for (var i = 0; i < this.elevators.length; i++) {
                elevatorSystem.elevators[i].run();
                $("#elevatorsContainer").append(`<div class=elevator><h2>Elevator ${i+1}</h2><p>Floor: ${elevatorSystem.elevators[i].floor}</p><p>Destination: ${elevatorSystem.elevators[i].destination.length == 0 ? "Waiting..." : elevatorSystem.elevators[i].destination}</p></div`);}
        };
        this.elevatorsInfo = function (){
            for (var i = 0; i < this.elevators.length; i++) {
                console.log(elevatorSystem.elevators[i])}
        };
        this.callElevator = function (num, floor){
            this.elevators[num-1].destination.push(floor)
            $("#elevatorsContainer").empty();
            for (var i = 0; i < this.elevators.length; i++) {
                $("#elevatorsContainer").append(`<div class=elevator><h2>Elevator ${i+1}</h2><p>Floor: ${elevatorSystem.elevators[i].floor}</p><p>Destination: ${elevatorSystem.elevators[i].destination.length == 0 ? "Waiting..." : elevatorSystem.elevators[i].destination}</p></div`);}
        };
    }
};

var elevatorSystem = new ElevatorSystem();

$(document).ready(function(){
    $("#addElevatorButton").click(function() {elevatorSystem.elevators.length > 15 ? alert("You reached max number of elevators.") : elevatorSystem.addElevator();});
    $("#goButton").click(function(){elevatorSystem.runElevators();});
    $("#setDestinyButton").click(function(){
        var num = $("#eNumber").val();
        var dest = $("#newDestiny").val();
        elevatorSystem.elevators.length < num ? alert("Elevator doesn't exist.") : elevatorSystem.callElevator(num, dest);
    });
});
