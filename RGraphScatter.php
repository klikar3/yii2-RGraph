<?php
/**
 * RGraph Regular Scatter class
 * @author Ricardo Obregón <ricardo@obregon.co>
 * @date 19/04/12 05:30 PM
 * amended by Karl Klingler <klikar3@github.com>
 * @date 02/12/16 
 */
namespace klikar3\rgraph;

use yii\base\InvalidConfigException;
use yii\base\Widget;
use yii\helpers\Html;
use yii\helpers\Json;

use klikar3\rgraph\RGraphWidget;

class RGraphScatter extends RGraphWidget
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
		$this->registerScriptFile('RGraph.scatter.js');
	}

	public function run()
	{
		parent::run();
		$id = 'Scatter' . $this->getId();
		$data = Json::encode($this->data);
		$script = "var $id = new RGraph.Scatter({id: '{$this->getId()}', data: {$data}});\n";
		$script .= $this->getEncodedOptions($id);
		$script .= "\n{$id}.{$this->drawFunction};";

	    $view = $this->getView();
		$view->registerJs($script);  
	}
}
