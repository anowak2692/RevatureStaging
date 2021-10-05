import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class CreditCardValidatorTest {

    @Test
    void validateCard() {
        boolean result = CreditCardValidator.validateCard(1234567890123452L);
        assertTrue(result);
    }

    @Test
    void validateCardReturnsFalseWithInvalidCardNumber() {
        boolean result = CreditCardValidator.validateCard(1234567890123456L);
        assertFalse(result);
    }

    @Test
    void reverseNumber() {
        ArrayList<Integer> expected = new ArrayList<>(Arrays.asList(5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1));
        assertEquals(expected, CreditCardValidator.reverseDigitArray(123456789012345L));
    }
}