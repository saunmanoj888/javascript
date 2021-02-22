function calculateAge(dateString){
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

console.log(calculateAge("1995-09-06"))

// create function using function expression

let getAge  = function(dateString){
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
};

console.log(getAge("1995-09-06"))