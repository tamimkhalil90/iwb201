products = []

var addToCartButtons = document.querySelectorAll('.add-to-cart');
    var cartNotification = document.getElementById('cart-notification');
    var cartCount = 0 ;
    addToCartButtons.forEach((button) =>{
      button.addEventListener('click', (event)=>{
        addtocart(event);
      }
    );      
  }); 

  function addtocart(event){
    const productRow = event.target.parentElement.parentElement;
    const productName = productRow.querySelector('.product-name').innerHTML;
    const productPrice = productRow.querySelector('.product-price').innerHTML;
    localStorage.setItem('productName', productName );
    localStorage.setItem('productPrice', productPrice);
    name2 = localStorage.getItem('productName');
    price = localStorage.getItem('productPrice'); 
    localStorage.setItem('cartproducts', JSON.stringify([
    {
      "name" :localStorage.getItem('productName'),
      "price" :localStorage.getItem('productPrice')
        }
   ]));
    info = JSON.parse(localStorage.getItem('cartproducts')); 
    products.push(info[0]); 
    const itemcount = products.length ; 
    localStorage.setItem("productscart", JSON.stringify(products));
    cartNotification.innerHTML = 'View Cart (' + itemcount + ' items)';
    }



      // ===============================================================================
      // ===============================================================================
      // ===============================================================================
      // ===============================================================================
      // ===============================================================================
      
      cart = document.getElementById("puthere");
      products2 =  JSON.parse(localStorage.getItem('productscart'));

      const names = new Set();
      const prices = new Set();
      const num = [];
      const nameslist =[];
      const priceslist = [];
      products2.map((item)=>{
        var{name, price}=item;
        num.push(name);
        names.add(name);
        prices.add(price); 
      });
      for(j of names ){nameslist.push(j);}
      for(j of prices ){priceslist.push(j);}
      unique =[];
      for(  i = 0 ; i < nameslist.length ; i++){ 
        b  = {"name": nameslist[i],"price":priceslist[i] };
        unique.push(b);
      }
      unique2=[];
      for(inn of names){
        ddd= 0;
        num.map((item2)=>{
          if(inn === item2 ){
            ddd = ddd + 1 ;
          }
        })
        unique.map((it)=>{
          if(it.name == inn){
            itt = {"name":it.name , "price":it.price, "quantity":ddd};
            unique2.push(itt);
        }
        })
      }
      console.log(unique2);
      sum = 0 ;
      tex = 0 ;
      unique2.map((item)=>{
        sum += parseFloat(item.price)* parseFloat(item.quantity) ;
      });
      tex = sum * 0.05 ;
      totalsum = sum + tex ;
      localStorage.setItem("totalsum",totalsum);
      i = 0;
      const content1 = document.getElementById("first").innerHTML;
      const content2 = document.getElementById("last").innerHTML;
      cart.innerHTML =content1 +
       unique2.map((item)=>{
        i++;
        var{name , price , quantity} = item ;
        total = parseFloat(quantity,10) * parseFloat(price,10) ;
        return (`
        <tr>
        <td>${i}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${quantity}</td>
        <td>${total}</td></tr>` )})+ `\
        <tr><td></td><td></td><td></td><td></td><td></td></tr><tr>\
        <td></td>\
        <td colspan="3">لضريبة %5:</td>\
        <td id="tex">${tex}</td>\
      </tr>
      <tr>
      <td></td>\
      <td colspan="3">المجموع النهائي:</td>\
      <td id="tex">${totalsum}</td>\
      </tr> ` + content2;


  function cansel(){
    localStorage.clear();
    location.reload();
   }


  function followup( ){
    if(document.getElementById('tex').innerHTML != null){
    takefrom = document.getElementById("takeform").innerHTML;
    putform = document.getElementById("putform").innerHTML; 
    document.getElementById("putform").innerHTML = takefrom ;}
    }

  function generateCaptcha( leng){
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var code = '';
    for(var i = 0 ; i<leng ;i++){
    code += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return code ;}

  function showfinalresult(){
    number = document.getElementById("national_number").value;
    console.log(number);
    if(number.length == 11 ){
    totalsum = localStorage.getItem("totalsum");
    console.log(totalsum);
    alert('السعر الاجمالي : ' + totalsum);
}
  }