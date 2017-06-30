<?php
/**
 * @file
 * Home page slick carousel.
 *
 * Variables available:

 *
 * @ingroup views_templates
 */
?>
<?php //if ($use_group_header): ?><!--<div>--><?php //endif; ?>
<!--    --><?php //foreach ($rows as $id => $row): ?>
<!--        <div class="--><?php //print $classes_array[$id]; ?><!--">-->
<!--            --><?php //print $row; ?>
<!--        </div>-->
<!--    --><?php //endforeach; ?>
<!--    --><?php //if ($use_group_header): ?><!--</div>--><?php //endif; ?>
<div>
    <div class="slide-left">
        <?php if (!empty($title)): ?>
            <p class="<?php print $view_accordion_id; ?>">
                <?php print $title; ?>
            </p>
        <?php endif; ?>
        <?php if(!empty($title_1)): ?>
            <a href="#" class="read-more">READ MORE</a>
            <?php print $title_1; ?>
        <?php endif; ?>
    </div>
    <?php if(!empty($field_carousel_image)):?>
        <?php print $field_carousel_image; ?>
    <img src="/sites/all/themes/acquisition/images/landing-slider-image.png" alt="computer screen graphic">
    <?php endif; ?>
</div>
