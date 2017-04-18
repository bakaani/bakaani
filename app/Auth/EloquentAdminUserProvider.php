<?php

namespace App\Auth;

use Illuminate\Auth\EloquentUserProvider;

class EloquentAdminUserProvider extends EloquentUserProvider
{
    public function retrieveByCredentials(array $credentials)
    {
        $user = parent::retrieveByCredentials($credentials);

        return (! is_null($user) && $user->isAdmin()) ? $user : null;
    }
}
