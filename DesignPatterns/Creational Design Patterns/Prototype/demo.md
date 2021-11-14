Prototype method diagram:
![](./prototype_basic.png)

Базовый прототип.
abstract class Shape is
    field X: int
    field Y: int
    field color: string    

    Обычный конструктор.
    constructor Shape() is
        // ...

    Конструктор прототипа.
    constructor Shape(source: Shape) is
        this()
        this.X = source.X
        this.Y = source.Y
        this.color = source.color

 Результатом операции клонирования всегда будет объект из
 иерархии классов Shape.
 abstract method clone():Shape       

Конкретный прототип. Метод клонирования создаёт новый объект
текущего класса, передавая в его конструктор ссылку на
собственный объект. Благодаря этому операция клонирования
получается атомарной — пока не выполнится конструктор, нового
объекта ещё не существует. Но как только конструктор завершит
работу, мы получим полностью готовый объект-клон, а не пустой
объект, который нужно ещё заполнить.
class Rectangle extends Shape is
    field width: int
    field height: int

    constructor Rectangle(source: Rectangle) is
        Вызов родительского конструктора нужен, чтобы
        скопировать потенциальные приватные поля, объявленные
        в родительском классе.
        super(source)
        this.width = source.width
        this.height = source.height

    method clone():Shape is
        return new Rectangle(this)

class Circle extends Shape is
    field radius: int

    constructor Circle(source: Circle) is
        super(source)
        this.radius = source.radius

    method clone():Shape is
        return new Circle(this)        

Где-то в клиентском коде.

class Application is
    field shapes: array of Shape

    constructor Application() is
        Circle circle = new Circle()
        circle.X = 10
        circle.Y = 10
        circle.radius = 20
        shapes.add(circle)

        Circle anotherCircle = circle.clone()
        shapes.add(anotherCircle)
        // anotherCircle будет содержать точную копию circle.

        Rectangle rectangle = new Rectangle()
        rectangle.width = 10
        rectangle.height = 20
        shapes.add(rectangle)

    method businessLogic() is
        Плюс Прототипа в том, что вы можете клонировать набор
        объектов, не зная их конкретные классы.
        Array shapesCopy = new Array of Shapes.

        Например, мы не знаем, какие конкретно объекты
        находятся внутри массива shapes, так как он объявлен
        с типом Shape. Но благодаря полиморфизму, мы можем
        клонировать все объекты «вслепую». Будет выполнен
        метод clone того класса, которым является этот
        объект.
        foreach (s in shapes) do
            shapesCopy.add(s.clone())

        Переменная shapesCopy будет содержать точные копии
        элементов массива shapes.