<?php
    require 'global.php';
    header('content-type:application/json;charset=utf8');
    
    $conn=mysql_connect($servername,$username,$password);
    if (!$conn){
        die('Could not connect: ' . mysql_error());
    }
    $db_sel=mysql_select_db($db,$conn);
    $sql = "set names utf8";
    mysql_query($sql,$conn);

    $sql="SELECT eid,title,area,address,price,room_type,info_type,construct,reliable,create_time FROM estate_info";
    $result=mysql_query($sql,$conn);

    $json_arr=array();
    while($row=mysql_fetch_assoc($result)){
        $arr=array(
            "eid"=>$row["eid"],
            "title"=>$row["title"],
            "area"=>$row["area"],
            "address"=>$row["address"],
            "price"=>$row["price"],
            "room_type"=>$row["room_type"],
            "info_type"=>$row["info_type"],
            "construct"=>$row["construct"],
            "reliable"=>$row["reliable"],
            "create_time"=>$row["create_time"]
        );
        array_push($json_arr,$arr);
    }

    echo json_encode($json_arr, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
    mysql_close($conn);
?>