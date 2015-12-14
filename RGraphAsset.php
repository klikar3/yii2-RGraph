<?php
/**
 * @link https://github.com/2amigos/yii2-selectize-widget
 * @copyright Copyright (c) 2013-2015 2amigOS! Consulting Group LLC
 * @license http://opensource.org/licenses/BSD-3-Clause
 */
namespace robregonm/rgraph;

use yii\web\AssetBundle;

/**
 *
 * ChartPluginAsset
 *
 * @author Antonio Ramirez <amigo.cobos@gmail.com>
 * @link http://www.ramirezcobos.com/
 * @link http://www.2amigos.us/
 */
class RGraphAsset extends AssetBundle
{
    public $sourcePath = '@vendor/robregonm/rgraph/RGraph';
    public $css = [
        'css/website.css','css/animations.css', 'css/ModalDialog.css'
    ];

    public $js = [ YII_DEBUG ? 'libraries/RGraph.common.core.js' : 'libraries/RGraph.common.core.js'
    ];                           
    
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];

}