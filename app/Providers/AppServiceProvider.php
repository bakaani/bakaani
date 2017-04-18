<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('KitsuAnimeSource', function($app) {
            return new \App\Services\KitsuAnimeSource(new \GuzzleHttp\Client);
        });

        $this->app->bind('RemoteAnimeSource', function($app) {
            return $app->make(
                $app->make('request')->input('source', 'KitsuAnimeSource')
            );
        });
    }
}
