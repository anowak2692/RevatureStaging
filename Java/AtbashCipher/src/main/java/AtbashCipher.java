public class AtbashCipher {
    public static void main(String[] args) {

    }

    public static String encrypt(String s){
        StringBuilder result = new StringBuilder();
        for(char c : s.toCharArray()){
            int ascii = (int)c;
            char newChar = c;
            //Capital letters
            if(ascii >= 65 && ascii <= 90){
                newChar = (char)(90 - (ascii - 65));
            }
            //Lowercase letters
            else if(ascii >= 97 && ascii <= 122){
                newChar = (char)(122 - (ascii - 97));
            }
            result.append(newChar);
        }
        return result.toString();
    }
}
