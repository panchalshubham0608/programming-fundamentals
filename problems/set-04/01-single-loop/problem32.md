Goal: Student should know common problems involving single loop. **(Problem Solving)**  

### Guess the number game
Generate a random number X. Now repeatedly ask the user to enter a number until user guesses the correct number that's generated.  
- If the user's answer is greater than the correct number, print `High`
- If the user's answer is smaller than the correct number, print `Low`
- If the user's answer is correct print `You have found it`  

Use the following template to generate a random number.  
```c
#include <stdio.h>
#include <time.h>

int main() {
    srand(time(NULL));
    // generates a random number [1, 100]
    int X = (rand() % 100) + 1;
    printf("Random number generated: %d\n", X);
    return 0;
}
```


```
Started number with X = 10
Enter your input: 15
High
Enter your input: 6
Low
Enter your input: 8
Low
Enter your input: 11
High
Enter your input: 10
You have found it
```
