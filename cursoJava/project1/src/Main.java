public class Main {
    public static void main(String[] args) {
//          Parte 1
        int resultado = FuncionParte1(3,6,7);
        System.out.println("El resultado es " + resultado);

//          Parte 2
        Coche miCoche = new Coche();
        miCoche.IncrementarNumeroDePuertas();
        System.out.println("Numero de puertas " + miCoche.numeroDePuertas);
    }

    public static int FuncionParte1(int a, int b, int c){
        return  a+b+c;
    }

}