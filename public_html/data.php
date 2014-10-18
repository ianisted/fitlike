<?php

$param = $_GET['param'];
$doodah = file_get_contents($param);

$opps = json_decode($doodah);
/*print_r($opps);

for ($i = 0; $i < 500; $i++)
{
	$thisID = $opps[$i]->id;
	//echo "http://matchthecity.org/opportunities/{$thisID}/effort_rating<br>";
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_URL, "http://matchthecity.org/opportunities/{$thisID}/effort_ratings");
	curl_setopt($ch, CURLOPT_POSTFIELDS, "effort_rating[rating]=".rand(1,5));
	$result = curl_exec($ch);
  curl_close($ch);
}*/

die($doodah);