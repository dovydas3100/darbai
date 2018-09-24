<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function getIndex() {
        $tableData = DB::table('pagalbininkai')->get();
        $pageText = DB::table('puslapio_tekstas')->get();
        return view('pages.home') 
            -> with('tableData', $tableData)
            -> with('pageText', $pageText);
    }

    public function getContact() {
        return view('pages.contact');
    }

    public function getAbout() {
        return view('pages.about');
    }

    public function getTv() {
        $products = DB::table("televizoriai")->paginate(12);
        return view('pages.product') -> with('products', $products);
    }

    public function getPhone() {
        $products = DB::table("telefonai")->paginate(12);
        return view('pages.product') -> with('products', $products);
    }

}
