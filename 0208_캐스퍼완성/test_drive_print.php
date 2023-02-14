<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test_drive 데이터 베이스 자료 출력하기</title>
    <style>
    </style>
</head>
<body>
    <?php

  //데이터베이스 계정 연결하기
$conn = mysqli_connect('localhost','jjy981212', 'ek88701966^','jjy981212');

if(mysqli_connect_errno()) {
    printf("%s \n", mysqli_connect_error());
    exit;
}
  //데이터베이스 noodle 테이블 데이터 모두 조회하여 변수에 대입
  $query = 'select * from test_drive';
  $result = mysqli_query($conn, $query); //변수에 결과값을 저장한다
print "<table><tr>" . 
        "<th>Num</th>" .
        "<th>Name</th>" . 
        "<th>sms</th>" .
        "<th>email</th>" .
        "<th>region</th>" .
        "<th>s_car</th>" .
        "<th>my_car</th>" .
        "<th>s_date</th></tr>";


        while($row = mysqli_fetch_row($result)) {
            print "<tr><td>" . $row[0] . "</td>" .
            "<td>" . $row[1] . "</td>" .
            "<td>" . $row[2] . "</td>" . 
            "<td>" . $row[3] . "</td>" . 
            "<td>" . $row[4] . "</td>" .
            "<td>" . $row[5] . "</td>" .
            "<td>" . $row[6] . "</td>" .
            "<td>" . $row[7] . "</td></tr>";
        }
        
        print"</table>";
        mysqli_free_result($result);
        mysqli_close($conn);
        ?>
        
        <a href="test_drive_input.html" title="데이터 입력하기">시승 신청하러 가기</a>
        </body>
        </html>