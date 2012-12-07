<?php
require 'connect.php';

$param = json_decode($_POST['data']);

$fmt = "delete from employee where id = %d";
$sql = sprintf($fmt, $param->id);
mysql_query($sql);
