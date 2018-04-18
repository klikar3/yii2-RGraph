# yii2-RGraph
----

![example.jpg](https://raw.githubusercontent.com/klikar3/yii2-RGraph/master/example.jpg)
oder
![example2.jpg](https://raw.githubusercontent.com/klikar3/yii2-RGraph/master/example2.jpg)
----
yii2 extension for the RGraph graphing library, based on robregonm's work<br>
RGraph is available under GPL

<a href="http://www.rgraph.net/open-source">http://www.rgraph.net/open-source</a>


Example: 

---- controller:
```php
    public function actionDetail($cntr,$id,$days)
    {

        $servername = $this->getServername($id);

        date_default_timezone_set('Europe/Berlin'); 
        $dt = date('Y-m-d H:i:s',time() - 60 * 60 * 24 * $days);

        return $this->render('detail', [
            'id' => $id,
            'cntr' => $cntr,
            'servername' => $servername,
            'dataset' => $this->getPerfmonDataset($servername,$cntr,$dt),
        ]);
    }
    
    public function getServername($id)
    {
        $lconn = \Yii::$app->db;        
        $cmd = $lconn
              	->createCommand('SELECT [Server] FROM ServerData WHERE id=:id');
        $cmd->bindValue(':id', $id);
        $servername = $cmd->queryScalar();
        
        return $servername;

    }

    public function getPerfmonDataset($srvr,$cntr,$dt)
    {
        $pcid = (new \yii\db\Query())
        ->select('id')->from('PerfCounterDefault')->where('counter_name=:cntr',
        array('cntr' => $cntr))
        ->scalar();
        
        $dataset = (new \yii\db\Query())
        ->select('value, CaptureDate')->from('PerfMonData')->where('Server=:srvr AND Counter_id=:pcid AND CaptureDate>:dt',
        array('srvr' => $srvr, 'pcid' => $pcid, 'dt' => $dt ))
        ->all();
        
        return $dataset;

    }
```php

---- View:

```html
    
    
    use yii\helpers\ArrayHelper;
    use yii\helpers\Html;
    use yii\helpers\Url;
    use yii\web\JsExpression;
    use yii\widgets\ListView;
    
    use klikar3\rgraph\RGraph;
    use klikar3\rgraph\RGraphLine;
    
    
    $this->title = 'BaseLine';
    
    
    ```html
    
    <div class="site-index">
    
    
        <div class="body-content">
    
    <h3><?php echo 'Server: '.$servername ?></h3> <?= Html::a('Ressources',Url::toRoute(['res_cpu', 'id' => $id])); ?>
      
    
    <?= 'Refreshed on '.date('d.m.Y H:i:s'); ?>
    <div class="row">
      <?= RGraphLine::widget([
              'data' => !empty($dataset) ? array_map('intval',ArrayHelper::getColumn($dataset,'value')) : [ 0 ],
              'allowDynamic' => true,
              'allowTooltips' => true,
              'allowContext' => true,
              'options' => [
                  'height' => '600px',
                  'width' => '800px',
                  'colors' => ['blue'],
                  'filled' => true,
    //              'spline' => true,
                  'clearto' => ['white'],
                  'labels' => !empty($dataset) ? array_map(function($val){return substr($val,1,15);},
                                        array_column(array_chunk(ArrayHelper::getColumn($dataset,'CaptureDate'),count($dataset)/10),0)
                              ) : [ 'No Data' ],
                  'tooltips' => !empty($dataset) ? ArrayHelper::getColumn($dataset,'value') : [ 'No Data' ],
                  'numxticks' => 10,
                  'textAngle' => 45,
                  'textSize' => 8,
                  'gutter' => ['left' => 45, 'bottom' => 50, 'top' => 50],
                  'title' => $cntr,
                  'titleSize' => 12,
                  'titleBold' => false,
                  'tickmarks' => 'none',
                  'ymax' => 100,
                  'backgroundColor' => 'Gradient(red:orange:white)',
                  'backgroundGridAutofitNumvlines' => 10,
                  'key' => ['keyInteractive' => true],
                  'contextmenu' => [
                      ['24h', new JsExpression("function go() {window.location.assign(\"".Url::toRoute(['detail','cntr' => $cntrs[0], 'id' => $id, 'days' => 1 ])."\");}") ],
                      ['7 days',new JsExpression("function go() {window.location.assign(\"".Url::toRoute(['detail','cntr' => $cntrs[0], 'id' => $id, 'days' => 7 ])."\");}") ],
                      ['32 days',new JsExpression("function go() {window.location.assign(\"".Url::toRoute(['detail','cntr' => $cntrs[0], 'id' => $id, 'days' => 32 ])."\");}") ],
                      ['1 year', new JsExpression("function go() {window.location.assign(\"".Url::toRoute(['detail','cntr' => $cntrs[0], 'id' => $id, 'days' => 366 ])."\");}") ],
                      ['All', new JsExpression("function go() {window.location.assign(\"".Url::toRoute(['detail','cntr' => $cntrs[0], 'id' => $id, 'days' => 9999 ])."\");}") ],
                  ],
              ]
      ]);
      ? >
    
    </div>
       </div>
    </div>
```
    
