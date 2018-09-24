@extends('main')
@section('content')

    <div class="jumbotron">
        <div class="container text-center">
            <h1>{{$pageText[0] -> antraste}}</h1>      
            <p> {{$pageText[0] -> pagrindinis_tekstas}}</p>
        </div>
    </div>
    
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="img-thumbnail rounded" src="https://placeimg.com/860/480/tech/grayscale" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="img-thumbnail rounded" src="https://placeimg.com/860/480/tech/grayscale" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="img-thumbnail rounded" src="https://placeimg.com/860/480/tech/grayscale" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="col-md-6"> 
                    {{$pageText[1] -> antraste}}
                    {{$pageText[1] -> pagrindinis_tekstas}}
                    <br>
        
                <button type="button" class="btn btn-primary float-md-left" data-toggle="modal" data-target="#exampleModal">
                    Click here to leave a message
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Please leave comment</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    
                                    </div>
                                    <textarea class="form-control" aria-label="With textarea"></textarea>
                                </div>
                                <br>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="prog"></div>
                                </div>
                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onclick="progres()">Click me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    
    <div class="container">
        <table class="table table-hover table-bordered">
            <caption>
                <a tabindex="0" class="btn btn-lg btn-primary" role="button" data-toggle="popover" data-trigger="focus" title="Table" data-content="This table is about users that can help">Click here to learn more</a>
            </caption>
            <thead class="thead-light">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                
                @foreach($tableData as $data)
                    <tr>
                        <td> {{$data -> pagalbininko_id}} </td>
                        <td> {{$data -> vardas}} </td>
                        <td> {{$data -> pavarde}} </td>
                        <td> {{$data -> elektroninis_pastas}} </td>
                    </tr>
                @endforeach
            
            </tbody>
        </table>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <img src="https://placeimg.com/420/320/tech/grayscale" class="img-thumbnail rounded" height="300px">
            </div>
            <div class="col-md-4">
                <img src="https://placeimg.com/420/320/tech/grayscale" class="img-thumbnail rounded">
            </div>
            <div class="col-md-4">
                <img src="https://placeimg.com/640/480/tech/grayscale" class="img-thumbnail rounded">
            </div>
        </div>
    </div>
@stop