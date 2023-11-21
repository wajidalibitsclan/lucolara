<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VideoFrmRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // Check if the user is authenticated
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'category' => 'required',
            'link' => 'required|url',
            'order' => 'required|integer',
        ];
    }

    /**
     * Get custom validation messages.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'title.required' => 'The title field is required.',
            'category.required' => 'The category field is required.',
            'link.required' => 'The link field is required.',
            'link.url' => 'The link must be a valid URL.',
            'order.required' => 'The order field is required.',
            'order.integer' => 'The order must be an integer.',
        ];
    }

    /**
     * Data Transformation - Trim the 'link' value.
     *
     * @return array
     */
    public function all()
    {
        $data = parent::all();
        $data['link'] = trim($data['link']);
        return $data;
    }
}
