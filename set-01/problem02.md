Goal: Student should know basic escape sequences such as newline, double quotes, etc.

---

#### Write a program to generate the following output
```
Hey there!
Welcome to the world of programming!
```

#### C Solution
```c
#include <stdio.h>
int main(){
    printf("Hey there!\n");
    printf("Welcome to the world of programming!\n");
    return 0;
}
```

#### C++ Solution
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hey there!\n";
    cout << "Welcome to the world of programming!\n";
    return 0;
}
```

---
Write a program to generate the following output
```
Hey there!
Welcome to the world of "programming"!
```
#### C Solution
```c
#include <stdio.h>
int main(){
    printf("Hey there!\n");
    printf("Welcome to the world of \"programming\"!\n");
    return 0;
}
```

#### C++ Solution
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hey there!\n";
    cout << "Welcome to the world of \"programming\"!\n";
    return 0;
}
```
