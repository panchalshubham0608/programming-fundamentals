Goal: Student should know how to convert lower-case characters to upper-case and vice-versa based on ASCII values.

Write a program to input a character. If the character represents a lowercase alphabet then print its uppercase representation or vice-versa. If it does not represent a character then print `Not an alphabet`

```c++
Enter a character: w
Uppercase representation of w is W
```

```c++
Enter a character: G
Lowercase representation of G is g
```

```c++
Enter a character: %
Not an alphabet
```



#### C++ Solution
```c++
#include <iostream>
using namespace std;

int main() {
    char ch;
    cout << "Enter a character: ";
    cin >> ch;

    if ('a' <= ch && ch <= 'z')
        cout << "Uppercase representation of " << ch << " is " << (char)(ch - 32) << endl;
    else if ('A' <= ch && ch <= 'Z')
        cout << "Lowercase representation of " << ch << " is " << (char)(ch + 32) << endl;
    else
        cout << "Not an alphabet" << endl;
    
    return 0;
}
```