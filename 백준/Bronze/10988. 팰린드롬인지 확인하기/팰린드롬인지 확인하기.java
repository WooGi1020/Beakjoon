import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    static ArrayList<String> Str = new ArrayList<>();
    static ArrayList<String> rev_Str = new ArrayList<>();
    public static void main(String[] args) throws IOException {
        BufferedReader br  = new BufferedReader(new InputStreamReader(System.in));
        String [] input = br.readLine().split("");

        for(int i = 0; i<input.length; i++){
            Str.add(input[i]);
        }

        for(int i = Str.size()-1; i >= 0; i--){
            rev_Str.add(Str.get(i));
        }

        if(Str.equals(rev_Str)) System.out.println(1);
        else System.out.println(0);
    }
}