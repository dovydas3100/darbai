@if (Session::has('zinute'))
    <div class="alert alert-success">
        <strong>Viskas OK:</strong> {{ Session::get('zinute') }}
    </div>
@endif

@if (count($errors)>0)
       <div class="alert alert-danger">
        <strong>Klaidos:</strong>
        <ul>
            @foreach($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif