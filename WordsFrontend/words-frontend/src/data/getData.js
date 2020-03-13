
function getData(){
    let results = [];
    let afterFirstSplit = [];
    let firstSplit = data.split(`,,`);
    for(var line = 0; line < firstSplit.length; line++){
        afterFirstSplit.push(firstSplit[line].split(','));
    }

    for (let index in afterFirstSplit) {
        let isEven = index%2
        if (isEven === 0) {
            let row = afterFirstSplit[index]
            results.push({
                Difficulty: row[0],
                Name: row[1],
                Description: row[2],
            });
        }
    }
    return results;
}
export default getData;

let data = `Difficulty,Name,Description,,Devin,Luke,Scott,Hebah,Bob,ScottEvilTwin,,
Easy,Check equality,Check whether two integers are equal or not,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Even or Odd,Check whether a given number is even or odd,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Positive or Negative,Check whether a given number is positive or negative,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Leap Year,Find whether a given year is a leap year or not,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Legal Age,Check whether a person is the legal drinking age,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Coordinates,Find the quadrant of a given coordinate,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Establish Array,Store elements into an array and print the array,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Find smallest value,Find the smallest value in int array,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Find largest value,Find the largest value in int array,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Sum of Values,Find the sum of all values in an array,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Copy Array Values,Copy values from one array into another and print,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Reverse an Array,Do without array.reverse(),,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Concatinate 2 arrays,One after the other,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Find the index of,Find the index of a value in an array,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Unique Values,Print all the unique values in an array,,TRUE,FALSE,TRUE,TRUE,FALSE,FALSE,,
Easy,Format number,Insert commas in the correct places,,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Easy,Generate int array,Return filled int array of specified size,,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Easy,Fibonacci,Compute the fibonacci seq. to 'n' ,,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Easy,Remove duplicates,Remove duplicates from an array,,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Easy,Average of array,Get the average value from an int array,,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Easy,Find the addends,"Given a list of numbers and a number k, return whether any two numbers from the list add up to k.",,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,,Google
Easy,Check Password,"Some websites impose certain rules for passwords. Write a method that checks whether a string is a valid password. Supposed the password rules are as follows:

- A password must have at least 8 characters
- A password consists of only letters and digits
- A password must contain at least two digits

Write a program that prompts the user to enter a password and diplays ""Valid Password"" if the rules are followed or ""Invalid Password"" otherwise.",,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Medium,Stack,Implement basic stack,,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Medium,Queue,Implement basic queue,,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Medium,Palindrome checker,Check if input is a palidrome,,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Medium,Interweave arrays,Combine 2 arrays so that they alternate,,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Medium,Binary to Decimal,Convert binary input to decimal,,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Medium,Monte Carlo Method,"The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.",,FALSE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Medium,Bubble Sort,,,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Medium,Selection Sort,,,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Medium,Insertion Sort,,,TRUE,FALSE,TRUE,FALSE,FALSE,FALSE,,
Medium,Uniform Probability,"Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.",,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,,
Hard,Merge Sort,,,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,,
Hard,Quick Sort,,,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,,
Hard,Largest number,Combine digits from int[] to be the biggest,,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,,
Hard,Caesar Cipher,Implement a caesar cipher,,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,,
Hard,Frequency,"Given [], return frequency of each item",,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,,
Hard,Briefcase Lock,https://edabit.com/challenge/sWo3y2WgtGDDtRtrB,,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,,
Hard,Frequency Sort,Sort array by frequency of items,,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,,
Hard,Roman Numeral Conv,Convert roman numerals to decimal values,,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,,
Hard,Product of Numbers,"Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.",,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,,Uber
Hard,Missing Positive Integers,"Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.",,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,,Stripe
Hard,Find the number of ways a message can be encoded or decoded,"Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.",,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,,Facebook
Hard,Largest sum of non-adjacent numbers,"Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5]should return 10, since we pick 5 and 5.",,FALSE,FALSE,FALSE,FALSE,FALSE,FALSE,,Airbnb`;
