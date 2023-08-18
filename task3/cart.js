const product = [
    {
        id: 0,
        image: '1.webp',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: '12.png',
        title: 'Iphone12',
        price: 170,
    },
    {
        id: 0,
        image: '3.jpg',
        title: 'iphone13',
        price: 200,
    },
    {
        id: 0,
        image: '4.jpg',
        title: 'Samsung S22 Ultra',
        price: 185,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
        <div class='img-box'>
            <img class="images" src=${image}></img>
        </div>
    <div class='button'>
    <p>${title}</p>
    <h2>$ ${price}.00</h2>` +
        "<button onclick= 'addtocart(" + (i++) + ")'>add to cart</button>" +

        `</div>
   </div>`
    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart()
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML = cart.length
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items)=> 
        {
            var { image, title, price } = items;
            total=total+price
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return (
                `<div class='cart-item'
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++)+")'></i></div>"
            );
        }).join('')
    }
}
