<?php

use Illuminate\Database\Seeder;
use App\{Form, FormField, Field};
use Illuminate\Support\Arr;

class FormSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Form::truncate();
        FormField::truncate();

        $form = Form::create([
            'form_name' => 'Test Form'
        ]);

        // make the options json for each field & attach to the form
        /*$fields = Field::all()->map(function($field) {
            return ['id' => $field->id, 'type' => $field->field_type];
        });

        $random = collect([$fields->shuffle(), $fields->shuffle(), $fields->shuffle()]);

        $options = $random->flatten(1)->map(function($field_group){

            switch ($field_group['type']) {
                case 'textarea':
                    $config = [
                        'label' => 'Textarea',
                        'rows' => 4,
                        'validation' => [
                            'required' => Arr::random([0, 1])
                        ]
                    ];
                    break;

                case 'select':
                    $config = [
                        'label' => 'Drop-Down',
                        'values' => "The Division 2, Modern Warfare, BattleField V, Apex Legends",
                        'validation' => [
                            'required' => Arr::random([0, 1])
                        ]
                    ];
                    break;

                default:
                    $config = [
                        'label' => 'Input Field',
                        'type' => Arr::random(["text", "email", "phone", "date"]),
                        'validation' => [
                            'required' => Arr::random([0, 1])
                        ]
                    ];
                    break;
            }

            return ['id' => $field_group['id'], 'data' => ['options' => json_encode($config)]];
        });

        $options->each(function($option) use ($form) {
            $form->fields()->attach($option['id'], $option['data']);
        });*/
    }
}
