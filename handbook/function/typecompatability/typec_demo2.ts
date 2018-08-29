// 枚举类型之间不兼容，但是和数字类型兼容
enum Status { Ready, Waiting };

enum Color2 { Red, Blue, Green };

let status2 = Status.Ready;
status2 = 1;
status2 = Color2.Green;  //error
