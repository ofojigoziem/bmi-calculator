function calculateBMI(){
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;
    const BMI = weight*height;

    alert(`Your Body Mass Index (BMI) is ${BMI}`);

    return false;
}