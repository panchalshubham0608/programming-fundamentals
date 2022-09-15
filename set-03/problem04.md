Goal: Student should know how to group more than one relational expressions.

Write a program to input bill and membership and print `You are eligible for free delivery` if either the user has membership or bill is more than 5000; otherwise print `You are not eligible for free delivery`

```c++
Enter the bill: 4000
Do you have membership(0/1)?: 1
You are eligible for free delivery
```

```c++
Enter the bill: 6000
Do you have membership(0/1)?: 0
You are eligible for free delivery
```

```c++
Enter the bill: 2000
Do you have membership(0/1)?: 0
You are not eligible for free delivery
```

#### C++ Solution
```c++
#include <iostream>
using namespace std;

int main() {
    int bill, hasMembership;
    cout << "Enter the bill ";
    cin >> bill;
    cout << "Do you have membership(0/1)?: ";
    cin >> hasMembership;
    if (bill > 5000 || hasMembership == 1) 
        cout << "You are eligible for free delivery" << endl;
    else
        cout << "You are not eligible for free delivery" << endl;
    return 0;
}
```