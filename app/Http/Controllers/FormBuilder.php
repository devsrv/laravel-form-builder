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
        $form_id_toshow = 1;

        $the_form = Form::findOrFail($form_id_toshow);

        $data = [
            'title' => 'the form',
            'fields' => $the_form->fields()->get(),
            'form_id' => $form_id_toshow
        ];

        return view('form', $data);
    }

    /**
     * handle form submit request
     */
    public function handleFormRequest(Request $request) {
        return $request->all();
    }
}
