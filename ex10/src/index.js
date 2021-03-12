function main() {

    var myFirstName;
    var myLastName;;
    var myHomeTown;

    myFirstName = "Amir";
    myLastName = "Muharemović";
    myHomeTown = "Sarajevo";

    return {
        myFirstName,
        myLastName,
        myHomeTown,
    };


}

console.log(main());
module.exports = main;