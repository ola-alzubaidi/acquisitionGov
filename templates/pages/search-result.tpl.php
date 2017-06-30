<?php

/**
 * @file
 * Default theme implementation for displaying a single search result.
 *
 * This template renders a single search result and is collected into
 * search-results.tpl.php. This and the parent template are
 * dependent to one another sharing the markup for definition lists.
 *
 * Available variables:
 * - $url: URL of the result.
 * - $title: Title of the result.
 * - $snippet: A small preview of the result. Does not apply to user searches.
 * - $info: String of all the meta information ready for print. Does not apply
 *   to user searches.
 * - $info_split: Contains same data as $info, split into a keyed array.
 * - $module: The machine-readable name of the module (tab) being searched, such
 *   as "node" or "user".
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Default keys within $info_split:
 * - $info_split['module']: The module that implemented the search query.
 * - $info_split['user']: Author of the node linked to users profile. Depends
 *   on permission.
 * - $info_split['date']: Last update of the node. Short formatted.
 * - $info_split['comment']: Number of comments output as "% comments", %
 *   being the count. Depends on comment.module.
 *
 * Other variables:
 * - $classes_array: Array of HTML class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $title_attributes_array: Array of HTML attributes for the title. It is
 *   flattened into a string within the variable $title_attributes.
 * - $content_attributes_array: Array of HTML attributes for the content. It is
 *   flattened into a string within the variable $content_attributes.
 *
 * Since $info_split is keyed, a direct print of the item is possible.
 * This array does not apply to user searches so it is recommended to check
 * for its existence before printing. The default keys of 'type', 'user' and
 * 'date' always exist for node searches. Modules may provide other data.
 * @code
 *   <?php if (isset($info_split['comment'])): ?>
 *     <span class="info-comment">
 *       <?php print $info_split['comment']; ?>
 *     </span>
 *   <?php endif; ?>
 * @endcode
 *
 * To check for all available data within $info_split, use the code below.
 * @code
 *   <?php print '<pre>'. check_plain(print_r($info_split, 1)) .'</pre>'; ?>
 * @endcode
 *
 * @see template_preprocess()
 * @see template_preprocess_search_result()
 * @see template_process()
 *
 * @ingroup themeable
 */
//Lot of Code has been commented out for now and left like that so that the developer might find it useful.
$newnode = node_load($node->entity_id);
$search_term = str_replace('"','',html_entity_decode(arg(2)));
if ($search_term=="*"){
    $search_term='';
}
if($node->bundle == 'page'){
    $search_tag = "Site Content";
}else{
    $search_tag = $node->bundle_name;
}
?>

<li class="<?php print $classes; ?>"<?php print $attributes; ?>>
    <?php print render($title_prefix); ?>
    <h3 class="title"<?php print $title_attributes; ?>>
        <a href="<?php print $url.'&searchTerms='.$search_term; ?>" class="<?php print $search_tag; ?> search">&nbsp;<?php print $title; ?></a>
    </h3>
    <?php print render($title_suffix); ?>
    <div class="search-snippet-info">
        <?php if ($snippet):
            $invalid_html =  array('/class="pPart"\>/','/class="pTOC5"\>/','/name="LASTUPDATED"/','/name="/','/class="/','/href="/','/content="/','/\/\>/','/"\>/');
            $snippet_mod_old = strip_tags(html_entity_decode($newnode->body['und']['0']['value']),'<strong>');
            $snippet_mod = acquisition_central_search_excerpt($snippet_mod_old, $search_term, 300, "...");
            $snippet_mod = mb_convert_encoding($snippet_mod, "UTF-8");
            $search_terms = explode(' ',$search_term);
            $search_terms_replace = array();
            foreach($search_terms as $skey=>$sval){
                $search_terms_replace[] = '<strong>' . $sval . '</strong>';
            }
            $snippet_mod = str_ireplace($search_terms,$search_terms_replace,  $snippet_mod);
            if ($snippet_mod == "..."){
                $snippet_mod = "";
            }
            if ($snippet_mod == "" && $title == ""){
                $snippet_mod = "This content is unavailable at this time.";
            }
            ?>
            <p class="search-snippet"<?php print $content_attributes; ?>><?php print $snippet_mod; ?></p>
        <?php endif; ?>
        <!--        --><?php //if ($info): ?>
        <!--        <p class="search-info">--><?php //print $info; ?><!--</p>-->
        <!--        --><?php //endif; ?>
    </div>
    <div class="download">
        <?php
        //Showing all tags are blocked for now. Till a later release
        //if(empty($tags)){
        print "<a>".$search_tag."</a>";
        //}
        //        if(isset($tags)){
        //            $metatags = "";
        //            foreach($tags as $key=>$val){
        //                $metatags .= "<a>".$val."</a>";
        //            }
        //            print $metatags;
        //        }
        ?>

    </div>
</li>

