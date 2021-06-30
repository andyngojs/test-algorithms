package app;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Number k: ");
        int k = sc.nextInt();
        System.out.println("Press number: " + k);

//        Initial Array

        int[] arr = new int [5];
        for (int i = 0; i < 5; i++) {
            arr[i] = sc.nextInt();
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        check(arr, k);
    }

    public static void check(int[] arr, int k) {
        boolean isInclude = false;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == k) {
                isInclude = true;
            }
        }
        if (isInclude) {
            System.out.println("co ton tai");
        } else {
            System.out.println("khong ton tai");
        }
    }
}
