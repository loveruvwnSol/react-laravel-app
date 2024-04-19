<?php

namespace App\Repositories\User\Interface;

use App\Models\User;

interface UserRepositoryInterface
{
    public function create(string $name, string $email, string $password): User;

    public function login(User $user): void;

    public function findOneByAuth(string $email, string $password): User;
}
