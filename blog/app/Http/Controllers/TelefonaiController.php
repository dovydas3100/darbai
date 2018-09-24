<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Phone;
use Illuminate\Support\Facades\Session;
class TelefonaiController extends Controller
{

    public function index()
    {
        $products = Phone::paginate(12);
        return view('pages.product') 
        -> with('products', $products)
        -> with('name', 'Telefonai');
    }

    public function create(Request $request)
    {
        return view('products.create') ->with('name', 'Telefonai');
    }

    public function store(Request $request){
        
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'rez' => 'required|max:255',
            'dim' => 'required|digits:10',
            'cost' => 'required|digits:10',
        ]);

        $product = new Phone;
        $product->gamintojo_pavadinimas = $request->name;
        $product->raiska = $request->rez;
        $product->skersmuo = $request->dim;
        $product->kaina = $request->cost;
        $product->save();
        Session::flash('zinute', 'Sėkmingai išsaugota');
        return redirect() -> route('Telefonai.show', $product->id);
    }

    public function show($id){
        $duom = Phone::find($id);
        return view('pages.detail') 
        -> with('product', $duom)
        -> with('name', 'Telefonai');
    }

    public function edit($id){
        $duom = Phone::find($id);
        return view('products.edit') 
        -> with('product', $duom)
        -> with('name', 'Telefonai');
    }

    public function update(Request $request, $id) {
        $validatedData = $request->validate([
            'name' => 'required',
            'rezolution' => 'required',
            'diameter' => 'required',
            'cost' => 'required',
        ]);

        $product = Phone::find($id);

        $product->gamintojo_pavadinimas = $request->name;
        $product->raiska = $request->rezolution;
        $product->skersmuo = $request->diameter;
        $product->kaina = $request->cost;
        $product->save();

        Session::flash('zinute', 'Sėkmingai pakeista');
        return redirect() -> route('Telefonai.show', $product->id);
    }

    public function destroy($id){
        $deletePhone = Phone::find($id);
        $deletePhone -> delete($id);
        Session::flash('zinute', 'Sėkmingai ištrinta');
        return redirect()->route('Telefonai.index');
    }
}
