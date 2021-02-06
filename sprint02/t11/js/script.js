// the first loop
var i = '';
var res1 = 0; 
do {
      res1 += i + ' '  ;//
      i++;
} while(i < 5);

// the second loop
i = '';
var res2 = 0;
while(i < 5)
{
    res2 += i + ' '  ;
    i++;
}
alert('do while: ' + res1+ '\n' + 'while: ' + res2);