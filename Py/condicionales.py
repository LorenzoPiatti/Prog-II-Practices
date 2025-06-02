# Ejercicio 1
print("Ejercicio 1")

a = float(input("Ingrese el primer número: "))
b = float(input("Ingrese el segundo número: "))

if a > b:
    print("El mayor es:", a)
elif b > a:
    print("El mayor es:", b)
else:
    print("Ambos números son iguales.")

# Ejercicio 2
print("Ejercicio 2")

edad = int(input("Ingrese su edad: "))

if edad < 18:
    print("Es menor de edad.")
else:
    print("Es mayor de edad.")
    
# Ejercicio 3
print("Ejercicio 3")

anio = int(input("Ingrese un año: "))

if (anio % 4 == 0 and anio % 100 != 0) or (anio % 400 == 0):
    print("Es un año bisiesto.")
else:
    print("No es un año bisiesto.")
    
# Ejercicio 4
print("Ejercicio 4")

num1 = float(input("Ingrese el primer número: "))
num2 = float(input("Ingrese el segundo número: "))
operacion = input("Ingrese la operación (+, -, *, /): ")

if operacion == "+":
    print("Resultado:", num1 + num2)
elif operacion == "-":
    print("Resultado:", num1 - num2)
elif operacion == "*":
    print("Resultado:", num1 * num2)
elif operacion == "/":
    if num2 != 0:
        print("Resultado:", num1 / num2)
    else:
        print("Error: división por cero.")
else:
    print("Operación inválida.")
    
# Ejercicio 5
print("Ejercicio 5")

nota = int(input("Ingrese una nota (0 a 10): "))

if 0 <= nota <= 3:
    print("Reprobado")
elif 4 <= nota <= 5:
    print("Aplazado")
elif 6 <= nota <= 7:
    print("Aprobado")
elif 8 <= nota <= 10:
    print("Sobresaliente")
else:
    print("Nota inválida")
    
# Ejercicio 6
print("Ejercicio 6")

nombre = input("Ingrese su nombre: ").strip().capitalize()
sexo = input("Ingrese su sexo (M/F): ").strip().upper()

if (sexo == "F" and nombre < "M") or (sexo == "M" and nombre > "N"):
    print("Grupo A")
else:
    print("Grupo B")
    
# Ejercicio 7
print("Ejercicio 7")

puntuacion = float(input("Ingrese su puntuación (0.0, 0.4, 0.6 o más): "))
salario_base = 740000

if puntuacion == 0.0:
    nivel = "Inaceptable"
elif puntuacion == 0.4:
    nivel = "Aceptable"
elif puntuacion >= 0.6:
    nivel = "Meritorio"
else:
    nivel = None

if nivel:
    ganancia = puntuacion * salario_base
    print(f"Nivel: {nivel}")
    print(f"Dinero obtenido: ${ganancia:,.2f}")
else:
    print("Puntuación no válida.")