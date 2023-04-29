function buyNow(){
    document.getElementById('box1').style.display = 'none';
    document.getElementById('box2').style.display = 'flex';
    document.getElementById('box3').style.display = 'flex';
}
function checkOut(){
    document.getElementById('box3').style.display = 'none';
    document.getElementById('box2').style.display = 'none';
    document.getElementById('box4').style.display = 'flex';
    document.getElementById('top').style.display = 'flex';
}

let quantity = 0;

function addQuantity(){
    quantity = quantity + 1;
    document.getElementById('quantity-tag').innerHTML = quantity;
    if(quantity > 10){
        alert("Limit exceeded! Must be 10 pieces below!");
        document.getElementById('quantity-tag').innerHTML = 1;
       
    }
}

function subQuantity(){
    quantity = quantity - 1;
    document.getElementById('quantity-tag').innerHTML = quantity;

    if (quantity < 1){
        alert("Must buy atleast 1 product!");
        document.getElementById('quantity-tag').innerHTML = 1;
        return;
    }
}

let helmet = 3500;
let qty = 1;
let ship_fee = 50;
var quan = document.getElementById('quantity-tag');

var total = helmet * quan;