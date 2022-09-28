Goal: Students should know how to build complex logical expressions using simple relational expressions.

Write a program to input a character and print `Alpha numeric` is the character is an alphabet (lowercase or uppercase) or a digit or an underscore; otherwise print `Non alpha numeric`. You can use **only one if-statement**

```c++
Enter a character: w
Alpha numeric
```

```c++
Enter a character: _
Alpha numeric 
```

```c++
Enter a chatacter: t
Alpha numeric
```

```c++
Enter a character: 9
Alpha numeric
```

```c++
Enter a character: \
Non alpha numeric
```


#### C++ Solution
```c++
#include <iostream>
using namespace std;

int main() {
    char ch;
    cout << "Enter a character: ";
    cin >> ch;
    if ( 
        ('a' <= ch && ch <= 'z') || 
        ('A' <= ch && ch <= 'Z') ||
        ('0' <= ch && ch <= '9') ||
        (ch == '_')
    ) {
        cout << "Alpha numeric" << endl;
    } else {
        cout << "Non alpha numeric" << endl;
    }
    return 0;
}
```