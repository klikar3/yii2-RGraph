<?php
/**
 * RGraph Horizontal Bars class
 * @author Ricardo Obregon <ricardo@obregon.co>
 * @date 19/04/12 05:30 PM
 */

namespace klikar3/rgraph;

use yii\web\AssetBundle;

class RGraphAsset extends AssetBundle
{
    public $sourcePath = '@vendor/klikar3/rgraph/RGraph';
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