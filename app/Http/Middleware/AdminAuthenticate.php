<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthManager;
use Illuminate\Foundation\Application;

class AdminAuthenticate
{
    protected $app;
    protected $auth;

    public function __construct(Application $app, AuthManager $auth)
    {
        $this->app = $app;
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $user = $this->auth->guard($guard)->user();

        if (is_null($user) || !$user->isAdmin()) {
            if ($this->app->environment('production')) {
                return abort(401);
            } else {
                return redirect(route('admin.login'));
            }
        }

        return $next($request);
    }
}
