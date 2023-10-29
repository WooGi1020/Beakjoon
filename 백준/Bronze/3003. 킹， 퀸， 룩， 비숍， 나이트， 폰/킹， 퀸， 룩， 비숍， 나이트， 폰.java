import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    static ArrayList<Integer> chess_arr = new ArrayList<>(Arrays.asList(1,1,2,2,2,8));
    static ArrayList<Integer> dong_chess = new ArrayList<>();
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");

        StringBuilder sb = new StringBuilder();
        for(int i = 0; i<chess_arr.size(); i++){
            dong_chess.add(Integer.parseInt(input[i]));
            sb.append(chess_arr.get(i) - dong_chess.get(i)).append(" ");
        }
        System.out.print(sb);
    }
}
