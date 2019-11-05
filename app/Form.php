<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    protected $guarded = [];

    /**
     * The fields that belong to the form.
     */
    public function fields()
    {
        return $this->belongsToMany('App\Field', 'form_fields')->withPivot('id', 'options');
    }
}
