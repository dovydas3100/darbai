<a href="/" class="navbar-brand">Website</a>  
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>          
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

        <li class="nav-item active">
            <a href="/" class="nav-link">Home <span class="sr-only"></span></a>
        </li>

        <li class="nav-item">
            <a href="/about" class="nav-link">About</a>
        </li>

        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Potatoes </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                
                <?php $products = DB::table('produktai')->get() ?>
                @foreach ($products as $product)
                    <a href = "/{{$product -> produkto_pavadinimas}}" class = "dropdown-item"> {{$product -> produkto_pavadinimas}} </a>
                @endforeach

            </div>
        </li>

        <li class="nav-item">
            <a href="/contact" class="nav-link">Contact</a>
        </li>

    </ul>

    <form action="#" class="navbar-right form-inline">
        <div class="form-group">
            <input type="text" placeholder="Name" class="form-control">
            <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
            <ul class="navbar-nav navbar-right">
                <li class="nav-item">
                    <a href="#" class="nav-link dark"><img src="./glyphicons_free/glyphicons/png/glyphicons-387-log-in.png"></img></a>
                </li>
            </ul>
        </div>
    </form>

</div>
