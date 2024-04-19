<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Repositories\User\Interface\UserRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    private UserRepositoryInterface $userRepo;

    public function __construct(
        UserRepositoryInterface $userRepo,
    ) {
        $this->userRepo = $userRepo;
    }

    /**
     * @param CreateUserRequest $request
     *
     * @return JsonResponse
     */

    public function create(CreateUserRequest $request): JsonResponse
    {
        return DB::transaction(function () use ($request) {

            $this->userRepo->create(
                $request->validated('name'),
                $request->validated('email'),
                $request->validated('password'),
            );

            return response()->json(['message' => 'create user successful']);
        });
    }
}
