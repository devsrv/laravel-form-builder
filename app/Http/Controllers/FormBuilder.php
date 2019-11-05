<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\{Form, FormField};

class FormBuilder extends Controller
{
    /**
     * show the form
     */
    public function showForm() {
        $the_form = Form::findOrFail(1);

        $data = [
            'title' => 'the form',
            'fields' => $the_form->fields()->get()
        ];
        
        return view('form', $data);

        /*
        $json = json_encode(['label' => 'abc', 'other' => 'def']);
        // Form::find(1)->fields()->attach(3, ['options' => $json]);
        // Form::find(1)->fields()->get()->dd();
        // FormField::where('id', 3)->update(['options->label' => 'hello']);
        */
    }
}
