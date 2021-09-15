function isPalindrome(str){
    const len = string.length;
        for(let i=0;i<len;i++)
        {
            if(string[i] !== string[len-1-i])
            {
                alert("it is not palindrome");
            }

        }
        alert("it is palindrome")
}
const string = prompt("Enter a string or number: ")

const result = isPalindrome(string);
console.log(result)