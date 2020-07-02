var products = [
    {
        id: 0,
        title: "The Lost Hero",
        author: "Rick Riordan",
        price: 7840,
        img: "The_Lost_Hero.jpg"
    },
    
    {
        id: 1,
        title: "Mistborn Trilogy",
        author: "Brandon Sanderson",
        price: 5080,
        img: "Mistborn_Trilogy.jpg"
    },
    
    {
        id: 2,
        title: "Harry Dresden Files",
        author: "Jim Butcher",
        price: 4700,
        img: "Storm_Front.jpg"
    },
    
    {
        id: 3,
        title: "Inkheart Trilogy",
        author: "Cornelia Funke",
        price: 5000,
        img: "Inkheart.jpg"
    },
    
    {
        id: 4,
        title: "Six of Crows",
        author: "Leigh Bardugo",
        price: 6000,
        img: "Six_of_Crows.jpg"
    },
    
    {
        id: 5,
        title: "The Raven Cycle",
        author: "Maggie Stiefvater",
        price: 6000,
        img: "The_Raven_Cycle.jpg"
    }
];

var order = [];

function addOrder(index) {
    order.push(products[index]);
    localStorage.setItem('order', JSON.stringify(order));
    console.log(order);
    renderOrder();
}

function renderOrder() {
    orderContainer.empty();
    var total = 0;
    order.forEach(function(order, i){
        orderContainer.append(`<li class="list-order"> ${order.title} - ${order.price}</li>`);
        total = total + order.price;
    });
    $('#price-display').html(`$ ${total}`)
}

function renderProduct() {
        products.forEach(function(product, index) {
        productContainer.append(`
                            <div class="col-4-12">
                            <article class="search-item" id="books">
                                <div class="col-4-12">
                                    <img src="Imagenes/${product.img}">
                                </div>
                                <div class="col-8-12">
                                    <h2>${product.title}</h2>
                                    <p class="monto">$${product.price}</p>
                                    <div>
                                        <input type="button" class="btn -primary" value="Ver detalle">
                                        <input type="button" class="btn -secondary testClass"id="dos" value="Agregar al carrito" data-id="${index}">
                                    </div>
                                </div>
                            </article>
                        </div>
                      `);
    })
    
    $(".testClass").click(function(event){ 
        var indexSelection = $(event.target).data("id");
     addOrder(indexSelection);    
    });  


    
}

$(document).ready(() => {
    productContainer = $("#products-container");
    orderContainer = $("#orders");
    renderProduct();
        
    buyProducts = $('#buyOrder');
    buyProducts.click(function(event){
        console.log('click');
        
         })
    
//Function Search Bar
    
  $("#search-box-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#products-container #books").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});


  

