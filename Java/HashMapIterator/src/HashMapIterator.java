import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class HashMapIterator {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("One", 1);
        map.put("Two", 2);
        map.put("Three", 3);

        //Iterate using a while loop
        Iterator<Map.Entry<String, Integer>> iterator = map.entrySet().iterator();
        while (iterator.hasNext()){
            System.out.println(iterator.next());
        }

        System.out.println();

        for(Map.Entry<String, Integer> entry : map.entrySet()){
            System.out.println(entry);
        }
    }

}
