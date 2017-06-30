<?php
drupal_add_css(path_to_theme() . '/styles/ie8.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'lte IE 8', '!IE' => FALSE), 'preprocess' => FALSE));
?>
<div id="header" class="clearfix">
    <?php if ($page['header']):?>
        <!--Header Region-->
        <?php print render($page['header']);?>
        <a href="http://gsa.gov" id="gsa-logo">Powered by GSA</a>
        <a href="/text-size" class="check-text">Change Text Size</a>

    <?php endif;
    if ($page['search_box']): ?>
        <?php print render($page['search_box']);?>
        <a id="advanced-search-header" href="/?q=search/site/*">Advanced Search</a>
    <?php endif;?>


    <!-- Mobile Header -->
    <div class="mobile-header-wrapper">
        <a href="#mobile-menu">
            <div id="nav-icon" class="nice-menu-1-toggle">
                <span class="icon-bar top-bar"></span>
                <span class="icon-bar middle-bar"></span>
                <span class="icon-bar bottom-bar"></span>
            </div>
        </a>
        <div class="mobile-search"></div>
    </div>
</div>
<!--End header-->

<div id="main-nav">
    <?php if ($page['main_nav']):
        print render($page['main_nav']);
    endif;?>
</div>
<div id="mobile-menu">
    <?php if ($page['main_nav']):
        print render($page['main_nav']);
    endif;?>
</div>
<?php if ($page['front_carousel']):
    print render($page['front_carousel']);
endif;?>


<div id="content-wrapper">
    <div id="main-content-internal">
        <div id="breadcrumbs">
            <?php print strip_tags($breadcrumb, '<a><h2>') . ' » <a>' . $title.'</a >';?>
        </div>
        <section id="post-content" role="main">
            <?php print $messages; ?>
            <?php print render($title_prefix); ?>
            <?php if ($title): ?><h1 class="page-title"><?php print $title; ?></h1><?php endif; ?>
            <?php print render($title_suffix); ?>
            <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper"><?php print render($tabs); ?></div><?php endif; ?>
            <?php print render($page['help']); ?>
            <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
        </section> <!-- /#main -->
        <?php if($page['content']):?>
            <?php print render($page['content']);?>
        <?php endif;?>
    </div>
    <div class="right-sidebar">
        <?php if ($page['right_sidebar']):
            print render($page['right_sidebar']);
        endif;?>
    </div>
</div>
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
            <p class="site-info-footer"><a href="mailto:acquisition_gov.systemadmin@gsa.gov">Contact Us</a> | <a href="?q=Privacy_Security">Privacy and Security Notice</a> | <a href="http://www.gsa.gov/portal/content/116621">Accessibility Aids</a> | Last updated <?php print acquisition_central_last_date_modified(); ?></p>
        </div>
    </div>
</div>