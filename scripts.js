// JavaScript equivalent code
function processInput() {
    const input = document.getElementById("input").value;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'o' && input[i + 1] === '=') {
            const token = input.substring(i + 2, i + 12);
            const final = "http://fast.wistia.net/embed/iframe/" + token
            document.getElementById("link").innerHTML=final;
            break;
        }
    }

}

// // Test the function with an input string
// const input = prompt("Enter the string:"); // Replace this line with your input source if necessary
// processInput(input