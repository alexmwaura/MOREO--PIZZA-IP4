$(function () {
    var bodyEl = $('body'),
        navToggleBtn = bodyEl.find('.nav-toggle-btn');

    navToggleBtn.on('click', function () {
        bodyEl.toggleClass('active-nav');

        event.preventDefault();
    });
});
$(document).ready(function () {
    $("#work1").click(function () {
        $(".img-fluid-1").toggle(1000);
        $(".p1").toggle(1000);


    });
    $("#work2").click(function () {
        $(".img-fluid-2").toggle(1000);
        $(".p2").toggle(1000);


    });
    $("#work3").click(function () {
        $(".img-fluid-3").toggle(1000);
        $(".p3").toggle(1000);


    });
    $("#work4").click(function () {
        $(".img-fluid-4").toggle(1000);
        $(".p4").toggle(1000);


    });
    $("#work5").click(function () {
        $(".img-fluid-5").toggle(1000);
        $(".p5").toggle(1000);


    });
    $("#work6").click(function () {
        $(".img-fluid-6").toggle(1000);
        $(".p6").toggle(1000);


    });
    $("#work7").click(function () {
        $(".img-fluid-7").toggle(1000);
        $(".p7").toggle(1000);


    });
    $("#work8").click(function () {
        $(".img-fluid-8").toggle(1000);
        $(".p8").toggle(1000);


    });
    $("#work9").click(function () {
        $(".img-fluid-9").toggle(1000);
        $(".p9").toggle(1000);


    });
    $("#work10").click(function () {
        $(".img-fluid-10").toggle(1000);
        $(".p10").toggle(1000);


    });
    $("#work11").click(function () {
        $(".img-fluid-11").toggle(1000);
        $(".p11").toggle(1000);


    });
    $("#work12").click(function () {
        $(".img-fluid-12").toggle(1000);
        $(".p12").toggle(1000);


    });
    $("#workS1").click(function () {
        $(".img-fluid-S1").toggle(1000);
        $(".pS1").toggle(1000);


    });
    $("#workS2").click(function () {
        $(".img-fluid-S2").toggle(1000);
        $(".pS2").toggle(1000);


    });
    $("#workS3").click(function () {
        $(".img-fluid-S3").toggle(1000);
        $(".pS3").toggle(1000);


    });

});




// $(document).ready(function () {
//     $('form#form').submit(function (event) {
//         event.preventDefault();
//     });


//     $("#pick").click(function () {
//         $("#price").show();
//         $("#order").show();
//         $("#check").show();
//         var sizePrice;
//         var choosenSize = $("input[name='size']:checked").val();
        
//         if (choosenSize === "Small") {
//             sizePrice = 500;
//         }
//         else if (choosenSize === "Medium") {
//             sizePrice = 700;
//         }
//         else if (choosenSize === "Large") {
//             sizePrice = 1000;
//         }
//         else {
//             alert("CHECK SIZE PLEASE!");
//         }


//         var crustPrice;
//         var choosenCrust = $("input[name='crust']:checked").val();

//         if ((choosenCrust === "Crispy") || (choosenCrust === "Stuffed") && (choosenSize === "Small")) {
//             crustPrice = 100;
//         }
//         else if ((choosenCrust === "Crispy") || (choosenCrust === "Stuffed") && (choosenSize === "Medium")) {
//             crustPrice = 150;
//         }
//         else if ((choosenCrust === "Crispy") || (choosenCrust === "Stuffed") && (choosenSize === "Large")) {
//             crustPrice = 200;
//         }
//         else if ((choosenCrust === "Gluten-free") && (choosenSize === "Small")) {
//             crustPrice = 50;
//         } else if ((choosenCrust === "Gluten-free") && (choosenSize === "Medium")) {
//             crustPrice = 100;
//         } else if ((choosenCrust === "Gluten-free") && (choosenSize === "Large")) {
//             crustPrice = 150;
//         }
//         else {
//             alert("CHOOSE CRUST TO CONTINUE WITH ORDER!");
//         }


//         var addToppings = 0;
//         var choosenToppings = $("#toppings option:selected").val();
//         if ((choosenToppings === "Onions") || (choosenToppings === "Peppers") && (choosenSize === "Small")) {
//             addToppings += 20;
//         }
//         else if ((choosenToppings === "Onions") || (choosenToppings === "Peppers") && (choosenSize === "Large") || (choosenSize === "medium")) {
//             addToppings += 30;
//         }
//         else if ((choosenToppings === "Pepperoni") && (choosenSize = "Small")) {
//             addToppings += 50;
//         }
//         else if ((choosenToppings === "Pepperoni") && (choosenSize = "Medium")) {
//             addToppings += 70;
//         }
//         else if ((choosenToppings === "Pepperoni") && (choosenSize = "Large")) {
//             addToppings += 100;
//         }
//         else if ((choosenToppings === "Bacon") && (choosenSize = "Small")) {
//             addToppings += 80;
//         }
//         else if ((choosenToppings === "Bacon") && (choosenSize = "Medium")) {
//             addToppings += 100;
//         }
//         else if ((choosenToppings === "Bacon") && (choosenSize = "Large")) {
//             addToppings += 150;
//         }
//         else if ((choosenToppings === "Barbecue") || (choosenToppings === "taco") && (choosenSize = "Small")) {
//             addToppings += 100;
//         }
//         else if ((choosenToppings === "Barbecue") || (choosenToppings === "taco") && (choosenSize = "Medium")) {
//             addToppings += 150;
//         }
//         else if ((choosenToppings === "Barbecue") || (choosenToppings === "taco") && (choosenSize = "Large")) {
//             addToppings += 200;
//         }
//         else if ((choosenToppings === "Cheese") || (choosenToppings === "Mushrooms") && (choosenSize = "Small")) {
//             addToppings += 80;
//         }
//         else if ((choosenToppings === "Cheese") || (choosenToppings === "Mushrooms") && (choosenSize = "Medium")) {
//             addToppings += 120;
//         }
//         else if ((choosenToppings === "Cheese") || (choosenToppings === "Mushrooms") && (choosenSize = "Large")) {
//             addToppings += 150;
//         }
//         else {
//             alert("CHOOSE TOPPINGS TO CONTINUE WITH ORDER!");
//         }
        



//         $("#check").click(function () {
//             $("#price").hide();
//             $("#order").show();
//             $("#delivery").hide();
//             $("#charges").hide();
//             $("#total").show();
//             var pizzaNumber = parseInt($("#number").val());

//             $("#pizza-amount").hide();

//             var display = $("#number").val() + " " + $("input[name='size']:checked").val() + ", " + $("input[name='crust']:checked").val() + ", " + $("#toppings option:selected").val();
//             $("#details").text(display);
//             var total = (sizePrice + crustPrice + addToppings) * pizzaNumber;
//             var totalPrice = "TOTAL COST: KSH: " + total;
//             $("#total").text(totalPrice);

            
//         });

//     });

//     $("#deliver").click(function () {
//         alert ("ENTER, YOUR NAME!");
//         var person = prompt ("ENTER NAME PLEASE");

//         alert("ENTER, YOUR LOCATION PLEASE!");
//         var location = prompt("INPUT ADDRESS PLEASE!");
//         alert( person  +  "YOUR ORDER HAS BEEN RECIEVED AND WILL BE DELIVERED AT " + location + " ON CHECKOUT");

//         $("#check").show();
//         var sizePrice;
//         var choosenSize = $("input[name='size']:checked").val();
//         if (choosenSize === "Small") {
//             sizePrice = 500;
//         }
//         else if (choosenSize === "Medium") {
//             sizePrice = 700;
//         }
//         else if (choosenSize === "Large") {
//             sizedPrice = 1000;
//         }
//         else {
//             alert("PLEASE SELECT SIZE!");
//         }
//         var crustPrice;
//         var choosenCrust = $("input[name='crust']:checked").val();

//         if ((choosenCrust === "Crispy") || (choosenCrust === "Stuffed") && (choosenSize === "Small")) {
//             crustPrice = 100;
//         }
//         else if ((choosenCrust === "Crispy") || (choosenCrust === "Stuffed") && (choosenSize === "Medium")) {
//             crustPrice = 150;
//         }
//         else if ((choosenCrust === "Crispy") || (choosenCrust === "Stuffed") && (choosenSize === "Large")) {
//             crustPrice = 200;
//         }
//         else if ((choosenCrust === "Gluten-free") && (choosenSize === "Small")) {
//             crustPrice = 50;
//         }
//         else if ((choosenCrust === "Gluten-free") && (choosenSize === "Medium")) {
//             crustPrice = 100;
//         } 
//         else if ((choosenCrust === "Gluten-free") && (choosenSize === "Large")) {
//             crustPrice = 150;
//         }

//         else {
//             alert("CHOOSE CRUST TO CONTINUE WITH ORDER!");
//         }



//         var addToppings = 0;
//         var choosenToppings = $("#toppings option:selected").val();
//         if ((choosenToppings === "Onions") || (choosenToppings === "Peppers") && (choosenSize === "Small")) {
//             addToppings += 20;
//         }
//         else if ((choosenToppings === "Onions") || (choosenToppings === "Peppers") && (choosenSize === "Large") || (choosenSize === "medium")) {
//             addToppings += 30;
//         }
//         else if ((choosenToppings === "Pepperoni") && (choosenSize = "Small")) {
//             addToppings += 50;
//         }
//         else if ((choosenToppings === "Pepperoni") && (choosenSize = "Medium")) {
//             addToppings += 70;
//         }
//         else if ((choosenToppings === "Pepperoni") && (choosenSize = "Large")) {
//             addToppings += 100;
//         }
//         else if ((choosenToppings === "Bacon") && (choosenSize = "Small")) {
//             addToppings += 80;
//         }
//         else if ((choosenToppings === "Bacon") && (choosenSize = "Medium")) {
//             addToppings += 100;
//         }
//         else if ((choosenToppings === "Bacon") && (choosenSize = "Large")) {
//             addToppings += 150;
//         }
//         else if ((choosenToppings === "Barbecue") || (choosenToppings === "taco") && (choosenSize = "Small")) {
//             addToppings += 100;
//         }
//         else if ((choosenToppings === "Barbecue") || (choosenToppings === "taco") && (choosenSize = "Medium")) {
//             addToppings += 150;
//         }
//         else if ((choosenToppings === "Barbecue") || (choosenToppings === "taco") && (choosenSize = "Large")) {
//             addToppings += 200;
//         }
//         else if ((choosenToppings === "Cheese") || (choosenToppings === "Mushrooms") && (choosenSize = "Large")) {
//             addToppings += 80;
//         }
//         else if ((choosenToppings === "Cheese") || (choosenToppings === "Mushrooms") && (choosenSize = "Large")) {
//             addToppings += 120;
//         }
//         else if ((choosenToppings === "Cheese") || (choosenToppings === "Mushrooms") && (choosenSize = "Large")) {
//             addToppings += 150;
//         }
        
        

        
//         else {
//             alert("CHOOSE TOPPINGS TO CONTINUE WITH ORDER!");
//         }






//         $("#check").click(function () {
//             $("#price").show();
//             $("#order").show();
//             var pizzaNumber = parseInt($("#number").val());
//             var price = "KSH " + (sizePrice + crustPrice + addToppings) * pizzaNumber;
//             $("#pizza-amount").text(price);

//             var display = $("#number").val() + " " + $("input[name='size']:checked").val() + " " + $("input[name='crust']:checked").val() + " " + $("#toppings  option:selected").val();
//             $("#details").text(display);
//             $("#delivery").show();
//             $("#charges").show();
//             $("#total").show();
//             var total = (sizePrice + crustPrice + addToppings) * pizzaNumber;
//             var totalPrice = "TOTAL COST: KSH: " + (total + 300);
//             $("#total").text(totalPrice);

            

//         });
//     });
// });

$(document).ready(function (){
    $("#toppings").multiSelect({
        nonSelect: "select toppings",
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        buttonWidth: "400px",

    });

});


function Order(crust, topping, number) {
    this.crust = crust;
    this.topping = topping;
    this.number = number;
  
  }
  
  var sizePrice = {
    large: 1000,
    medium: 700,
    small: 500
  };
  
  var pricing = [];
  
  function grandTotal() {
    var total = 0;
    var i = 0;
  
    for (i = 0; i < pricing.length; i++) {
      total += pricing[i];
    }
    return total;
  }
  
  Order.prototype.crustLargePrice = function (crust) {
    if (crust === "Crispy" || crust === "Stuffed" || crust === "Glutten-free") {
      return crustAmount = 250;
  
    } else {
      alert("Please select the crust");
  
    }
  }
  
  Order.prototype.toppingLargePrice = function (topping) {
    if (topping === "Cheese" || topping === "Mushroom" || topping === "Pepperoni" || topping === "Bacon") {
      return toppingAmount = 200;
  
    } else {
      alert("Please select the toppings you would like");
  
    }
  
  }
  
  Order.prototype.crustMediumPrice = function (crust) {
    if (crust === "Crispy" || crust === "Stuffed" || crust === "Glutten-free") {
      return crustAmount = 200;
  
    } else {
      alert("Please select the crust");
  
    }
  }
  
  Order.prototype.toppingMediumPrice = function (topping) {
    if (topping === " Cheese" || topping === "Mushrooms" || topping === "Pepperoni" || topping === "Bacon") {
      return toppingAmount = 150;
  
    } else {
      alert("Please select the toppings you would like");
  
    }
  
  }
  
  Order.prototype.crustSmallPrice = function (crust) {
    if (crust === "Crispy" || crust === "Stuffed" || crust === "Glutten-free") {
      return crustAmount = 150;
  
    } else {
      alert("Please select the crust");
  
    }
  }
  
  Order.prototype.toppingSmallPrice = function (topping) {
    if (topping === "Cheese" || topping === "Mushrooms" || topping === "Pepperoni" || topping === "Bacon") {
      return toppingAmount = 100;
  
    } else {
      alert("Please select the toppings you would like");
  
    }
  
  }
  
  
  
  
  //User Interface logic
  
  $(document).ready(function () {
  
    $("#pick").click(function (event) {
  
      event.preventDefault();
  
  
      var inputCrust = $("input:[name='size']:checked").val();
      var inputToppings = $("#toppings option:selected").val();
      var inputNumber = parseInt($("input#number").val());
      var newOrder = new Order(inputCrust, inputToppings, inputNumber);
  
      var pizzaPrice = sizePrice.large;
      var crustPrice = newOrder.crustLargePrice(inputCrust);
      var toppingPrice = newOrder.toppingLargePrice(inputToppings);
      var total = (pizzaPrice + crustPrice + toppingPrice) * inputNumber;
      //alert(total); 
  
  
  
      $("ol#newOrdersList").append("<li> <span class='myOrders'>" + " Large Pizza   " + total + "Ksh" + "</span></li>");
  
      pricing.push(total);
  
      $(".myOrders").last().click(function () {
        $("#showOrders").show();
        $("#showOrders h2").text("Large Pizza");
        $("#crustOrdered").text(newOrder.crust);
        $("#toppingsOrdered").text(newOrder.topping);
        $("#numberOrdered").text(newOrder.number);
        $("#totalPrice").text("Kshs  " + total);
      });
  
  
  
    });
  
    //Medium pizza
  
    $("button#mediumBtn").click(function (event) {
  
      event.preventDefault();
  
  
      var inputCrust = $("input:radio[name = crust]:checked").val();
      var inputToppings = $("input:checkbox[name = topping]:checked").val();
      var inputNumber = parseInt($("input#pizzaNumber2").val());
      var newOrder = new Order(inputCrust, inputToppings, inputNumber);
  
      var pizzaPrice = sizePrice.medium;
      var crustPrice = newOrder.crustMediumPrice(inputCrust);
      var toppingPrice = newOrder.toppingMediumPrice(inputToppings);
      var total = (pizzaPrice + crustPrice + toppingPrice) * inputNumber;
      //alert(total); 
  
  
  
      $("ol#newOrdersList").append("<li> <span class='myOrders2'>" + " Medium Pizza   " + total + "Ksh" + "</span></li>");
  
      pricing.push(total);
  
      $(".myOrders2").last().click(function () {
        $("#showOrders").show();
        $("#showOrders h2").text("Medium Pizza");
        $("#crustOrdered").text(newOrder.crust);
        $("#toppingsOrdered").text(newOrder.topping);
        $("#numberOrdered").text(newOrder.number);
        $("#totalPrice").text("Kshs  " + total);
      });
  
  
  
    });
  
    //Small Pizza
    $("button#smallBtn").click(function (event) {
  
      event.preventDefault();
  
  
      var inputCrust = $("input:radio[name = crust]:checked").val();
      var inputToppings = $("input:checkbox[name = topping]:checked").val();
      var inputNumber = parseInt($("input#pizzaNumber3").val());
      var newOrder = new Order(inputCrust, inputToppings, inputNumber);
  
      var pizzaPrice = sizePrice.small;
      var crustPrice = newOrder.crustSmallPrice(inputCrust);
      var toppingPrice = newOrder.toppingSmallPrice(inputToppings);
      var total = (pizzaPrice + crustPrice + toppingPrice) * inputNumber;
      //alert(total); 
  
  
  
      $("ol#newOrdersList").append("<li> <span class='myOrders3'>" + " Small Pizza   " + total + "Ksh" + "</span></li>");
  
      pricing.push(total);
  
      $(".myOrders3").last().click(function () {
        $("#showOrders").show();
        $("#showOrders h2").text("Small Pizza");
        $("#crustOrdered").text(newOrder.crust);
        $("#toppingsOrdered").text(newOrder.topping);
        $("#numberOrdered").text(newOrder.number);
        $("#totalPrice").text("Kshs  " + total);
      });
  
  
  
    });
  
    $("button#delivery").click(function (event) {
      event.preventDefault();
      var confirmation = confirm("You will incur an additional Kshs 300 for delivery ");
  
      if (confirmation === true) {
        var totalAmount = 300 + grandTotal();
        var name = prompt("Enter your name : ");
        var address = prompt("Enter your address : ");
        alert("Thank you " + name + " your order will be delivered at " + address + ".");
        $("#showTotal").show();
        $("#totalPay").text("Kshs " + totalAmount);
  
  
  
      }
      else if (confirmation === false) {
        alert("Please select another option");
  
      }
  
    });
  
    $("button#pickUp").click(function (event) {
      event.preventDefault();
  
      alert("Your order will be ready in 30 minutes.");
      $("#showTotal").show();
      $("#totalPay").text("Kshs " + grandTotal());
  
  
    });
  
  
  
  
  
  
  
  
  
  
  
  
  });
  
