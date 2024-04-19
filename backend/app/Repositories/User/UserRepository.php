<?php

namespace App\Repositories\User;

use App\Models\User;
use App\Repositories\User\Exceptions\FailedCreateUserException;
use App\Repositories\User\Interface\UserRepositoryInterface;
use Throwable;

class UserRepository implements UserRepositoryInterface
{
    /**
     * @throws FailedCreateUserException
     *
     * @return User
     */
    public function create(string $name, string $email, string $password) : User
    {
        try {
            return User::create([
                'name'        => $name,
                'email'       => $email,
                'password'    => bcrypt($password),
            ]);
        } catch (Throwable $e) {
            logs()->error($e);
            throw new FailedCreateUserException();
        }
    }
}
