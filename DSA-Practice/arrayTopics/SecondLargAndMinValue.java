public class SecondLargAndMinValue {
    public static void main(String[] args) {
        int[] nums = {1,2,4,7,7,5};
        int[] nums1 = {-1};
        int[] values = second(nums);
        System.out.println("Second Smallest:" + values[1]);
        System.out.println("Second largest:" + values[2]);
//        System.out.println("Second largest:" + sortedArr[-2]);
//        one-way
//        int[] sortedArr = sortArr(nums);
//        System.out.println("Second Smallest:" + sortedArr[1]);
//        System.out.println("Second largest:" + sortedArr[-2]);

//        second-way
//                four variables => largest,2_largest, smallest, 2_smallest
//                return 2_largest, 2_smallest
    }
//    public static int[] sortArr(int[] arr){
//
//    }

    public static int[] second(int[] arr){
        int[] values = new int[4];
        values[2]= Integer.MIN_VALUE;
        values[3] = Integer.MIN_VALUE;
        values[0] = Integer.MAX_VALUE;
        values[1] = Integer.MAX_VALUE;

        if(arr.length == 1){ values[1] = arr[0]; values[2] = arr[0];return values; };
        for (int i=1; i<arr.length; i++ ){
           if(arr[i] < values[0]) {
            values[0] = arr[i];
            values[1] = values[0];
           } else if ( arr[i] < values[1] && arr[i] != values[0]) {
               values[1] = arr[i];
           }
            if(arr[i] > values[3]) {
                values[3] = arr[i];
                values[2] = values[3];
            } else if ( arr[i] < values[2] && arr[i] != values[3]) {
                values[2] = arr[i];
            }
        }

return values;
    }
}

//Problem Statement: Given an array, find the second smallest and second largest element in the array.
// Print ‘-1’ in the event that either of them doesn’t exist.

//Examples
//Example 1:
//Input:
//        [1,2,4,7,7,5]
//Output:
//Second Smallest : 2
//Second Largest : 5
//Explanation:
//The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

//Example 2:
//Input:
//        [1]
//Output:
//Second Smallest : -1
//Second Largest : -1
//Explanation:
//Since there is only one element in the array, it is the largest and smallest element present in the array.
// There is no second largest or second smallest element present.