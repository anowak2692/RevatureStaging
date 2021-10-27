import org.junit.Test;

import static org.junit.Assert.*;

public class SumSubArrayTest {

    @Test
    public void findSumSubArray() {
        int[] nums = {14, 12, 70, 15, 99, 65, 21, 90};
        int[] expected = {12, 70, 15};
        int[] result = SumSubArray.findSumSubArray(nums, 97);
        assertArrayEquals(expected, result);
    }

    @Test
    public void findSumSubArray2() {
        int[] nums = {14, 12, 70, 15, 99, 65, 21, 90};
        int[] expected = {70, 15, 99};
        int[] result = SumSubArray.findSumSubArray(nums, 184);
        assertArrayEquals(expected, result);
    }

    @Test
    public void findSumSubArrayReturnEmptyIfSumNotFound() {
        int[] nums = {14, 12, 70, 15, 99, 65, 21, 90};
        int[] expected = new int[0];
        int[] result = SumSubArray.findSumSubArray(nums, 201);
        assertArrayEquals(expected, result);
    }

    @Test
    public void findSumSubArrayWhereSumIsFirstValue() {
        int[] nums = {14, 12, 70, 15, 99, 65, 21, 90};
        int[] expected = {14};
        int[] result = SumSubArray.findSumSubArray(nums, 14);
        assertArrayEquals(expected, result);
    }

    @Test
    public void findSumSubArrayWhereSumIsLastValue() {
        int[] nums = {14, 12, 70, 15, 99, 65, 21, 90};
        int[] expected = {90};
        int[] result = SumSubArray.findSumSubArray(nums, 90);
        assertArrayEquals(expected, result);
    }
}