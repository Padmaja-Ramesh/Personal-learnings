public class CheckSortArray {
    public static void main(String[] args) {
        int n = 5;
        int[] nums ={1,2,3,4,5};
        int[] num1 = {5,4,6,7,8};
        boolean boolValue = checkSort(n,nums);
        boolean boolValue1 = checkSort(n,num1);
        System.out.println(boolValue);
        System.out.println(boolValue1);

    }

    public static boolean checkSort(int n, int[] arr){
        if(n == 0 ) return false;
        int i=0;
        while((n-1) > i){
            if(arr[i] > arr[i+1])  return false;
            i++;
        }
        return true;
    }
}
//Check if an Array is Sorted
//Problem Statement: Given an array of size n, write a program to check
// if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not.
// If the array is sorted then return True, Else return False.
//
//        Note: Two consecutive equal values are considered to be sorted.