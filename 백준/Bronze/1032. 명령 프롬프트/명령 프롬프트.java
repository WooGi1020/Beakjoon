import java.util.*;
import java.io.*;
import java.lang.*;

public class Main {
    public static int n;
    public static void main(String[] args) throws IOException  {
        ArrayList <String> arr = new ArrayList <> ();
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        for(int i = 0; i<n; i++){
            StringTokenizer st1 = new StringTokenizer(br.readLine());
            String str = st1.nextToken();
            arr.add(str);
        }

        StringBuilder sb = new StringBuilder();
        boolean isSame=true;
        for(int i = 0; i< arr.get(0).length(); i++) {
            char c = arr.get(0).charAt(i);

            isSame=true;
            for(int j=1;j<n;j++) {
                if(c!= arr.get(j).charAt(i)) {
                    isSame=false;
                    break;
                }
            }

            if(isSame==true) {
                sb.append(c);
            } else
                sb.append('?');
        }
        System.out.println(sb.toString());

    }
}