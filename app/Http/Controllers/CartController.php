<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index(Request $request)
    {
        if ($request->wantsJson()){
            return response(
                $request->user()->cart()->get()
            );
        }
        return view('cart.index');
    }
}
