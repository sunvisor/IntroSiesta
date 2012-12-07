<?php
require 'connect.php';

//$sql = "SELECT * FROM employee";
$limit = $_GET['limit'];
$start = $_GET['start'];

// フィルターの処理
if( isset($_GET['filter']) ) {
    $filters = json_decode($_GET['filter']);
    $wheres = array();
    foreach( $filters as $filter ) {
        $wheres[] = "$filter->property = '$filter->value'";
    }
    $where = implode(' AND ', $wheres);
}

// ソートの処理
if( isset($_GET['sort']) ) {
    $sorters = json_decode($_GET['sort']);
    $orders = array();
    foreach ($sorters as $sorter) {
        $orders[] = "$sorter->property $sorter->direction";
    }
    $order = implode(',' ,$orders);
}

$sql = "SELECT * FROM employee ";
if( isset($where) ){
    $sql .= " WHERE $where";
}
if( isset($order) ){
    $sql .= " ORDER BY $order";
}
$sql .= " LIMIT $start, $limit";

$result = mysql_query($sql, $link);

$data = array();
while($row = mysql_fetch_array($result, MYSQL_ASSOC)){ 
    $data[] = $row;
}

$sql = "SELECT COUNT(*) count FROM employee";
if( isset($where) ){
    $sql .= " WHERE $where";
}
$result = mysql_query($sql, $link);
$row = mysql_fetch_array($result, MYSQL_ASSOC);
$count = $row['count'];

$ret = array(
    'data' => $data,
    'total' => $count,
    'success' => true
);

echo json_encode($ret);
