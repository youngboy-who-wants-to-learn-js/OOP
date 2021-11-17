// Компоновщик — это структурный паттерн проектирования, который позволяет сгруппировать множество объектов в древовидную структуру, а затем работать с ней так, как будто это единичный объект.

/**
 * Базовый класс Компонент объявляет общие операции как для простых, так и для
 * сложных объектов структуры.
 */

abstract class Component {
  protected parent: Component;
  /**
   * При необходимости базовый Компонент может объявить интерфейс для
   * установки и получения родителя компонента в древовидной структуре. Он
   * также может предоставить некоторую реализацию по умолчанию для этих
   * методов.
   */

  public setParent(parent: Component) {
    this.parent = parent;
  }

  public getParent(): Component {
    return this.parent;
  }

  /**
   * В некоторых случаях целесообразно определить операции управления
   * потомками прямо в базовом классе Компонент. Таким образом, вам не нужно
   * будет предоставлять конкретные классы компонентов клиентскому коду, даже
   * во время сборки дерева объектов. Недостаток такого подхода в том, что эти
   * методы будут пустыми для компонентов уровня листа.
   */

  public add(component: Component): void {}

  public remove(component: Component): void {}

  /**
   * Вы можете предоставить метод, который позволит клиентскому коду понять,
   * может ли компонент иметь вложенные объекты.
   */

  public isComposite(): boolean {
    return false;
  }
  /**
   * Базовый Компонент может сам реализовать некоторое поведение по умолчанию
   * или поручить это конкретным классам, объявив метод, содержащий поведение
   * абстрактным.
   */

  public abstract operation(): string;
}

/**
 * Класс Лист представляет собой конечные объекты структуры. Лист не может иметь
 * вложенных компонентов.
 *
 * Обычно объекты Листьев выполняют фактическую работу, тогда как объекты
 * Контейнера лишь делегируют работу своим подкомпонентам.
 */

class Leaf extends Component {
  public operation(): string {
    return "Leaf";
  }
}

/**
 * Класс Контейнер содержит сложные компоненты, которые могут иметь вложенные
 * компоненты. Обычно объекты Контейнеры делегируют фактическую работу своим
 * детям, а затем «суммируют» результат.
 */

class Composite extends Component {
  protected children: Component[] = [];

  /**
   * Объект контейнера может как добавлять компоненты в свой список вложенных
   * компонентов, так и удалять их, как простые, так и сложные.
   */

  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  /**
   * Контейнер выполняет свою основную логику особым образом. Он проходит
   * рекурсивно через всех своих детей, собирая и суммируя их результаты.
   * Поскольку потомки контейнера передают эти вызовы своим потомкам и так
   * далее, в результате обходится всё дерево объектов.
   */

  public operation(): string {
    const results = [];
    for (const child of this.children) {
      console.log("chid", child.operation());
      results.push(child.operation());
    }

    return `Branch(${results.join("+")})`;
  }
}

/**
 * Клиентский код работает со всеми компонентами через базовый интерфейс.
 */

function clientCode879(component: Component) {
  // ...
  console.log(`RESULT: ${component.operation()}`);

  // ...
}

/**
 * Таким образом, клиентский код может поддерживать простые компоненты-листья...
 */
const simple = new Leaf();
console.log("Client: I've got a simple component:");
clientCode879(simple);
console.log("");

/**
 * ...а также сложные контейнеры.
 */

const tree = new Composite();
const branch1 = new Composite();

branch1.add(new Leaf());
branch1.add(new Leaf());

const branch2 = new Composite();
const branch3 = new Composite();
const branch4 = new Composite();

branch2.add(new Leaf());
branch3.add(branch2);
branch4.add(branch3);
tree.add(branch1);
tree.add(branch4);

console.log("Client: Now I've got a composite tree:");
clientCode879(tree);
console.log("");

/**
 * Благодаря тому, что операции управления потомками объявлены в базовом классе
 * Компонента, клиентский код может работать как с простыми, так и со сложными
 * компонентами, вне зависимости от их конкретных классов.
 */

function clientCode221(component1: Component, component2: Component) {
  // ...

  if (component1.isComposite()) {
    component1.add(component2);
  }
  console.log(`RESULT: ${component1.operation()}`);

  // ...
}

clientCode221(tree, simple);
