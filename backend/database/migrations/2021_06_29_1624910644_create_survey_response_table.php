<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSurveyResponseTable extends Migration
{
    public function up()
    {
        Schema::create('survey', function (Blueprint $table) {

            $table->id();
            $table->integer('type',);
            $table->string('response');
            $table->date('response_date');

        });
    }

    public function down()
    {
        Schema::dropIfExists('survey');
    }
}