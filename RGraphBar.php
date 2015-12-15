<?php
/**
 * RGraph Bars class
 * @author Ricardo Obregón <ricardo@obregon.co>
 * @date 19/04/12 05:30 PM
 */

namespace klikar3\rgraph;

//use Yii;
use yii\base\InvalidConfigException;
use yii\base\Widget;
use yii\helpers\Html;
use yii\helpers\Json;

use klikar3\rgraph\RGraphWidget;

//require_once('RGraphWidget.php');

class RGraphBar extends RGraphWidget
{
	public function init()
	{
		$id = $this->getId();
		if (isset($this->htmlOptions['id']))
			$id = $this->htmlOptions['id'];
		else
			$this->htmlOptions['id'] = $id;
    if (!isset($this->options['id'])) {
        $this->options['id'] = $id;
    }
 //   $view = $this->getView();
    
 //   RGraphBar::register($view);
	  parent::init();
	  $this->registerScriptFile('RGraph.bar.js');
	}

	public function run()
	{
//    echo Html::tag('canvas', '', $this->options);		
	  $id = $this->getId();
      $view = $this->getView();

	  $data = !empty($this->data) ? Json::encode($this->data) : '{}';;
      $options = !empty($this->options) ? Json::encode($this->options) : '{}';
		
		$script = ";var $id = new RGraph.Bar('{$id}',{$data}).draw();";
		$script .= $this->getEncodedOptions($id);
		$script .= "{$id}.{$this->drawFunction};";
//      $script = ";var Bar_{$id} = new RGraph.Bar({id:'{$id}',data: {$data},options: {$options}}).draw();";

		$view->registerJs($script);  
		parent::run();
	}   
	
}
