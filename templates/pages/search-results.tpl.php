<?php

/**
 * @file
 * Default theme implementation for displaying search results.
 *
 * This template collects each invocation of theme_search_result(). This and
 * the child template are dependent to one another sharing the markup for
 * definition lists.
 *
 * Note that modules may implement their own search type and theme function
 * completely bypassing this template.
 *
 * Available variables:
 * - $search_results: All results as it is rendered through
 *   search-result.tpl.php
 * - $module: The machine-readable name of the module (tab) being searched, such
 *   as "node" or "user".
 *
 *
 * @see template_preprocess_search_results()
 *
 * @ingroup themeable
 */
?>
<?php if ($search_results):
    global  $pager_page_array, $pager_total_items;
$count = variable_get ('apachesolr_rows', 10);
$start = $pager_page_array[0] * $count + 1;
$end = $start + $count - 1;
 
if($pager_total_items[0] < $end) {
    $end = $pager_total_items[0];
}
 
$res_found =   t (' (Showing %start to %end of %total results found.)',
  array (
    '%start' => $start,
    '%end' => $end,
     '%total' => $pager_total_items[0]
  )
);

print "<h2>".t('Search results')."</h2><h4>".$res_found."</h4>";?>
<ol class="search-results <?php print $module; ?>-results">
    <?php print $search_results;    ?>
</ol>
<?php print $pager; ?>
<?php else : ?>
<h2><?php print t('Your search yielded no results');?></h2>
<?php print search_help('search#noresults', drupal_help_arg()); ?>
<?php endif; ?>
