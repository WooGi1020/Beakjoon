import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int [] alpha = new int [26];
        String input = br.readLine();

        for(int i = 0; i < input.length(); i++){
            if(input.charAt(i) >= 'a' && input.charAt(i) <= 'z')
                alpha[input.charAt(i) - 97]++;
            else
                alpha[input.charAt(i) - 65]++;
        }

        int max = -1;
        char ch = '?';
        for(int i = 0; i < 26; i++){
            if(alpha[i] > max){
                max = alpha[i];
                ch = (char)(i + 65);
            } else if (alpha[i] == max){
                ch = '?';
            }
        }
        System.out.println(ch);
    }
}
