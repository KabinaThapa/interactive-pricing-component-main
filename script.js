const pageviews=document.getElementById('pageviews')
const price=document.getElementById('price')
const rangeinput=document.getElementById('rangeinput')
const priceMapping={
   '1':{
        price:'$8',
        pageviews:'10K'

    },
    2:{
        price:'$12',
        pageviews:'50K'

    },
    3:{
        price:'$16',
        pageviews:'100K'

    },
    4:{
        price:'$24',
        pageviews:'500K'

    },
    5:{
        price:'$36',
        pageviews:'1M'

    }
}
console.log(priceMapping[rangeinput.value])
function updatePrice(){
    selectValue=priceMapping[rangeinput.value]
    price.innerHTML=selectValue.price
    pageviews.innerHTML=selectValue.pageviews
    }
    updatePrice()
rangeinput.addEventListener('input',updatePrice)