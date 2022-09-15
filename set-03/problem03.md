Goal: Student should know how to group more than one relational expressions.

Write a program to input loan amount and unbilled amount and print `You are eligible for loan` if the loan amount is more than five million and unbilled amount is less than fifty thousand otherwise print `You are not eligible for loan`

```c++
Enter the loan amount: 6000000
Enter the unbilled amount: 25000
You are eligible for loan
```

```c++
Enter the loan amount: 4000000
Enter the unbilled amount: 15000
You are not eligible for loan
```

```c++
Enter the loan amount: 67000000
Enter the unbilled amount: 75000
You are not eligible for loan
```

#### C++ Solution
```c++
#include <iostream>
using namespace std;

int main() {
    int loanAmount, unbilledAmount;
    cout << "Enter the loan amount: ";
    cin >> loanAmount;
    cout << "Enter the unbilled amount: ";
    cin >> unbilledAmount;
    if (loanAmout > 5000000 && unbilledAmount < 50000) 
        cout << "You are eligible for loan" << endl;
    else
        cout << "You are not eligible for loan" << endl;
    return 0;
}
```