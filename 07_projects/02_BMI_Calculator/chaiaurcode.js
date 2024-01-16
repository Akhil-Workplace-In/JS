const form = document.querySelector('form');
//this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  console.log('height: ', height);
  const weight = parseInt(document.querySelector('#weight').value);
  console.log('weight: ', weight);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi, height, weight);
    
    if(bmi > 18.6 && bmi < 24.9){
        results.innerHTML = `<span>${bmi}</span><br><span>You are Under Normal Range</span>`
    }
    else if(bmi < 18.6){
        results.innerHTML = `<span>${bmi}</span><br><span>You are Under weight</span>`
    }else if(bmi > 24.9){
        results.innerHTML = `<span>${bmi}</span><br><span>You are Over weight</span>`
    }else {
    results.innerHTML = `<span>${bmi}</span>`;
    }
     }
});
