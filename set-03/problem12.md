Goal: Student should know explicit type-casting.

Write a program to input a floating point value. If the value represents an integer then print `Integer` otherwise print `Float`

```c++
Enter a number: 1.23
Float
```

```c++
Enter a number: 1.00
Integer
```

#### C++ Solution
```c++
#include <iostream>
using namespace std;

int main() {
    float number;
    cout << "Enter a number: ";
    cin >> number;
    
    int intVal = (int)number;
    if (intVal == number)
        cout << "Integer" << endl;
    else 
        cout << "Float" << endl;
    
    return 0;
}
```