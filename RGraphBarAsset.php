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
    public $sourcePath = '@vendor/klikar3/RGraph/RGraph';
    public $css = [
        'css/website.css','css/animations.css', 'css/ModalDialog.css'
    ];

    public function init()
    {
        $this->js = YII_DEBUG ? ['RGraph.bar.js'] : ['RGraph.bar.js'];
    }
}