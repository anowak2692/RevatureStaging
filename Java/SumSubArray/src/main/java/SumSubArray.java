import java.util.LinkedList;
import java.util.Queue;

public class SumSubArray {
    public static int[] findSumSubArray(int[] nums, int sum){
        int currentSum = 0;
        int index = 0;
        //A queue to keep track of our contiguous subarray
        Queue<Integer> subArray = new LinkedList<>();
        //We need to be able to check every number in the parameter array, but also keep going
        while(index < nums.length || subArray.size() > 0){
            //Add the current number to our subarray if the current sum is less than our desired sum
            //This logic should not be performed if we reach the end of the int array, so we check to
            //make sure our index is not out of bounds
            if(currentSum < sum && index < nums.length){
                int num = nums[index];
                subArray.add(num);
                currentSum += num;
                index++;
            }
            //Remove the first element of the subarray if the current sum is greater than our desired sum
            else{
                currentSum -= subArray.remove();
            }

            //After modifying the current sum compare it to our desired sum
            if(currentSum == sum){
                //Turn the list into a Stream, then to an IntStream, and finally to an int array
                return subArray.stream().mapToInt((i) -> {return i;}).toArray();
            }
        }
        return new int[0];
    }
}
