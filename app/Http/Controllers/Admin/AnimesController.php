<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AnimesController extends Controller
{
    public function index()
    {
        $animes = \App\Anime::all();

        return view('admin.animes.index', compact('animes'));
    }
}
