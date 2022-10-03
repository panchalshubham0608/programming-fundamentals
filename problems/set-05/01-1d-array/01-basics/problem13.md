Goal: Student should know linear search.  

Write a program to input `N` integers from user followed by a search key `target` and output the index of **first occurrence** of `target` in the array if exists; otherwise output -1.


**Input Format**:  
The first line of input contains a single integer N  
The second line of input contains N space separated integers.  
The third line of input contains the key to be searched.

**NOTE**: The array elements are zero-based indexed.  
|Index|0|1|2|3|4|5|6|7|8|9|
|--|--|--|--|--|--|--|--|--|--|--|
|Element|5|8|1|9|2|3|0|8|4|6|


```
10
5 8 1 9 2 3 0 8 4 6
2
Found (index = 4)
```  

```
10
5 8 1 9 2 3 0 8 4 6
9
Found (index = 3)
```  

```
10
5 8 1 9 2 3 0 8 4 6
7
Not Found (index = -1)
```  
