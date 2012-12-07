<?php
// データベースへ接続
require 'connect.php';

// パラメーターをデコード
$param = json_decode($_POST['data']);

// DBにデータを保存
$fmt = "
    insert into employee (
        `name`,
        `department_id`,
        `email`,
        `gender`,
        `age`
    ) 
    values ('%s', '%s', '%s', '%s', '%s')
    ";
$sql = sprintf(
    $fmt, 
    $param->name,
    $param->department_id,
    $param->email,
    $param->gender,
    $param->age
);
mysql_query($sql);

// 挿入したレコードのidを取得
$param->id = mysql_insert_id($link);

// レスポンスをセット
$ret = array(
    'data' => $param,
    'total' => count($data),
    'success' => true
);

// json 形式で返す
echo json_encode($ret);
