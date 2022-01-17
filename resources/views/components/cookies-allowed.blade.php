
@php
/**
 * @var \Code16\CookieConsent\View\Components\CookiesAllowed $self
 */
@endphp

{!!
    str_replace(
        '<script',
        '<script type="text/plain" data-cookiecategory="'.$category.'"',
        $slot
    )
!!}
