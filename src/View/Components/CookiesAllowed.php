<?php

namespace Code16\CookieConsent\View\Components;

use Code16\CookieConsent\CookieUtils;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Str;
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
