<?php
/**
 * @link https://github.com/2amigos/yii2-selectize-widget
 * @copyright Copyright (c) 2013-2015 2amigOS! Consulting Group LLC
 * @license http://opensource.org/licenses/BSD-3-Clause
 */
namespace robregonm\rgraph;

use yii\web\AssetBundle;

/**
 *
 * ChartPluginAsset
 *
 * @author Antonio Ramirez <amigo.cobos@gmail.com>
 * @link http://www.ramirezcobos.com/
 * @link http://www.2amigos.us/
 */
class RGraphBarAsset extends AssetBundle
{
    public $sourcePath = '@vendor/rgraph';
    public $css = [
        'css/website.css','css/animations.css', 'css/ModalDialog.css'
    ];

    public function init()
    {
        $this->js = YII_DEBUG ? ['RGraph.bar.js'] : ['RGraph.bar.js'];
    }
}