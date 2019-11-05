<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormField extends Model
{
    public $timestamps = false;
    
    protected $guarded = [];

    /**
     * Get the field's option.
     *
     * @param  string  $value
     * @return string
     */
    public function getOptionsAttribute($value)
    {
        return json_decode($value);
    }
}
