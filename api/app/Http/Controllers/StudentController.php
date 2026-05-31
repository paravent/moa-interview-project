<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
class StudentController
{

    public function index(Request $request)
    {
        $query = Student::query();

        if($searchterm = $request->query('q')) {
            $query->where(function($q) use ($searchterm) {
                $q->where('firstname', 'like', "%$searchterm%")
                    ->orWhere('lastname', 'like', "%$searchterm%");
            });
        }
        return response()->json(['data' => $query->get()]);
    }

}
