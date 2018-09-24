@extends('main')
@section('content')
    <div class="container">
        <table class="table table-bordered">
            <thead class="thead-light">
                <tr>
                    <th>Pavadinimas</th>
                    <th>Raiška</th>
                    <th>Skersmuo inchais</th>
                    <th>Kaina</th>
                    <th> <a href="{{route("$name.create")}}" class="btn btn-accept">Sukurti naują</a>
                </tr>
            </thead>
            <tbody>
                @foreach($products as $product)
                    <tr>
                        <td> {{$product -> gamintojo_pavadinimas}} </td>
                        <td> {{$product -> raiska}} </td>
                        <td> {{$product -> skersmuo}}' </td>
                        <td> {{$product -> kaina}}€ </td>
                        <td>
                            <a href="{{route("$name.show", $product->id)}}" class="btn btn-primary">Plačiau</a>
                        </td>
                    <tr>
                @endforeach
            </tbody>
        </table>
        {{ $products->links() }}
    </div>
@endsection