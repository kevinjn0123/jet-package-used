<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Lab404\Impersonate\Controllers\ImpersonateController;

class ExtendImpersonateController extends ImpersonateController
{
    //
    public function leaveAction()
    {
//        $this->leave();
        dd(auth()->user());
    }
}
