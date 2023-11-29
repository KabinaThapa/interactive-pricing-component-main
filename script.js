const pageviews=document.getElementById('pageviews')
const price=document.getElementById('price')
const rangeinput=document.getElementById('rangeinput')
price.innerHTML=rangeinput.value
rangeinput.addEventListener('input', function(){
    price.innerHTML=rangeinput.value
})