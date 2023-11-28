<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Term;
use App\Vocabulary;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class TermAdminController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index($objectid, Request $request)
	{

		// dd($request->all());
		if ($request->has('s')) {
			$termini = Term::where('vocabulary_id', $objectid)->where('termine', 'like', '%' . $request->input('s') . '%')->paginate(15);
		} else {
			$termini = Term::where('vocabulary_id', $objectid)->paginate(15);
		}

		$vocabolario = Vocabulary::find($objectid);
		$termini->vocabolario = $vocabolario;

		return view('admin.page.term.list')->with(compact('termini'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create($objectid)
	{
		$vocabolario = Vocabulary::find($objectid);
		return view('admin.page.term.add')->with(compact('vocabolario'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		// dd($request->input());
		$rules = array(
			'termine'       => 'required',
		);
		$validator = Validator::make($request->all(), $rules);

		// process the login
		if ($validator->fails()) {
			return   redirect()->back()->withErrors($validator);
		} else {
			//Verifico se il termine esiste gia

			$term = Term::where('termine', $request->input('termine'))->where('vocabulary_id', $request->input('vocabulary_id'))->first();
			if (!$term) {
				$term = new Term();
			}
			// store
			$term->termine  = $request->input('termine');
			if ($request->has('bady')) {
				$term->body   = $request->input('body');
			}
			if (isset($request->no_menu)) {
				$term->no_menu = $request->input('no_menu');
			}
			$term->vocabulary_id = $request->input('vocabulary_id');
			$term->save();

			if ($request->has('typeCall') && $request->input('typeCall') == 'ajax') {
				return response()->json($term);
			} else {
				// redirect
				Session::flash('success', 'Creato con successo!');
				return redirect()->route('listaTermini', ['objectid' =>  $request->input('vocabulary_id')]);
			}
		}
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($objectid, $termid)
	{
		$termine = Term::find($termid);
		$termine->vocabolario = Vocabulary::find($objectid);
		return view('admin.page.term.edit')->with(compact('termine'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $objectid, $termid, $ajax = false)
	{
		// dd($request->all());
		$rules = array(
			'termine'       => 'required',
		);
		$validator = Validator::make($request->all(), $rules);

		// process the login
		if ($validator->fails()) {
			return   redirect()->back()->withErrors($validator);
		} else {
			// store
			$termine = Term::find($termid);
			$termine->termine  = $request->input('termine');
			if ($request->has('body')) {
				$termine->body   = $request->input('body');
			} else {
				if (isset($termine->body) && !empty($termine->body)) {
					$termine->body = '';
				}
			}
			$termine->no_menu = $request->input('no_menu');
			$termine->save();
			if ($ajax) {
				return response()->json($termine);
			} else {
				// redirect
				Session::flash('success', 'Aggiornato con Successo!');
				return redirect()->route('editTermine', ['objectid' => $objectid, 'termid' => $termine->id]);
			}
		}
	}

	public function getTermJson(Request $request)
	{
		error_log(print_r($request->input(), true));
		$terms = Term::where('termine', 'like', '%' . $request->input('term') . '%')->where('vocabulary_id', $request->input('vocabulary_id'))->get();
		error_log($terms);
		if ($terms) :
			$return_terms = [];
			foreach ($terms as $term) :
				$return_terms[] = [
					'id' => $term->id,
					'value' => $term->termine
				];
			endforeach;
		endif;

		return response()->json($return_terms);
	}




	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		//
	}
}
