
var order = [];

function addOrder(products, index) {
    order.push(products[index]);
    localStorage.setItem('order', JSON.stringify(order));
    console.log(order);
    renderOrder();
}

function renderOrder() {
    orderContainer.empty();
    var total = 0;
    order.forEach(function(order, i){
        orderContainer.append(`<li class="list-order"> ${order.title} - $${order.price}<button class="erase">x</button></li>`);
        total = total + order.price;
    });    
    
     $('#price-display').html(`$ ${total}`)
        
    //Botón de Cancelar y borrar todos los contenidos del Carrito de Compras

    $("#cancel").click(function(){
    orderContainer.empty();
    order = [];
    totalOrderPrice.empty();
    localStorage.clear();
    });
    
    //Función para borrar un elemento del carrito
    
    $(".erase").click(function(){
		event.preventDefault();
		var indice = $(event.target).attr('id')
		$(event.target).parent().remove()
		order.splice(indice, 1);
		localStorage.setItem('order', JSON.stringify(order));
        renderOrder()
	});

}


function renderProduct(products) {
        products.forEach(function(product, index) {
        productContainer.append(`
                            <div class="col-4-12" id="container">
                            <article class="search-item" id="books">
                                <div class="col-4-12">
                                <img src="Imagenes/${product.img}">
                                </div>
                                <div class="col-8-12" id="text">
                                <h2 class="titulo-libro">${product.title}</h2>
                                <p class="monto">$${product.price}</p>
                                <div>
                                    <input type="button" class="btn -primary -details" value="Ver detalle" data-id="${index}">
                                    <input type="button" class="btn -secondary testClass" id="dos" value="Agregar al carrito" data-id="${index}">
                                    </div>
                                </div>
                            </article>
                        </div>
                      `);
    })
    
    $(".testClass").click(function(event){ 
        var indexSelection = $(event.target).data("id");
     addOrder(products, indexSelection);    
    });
    
    //Botón Ver Detalles 
    
    $(".-details").click(function(event){ 
        event.preventDefault();
        var results = [];
		var selection = $(event.target).data("id");
        $('#details-container').toggle(renderDetails(products, selection));
    });
    
    //Función para Mostrar Detalles
    
    function renderDetails(products, index){
        detailsContainer.empty();   
        products.forEach(function(product, i) {
            if (product.id == index) {
                detailsContainer.append(`<div class="col-8-12">
                <img src="Imagenes/${product.img}">
                </div>
                <div class="col-8-12">
                <h2>${product.title}</h2>
                <p class="autor">Autor/a: ${product.author}</p>
                <p class="editorial">Editorial: ${product.publisher}</p>
                <p class="cantidad">${product.quantity}</p>`
                )
            }
        })
    }
    
}


$(document).ready(() => {
    //Ajax 
    
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'info.json'
    }).done(function(info){
        renderProduct(info);
    }).fail(function(){
        console.log('error');
    
    });

    
//Variables 
    
    productContainer = $("#products-container");
    orderContainer = $("#orders");
    totalOrderPrice = $("#price-display");
    detailsContainer = $("#details-container")
        
    buyProducts = $('#buyOrder');
    buyProducts.click(function(event){
        console.log('click');
        
         })
    
//Function Search Bar
    
  $("#search-box-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#products-container #container").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});


  

