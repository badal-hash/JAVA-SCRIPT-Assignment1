//1. Store students details using variables
// let name ="badal kumar"
// let rollno =17;
// let department ='CSE';
// let marks =[78,85,62,91,34]

//2. Store the five subject in an array
// let marks = [80,74,75,77,81]
// console.log(marks);

//3. write a function to calculate total marks
/*function calculateTotal(marks){
    let total = 0;
    for(let i =0; i< marks.length; i++){
        total = total + marks[i];
        
    }
    return total;
}
console.log(calculateTotal([70,80,65,55,70]));*/

//4. write a function to calculate percentage

// function calculatePercentage(marks){
//     let total = calculatetotal(marks);
//     let percentage =(total /
//         (marks.length * 100)) * 100;
//     return percentage;

// }

// )); console.log(calculatePercentage([60,65,70,75,50]

//5. write a function findHighest(marks)to find the highest mark.

// function findHighest(marks){
//     return Math.max(...marks);
// }
// console.log(findHighest([78,65,85,80,77]));

//6. write a function to find the lowest marks

// function findLowest(marks){
//      return Math.min(...marks);
//  }
//  console.log(findLowest([78,65,85,80,77]));

//7. count subjects with marks greater than or equal to 40

// function countPassed(marks) {
//     let count = 0;

//     for (let i = 0; i < marks.length; i++) {
//         if (marks[i] >= 40) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countPassed([78, 85, 62, 91, 34]));

//8.convert the student's name to uppercase and display the number of characters in the name

// let name = "badal Kumar";

// console.log(name.toUpperCase());
// console.log(name.length);

//9.Display the final report with the student's details,total,percentage,highestmark,lowest marks,and number of subject passed

// let name = "badal Kumar";
// let rollNo = 17;
// let department = "CSE";
// let marks = [78, 85, 62, 91, 34];

// function calculatePercentage(marks) {
//     return (calculateTotal(marks) / (marks.length * 100)) * 100;
// }

// function findHighest(marks) {
//     return Math.max(...marks);
// }

// function findLowest(marks) {
//     return Math.min(...marks);
// }

// function countPassed(marks) {
//     let count = 0;

//     for (let i = 0; i < marks.length; i++) {
//         if (marks[i] >= 40) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log("Student: " + name.toUpperCase());
// console.log("Roll Number: " + rollNo);
// console.log("Department: " + department);
// console.log("Total Marks: " + calculateTotal(marks));
// console.log("Percentage: " + calculatePercentage(marks).toFixed(0) + "%");
// console.log("Highest Marks: " + findHighest(marks));
// console.log("Lowest Marks: " + findLowest(marks));
// console.log("Subjects Passed: " + countPassed(marks));

//Bonus challenge:

// function getPerformance(percentage) {
//     if (percentage >= 80) {
//         return "Excellent";
//     } else if (percentage >= 60) {
//         return "Good";
//     } else if (percentage >= 40) {
//         return "Average";
//     } else {
//         return "Needs Improvement";
//     }
// }

// console.log(getPerformance(70));








