<?php
if (!function_exists('activeSegement')) {
    function activeSegement($name, $segement = 2, $class = "active")
    {
        return request()->segment($segement) == $name ? $class : '';
    }
}
