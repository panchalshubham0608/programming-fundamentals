import java.io.*;

public class Judge02 {

    public static String run(String executable, String input) throws IOException, InterruptedException {
        Process process = Runtime.getRuntime().exec(new String[]{executable}, null, new File("."));
        BufferedReader br = new BufferedReader(new InputStreamReader(process.getInputStream()));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(process.getOutputStream()));
        bw.write(input);
        bw.write("\n");
        bw.flush();
        int exitCode = process.waitFor();
        if (exitCode != 0) {
            throw new RuntimeException("Process exited with code " + exitCode);
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = br.readLine()) != null) sb.append(line);
        return sb.toString();
    }


    private static String expectedOutput(int N) {
        StringBuilder output = new StringBuilder();
        output.append("Enter a number: ");
        output.append("The sum of first ").append(N).append(" natural numbers is ");
        int sum = 0;
        for (int i = 1; i <= N; i++)
            sum = sum + i;
        output.append(sum);
        return output.toString();
    }

    public static void main(String[] args) {
        if (args.length != 1) {
            System.err.println("Usage: java Judge02 <executable>");
            System.exit(1);
        }
        Object[][] testCases = {
            {5, expectedOutput(5)},
            {10, expectedOutput(10)},
            {20, expectedOutput(20)},
            {50, expectedOutput(50)},
            {100, expectedOutput(100)},
            {1000, expectedOutput(1000)},
        };

        int idx = 0;
        for (Object[] testCase : testCases) {
            ++idx;
            int N = (int) testCase[0];
            String expectedOutput = (String) testCase[1];
            String input = String.valueOf(N);
            String output = null;
            try {
                output = run(args[0], input);
            } catch (Exception e) {
                System.err.println("\u001B[31m✖️ Test case " + idx + " failed\u001B[0m");
                System.exit(1);
            }
            if (output != null) {
                if (!output.equals(expectedOutput)) {
                    System.err.println("\u001B[31m✖️ Test case " + idx + " failed\u001B[0m");
                    System.err.println("\u001B[1mInput:\u001B[0m\n" + input);
                    System.err.println("\u001B[1mExpected output:\u001B[0m\n" + expectedOutput);
                    System.err.println("\u001B[1mActual output:\u001B[0m\n" + output);
                    System.exit(1);
                } else {
                    System.out.println("\u001B[32m✔️ Test case " + idx + " passed\u001B[0m");
                }    
            }
        }
    }
}