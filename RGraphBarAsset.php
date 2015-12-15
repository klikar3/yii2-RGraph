<?php
/**
 * RGraph Horizontal Bars class
 * @author Ricardo Obregon <ricardo@obregon.co>
 * @date 19/04/12 05:30 PM
 */
namespace klikar3\rgraph;

use yii\web\AssetBundle;

class RGraphBarAsset extends AssetBundle
{
    public $sourcePath = '@vendor/klikar3/rgraph/RGraph';
    public $css = [
        'css/website.css','css/animations.css', 'css/ModalDialog.css'
    ];

    public $js = [ YII_DEBUG ? 'libraries/RGraph.bar.js': 'libraries/RGraph.bar.js'
    ];
    
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
        'app\assets\RGraphAsset'
    ];
    
/*    public function init()
    {
        $this->js = YII_DEBUG ? ['RGraph.bar.js'] : ['RGraph.bar.js'];
    }
    */
}