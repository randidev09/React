<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;
use Validator;

class SurveyController extends Controller
{
    //
    public function index(Request $request){
        $survey = Survey::getSurvey($request);
 
        return response()->json([
            'code' => 200,
            'success' => true,
            'data' => $survey
        ]);
    }

    public function store(Request $request)
    {
        $rules = [
            'type' => 'required|integer',
            'response' => 'required',
            'response_date' => 'required:Y-m-d'
        ];

        $messages = [];

        $validator = Validator::make($request->all(), $rules, $messages);
        if($validator->fails()){
            return response()->json([
                'code' => '500',
                'message' => 'Failed add survey response'
            ]);
        }

        $survey                 = new Survey();
        $survey->type           = $request->type;
        $survey->response       = $request->response;
        $survey->response_date  = $request->response_date;
        $is_success = false;

        try{
            $survey->save();
            $is_success = true;
        }catch(\Exception $e) {
            return response()->json([
                'code' => 500,
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }

        if($is_success)
            return response()->json([
                'code' => 200,
                'success' => true,
                'message' => 'Successfully add survey response',
                'data' => $survey
            ]);
    }

    public function update(Request $request, $id)
    {
        $survey = Survey::find($id);
        
        if (!$survey) {
            return response()->json([
                'code' => 404,
                'success' => false,
                'message' => 'Survey with id ' . $id . ' not found'
            ], 404);
        }

        $is_success = false;

        try{
            $survey = $survey->fill($request->all())->save();
            $is_success = true;
        }catch(\Exception $e) {
            return response()->json([
                'code' => 500,
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }

        if($is_success)
            return response()->json([
                'code' => 200,
                'success' => true,
                'message' => 'Successfully update survey response',
                'data' => $survey
            ]);
    }

    public function destroy($id)
    {
        $survey = Survey::find($id);

        if (!$survey) {
            return response()->json([
                'code' => 404,
                'success' => false,
                'message' => 'Product with id ' . $id . ' not found'
            ], 404);
        }

        if ($survey->delete()) {
            return response()->json([
                'code' => 200,
                'success' => true,
                'message' => 'Successfully delete survey with id '.$id
            ]);
        } else {
            return response()->json([
                'code' => 500,
                'success' => false,
                'message' => 'Survey could not be deleted'
            ], 500);
        }
    }
}
