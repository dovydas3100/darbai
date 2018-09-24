<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use App\Televizor;
class TelevizoriaiController extends Controller
{

    public function index() {
        $products = Televizor::paginate(12);
        return view('pages.product') 
        -> with('products', $products)
        -> with('name', 'Televizoriai');
    }

    public function create(Request $request){
        return view('products.create') ->with('name', 'Televizoriai');
    }

    public function store(Request $request) {
         $validatedData = $request->validate([
            'name' => 'required',
            'rez' => 'required',
            'dim' => 'required',
            'cost' => 'required',
        ]);

        $product = new Televizor;
        $product->gamintojo_pavadinimas = $request->name;
        $product->raiska = $request->rez;
        $product->skersmuo = $request->dim;
        $product->kaina = $request->cost;
        $product->save();
        Session::flash('zinute', 'Sėkmingai išsaugota');
        return redirect() -> route('Televizoriai.show', $product->id);
    }

    public function show($id) {
        $duom = Televizor::find($id);
        return view('pages.detail') 
        -> with('product', $duom)
        -> with('name', 'Televizoriai');
    }

    public function edit($id){
        $duom = Televizor::find($id);
        return view('products.edit') 
        -> with('product', $duom)
        -> with('name', 'Televizoriai');
    }

    public function update(Request $request, $id) {
        $validatedData = $request->validate([
            'name' => 'required',
            'rezolution' => 'required',
            'diameter' => 'required',
            'cost' => 'required',
        ]);

        $product = Televizor::find($id);

        $product->gamintojo_pavadinimas = $request->name;
        $product->raiska = $request->rezolution;
        $product->skersmuo = $request->diameter;
        $product->kaina = $request->cost;
        $product->save();

        Session::flash('zinute', 'Sėkmingai pakeista');
        return redirect() -> route('Televizoriai.show', $product->id);
    }

    public function destroy($id) {
        $deleteTv = Televizor::find($id);
        $deleteTv -> delete($id);
        Session::flash('zinute', 'Sėkmingai ištrinta');
        return redirect()->route('Televizoriai.index');
    }
}
