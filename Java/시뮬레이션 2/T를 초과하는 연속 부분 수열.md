```java
import java.io.*;

import java.util.*;

  

public class Main {

    public static int n1, n2;

    public static void main(String args[]) throws Exception {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String [] input1 = br.readLine().split(" ");

        n1 = Integer.parseInt(input1[0]);

        n2 = Integer.parseInt(input1[1]);

        String [] input2 = br.readLine().split(" ");

        int [] arr = new int[input2.length];

        for (int i = 0; i<input2.length; i++) {

            arr[i] = Integer.parseInt(input2[i]);

        }

        int[] arr2 = new int[n1];

        int cnt = 0;

        for(int i = 0; i<n1; i++) {

            if(i == 0 || arr[i] > n2 && arr[i-1] > n2) {

                cnt++;

            } else {

                cnt = 1;

            }

            arr2[i] = cnt;

        }

        int max = arr2[0];

        for(int i = 0; i<n1; i++) {

            if(arr2[i] > max) {

                max = arr2[i];

            }

        }

        System.out.println(max);

    }

}
```