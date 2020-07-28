//object literal for the pet salon (one)
// name, phone number, address (street,number1) --> name:"", 
const salon={
    name: "Spaw Day Pet Salon",
    phone: "(719) 328-9087",
    email: "info@spawday.com",
    copyright: "All copyrights reserved 2020 &copy; Britley Desir",
    address:{
        street: "N. Lincoln Way",
        cityStateZip: "Fountain, CO 80817",
        number: "356",
    },
    counter:function(){
        // alert("Your pet has been registered!")
    },
    pets:[]
}

//object destructoring
let {name, phone, email, address:{street, cityStateZip, number}, counter, pets} = salon;
document.getElementById("footer-info").innerHTML=`
    <p class="text-center"> ${name} <br> ${number} ${street} ${cityStateZip} <br> ${email} <br> ${phone} <br> All copyrights reserved 2020 &copy; Spaw Day <br> <a href="http://instagram.com"><img class="social" src="/iconfinder_12_5310124.svg" alt="instagram logo"></a>
    <a href="http://facebook.com"><img class="social" src="/iconfinder_1_5310113.svg" alt="facebook logo"></a>
    <a href="http://tumblr.com"><img class="social" src="/iconfinder_37_5310144 (1).svg" alt="tumblr logo"></a>
    <a href="http://twitter.com"><img class="social" src="/iconfinder_2_5310114.svg" alt="twitter logo"></a>
    <a href="http://youtube.com"><img class="social" src="/iconfinder_3_5310115.svg" alt="youtube logo"></a></p>
    
    


`;

//console.log(pets);

//object constructor for the perts (multiple)
//name, age, breed, gender, service, ownerName, contactPhone
var petId=0; //starting at 0 (the first array item)
class Pet{
    constructor(date, time, name, age, breed, weight, grooming, spaws, ownerName, contactPhone, email){
        this.date=date;
        this.time=time;
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.weight=weight;
        this.grooming=grooming;
        this.spaws=spaws;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.email=email
        this.id=petId;
        petId+=1; //increasing the id by one to delete it
    }
}

//create two pets
const puffy = new Pet("07/07/2021", "8:00 AM", "Puffy", 9, "Doberman Pinscher", 140, "Luxury Groom", "Shoo Fly", "Brittany Resport", "(719) 876-9065", "brittany@gmail.com");
// register(puffy);
pets.push(puffy);

const benji = new Pet("06/22/2021", "9:00 AM", "Benji", 9, "German Shepherd", 125, "Simple Groom", "Pearly Whites", "Dave Polack", "(708) 635-0971", "dave@gmail.com");
// register(benji);
pets.push(benji);

//getting the values from the html inputs
var txtDate=document.getElementById('petDate');
var txtTime=document.getElementById('petTime');
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtBreed=document.getElementById('petBreed');
var txtWeight=document.getElementById('petWeight');
var txtGrooming=document.getElementById('petGrooming');
var txtSpaws=document.getElementById('petSpaws');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('contactPhone');
var txtEmail=document.getElementById('contactEmail');



//register function

function register(){

    const thePet = new Pet(txtDate.value, txtTime.value, txtName.value, txtAge.value, txtBreed.value, txtWeight.value, txtGrooming.value, txtSpaws.value, txtOwner.value, txtPhone.value, txtEmail.value);
    console.log(thePet);
    //push the pets to the array
    pets.push(thePet);
    console.log(pets);

    // //call the counter function
    // counter();
    clear();
    //display on the console

    console.log("Register function");

    //display on the HTML the pets
    
    // displayList(thePet);
    displayTable(thePet);
}



function clear(){
    txtDate.value="";
    txtTime.value="";
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtWeight.value="";
    txtGrooming.value="";
    txtSpaws.value="";
    txtOwner.value="";
    txtPhone.value="";
    txtEmail.value="";
}

function status(){
    // alert("Registered Pets: " +  pets.length);
    // console.log("Registered Pets: " + pets.length);
    
     //console.log(pets[0].name);

//travel the array to display all the pets' name

for (i = 0; i < pets.length; i++) {
    console.log(pets[i].name);
}

}

// status();

function displayList(aPet){
    //select the HTML Element petList
    var list = document.getElementById('petList');

    //create the li code for the pet
    var li=`
    
    <li id="${aPet.id}"> Name: ${aPet.name}, Age: ${aPet.age}, Breed: ${aPet.breed}, Gender: ${aPet.weight}, Grooming Package: ${aPet.grooming}, Owner: ${aPet.ownerName}, Phone: ${aPet.contactPhone} <button onclick="deletePet(${aPet.id});"> Delete Pet </button> </li>


    `; 
    
    list.innerHTML+=li;
}  


    //insert li in the petList
   // list.appendChild(li);
   



// displayList(puffy);
// displayList(benji);


function displayTable(aPet){
    var table = document.getElementById('petTable');

    var td=`
    <tr id=${aPet.id}>
        <td>${aPet.date}</td>
        <td>${aPet.time}</td>
        <td>${aPet.name}</td>
        <td>${aPet.age}</td>
        <td>${aPet.breed}</td>
        <td>${aPet.weight}</td>
        <td>${aPet.grooming}</td>
        <td>${aPet.spaws}</td>
        <td>${aPet.ownerName}</td>
        <td>${aPet.contactPhone}</td>
        <td>${aPet.email}</td>
        <td><button class="delete" onclick="deletePet(${aPet.id});"> Cancel </button></td>
    </tr>

    `; 
    
    table.innerHTML+=td;

}

displayTable(puffy);
displayTable(benji);

function deletePet(petId){
    console.log("Deleted a pet" + (petId));

    //add an id to the tr/li and add a delete button
    var indexDelete;
    var td = document.getElementById(petId);

    //search the pet (travel array to find the pet)

    for(var i=0; i<pets.length; i++){
        var selectedId = pets[i].id;
        if(selectedId===petId){
            indexDelete=i;
        }
    }

    //delete from array splice()
    pets.splice(indexDelete,1);

    //delete from the html (remove)
    td.remove();
}

function search(){
    var searching=document.getElementById("searchPet").value;
    console.log(searching);

    for(var i=0; i < pets.length; i++){
        var foundPet=pets[i];
        if(foundPet.name.toLowerCase()==searching.toLowerCase()){
            //do something to highlight the result if found on the table(border, background)
            //use the id setAttribute('class/name','')
            //add css to input and to the table (bootstrap)
            console.log("Found pet.");
        }
        else{
            console.log("Pet hasn't been registered.");
        }
    }

    
}

