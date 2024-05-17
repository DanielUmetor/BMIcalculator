function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerText = "Please enter valid height and weight.";
        return;
    }
    
    let bmi = weight / ((height / 100) * (height / 100));
    document.getElementById('result').innerText = `Your BMI is: ${bmi.toFixed(2)}`;
}