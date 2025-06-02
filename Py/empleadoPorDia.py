from empleado import Empleado

class EmpleadoPorDia(Empleado):
    def __init__(self, nombre, apellido, dni, valorDia):
        super().__init__(nombre, apellido, dni)
        self.valorDia = valorDia
        
    def calcularSueldo(self):
        return self.valorDia * 20