import java.lang.*;
import java.util.*;
import java.io.*;

public class Main {
    public static int n;

    public static void main(String[] args) throws IOException {
        ArrayList<Integer> arr = new ArrayList<>();
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        String [] input = br.readLine().split(" ");

        for (int i = 0; i < input.length; i++){
            arr.add(Integer.parseInt(input[i]));
        }

        int min = Collections.min(arr);
        int max = Collections.max(arr);
        System.out.println(max * min);
    }
}