<?php

namespace Code16\CookieConsent\View\Components;


use Illuminate\View\Component;

class CookiesAllowed extends Component
{
    public function __construct(
        public ?string $category = null
    ) {
    }
    
    public function render()
    {
        return 'cookie-consent::components.cookies-allowed';
    }
}
