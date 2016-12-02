<?php
/**
 * RGraph Bars class
 * @author Ricardo Obregón <ricardo@obregon.co>
 * @date 19/04/12 05:30 PM
 * amended by Karl Klingler <klikar3@github.com>
 * @date 02/12/16 
 */

namespace klikar3\rgraph;

//use Yii;
use yii\base\InvalidConfigException;
use yii\base\Widget;
use yii\helpers\Html;
use yii\helpers\Json;

use klikar3\rgraph\RGraphWidget;

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
    
	 	parent::init();
		$this->registerScriptFile('RGraph.bar.js');
	}

	public function run()
	{
		$id = "rgBar_" . $this->getId();
	
		$data = !empty($this->data) ? Json::encode($this->data) : '{}';
	  $options = !empty($this->options) ? Json::encode($this->options) : '{}';
		
		$jid = "{$id}";
//		$script = ";var $jid = new RGraph.Bar('{$id}',{$data});";
		$script = "var $jid = new RGraph.Bar('{$this->getId()}',{$data});";
		$script .= $this->getEncodedOptions($jid);
		$script .= "{$jid}.{$this->drawFunction};";
//      $script = ";var Bar_{$id} = new RGraph.Bar({id:'{$id}',data: {$data},options: {$options}}).draw();";

	  $view = $this->getView();
		$view->registerJs($script);  
		parent::run();
	}   
	
}
