<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Vocabulary;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;

class VocabularyAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
	    $vocabolari = Vocabulary::paginate(15);

	    return view('admin.page.vocabulary.list')->with(compact('vocabolari'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.page.vocabulary.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

	    $rules = array(
		    'title'       => 'required',
	    );
	    $validator = Validator::make($request->all(), $rules);

	    // process the login
	    if ($validator->fails()) {
		    return   redirect()->back()->withErrors($validator);
	    } else {
		    // store
		    $vocabulary = new Vocabulary();
		    $vocabulary->title  = $request->input('title');
		    $vocabulary->body   = $request->input('body');
		    $vocabulary->save();

		    // redirect
		    Session::flash('message', 'Successfully created nerd!');
		    return redirect()->route('listaVocabolari');
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
    public function edit($objectid)
    {
        $vocabolario = Vocabulary::find($objectid);
        return view('admin.page.vocabulary.edit')->with(compact('vocabolario'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $objectid)
    {
	    $rules = array(
		    'title'       => 'required',
	    );
	    $validator = Validator::make($request->all(), $rules);

	    // process the login
	    if ($validator->fails()) {
		    return   redirect()->back()->withErrors($validator);
	    } else {
		    // store
		    $vocabulary = Vocabulary::find($objectid);
		    $vocabulary->title  = $request->input('title');
		    $vocabulary->body   = $request->input('body');
		    $vocabulary->save();

		    // redirect
		    Session::flash('message', 'Successfully created nerd!');
		    return redirect()->route('listaVocabolari');
	    }
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
