import './App.css';

function App() {
  return (
    <div class="col-sm-4 col-md-12 col-lg-12">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand px-5 fw-bold" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">All Products</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Popular Items</a></li>
            <li><a class="dropdown-item" href="#">New Arrivals</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex me-5">
        <button  type="button">Cart</button>
        <input type="text" size="1" value="4" id='quantity'></input>
      </form>
    </div>
  </div>
</nav>


<div id='second'>
  <div id='secondin'>
  <h1 class="text-white text-center fw-bold title">Shop in style</h1>
  <h5 class="text-white text-center opacity-50">With this shop hompeage template</h5>
  </div>
</div>


<div id='firstcard' class="px-3">

<div class="container-fluid text-center row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 g-4">
  <div class="col">
    <div class="card">
      <div id='cardhalf'>
      <h2 class="sechalf fw-bold opacity-50">450 X 300</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title fw-bold">Fancy Product</h5>
        <p class="card-text px-2 ">$40.00 - $80.00</p>
        <p>  </p>
        <button type="button" id='add' class="btn btn-outline-dark mx-3 mt-5" onclick="myFunction()">Add to cart</button>
      </div>
    </div>
  </div>
  

  
  <div class="col">
    <div class="card">
      <div id='cardhalf'>
      <h2 class="sechalf fw-bold opacity-50">450 X 300</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title fw-bold">Special Item</h5>
        <p>⭐⭐⭐⭐⭐</p>
        <p class="card-text px-2"><del>$20.00</del> $18.00</p>
        <button type="button" class="btn btn-outline-dark mx-3 mt-4">Add to cart</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <div id='cardhalf'>
      <h2 class="sechalf fw-bold opacity-50">450 X 300</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title fw-bold">Sale Item</h5>
        <p class="card-text px-2"><del>$50.00</del> $25.00</p>
        <button type="button" class="btn btn-outline-dark mx-3 mt-5">Add to cart</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <div id='cardhalf'>
      <h2 class="sechalf fw-bold opacity-50">450 X 300</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title fw-bold">Popular Item</h5>
        <p>⭐⭐⭐⭐⭐</p>
        <p class="card-text px-2">$40.00</p>
        <button type="button" class="btn btn-outline-dark mx-3 mt-4">Add to cart</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <div id='cardhalf'>
      <h2 class="sechalf fw-bold opacity-50">450 X 300</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title fw-bold">Sale Item</h5>
        <p class="card-text px-2"><del>$50.00</del> $25.00</p>
        <button type="button" class="btn btn-outline-dark mx-3 mt-5">Add to cart</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <div id='cardhalf'>
      <h2 class="sechalf fw-bold opacity-50">450 X 300</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title fw-bold">Fancy Product</h5>
        <p class="card-text px-2">$120.00 - $280.00</p>
        <button type="button" class="btn btn-outline-dark mx-3 mt-5">Add to cart</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <div id='cardhalf'>
      <h2 class="sechalf fw-bold opacity-50">450 X 300</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title fw-bold">Special Item</h5>
        <p>⭐⭐⭐⭐⭐</p>
        <p class="card-text px-2"><del>$20.00</del> $18.00</p>
        <button type="button" class="btn btn-outline-dark mx-3 mt-4">Add to cart</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <div id='cardhalf'>
      <h2 class="sechalf fw-bold opacity-50">450 X 300</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title fw-bold">Popular Item</h5>
        <p>⭐⭐⭐⭐⭐</p>
        <p class="card-text px-2">$40.00</p>
        <button type="button" class="btn btn-outline-dark mx-3 mt-4">Add to cart</button>
      </div>
    </div>
  </div>
 


  
</div>
</div>



<div id='btm'>

    <p class="text-white text-center pt-4 fw-bold">Copyright @ Your website 2021</p>
  </div>

    </div>
  );
}





// var valuecount;
// document.querySelector("add").addEventListener("click",function(){
//    valuecount = document.getElementById("quantity").value;
//  valuecount++;
//   document.getElementById("quantity").value=valuecount;
//  })




export default App;
