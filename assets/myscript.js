console.log("hello");
let launchButton = document.querySelector('.button-launch');
let cTrue;
let rTrue;

function inputPassiv() {
    let x, i;
    x = document.querySelectorAll("input[type='range'], input[type='checkbox'], .button-launch");
    for (i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }
}

inputPassiv();

let passButton = document.getElementById("buttonPass")

passButton.addEventListener('click', function(){
    let keyPass = "TrustNo1"
    let passWord = document.querySelector("input[type='password']").value;
    console.log(passWord)

    if (passWord === keyPass ) {
            let x, i;
            x = document.querySelectorAll("input[type='range'], input[type='checkbox']");
            for (i = 0; i < x.length; i++) {
                x[i].disabled = false;
            }

            let y, n;
            y = document.querySelectorAll("input[type='password'], #buttonPass");
            for (n = 0; n < y.length; n++) {
                y[n].disabled = true;
            }

        } else {
            inputPassiv();

    }
});

function rangeTrue() {

let checkRange = document.querySelectorAll("input[type='range']"), y;
let arrayRange = [];
    for (y = 0; y < checkRange.length; ++y) {

        checkRange[y].onchange = function() {

        arrayRange =
            Array.from(checkRange) // Convert range to an array to use filter and map.
               .filter(arrayRange => arrayRange.value == 50); // Use Array.filter to remove unchecked checkboxes.
                console.log(arrayRange)

              if (arrayRange.length == 5 ) {
                  rTrue = true
                  switchButton()
                } else {
                  launchButton.classList.remove("launchReady")
                  launchButton.disabled = true;
              }
        }
    }
}

rangeTrue()

function checkTrue() {

    let checkButton = document.querySelectorAll("input[type='checkbox']"), i;
    let arrayCheckbox = [];
    for (i = 0; i < checkButton.length; ++i) {

        checkButton[i].onchange = function() {

                arrayCheckbox =
                    Array.from(checkButton) // Convert checkboxes to an array to use filter and map.
                        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
                        .map(i => i.value) // Use Array.map to extract only the checkbox va

                        console.log(arrayCheckbox)

                if (arrayCheckbox.length == 6) {
                    cTrue = true
                    switchButton()
                } else {
                    launchButton.classList.remove("launchReady");
                    launchButton.disabled = true;
                }
        }
    }
}

checkTrue()

function switchButton() {
    if ( cTrue == true && rTrue == true) {
        launchButton.disabled = false;
        launchButton.classList.add("launchReady")
    }
}


let moveRocket = [
    {
        transform: 'translate(0, -50px) rotate(15deg)',
    },
     {
          transform: 'translate(800px, -400px) rotate(65deg) scale(0.7)',
      },
      {
          transform: 'translate(1800px, -1400px) rotate(65deg) scale(0.3)',
      }
];

let rocket = document.querySelector('.rocket');
launchButton.addEventListener('click', function () {
    rocket.animate(moveRocket, {
            duration: 2500,
            iterations: 1,
            fill: 'forwards'
        });
    });
