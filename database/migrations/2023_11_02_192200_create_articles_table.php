<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('type')->nullable();
            $table->string('title')->nullable();
            $table->string('citta')->nullable();
            $table->date('data_di_pubblicazione')->nullable();
            $table->string('immagine_in_evidenza')->nullable();
            $table->integer('status')->default(0);
            $table->unsignedBigInteger('old_id')->nullable();
            $table->string('slug')->nullable();
            $table->text('body')->nullable();
            $table->json('locandina')->nullable();
            $table->json('persone')->nullable();
            $table->json('interviste_e_dichiarazioni')->nullable();
            $table->json('rassegna_stampa')->nullable();
            $table->string('sotto_titolo')->nullable();
            $table->string('riassunto')->nullable();
            $table->string('teatro')->nullable();
            $table->string('testo_libero_locandina')->nullable();
            $table->json('altri_file')->nullable();
            $table->json('categorie')->nullable();
            $table->json('gallery')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
