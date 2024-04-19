<?php

namespace App\Http\Requests;

use App\Http\Requests\BaseRequest;

class CreateUserRequest extends BaseRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'        => ['required', 'max:64'],
            'email'       => ['required', 'email', 'unique:users,email'],
            'password'    => ['required', 'min:6', 'max:64'],
        ];
    }
}
