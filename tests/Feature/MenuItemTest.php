<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\MenuGroup;

class MenuItemTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_create_menu()
    {
        //login
        $user = User::find(1);
        $this->actingAs($user);
        $response = $this->get('menu-management/menu-group/create');
        //assert Redirect
        $response->assertStatus(200);
        $response = $this->post('menu-management/menu-group/', [
            'name' => 'Users Management1',
            'icon' => 'fas fa-users',
            'permission_name' => 'user.management',
        ]);
        
        $response->assertSessionHas("success", "Data berhasil ditambahkan");

        $response->assertRedirect('menu-management/menu-group/');

        $response = $this->get("/menu-management/menu-group", [
            'name' => 'Users Management1',
            'icon' => 'fas fa-users',
            'permission_name' => 'user.management',
        ]);

    

        $this->assertDatabaseHas('menu_groups', [
            'name' => 'Users Management1',
            'icon' => 'fas fa-users',
            'permission_name' => 'user.management',
        ]);
   }

    public function test_edit_menu()
    {
        //login
        $user = User::find(1);
        $this->actingAs($user);

        $response = $this->get("/menu-management/menu-group", [
            'name' => 'Users Management2',
            'icon' => 'fas fa-users',
            'permission_name' => 'user.management',
        ]);

        //assert Redirect
        $response->assertStatus(200);

        $response = $this->post('menu-management/menu-group/8/edit', [
                    'name' => 'Users Management3',
                    'icon' => 'fas fa-users',
                    'permission_name' => 'user.management',
                ]);

        $this->assertDatabaseHas('menu_groups', [
                    'name' => 'Users Management3',
                    'icon' => 'fas fa-users',
                    'permission_name' => 'user.management',
                ]);
    }
}
