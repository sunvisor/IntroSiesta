<?php
require 'connect.php';

$param = json_decode($_POST['data']);

$fmt = "
    update employee 
    set 
        `name` = '%s',
        `department_id` = '%s',
        `email` = '%s',
        `gender` = '%s',
        `age` = %s
    where 
        id = %s
    ";

$sql = sprintf(
    $fmt, 
    $param->name,
    $param->department_id,
    $param->email,
    $param->gender,
    $param->age,
    $param->id
);

mysql_query($sql, $link);

$ret = array(
    'data' => $param,
    'success' => true
);

echo json_encode($ret);
