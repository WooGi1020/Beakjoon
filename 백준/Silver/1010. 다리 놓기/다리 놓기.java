import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int [][] arr = new int[30][30];

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();
        for(int i = 0; i<N; i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int n = Integer.parseInt(st.nextToken());
            int m = Integer.parseInt(st.nextToken());

            sb.append(cal(m, n)).append("\n");
        }
        System.out.println(sb);
    }

    static int cal(int a, int b){
        if(arr[a][b] > 0) return arr[a][b];

        if(a == b || b == 0) return arr[a][b] = 1;

        return arr[a][b] = cal(a-1, b-1) + cal(a-1, b);
    }
}
