Goal: Student should know how to find second maximum in an array.  

Write a program to input `N` integers from user output the second maximum element.  
**Input Format**:  
The first line of input contains a single integer N  
The second line of input contains N space separated integers.  

**NOTE**:  
- It is guaranteed that the second maximum element exist in the array.  
- _The second maximum element is defined as the element that comes at second position when we arrange the numbers in descending order `removing the duplicates`_

```cpp
10
5 8 1 9 2 3 0 8 4 6
The second maximum element is 8
```

```cpp
10
5 8 1 9 2 3 0 9 4 6
The second maximum element is 8
```
_Explanation_:   
Arrange the items in decreasing order removing the duplicates:  9 8 6 5 4 3 2 1 0  
The item at second position is 8 and hence the second maximum is 8.  
