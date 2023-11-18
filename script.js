const data=[{name:"john", age:24,profession:"developer"},
{name:"jane", age:27,profession:"admin"},];
//1. Print Developers
function printDeveloper(){
    const developers=data.filter((person)=>person.profession === "developer");
    console.log("Developers:", developers);
}
//2. Add data
function addData() {
    const newName = prompt("Enter the name:");
    const newAge = parseInt(prompt("Enter the age:"));
    const newProfession = prompt("Enter the profession:");
  
    // Check if inputs are valid
    if (!newName || isNaN(newAge) || !newProfession) {
      console.log("Invalid input. Please provide valid data.");
      return;
    }
  
    const newData = { name: newName, age: newAge, profession: newProfession };
    data.push(newData);
    console.log("Data after adding:", data);
  }
  
3// Remove Admins
function removeAdmin(){
    const newData=data.filter(
      (person) => person.profession !== "admin");    
    console.log("Data after removing admins:", newData);
}
//4. Concatenated Array
function concatenateArray(){
    const additionalData=[
        {name:"Lucifer",age:22, profession:"developer"},
        {name:"arvind", age:20, professsion:"designer"},
    ];
    const concatenatedArray=data.concat(additionalData);
    console.log("Concatenated Array:", concatenatedArray);
}
//5. Average Age
function averageAge(){
    const totalAge = data.reduce((acc,person) => acc+ person.age, 0);
    const avgAge = totalAge/data.length;
    console.log("Average Age:", avgAge);
}
//6. Age Check
function checkAgeAbove25(){
    const above25= data.every(
        (person) => person.age > 25
    );
    console.log("All ages above 25:", above25);
}
//7. Unique Professions
function uniqueProfessions(){
    const professions = data.map(
        (person) => person.professions
    );
    const uniqueProfessions = [...new Set(professions)];
    console.log("Unique Professionals:", uniqueProfessions);
 }
// 8. Sort by Age
function sortByAge(){
     const sortedData = [...data].sort((a, b) =>a.age - b.age);
     console.log("Sorted By Age:",sortedData);
}
// 9. Update Profession 
function updateJohnsProfession(){
    const updateData = data.map(
        (person) => person.name === "john" ? {...person, profession:"designer"} : person );
    console.log("Data after updating John's profession:", updateData);
}
// 10. Profession Count
function getTotalProfessions() {
    const professionCount = data.reduce((acc, person) => {
      acc[person.profession] = (acc[person.profession] || 0) + 1;
      return acc;
    }, {});
    console.log("Profession Count:", professionCount);
  }