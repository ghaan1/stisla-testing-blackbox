<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class RenderTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function dashboard_Admin_Test()
    {
        $response = $this->post('', [
            'email' => "superadmin@gmail.com",
            'password' => "password",
        ]);
        $response->assertStatus(200);
        $response->assertRedirect('/dashboard');
    }
}
