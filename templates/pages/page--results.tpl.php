<?php
drupal_add_css(path_to_theme() . '/styles/ie7.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'lte IE 7', '!IE' => FALSE), 'preprocess' => FALSE));
?>
<div id="header" class="clearfix">
    <?php if ($page['header']): ?>
        <!--Header Region-->
        <?php print render($page['header']);?>
        <a href="http://gsa.gov" id="gsa-logo">Powered by GSA</a>
        <a href="/text-size" class="check-text">Change Text Size</a>
    <?php endif;
    if ($page['search_box']): ?>
        <?php print render($page['search_box']);?>
    <?php endif;?>

</div> <!--End Header-->
<div id="main-nav">
    <?php if ($page['main_nav']):
        print render($page['main_nav']);
    endif;?>
</div>

<div id="content-wrapper">
    <?php if($page['content']):?>
        <?php print render($page['content']);?>
    <?php endif;?>
</div>

<div id="footer">
    <div id="footer-wrapper">
        <div id="footer-inner-wrapper">
            <!--Footer Region-->
            <div class="soc-icons">
                <?php print acquisition_central_social_icons(); ?>
            </div>
            <div id="footer-link">
                <?php if ($page['footer']):?>
                    <?php print render($page['footer']);?>
                <?php endif;?>
            </div>
        </div>
    </div>
</div>