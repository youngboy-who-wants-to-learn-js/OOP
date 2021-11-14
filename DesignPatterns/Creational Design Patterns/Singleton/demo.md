Singleton method diagram:
![](./singleton.png)

Класс одиночки определяет статический метод `getInstance`,
который позволяет клиентам повторно использовать одно и то же
подключение к базе данных по всей программе.

class Database is
  Поле для хранения объекта-одиночки должно быть объявлено
  статичным.
    private static field instance: Database

  Конструктор одиночки всегда должен оставаться приватным,
  чтобы клиенты не могли самостоятельно создавать
  экземпляры этого класса через оператор `new`.
    private constructor Database() is
        // Здесь может жить код инициализации подключения к
        // серверу баз данных.
        // ...  

 Основной статический метод одиночки служит альтернативой
    конструктору и является точкой доступа к экземпляру этого
    класса.
    public static method getInstance() is
        if (Database.instance == null) then
            acquireThreadLock() and then
                // На всякий случай ещё раз проверим, не был ли
                // объект создан другим потоком, пока текущий
                // ждал освобождения блокировки.
                if (Database.instance == null) then
                    Database.instance = new Database()
        return Database.instance

   Наконец, любой класс одиночки должен иметь какую-то
    полезную функциональность, которую клиенты будут
    запускать через полученный объект одиночки.
    public method query(sql) is
        // Все запросы к базе данных будут проходить через этот
        // метод. Поэтому имеет смысл поместить сюда какую-то
        // логику кеширования.
        // ...

class Application is
    method main() is
        Database foo = Database.getInstance()
        foo.query("SELECT ...")
        // ...
        Database bar = Database.getInstance()
        bar.query("SELECT ...")
        // Переменная "bar" содержит тот же объект, что и
        // переменная "foo".        