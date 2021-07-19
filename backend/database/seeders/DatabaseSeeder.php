<?php

namespace Database\Seeders;

use App\Models\Ingredient;
use App\Models\Pizza;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create(['email' => 'matthieu@boxydev.com']);
        User::factory(10)->create();
        Pizza::factory()->create(['name' => 'Reine']);
        Pizza::factory()->create(['name' => 'Orientale']);
        Pizza::factory()->create(['name' => '4 fromages']);
        Pizza::factory(10)->create();
        Ingredient::factory(10)->create();
    }
}
