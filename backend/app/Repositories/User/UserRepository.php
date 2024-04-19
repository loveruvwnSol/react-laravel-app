<?php

namespace App\Repositories\User;

use App\Models\User;
use App\Repositories\User\Exceptions\FailedCreateUserException;
use App\Repositories\User\Exceptions\FailedFindUserException;
use App\Repositories\User\Exceptions\FailedLoginException;
use App\Repositories\User\Interface\UserRepositoryInterface;
use Illuminate\Support\Facades\Hash;
use Throwable;

class UserRepository implements UserRepositoryInterface
{
    /**
     * @throws FailedCreateUserException
     *
     * @return User
     */
    public function create(string $name, string $email, string $password): User
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

    public function findOneByAuth(string $email, string $password): User
    {
        $user = User::where('email', $email)->first();

        if (!$user) {
            throw new FailedFindUserException();
        }

        if (!Hash::check($password, $user->password)) {
            throw new FailedFindUserException();
        }

        return $user;
    }

    public function login(User $user): void
    {
        try {
            auth()->login($user);
            session()->regenerate();
        } catch (Throwable $e) {
            throw new FailedLoginException();
        }
    }
}
