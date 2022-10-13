Goal: Student should know logic building with arrays.  

Write a program to count the length of the longest chain in an array.  
**NOTE:** A chain is defined as the sequence of repeating numbers.

**Input format:**  
The first line of input contains a single integer N denoting the number of elements in the array.  
The second line of input contains N space separated integers denoting the elements of the array.  

**Output format:**  
Print the length of the longest chain in array.

**Example**
```
14
1 2 2 3 2 2 2 3 3 3 3 1 1 1
```
The following is the pictorial representation of the array:  
|0|1|2|3|4|5|6|7|8|9|10|11|12|13|
|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
|1|2|2|3|2|2|2|3|3|3|3|1|1|1|


The following are the chains:
| Start Index | Element | Length |
|--|--|--|
|0|1|1|
|1|2|2|
|3|3|1|
|4|2|3|
|7|3|4|
|11|1|3|

The longest chain is highlighted below: 
|0|1|2|3|4|5|6|7|8|9|10|11|12|13|
|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
|1|2|2|3|2|2|2|`3`|`3`|`3`|`3`|1|1|1|
