<?php

namespace App\Providers;

use App\Models\Setting;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Paginator::useBootstrap();

        // $settings = Setting::all('key', 'value')
        //     ->keyBy('key')
        //     ->transform(function ($setting) {
        //         return $setting->value;
        //     })
        //     ->toArray();

        // config([
        //     'settings' => $settings
        // ]);

        config(['app.name' => config('settings.app_name')]);
    }
}
