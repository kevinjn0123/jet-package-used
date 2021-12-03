<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use Inertia\Middleware;
use App\Models\User;
use Spatie\Permission\Models\Role;

use Illuminate\Support\Arr;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param \Illuminate\Http\Request $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            //
            'userCanBeImpersonated' => can_be_impersonated(Auth::user() ? Auth::user() : User::all()->first()),
            'userIsImpersonating' => is_impersonating(),
            'userCanImpersonate' => can_impersonate(),
            'rootURL' => URL::to('/'),
            'isAdmin' => Auth::user()->hasAnyRole('Superadmin|Admin'),
            'userRole' => Auth::user() ? Auth::user()->getRoleNames() : User::all()->first()->getRoleNames(),
//            'usersData' => User::with('roles')->get()->map(function ($usersData) {
//                return [
//                    'id' => $usersData->id,
//                    'name' => $usersData->name,
//                    'email' => $usersData->email,
//                    'email_verified_at' => $usersData->email_verified_at,
//                    'profile_photo_path' => $usersData->profile_photo_path,
//                    'profile_photo_url' => $usersData->profile_photo_url,
//                    'roles' => collect($usersData->roles)->map(function ($role) {
//                        return [
//                            'name' => $role->name,
//                            'pivot' => (object)collect([
//                                'model_id' => $role->pivot->model_id,
//                                'role_id' => $role->pivot->role_id,
//                            ])
//                        ];
//                    }),
//                    'canBeImpersonated' => can_be_impersonated(User::find($usersData->id)),
//                    'isImpersonating' => is_impersonating(),
//                    'canImpersonate' => can_impersonate(),
//                    'isAdmin' => User::find($usersData->id)->hasAnyRole('Superadmin|Admin')
//                ];
//            }),
        ]);
    }
}
