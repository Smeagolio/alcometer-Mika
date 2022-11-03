<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');

$db = new PDO('mysql:host=localhost;dbname=harjtyo;charset=utf8','root', '')
$sql="select * from task";
$query = $db->query($sql);
$results = $query->fetchAll(PDO::FETCH_ASSOC);
$JSON = JSON_ENCODE($results,JSON_PRETTY_PRINT);
header('HTTP/1.1 200 OK');
print $JSON;