<?php
require 'connect.php';

$sql = "SELECT * FROM department";
$result = mysql_query($sql, $link);

$data = array();
while($row = mysql_fetch_array($result, MYSQL_ASSOC)){ 
    $data[] = $row;
}

$ret = array(
    'data' => $data,
    'total' => count($data),
    'success' => true
);

echo json_encode($ret);
