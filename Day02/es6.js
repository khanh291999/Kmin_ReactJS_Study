//Hàm Input nhận vào n phần tử (1:1,2: 1,2,3,4,5,6,7)
//OUTPUT Tổng các phần tử

var tinhtong = function(...n)
{
   let total =0;
    for(var i=0 ; i<n.length;i++)
    {
        total = total + n[i]; 
    }
return total;
}
console.log(tinhtong(2,3,4,7));