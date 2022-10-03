Goal: Student should know how to iterate through array in non-trivial way.  

Write a program to input `N` integers from user output the pair of elements from ends.  

**Input Format**:  
The first line of input contains a single integer N  
The second line of input contains N space separated integers.  

**NOTE**: The array elements are zero-based indexed.  
|Index|0|1|2|3|4|5|6|7|8|9|
|--|--|--|--|--|--|--|--|--|--|--|
|Element|5|8|1|9|2|3|0|8|4|6|

```cpp
10
5 8 1 9 2 3 0 8 4 6
The pair of elements from both ends are:  
(5, 6)
(8, 4)
(1, 8)
(9, 0)
(2, 3)
```  
_Explanation:_  
Given the number of elements = 10  
The array indices are: 0, 1, ..., 8, 9  
The pair from both ends would be:  
(arr[0], arr[9])  = (5, 6)  
(arr[1], arr[8])  = (8, 4)  
(arr[2], arr[7])  = (1, 8)  
(arr[3], arr[6])  = (9, 0)  
(arr[4], arr[5])  = (2, 3)  
