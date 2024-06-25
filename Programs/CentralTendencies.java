import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Arrays;
import java.util.HashMap;

public class CentralTendencies {
    public static void main(String[] args) {
        int[] data1 = { 1, 2, 3 };
        int[] data2 = { 41, 18467, 6334, 26500, 19169 };
        Arrays.sort(data2);
        System.out.println("Mean: " + mean(data2));
        System.out.println("Median: " + median(data2));
        System.out.println("Mode: " + mode(data2));
    }

    // mean to six decimal places
    public static double mean(int[] data) {
        BigDecimal sum = new BigDecimal(0);
        for (int i = 0; i < data.length; i++) {
            sum = sum.add(BigDecimal.valueOf(data[i]));
        }
        BigDecimal length = new BigDecimal(data.length);
        return sum.divide(length, 6, RoundingMode.HALF_UP).doubleValue();
    }

    public static double median(int[] data) {
        int n = data.length;
        if (n % 2 == 0) {
            return (data[n / 2 - 1] + data[n / 2]) / 2.0;
        } else {
            return data[n / 2];
        }
    }

    public static int mode(int[] data) {
        int mode = data[0];
        int maxCount = 0;
        for (int i = 0; i < data.length; i++) {
            int value = data[i];
            int count = 0;
            for (int j = 0; j < data.length; j++) {
                if (data[j] == value) {
                    count++;
                }
            }
            if (count > maxCount) {
                mode = value;
                maxCount = count;
            }
        }
        return mode;
    }

    // mode with O(n) time complexity
    public static int mode2(int[] data) {
        int mode = data[0];
        int maxCount = 0;
        HashMap<Integer, Integer> count = new HashMap<Integer, Integer>();
        for (int i = 0; i < data.length; i++) {
            int value = data[i];
            if (count.containsKey(value)) {
                count.put(value, count.get(value) + 1);
            } else {
                count.put(value, 1);
            }
            if (count.get(value) > maxCount) {
                mode = value;
                maxCount = count.get(value);
            }
        }
        return mode;
    }
}