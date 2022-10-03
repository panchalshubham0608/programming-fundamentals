Goal: Student should know how to perform element-wise sum of two arrays.  

Write a program to input two arrays of size `N1` and `N2` and print the array obtained by sum of the two arrays. The size of the new array should be `min(N1, N2)`


**Input Format**:  
The first line of input contains two integers N1 and N2
The second line of input contains N1 space separated integers denoting elements in first array.  
The third line of input contains N2 space separated integers denoting elements in the second array.  

**NOTE**: The array elements are zero-based indexed.  
|Index|0|1|2|3|4|5|6|7|8|9|
|--|--|--|--|--|--|--|--|--|--|--|
|Element|1|2|3|4|5|5|4|3|2|1|


```
5 5
1 2 3 4 5
0 3 5 2 6
1 5 8 6 11
```  
arr1 = [1, 2, 3, 4, 5]  
arr2 = [0, 3, 5, 2, 6]  
Element-wise sum:= arr1 + arr2 = [1, 5, 8, 6, 11]    

```
5 3
1 2 3 4 5
0 3 5
1 5 8
```  
arr1 = [1, 2, 3, 4, 5]  
arr2 = [0, 3, 5]  
Element-wise sum:= arr1 + arr2 = [1, 5, 8]    

