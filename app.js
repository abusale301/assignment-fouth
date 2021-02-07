fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
.then(res=> res.json())
.then(data=>foodItems(data.meals));


const foodItems = foodName =>{
  const foodiesDiv = document.getElementById('foodies');
    for(let i=0; i<foodName.length; i++){
        const foods = foodName[i];
        const foodDiv=document.createElement('div');
        foodDiv.className='foods';
        const foodInfo=`
        <h3 class="food-name">${foods.strIngredient}</h3>
        <p>Ingredients: ${foods.strType}</p>
        <p>Ingredients: ${foods.idIngredient}</p>
      
        <button onclick="foodDisplayDetails('${foods.strCategory}')" >Details</button>
        `
        foodDiv.innerHTML=foodInfo;
        foodiesDiv.appendChild(foodDiv);
    }
    
}
const foodDisplayDetails = name => {
   const url= `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
    fetch(url)
    .then(res=> res.json())
    .then (data => foodInformation(data[0]));

}
const foodInformation = foods => {
    console.log(foods);
    const foodDiv = document.getElementById('foodDetails');
    foodDiv.innerHTML=`
    <p>ingredients: ${foods.strIngredient}</p>
    <p>ingredients: ${foods.strIngredient}</p>
    
    `

}