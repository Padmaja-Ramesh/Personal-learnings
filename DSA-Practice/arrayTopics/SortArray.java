public class SortArray{
    public static void main(String[] args) {
        int[] a= {2,5,1,3,0};
        int value = largestM(a);
        System.out.println(value);
        
    }
    public static int largestM(int[] arr){

        int largestValue = 0;
        if(arr.length == 0) return largestValue;
        largestValue = arr[0];
        for(int i=1; i<arr.length; i++){
            if(arr[i] > largestValue) largestValue = arr[i];
        }
        return largestValue;
    }
}

// Find the Largest element in an array


// 1599

// 21
// Problem Statement: Given an array, we have to find the largest element in the array.

// Examples
// Example 1:
// Input:
//  arr[] = {2,5,1,3,0};
// Output:
//  5
// Explanation:
//  5 is the largest element in the array. 

// Example2:
// Input:
//  arr[] = {8,10,5,7,9};
// Output:
//  10
// Explanation:
//  10 is the largest element in the array. 