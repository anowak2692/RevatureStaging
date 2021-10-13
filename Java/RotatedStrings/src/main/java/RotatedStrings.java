import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

public class RotatedStrings {
    public static void main(String[] args) {
        System.out.println(stringsAreRotations("frankfurt", "furtfrank"));
    }

    public static boolean stringsAreRotations(String s1, String s2){
        //Check and see if the strings have the same number of characters
        if(s1.length() == s2.length()){
            //Check to see if the strings have the same characters
            char[] string1 = s1.toCharArray();
            char[] string2 = s2.toCharArray();
            Arrays.sort(string1);
            Arrays.sort(string2);
            if(Arrays.equals(string1, string2)){
                //Check all possible rotations of String 1 against String 2
                Queue<Character> charQueue1 = stringToList(s1);
                Queue<Character> charQueue2 = stringToList(s2);
                for(int i = 0; i < charQueue1.size(); i++){
                    //If a rotation of the first string matches the second string we are done
                    if(charQueue1.equals(charQueue2)){
                        return true;
                    }
                    //Otherwise, take the front character and move it to the back for a new rotation
                    charQueue1.add(charQueue1.remove());
                }
                return false;
            }
            return false;
        }
        return false;
    }

    private static LinkedList<Character> stringToList(String s){
        LinkedList<Character> charList = new LinkedList<>();
        for(char c : s.toCharArray()){
            charList.add(c);
        }
        return charList;
    }
}
