const pageviews=document.getElementById('pageviews')
const price=document.getElementById('price')
const rangeinput=document.getElementById('rangeinput')
const togglerange=document.getElementById('togglerange')
const priceMapping={
   '1':{
        price:'8',
        pageviews:'10K'

    },
    2:{
        price:'12',
        pageviews:'50K'

    },
    3:{
        price:'16',
        pageviews:'100K'

    },
    4:{
        price:'24',
        pageviews:'500K'

    },
    5:{
        price:'36',
        pageviews:'1M'

    }
}
console.log(priceMapping[rangeinput.value])
function updatePriceandViews(){
    const selectValue=priceMapping[rangeinput.value]
    const yearlybillingValue=togglerange.value==='2'
    const discount=yearlybillingValue? 0.25 * parseFloat(selectValue.price):0
    const discountedPrice=parseFloat(selectValue.price)-discount
    console.log(selectValue)
    price.innerHTML=`$${discountedPrice}`
    pageviews.innerHTML=selectValue.pageviews
    rangeinput.classList.add('dragged')
    }
    updatePriceandViews()
rangeinput.addEventListener('input',updatePriceandViews)
togglerange.addEventListener('input', updatePriceandViews)
