@extends('main')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <h1>Sukurti nauja {{strtolower($name)}} prekę:</h1>
            <hr>
            <form method="post" action="{{ route("$name.store") }}">
              <div class="form-group">
                  <label for="Body">Iveskite pavadinima</label>
                  <input type="text" class="form-control" name="name">

                  <label for="Body">Iveskite raišką</label>
                  <input class="form-control" name="rez"></input>

                  <label for="Body">Iveskite istrižainę</label>
                  <input class="form-control" name="dim"></input>

                  <label for="Body">Iveskite kainą</label>
                  <input class="form-control" name="cost"></input>
              </div>
                <button type="submit" class="btn btn-success">Pateikti</button>
                {!! csrf_field() !!}
            </form>
        </div>
    </div>
</div>
    @stop