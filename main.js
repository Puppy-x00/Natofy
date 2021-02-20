// Variables
let dict = {
    'a' : 'Alpha',
    'b' : 'Bravo',
    'c' : 'Charlie',
    'd' : 'Delta',
    'e' : 'Echo',
    'f' : 'Foxtrot',
    'g' : 'Golf',
    'h' : 'Hotel',
    'i' : 'India',
    'j' : 'Juliet',
    'k' : 'Kilo',
    'l' : 'Lima',
    'm' : 'Mike',
    'n' : 'November',
    'o' : 'Oscar',
    'p' : 'Papa',
    'q' : 'Quebec',
    'r' : 'Romeo',
    's' : 'Sierra',
    't' : 'Tango',
    'u' : 'Uniform',
    'v' : 'Victor',
    'w' : 'Water',
    'x' : 'Xray',
    'y' : 'Yankee',
    'z' : 'Zebra'
};

//URL
var queryString;

// UI Variables
let inputContainer = document.querySelector('#input-container');
let inputForm = document.querySelector('#input-form');
let inputAlphabets = document.querySelector('#input-alphabets');
let resetBtn = document.querySelector('#reset-btn');
let result = document.querySelector('#result');

//Processing Path Params
document.addEventListener('DOMContentLoaded',function(){
    queryString = window.location.href;
    queryString = queryString.split(".com/");
    if(queryString[1] != undefined){
        queryString = queryString[1].replace("/", "");
        inputAlphabets.value = queryString;
    }
    processResult();
});


//Loading all event Listeners
(function loadAllEventListeners(){
    inputAlphabets.addEventListener('keyup', processResult);
    resetBtn.addEventListener('click', resetInput);
})();


function processResult(e){
    

    let processedResult = '';
    let inputArray = inputAlphabets.value.toLowerCase().split('');


    if(inputArray !== []){
        inputArray.forEach(function(alphabet){
            if (dict[alphabet]) {
                processedResult += `${dict[alphabet]} - `;                
            }
            else {
                processedResult += ` ${alphabet}  - `;
            }
        });
        processedResult = processedResult.substring(0, (processedResult.length)-3);
    }
    
    result.textContent = processedResult;
    
}

function resetInput(e){
    inputAlphabets.value = '';
    result.textContent = '';
    e.preventDefault();
}
