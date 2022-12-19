<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class DashboardAdminTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    /** @test */
    // public function test_login_user_success()
    // {
    //     //main post
    //     $response = $this->post('/login', [
    //         'email' => "superadmin@gmail.com",
    //         'password' => "password",
    //     ]);

    //   //  $response->assertRedirect('/dashboard');
    //     $response->assertSee('Table');
    // }

    public function test_admin_login()
    {
        //login
        $user = User::find(1);
        $this->actingAs($user);
        $response = $this->get('/dashboard');
        //assert Redirect
        $response->assertStatus(200);
        $response->assertSee('Table');
    }

    public function test_tampil_user_management()
    {
        //login
        $user = User::find(1);
        $this->actingAs($user);
        $response = $this->get('user-management/user');
        //assert Redirect
        $response->assertStatus(200);

        $response->assertViewHas('users');

        $response->assertSeeText('User List');
        $response->assertSeeText('User Management');

        $response->assertSeeText('Name');
        $response->assertSeeText('Email');
        
        $response->assertSeeTextInOrder(["1", "2"]);
        $response->assertSeeText('SuperAdmin');
        $response->assertSeeText('superadmin@gmail.com');

    }

    public function test_view_create_user()
    {
        //login
        $user = User::find(1);
        $this->actingAs($user);
        $response = $this->get('user-management/user/create');
        //assert Redirect
        $response->assertStatus(200);

        $response->assertSeeText('Tambah User');
        $response->assertSeeText('Validasi Tambah Data');

        $response->assertSeeText('Your Name');
        $response->assertSeeText('Email');
        $response->assertSeeText('Password');

    }

    public function test_create_user()
    {
        //login
        $user = User::find(1);
        $this->actingAs($user);
        $response = $this->get('user-management/user/create');
        //assert Redirect
        $response->assertStatus(200);
        $response = $this->post('user-management/user/', [
            'name' => 'testinput',
            'email' => 'testinput@mail.com',
            'password' => Hash::make("password"),
        ]);

        $response->assertSessionHas("success", "Data Berhasil Ditambahkan");

        $response->assertRedirect('/user-management/user');
        $search = $this->get("/user-management/user", [
            'name' => 'testinput',
            'email' => 'testinput@mail.com',
            'created_at' => '18 October 2022'
        ]);

        $this->assertDatabaseHas('users', [
            "name" => "testinput",
            "email" => "testinput@mail.com",
        ]);
        


    }
}
