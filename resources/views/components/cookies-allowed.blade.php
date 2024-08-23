

{!!
    preg_replace_callback(
        '/<script([^>])*>/',
        fn ($matches) => str($matches[0])
            ->replace('<script', '<script type="text/plain" data-category="'.$category.'"')
            ->replace('src="', 'data-src="'),
        $slot
    )
!!}
