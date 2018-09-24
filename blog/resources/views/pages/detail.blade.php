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
                    <th colspan = "2">Pasirinkimai</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td> {{$product -> gamintojo_pavadinimas}} </td>
                        <td> {{$product -> raiska}} </td>
                        <td> {{$product -> skersmuo}}' </td>
                        <td> {{$product -> kaina}}€ </td>
                        <td> 
                            <a href="{{route("$name.edit", $product->id)}}" class="btn btn-info">Keisti</a> 
                        <td>
                            <form action="{{route("$name.destroy", $product->id)}}" method="POST">
                                {{method_field('DELETE')}}
                                {!! csrf_field() !!}
                                <input type="submit" class="btn btn-danger" value="Ištrinti"/>
                            </form>
                        </td>
                        </td>
                    <tr>
            </tbody>
        </table>
    </div>
@endsection