<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$sms = $_POST['sms'];
$email = $_POST['email'];
$region = $_POST['region'];
$s_car = $_POST['s_car'];
$my_car = $_POST['my_car'];
$s_date = $_POST['s_date'];



$mysql_host = 'localhost';
$mysql_user = 'jjy981212';
$mysql_password = 'ek88701966^';
$mysql_db = 'jjy981212';

$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);

if(!$conn) {
    die('연결실패:' .mysqli_connect_error());
}

$query = "INSERT INTO test_drive VALUES (0, '".$name."', '".$phone."', '".$sms."' ,'".$email."', '".$region."', '".$s_car."', '".$my_car."', '".$s_date."')";

$result = mysqli_query($conn, $query);

echo '입력완료';

?>