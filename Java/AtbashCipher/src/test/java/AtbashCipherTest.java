import org.junit.Test;

import static org.junit.Assert.*;

public class AtbashCipherTest {

    @Test
    public void encryptApple() {
        String result = AtbashCipher.encrypt("apple");
        assertEquals("zkkov", result);
    }

    @Test
    public void encryptHelloWorld() {
        String result = AtbashCipher.encrypt("Hello world!");
        assertEquals("Svool dliow!", result);
    }

    @Test
    public void encryptChristmasIsThe25thOfDecember() {
        String result = AtbashCipher.encrypt("Christmas is the 25th of December");
        assertEquals("Xsirhgnzh rh gsv 25gs lu Wvxvnyvi", result);
    }
}