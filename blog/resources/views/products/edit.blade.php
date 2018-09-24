@extends('main')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <h1>Keisti {{$product -> gamintojo_pavadinimas}}
                {{$product -> raiska}}
                {{$product -> skersmuo}} 
                {{$product -> kaina}}:
            </h1>
            <hr>
            <form action="{{ route("$name.update", $product->id) }}" method = "POST">
              <div class="form-group">
                  <label for="Body">Iveskite naują pavadinimą</label>
                  <input type="text" class="form-control" name="name">

                  <label for="Body">Iveskite naują raišką</label>
                  <input class="form-control" name="rezolution"></input>

                  <label for="Body">Iveskite naują istrižainę</label>
                  <input class="form-control" name="diameter"></input>

                  <label for="Body">Iveskite naują kainą</label>
                  <input class="form-control" name="cost"></input>
              </div>
                <button type="submit" class="btn btn-success">Pateikti</button>
                {!! csrf_field() !!}
                {{ method_field('PUT') }}
            </form>
        </div>
    </div>
</div>
    @stop