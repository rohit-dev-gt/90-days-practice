//spread op in array
const group1 = ['Rohit','Disha','Komal']
const group2 = ['Richa','Swati','Abhinav']
const combined_group = [...group1,...group2]
console.log(combined_group)

//spread op in object

const personal_details= {name:'Abhinav sharma',age:20}
const professional_details = {isGraduated:true,marks:100}

const profile= {...personal_details,...professional_details}
console.log(profile)

function arraySum(...numbers){
    let total = 0
    for(const num of numbers){
        
        total += num
    }
        
    return total
}

console.log(arraySum(1,23,21,4,5,67))