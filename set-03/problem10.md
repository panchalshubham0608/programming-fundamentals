Goal: Students should know how to convert a digit to an integer effectively.

Write a program to input a character. If the character is a digit then print the number obtained by multiplying 3 to the digit, otherwise print `Not a digit`.

```c++
Enter a character: 7
7 * 3 = 21
```c++

```c++
Enter a character: #
Not a digit
```


#### C++ Solution
```c++
#include <iostream>
using namespace std;

int main() {
    char ch;
    cout << "Enter a character: ";
    cin >> ch;

    if ('0' <= ch && ch <= '9') {
        int digit = ch - '0';
        cout << digit << " * 3 = " << (digit*3) << endl;
    } else {
        cout << "Not a digit" << endl;
    }
    return 0;
}
```
