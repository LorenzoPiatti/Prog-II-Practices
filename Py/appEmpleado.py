from empleadoPorDia import EmpleadoPorDia
from empleadoPorMes import EmpleadoPorMes

def main():
    personal = []
    
    emp = EmpleadoPorMes("Juan", "Perez", "44819643", 2000)
    personal.append(emp)
    print(emp.calcularSueldo())
    
    emp = EmpleadoPorDia("Loreno", "Piatti", "12345678", 100)
    personal.append(emp)
    print(emp.calcularSueldo())
    
    totalSueldos = 0
    for elEmp in personal:
        print(f"{elEmp.nombre} {elEmp.apellido} ({elEmp.dni}) Sueldo: {elEmp.calcularSueldo()}")
        totalSueldos += elEmp.calcularSueldo()
    print(f"El total de sueldos es: {totalSueldos}")
    
if __name__ == "__main__":
    main()