var hsbc = angular.module('Hsbc');

hsbc.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('hsbcBlue', {
            'default': '600',
            'hue-1': '200',
            'hue-2': '800',
            'hue-3': 'A200'
        })
        .accentPalette('hsbcRed', {
            'default': 'A700'
        })
        .warnPalette('hsbcYellow', {
            'default': 'A400'
        })
        .backgroundPalette('grey', {
            'default': '100'
        });

//CREATING CUSTOM COLOR THEMES ####################################################################################
    //(using http://mcg.mbitson.com/#/):
    $mdThemingProvider.definePalette('hsbcBlue', {
        '50': '#ffffff',
        '100': '#e4edf7',
        '200': '#b8d1ea',
        '300': '#81adda',
        '400': '#6a9dd3',
        '500': '#528ecc',
        '600': '#3a7fc5',
        '700': '#336fae',
        '800': '#2c6096',
        '900': '#25517e',
        'A100': '#ffffff',
        'A200': '#e4edf7',
        'A400': '#6a9dd3',
        'A700': '#336fae',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100', '200', '300', '400', '500', 'A100', 'A200', 'A400']
    });

    $mdThemingProvider.definePalette('hsbcGreen', {
        '50': '#ffffff',
        '100': '#d8efd5',
        '200': '#b2dfac',
        '300': '#82cc78',
        '400': '#6ec362',
        '500': '#59bb4c',
        '600': '#4ca840',
        '700': '#429238',
        '800': '#387c2f',
        '900': '#2e6627',
        'A100': '#ffffff',
        'A200': '#d8efd5',
        'A400': '#6ec362',
        'A700': '#429238',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100', '200', '300', '400', '500', '600', 'A100', 'A200', 'A400']
    });

    $mdThemingProvider.definePalette('hsbcYellow', {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#fdf2c9',
        '300': '#fbe184',
        '400': '#fad967',
        '500': '#f9d249',
        '600': '#f8cb2b',
        '700': '#f7c30e',
        '800': '#dfaf07',
        '900': '#c19806',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#fad967',
        'A700': '#f7c30e',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100', '200', '300', '400', '500', '600', '700', 'A100', 'A200', 'A400', 'A700']
    });

    $mdThemingProvider.definePalette('hsbcRed', {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#fbd3ce',
        '300': '#f6978c',
        '400': '#f47d6f',
        '500': '#f26353',
        '600': '#f04937',
        '700': '#ee2f1a',
        '800': '#d92510',
        '900': '#bc200e',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#f47d6f',
        'A700': '#ee2f1a',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100', '200', '300', '400', '500', '600', 'A100', 'A200', 'A400']
    });

//CREATING CUSTOM COLOR THEMES ####################################################################################
    $mdThemingProvider.theme('hsbc-yellow')
        .primaryPalette('hsbcYellow')
        .accentPalette('hsbcYellow');
        //lewving warn and background palettes as default

    $mdThemingProvider.theme('hsbc-red')
        .primaryPalette('hsbcRed')
        .accentPalette('hsbcRed');
    //lewving warn and background palettes as default

    $mdThemingProvider.theme('hsbc-blue')
        .primaryPalette('hsbcBlue')
        .accentPalette('hsbcBlue');
    //lewving warn and background palettes as default

    $mdThemingProvider.theme('hsbc-green')
        .primaryPalette('hsbcGreen')
        .accentPalette('hsbcGreen');
    //lewving warn and background palettes as default
});