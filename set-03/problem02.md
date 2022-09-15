Goal: Student should know that if-statement can be used standalone

Write a program to input an integer and `Greater than 10` if the number is greater than 10. No output should be generated when the number is smaller than or equal to 10.

```c++
Enter a number: 20
Greater than 10
```

```c++
Enter a number: 9
```

#### C++ Solution
```c++
#include <iostream>
using namespace std;

int main(){
    int number;
    cout << "Enter a number: ";
    cin >> number;
    if (number > 10)
        cout << "Greater than 10" << endl;
    return 0;
}
```