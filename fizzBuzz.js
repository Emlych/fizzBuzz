function fizzBuzz(maxValue) {
    let accu = '';
    for (let i=1; i<=maxValue; i++) {
        if (i%3 === 0 && i%5 === 0) {
            accu += 'FizzBuzz' + '<br>';
        } else if (i%3 === 0) {
            accu += 'Fizz' + '<br>';
        } else if (i%5 === 0) {
            accu += 'Buzz' + '<br>';
        }
        else {
            accu += i + '<br>';
        }    
    }
    return accu;
}

document.getElementById("value-submit").addEventListener("click", function() {
    let inputVal = document.getElementById("value-field").value;
    //document.getElementById("input-value").innerHTML = inputVal;
    document.getElementById("fizz-buzz").innerHTML = fizzBuzz(inputVal);
});

//document.getElementById("fizz-buzz").innerHTML = fizzBuzz(100);