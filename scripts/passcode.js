document.addEventListener("DOMContentLoaded", function() {
    function appendNumber(num) {
        let input = document.getElementById("passcode");
        if (input.value.length < 4) {
            input.value += num;
        }
    }
    
    function clearPasscode() {
        document.getElementById("passcode").value = "";
    }

    function checkPasscode() {
        const correctPasscode = "4224";
        const enteredPasscode = document.getElementById("passcode").value;
        
        if (enteredPasscode === correctPasscode) {
            window.location.href = "yes.html";
        } else {
            document.getElementById("error-message").style.display = "block";
        }
    }
    
    window.appendNumber = appendNumber;
    window.clearPasscode = clearPasscode;
    window.checkPasscode = checkPasscode;
});
