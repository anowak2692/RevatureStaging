import java.util.ArrayList;

public class CreditCardValidator {
    public static void main(String[] args) {

    }

    public static boolean validateCard(long cardNumber){
        //Check the num of digits
        if(cardNumber >= (Math.pow(10, 13)) && cardNumber < (Math.pow(10, 17))){
            int checkDigit = (int) (cardNumber % 10);
            cardNumber /= 10;
            ArrayList<Integer> reverse = reverseDigitArray(cardNumber);
            //Do the selective doubling on numbers that are in odd-numbered positions
            //in the reversed array (0 index is the first position, so it is odd)
            for(int i = 0; i < reverse.size(); i += 2){
                int doubledValue = reverse.get(i) * 2;
                if(doubledValue >= 10){
                    int newValue = 1 + (doubledValue % 10);
                    reverse.set(i, newValue);
                }
                else {
                    reverse.set(i, doubledValue);
                }
            }
            int sum = reverse.stream().reduce( (prev, current) -> prev + current).get();
            return (10 - (sum % 10)) == checkDigit;
        }
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
