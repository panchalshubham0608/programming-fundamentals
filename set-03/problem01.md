Goal: Student should know basic if-else

Write a program to input an integer and print "Even" if it's even otherwise print "Odd".

```c++
Enter a number: 10
Even
```

```c++
Enter a number: 21
Odd
```

#### C++ Solution
```c++
#include <iostream>
using namespace std;

int main(){
    int number;
    cout << "Enter a number: ";
    cin >> number;
    if (number % 2 == 0)
        cout << "Even" << endl;
    else 
        cout << "Odd" << endl;
    return 0;
}
```