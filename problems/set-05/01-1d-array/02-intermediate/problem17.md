Goal: Student should know logic building with arrays.  

Write a program to
**Input format:**  
The first line of input contains a single integer N denoting the number of elements in the array.  
The second line of input contains N space separated integers denoting the elements of the array.  

**Output format:**  
Print the length of the longest chain in array.

**Example**
```
4
1 2 3 4
1
2
3
4
1 2
2 3
3 4
1 2 3
2 3 4
1 2 3 4
```

Given arr=[1, 2, 3, 4]  
Subarrays with size= 1 are [1], [2], [3], [4]  
Subarrays with size=2 are [1, 2], [2, 3], [3, 4]  
Subarrays with size=3 are [1, 2, 3], [2, 3, 4]  
Subarrays with size=4 are [1, 2, 3, 4]  
