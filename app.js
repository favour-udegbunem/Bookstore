let addBtn = document.getElementById('lone')
let cartItems = [];
let books = [
    {name: 'lord of all realms', id: '001', price: 19.99, isAvailable: false},
    {name: 'God of incarnation', id: '002', price: 29.99, isAvailable: false},
    {name: 'Shadow Slave', id: '003', price:239.19, isAvailable: true},
    {name: 'Lord of the dead', id: '004', price: 12.9, isAvailable: true},
    {name: 'Lucifer', id: '005', price: 39.9, isAvailable: false},
    {name: 'Shadow God', id: '006', price: 9.99, isAvailable: true},
    {name: 'In the mist of men', id: '007', price: 13,  isAvailable: false},
    {name: 'God of hallucination', id: '008', price: 25., isAvailable: false},
    {name: 'Incantation of slaves', id: '009', price: 23.9, isAvailable: true},
    {name: 'Necromancy of sorcery', id: '010', price: 50.19, isAvailable: false},
    {name: 'Apostles of shadow god', id: '011', price: 44.1,isAvailable: true},
    {name: 'Call on me', id: '012', price: 20.3, isAvailable: true},
]

let addButton = document.getElementById('home')
let list = document.getElementById('lister')
let lone = document.getElementById('lone')
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];


addButton.addEventListener('click', (name, id, price, isAvailable) =>{
    let book = {
        name: name,
        id: id,
        price: price,
        isAvailable: isAvailable
    };
    books.push(book);
    for(let i = 0; i < books.length; i++){
    if(books[i].isAvailable !== false){
        alert('The book that you are searching for is available you can read it when you refresh the page press "ENTER" key 2 times for verification')
    break;
} else{
addButton.onclick = function(){
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
}
}
});

let addButton1 = document.getElementById('home1')
let modal1 = document.getElementById("myModal1");
let span1 = document.getElementsByClassName("close1")[0];

addButton1.addEventListener('click', (name, id, price, isAvailable) =>{
    let book = {
        name: name,
        id: id,
        price: price,
        isAvailable: isAvailable
    };
    books.push(book);
    for(let i = 0; i < books.length; i++){
    if(books[i].isAvailable !== false){
        alert('The book that you are searching for is available you can read it when you refresh the page press "ENTER" key 2 times for verification')
    break;
}else{
addButton1.onclick = function(){
    modal1.style.display = "block";
  }
  span1.onclick = function() {
    modal1.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal1.style.display = "none";
    }
  }
}
    }
});

  let addButton2 = document.getElementById('home2')
let modal2 = document.getElementById("myModal2");
let span2 = document.getElementsByClassName("close2")[0];

addButton2.addEventListener('click', (name, id, price, isAvailable) =>{
    let book = {
        name: name,
        id: id,
        price: price,
        isAvailable: isAvailable
    };
    books.push(book);
    for(let i = 0; i < books.length; i++){
    if(books[i].isAvailable !== true){
        alert('You are not permitted to read this book because the book is not available')
    break;
    } else{
addButton2.onclick = function(){
    modal2.style.display = "block";
  }
  span2.onclick = function() {
    modal2.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal2.style.display = "none";
    }
  }
}
    }
});

  let addButton3 = document.getElementById('home3')
  let modal3 = document.getElementById("myModal3");
  let span3 = document.getElementsByClassName("close3")[0];
  
  addButton3.addEventListener('click', (name, id, price, isAvailable) =>{
    let book = {
        name: name,
        id: id,
        price: price,
        isAvailable: isAvailable
    };
    books.push(book);
    for(let i = 0; i < books.length; i++){
    if(books[i].isAvailable !== true){
        alert('You are not permitted to read this book because the book is not available')
    break;
    } else{  
  addButton3.onclick = function(){
      modal3.style.display = "block";
    }
    span3.onclick = function() {
      modal3.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal3.style.display = "none";
      }
    }

    }
}
}); 

    let addButton4 = document.getElementById('home4')
    let modal4 = document.getElementById("myModal4");
    let span4 = document.getElementsByClassName("close4")[0];
    
    addButton4.addEventListener('click', (name, id, price, isAvailable) =>{
        let book = {
            name: name,
            id: id,
            price: price,
            isAvailable: isAvailable
        };
        books.push(book);
        for(let i = 0; i < books.length; i++){
        if(books[i].isAvailable !== false){
            alert('The book that you are searching for is available you can read it when you refresh the page press "ENTER" key 2 times for verification')
        break;
    }else{
    
    addButton4.onclick = function(){
        modal4.style.display = "block";
      }
      span4.onclick = function() {
        modal4.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == modal) {
          modal4.style.display = "none";
        }
    }
      }
    }
    });

      let addButton5 = document.getElementById('home5')
      let modal5 = document.getElementById("myModal5");
      let span5 = document.getElementsByClassName("close5")[0];
      
      addButton5.addEventListener('click', (name, id, price, isAvailable) =>{
        let book = {
            name: name,
            id: id,
            price: price,
            isAvailable: isAvailable
        };
        books.push(book);
        for(let i = 0; i < books.length; i++){
        if(books[i].isAvailable !== false){
            alert('The book that you are searching for is available you can read it when you refresh the page press "ENTER" key 2 times for verification')
        break;
        } else{  
      
      addButton5.onclick = function(){
          modal5.style.display = "block";
        }
        span5.onclick = function() {
          modal5.style.display = "none";
        }
        window.onclick = function(event) {
          if (event.target == modal) {
            modal5.style.display = "none";
          }
        }
    }
}
      });
  
        let addButton6 = document.getElementById('home6')
        let modal6 = document.getElementById("myModal6");
        let span6 = document.getElementsByClassName("close6")[0];
        
        addButton6.addEventListener('click', (name, id, price, isAvailable) =>{
            let book = {
                name: name,
                id: id,
                price: price,
                isAvailable: isAvailable
            };
            books.push(book);
            for(let i = 0; i < books.length; i++){
            if(books[i].isAvailable !== true){
                alert('You are not permitted to read this book because the book is not available')
            break;
            } else{  
        
        addButton6.onclick = function(){
            modal6.style.display = "block";
          }
          span6.onclick = function() {
            modal6.style.display = "none";
          }
          window.onclick = function(event) {
            if (event.target == modal) {
              modal6.style.display = "none";
            }
          }
        }
    }
});
     
          let addButton7 = document.getElementById('home7')
          let modal7 = document.getElementById("myModal7");
          let span7 = document.getElementsByClassName("close7")[0];
          
          addButton7.addEventListener('click', (name, id, price, isAvailable) =>{
            let book = {
                name: name,
                id: id,
                price: price,
                isAvailable: isAvailable
            };
            books.push(book);
            for(let i = 0; i < books.length; i++){
            if(books[i].isAvailable !== false){
                alert('The book that you are searching for is available you can read it when you refresh the page press "ENTER" key 2 times for verification')
            break;
            } else{  
          
          addButton7.onclick = function(){
              modal7.style.display = "block";
            }
            span7.onclick = function() {
              modal7.style.display = "none";
            }
            window.onclick = function(event) {
              if (event.target == modal) {
                modal7.style.display = "none";
              }
            }
        }
    }
});

            let addButton8 = document.getElementById('home8')
            let modal8 = document.getElementById("myModal8");
            let span8 = document.getElementsByClassName("close8")[0];
            
            addButton8.addEventListener('click', (name, id, price, isAvailable) =>{
                let book = {
                    name: name,
                    id: id,
                    price: price,
                    isAvailable: isAvailable
                };
                books.push(book);
                for(let i = 0; i < books.length; i++){
                if(books[i].isAvailable !== false){
                    alert('The book that you are searching for is available you can read it when you refresh the page press "ENTER" key 2 times for verification')
                break;
                } else{  
            
            addButton8.onclick = function(){
                modal8.style.display = "block";
              }
              span8.onclick = function() {
                modal8.style.display = "none";
              }
              window.onclick = function(event) {
                if (event.target == modal) {
                  modal8.style.display = "none";
                }
              }
            }
        }
    });

              let addButton9 = document.getElementById('home9')
              let modal9 = document.getElementById("myModal9");
              let span9 = document.getElementsByClassName("close9")[0];
              
              addButton9.addEventListener('click', (name, id, price, isAvailable) =>{
                let book = {
                    name: name,
                    id: id,
                    price: price,
                    isAvailable: isAvailable
                };
                books.push(book);
                for(let i = 0; i < books.length; i++){
                if(books[i].isAvailable !== true){
                    alert('You are not permitted to read this book because the book is not available')
                break;
                } else{  
              
              addButton9.onclick = function(){
                  modal9.style.display = "block";
                }
                span9.onclick = function() {
                  modal9.style.display = "none";
                }
                window.onclick = function(event) {
                  if (event.target == modal) {
                    modal9.style.display = "none";
                  }
                }
            }
        }
    });

                let addButton10 = document.getElementById('home10')
                let modal10 = document.getElementById("myModal10");
                let span10 = document.getElementsByClassName("close10")[0];
                
                addButton10.addEventListener('click', (name, id, price, isAvailable) =>{
                    let book = {
                        name: name,
                        id: id,
                        price: price,
                        isAvailable: isAvailable
                    };
                    books.push(book);
                    for(let i = 0; i < books.length; i++){
                    if(books[i].isAvailable !== false){
                        alert('The book that you are searching for is available you can read it when you refresh the page press "ENTER" key 2 times for verification')
                    break;
                    } else{  
                
                addButton10.onclick = function(){
                    modal10.style.display = "block";
                  }
                  span10.onclick = function() {
                    modal10.style.display = "none";
                  }
                  window.onclick = function(event) {
                    if (event.target == modal) {
                      modal10.style.display = "none";
                    }
                  }
                }
            }
        });

                  let addButton11 = document.getElementById('home11')
                  let modal11 = document.getElementById("myModal11");
                  let span11 = document.getElementsByClassName("close11")[0];
                  
                  addButton11.addEventListener('click', (name, id, price, isAvailable) =>{
                    let book = {
                        name: name,
                        id: id,
                        price: price,
                        isAvailable: isAvailable
                    };
                    books.push(book);
                    for(let i = 0; i < books.length; i++){
                    if(books[i].isAvailable !== true){
                        alert('You are not permitted to read this book because the book is not available')
                    break;
                    } else{  
                  
                  addButton11.onclick = function(){
                      modal11.style.display = "block";
                    }
                    span11.onclick = function() {
                      modal11.style.display = "none";
                    }
                    window.onclick = function(event) {
                      if (event.target == modal) {
                        modal11.style.display = "none";
                      }
                    }
                }
            }
        });

// else{
//     console.log('\nBook not found\n');
//     break;

// <p> ${books[i].name}`)
        // (`Price: ${books[i].price}`)
        // (Availability: ${books[i].isAvailable}`)
        // </p>` ;}