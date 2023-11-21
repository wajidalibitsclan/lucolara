<?php

use App\Term;
use Carbon\Carbon;
function getNameClassObject($object)
{
    $class_name = explode("\\", get_class($object));
    return end($class_name);
}

function getFileUrlFromId($id_media)
{
    $file = \App\Filemedia::find($id_media);

    // dd($file);
    if ($file) {
        return $file->getPublicUrl();
    } else {
        return false;
    }
}

function getFileTitleFromId($id_media)
{
    $file = \App\Filemedia::find($id_media);
    if ($file) {
        return $file->getTitle();
    } else {
        return 'no name';
    }
}

function getVocabolario($nomeVocabolario, $term_list = true)
{
    $vocabolario = \App\Vocabulary::where('title', $nomeVocabolario)->first();
    if (!isset($vocabolario) || empty($vocabolario)) {
        $vocabolario = new \App\Vocabulary();
        $vocabolario->title = $nomeVocabolario;
        $vocabolario->save();
    }
    if ($term_list) {
        return $vocabolario->terminiVocabolario();
    } else {
        return $vocabolario;
    }
}

function getTermById($idTerm)
{
    // dd($idTerm);
    // $term = \App\Term::find($idTerm);
    $term = Term::where('id',$idTerm)->first();
    // dd($term);
    //error_log($term);
    if (!empty($term)) {
        return $term;
    } else {
        //error_log($idTerm);
        return $idTerm;
    }
}
function isEmptyValue($array, $empty = true)
{
    if (is_array($array)) {
        foreach ($array as $value) {
            if (is_array($value)) {
                $empty = isEmptyValue($value, $empty);
            } else {
                if (!empty($value)) {
                    $empty = false;
                    return $empty;
                }
            }
        }
    } else {
        if (!empty($array)) {
            $empty = false;
            return $empty;
        }
    }

    return $empty;
}

function pageUrl($slug)
{
    $page = \App\Page::where('slug', $slug)->first();
    if (!$page) {
        $page = new \App\Page();
        $title = ucfirst(str_replace('-', ' ', $slug));
        $page->title = $title;
        $page->save();
    }
    return $page->getPermalink();
}
function video_categories(){
    $categories = \App\VideoCategory::all();
    $video_categories = [];
    foreach ($categories as $category){
        $video_categories[$category->id] = $category->name;
    }
    return $video_categories;
}
function form_errors($errors){
    $error_list = '';
    foreach($errors->all() as $error){
        $error_list .= '- '.$error.'<br/>';
    }
    $errorsHtml = '<div class="row">
                        <div class="col-sm-12">
                            <div class="uk-alert uk-alert-danger">'.$error_list.'</div>
                        </div>
                  </div>';
    return $errorsHtml;
}
function get_youtube_video_ID($youtube_video_url) {
    /**
     * Pattern matches
     * http://youtu.be/ID
     * http://www.youtube.com/embed/ID
     * http://www.youtube.com/watch?v=ID
     * http://www.youtube.com/?v=ID
     * http://www.youtube.com/v/ID
     * http://www.youtube.com/e/ID
     * http://www.youtube.com/user/username#p/u/11/ID
     * http://www.youtube.com/leogopal#p/c/playlistID/0/ID
     * http://www.youtube.com/watch?feature=player_embedded&v=ID
     * http://www.youtube.com/?feature=player_embedded&v=ID
     */
    $pattern = '%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i';
    // Checks if it matches a pattern and returns the value
    if (preg_match($pattern, $youtube_video_url, $match)) {
        return $match[1];
    }

    // if no match return false.
    return false;
}
function generateVideoEmbedUrl($url){
    //This is a general function for generating an embed link of an FB/Vimeo/Youtube Video.
    $finalUrl = '';
    if(strpos($url, 'facebook.com/') !== false) {
        //it is FB video
        $finalUrl.='https://www.facebook.com/plugins/video.php?href='.rawurlencode($url).'&show_text=1&width=200';
    }else if(strpos($url, 'vimeo.com/') !== false) {
        //it is Vimeo video
        $videoId = explode("vimeo.com/",$url)[1] ?? null;
        if(strpos($videoId, '&') !== false){
            $videoId = explode("&",$videoId)[0];
        }
        $finalUrl.='https://player.vimeo.com/video/'.$videoId;
    }else if(strpos($url, 'youtube.com/') !== false) {
        //it is Youtube video
        $videoId = explode("v=",$url)[1] ?? null;
        if(strpos($videoId, '&') !== false){
            $videoId = explode("&",$videoId)[0];
        }
        $finalUrl.='https://www.youtube.com/embed/'.$videoId;
    }else if(strpos($url, 'youtu.be/') !== false){
        //it is Youtube video
        $videoId = explode("youtu.be/",$url)[1] ?? null;
        if(strpos($videoId, '&') !== false){
            $videoId = explode("&",$videoId)[0];
        }
        $finalUrl.='https://www.youtube.com/embed/'.$videoId;
    }else{
        //Enter valid video URL
    }
    return $finalUrl;
}
function html_truncate($maxLength, $html){
    mb_internal_encoding("UTF-8");
    $printedLength = 0;
    $position = 0;
    $tags = array();
    ob_start();
    while ($printedLength < $maxLength && preg_match('{</?([a-z]+)[^>]*>|&#?[a-zA-Z0-9]+;}', $html, $match, PREG_OFFSET_CAPTURE, $position)){
        list($tag, $tagPosition) = $match[0];
        // Print text leading up to the tag.
        $str = mb_strcut($html, $position, $tagPosition - $position);
        if ($printedLength + mb_strlen($str) > $maxLength){
            print(mb_strcut($str, 0, $maxLength - $printedLength));
            $printedLength = $maxLength;
            break;
        }
        print($str);
        $printedLength += mb_strlen($str);
        if ($tag[0] == '&'){
            // Handle the entity.
            print($tag);
            $printedLength++;
        }
        else{
            // Handle the tag.
            $tagName = $match[1][0];
            if ($tag[1] == '/'){
                // This is a closing tag.
                $openingTag = array_pop($tags);
                assert($openingTag == $tagName); // check that tags are properly nested.
                print($tag);
            }
            else if ($tag[mb_strlen($tag) - 2] == '/'){
                // Self-closing tag.
                print($tag);
            }
            else{
                // Opening tag.
                print($tag);
                $tags[] = $tagName;
            }
        }
        // Continue after the tag.
        $position = $tagPosition + mb_strlen($tag);
    }
    // Print any remaining text.
    if ($printedLength < $maxLength && $position < mb_strlen($html))
        print(mb_strcut($html, $position, $maxLength - $printedLength));
    // Close any open tags.
    while (!empty($tags))
        printf('</%s>', array_pop($tags));
    $bufferOuput = ob_get_contents();
    ob_end_clean();
    $html = $bufferOuput;
    return $html;
}
function luca_1933_submenus(){
    $submenus['teatro'] = ['object'=>'teatro','name'=>'Teatro'];
    $submenus['opera'] = ['object'=>'opera','name'=>'Opera'];
    $submenus['scuola'] = ['object'=>'scuola','name'=>'Scuola'];
    $submenus['ronconi-attore'] = ['object'=>'extra','taxonomy' => 'categorie', 'termine' =>'ronconi-attore','name'=>'Luca Ronconi attore'];
    $submenus['mostre'] = ['object' => 'extra', 'taxonomy' => 'categorie', 'termine' =>'mostre','name'=>'Mostre'];
    $submenus['extra'] = ['object' => 'extra','termine' =>'extra','name'=>'Extra'];
    $submenus['radio-e-tv'] = ['object'=>'extra','taxonomy' => 'categorie', 'termine' =>'radio-e-tv','name'=>'Radio e TV'];
    $submenus['progetti-non-realizzati'] = ['object'=>'extra','taxonomy' => 'categorie','termine'=>'progetti-non-realizzati','name'=>'Progetti non realizzati'];
    // foreach(getVocabolario('Categorie') as $categoria){
    //     $submenus[$categoria->slug] = ['object' => 'extra', 'taxonomy' => 'categorie', 'termine' => $categoria->slug,'name'=>$categoria->termine];
    // }
    return $submenus;
}
function article_types(){
    return[
        'teatro',
        'opera',
        'scuola',
        'extra'
    ];
}
function dopo_article_types(){
    return['santacristina'];
}
function dopo_submenus(){
    //$submenus['teatro'] = ['object'=>'teatro','name'=>'Teatro'];
    //$submenus['opera'] = ['object'=>'opera','name'=>'Opera'];
    //$submenus['scuola'] = ['object'=>'scuola','name'=>'Scuola'];
    $submenus['convegni-incontri-lezioni'] = ['object'=>'extra','taxonomy' => 'categorie', 'termine' =>'convegni-incontri-lezioni','name'=>'Convegni, incontri, lezioni, contributi critici'];
    $submenus['mostre'] = ['object' => 'extra', 'taxonomy' => 'categorie', 'termine' =>'mostre','name'=>'Mostre'];
    $submenus['radio-e-tv'] = ['object'=>'extra','taxonomy' => 'categorie', 'termine' =>'radio-e-tv','name'=>'Radio e TV'];
    // foreach(getVocabolario('Categorie') as $categoria){
    //     $submenus[$categoria->slug] = ['object' => 'extra', 'taxonomy' => 'categorie', 'termine' => $categoria->slug,'name'=>$categoria->termine];
    // }
    return $submenus;
}
function santacristina_submenus(){
    $submenus['santacristina_2002'] = ['object'=>'santacristina_2002','name'=>'Santacristina 2002-2014'];
    $submenus['santacristina_2015'] = ['object'=>'santacristina_2015','name'=>'Santacristina dal 2015'];
    return $submenus;
}
function biografia_submenus(){
    return ['biografia'=>['name'=>'biografia']];
}
function santacristina_types(){
    return['santacristina_2002','santacristina_2015'];
}
function cat_has_articles($cat,$is_dopo = true){
    $class = "\App\\Article";
    $dec_2015 = Carbon::createFromDate(2015, 12, 31);
    $objects = new $class;
    if($is_dopo){
        $results = $objects::where('type', $cat)->where('data_di_pubblicazione','>',$dec_2015)->count();
    }else{
        $results = $objects::where('type', $cat)->where('data_di_pubblicazione','<',$dec_2015)->count();
    }
    return $results > 0;
}
function main_categories(){
    return [
        'lucaronconi1933_2015' => 'Lucaronconi 1933-2015',
        'dopo_lucaronconi' => 'Dopo Luca Ronconi',
        'santacristina'=> 'Santacristina',
        'biografia' => 'Biografia'
    ];
}
