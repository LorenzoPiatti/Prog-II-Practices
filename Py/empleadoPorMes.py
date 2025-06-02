from empleado import Empleado

class EmpleadoPorMes(Empleado):
    def __init__(self, nombre, apellido, dni, valorMensual):
        super().__init__(nombre, apellido, dni)
        self.valorMensual = valorMensual
        
    def calcularSueldo(self):
        return self.valorMensual - (self.valorMensual * 0.18)