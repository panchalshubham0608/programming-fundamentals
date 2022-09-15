Goal: Student should know when to escape the characters. Avoid escaping characters when not required.

---

Write a program to generate the following output:
```
John's home is 10Km away from here.
```

#### C Solution
```c
#include <stdio.h>
int main(){
    printf("John's home is 10Km away from here.\n");
    return 0;
}
```

#### C++ Solution
```cpp
#include <iostream>
using namespace std;
int main(){
    cout <<"John's home is 10Km away from here.\n";
    return 0;
}
```

---
NOTE: Any answer which escapes the apostrophe is unaccepted for example `printf("John\'s home is 10Km away from here.")`. Even though it generates the same output but still it's not accepted because student is not clear that they need not to escape the apostrophe in this case.
