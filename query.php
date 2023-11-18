<?php
// Assuming you have a database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "confess";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $status = $_POST["status"];
    $reason = $_POST["reason"];

    // Insert data into the database
    $sql = "INSERT INTO answer (status, reason) VALUES ('$status', '$reason')";

    if ($conn->query($sql) === TRUE) {
        echo "Pesan anda telah terkirim!";
        header("location: thanks.html");
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
