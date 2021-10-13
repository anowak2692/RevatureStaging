import java.util.ArrayList;

public class CreditCardValidator {
    public static void main(String[] args) {

    }

    public static boolean validateCard(long cardNumber){
        //Check the number of digits
        if(cardNumber >= (Math.pow(10, 13)) && cardNumber < (Math.pow(10, 19))){
            //Store the check digit for the end
            int checkDigit = (int) (cardNumber % 10);
            cardNumber /= 10;
            ArrayList<Integer> reverse = reverseDigitArray(cardNumber);
            //Do the selective doubling on numbers that are in odd-numbered positions
            //in the reversed array (0 index is the first position, so it is odd)
            for(int i = 0; i < reverse.size(); i += 2){
                int doubledValue = reverse.get(i) * 2;
                //Values greater than ten get their digits added to create a single-digit value
                if(doubledValue >= 10){
                    int newValue = 1 + (doubledValue % 10);
                    reverse.set(i, newValue);
                }
                else {
                    reverse.set(i, doubledValue);
                }
            }
            //Get the sum of the modified array by using the reduce method of Streams
            int sum = reverse.stream().reduce( (prev, current) -> prev + current).get();
            //Check to see if 10 minus the last digit of the sum is equal to the check digit we saved before
            return (10 - (sum % 10)) == checkDigit;
        }
        //Return false if given a number with improper number of digits
        return false;
    }

    public static ArrayList<Integer> reverseDigitArray(long number){
        long remainder;
        ArrayList<Integer> reverse = new ArrayList<>();
        while(number != 0){
            remainder = number % 10;
            reverse.add((int)remainder);
            number /= 10;
        }
        return reverse;
    }
}
