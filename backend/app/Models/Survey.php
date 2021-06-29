<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Survey extends Model
{
    use HasFactory;
    protected $table = 'survey';
    protected $fillable = [
        'type',
        'response',
        'response_date',
    ];
    public $timestamps = false;

    public static function getSurvey($request){
        $type       = $request->type;
        $start_date = $request->start_date;
        $end_date   = $request->end_date;

        if(!empty($start_date)){
            $survey = DB::table('survey as s')
                        ->whereBetween('response_date', [$start_date, $end_date]);
        }else{
            $survey = DB::table('survey as s');
        }

        if(!empty($type) && $type != "all"){
            $survey = $survey->where('type',$type);
        }
        
        return $survey->orderBy('response_date','desc')->get();
    }
}
