<?php
  $inp = $_POST['myInp'];

  switch ($inp) {
    case 'val1':
      echo 'string val 1';
      break;
    case 'val2':
      echo 'string val 2';
      break;

    default:
      echo "string default";
      break;
  }
 ?>
