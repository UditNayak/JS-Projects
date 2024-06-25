import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] numbers = new int[n];
        for (int i = 0; i < n; i++) {
            numbers[i] = scanner.nextInt();
        }
        scanner.close();
        long ans = 0;
        int mod = 998244353;
        int sum = 0;
        for (int i = 0; i < n; i++) {
            // get the length of numbers[i]
            int len = countDigits(numbers[i]);
            ans = (sum * (int)Math.pow(10,len)) % mod;
            ans = (ans + i*numbers[i]) % mod;
            sum += numbers[i];
        }
        System.out.println(ans);
    }

    public static int countDigits(int num) {
        int count = 0;
        if (num == 0) {
            return 1;  // 0 has 1 digit
        }
        num = Math.abs(num); // Handle negative numbers
        while (num != 0) {
            num /= 10;
            count++;
        }
        return count;
    }
}