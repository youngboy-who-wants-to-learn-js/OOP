Mediator method diagram:
![](./mediator.png)

// Общий интерфейс посредников.
interface Mediator is
    method notify(sender: Component, event: string)

class AuthenticationDialog implements Mediator is
    private field title: string
    private field loginOrRegisterChkBx: Checkbox
    private field loginUsername, loginPassword: Textbox
    private field registrationUsername, registrationPassword,
                  registrationEmail: Textbox
    private field okBtn, cancelBtn: Button

    constructor AuthenticationDialog() is
        // Здесь нужно создать объекты всех компонентов, подав
        // текущий объект-посредник в их конструктор.

    // Когда что-то случается с компонентом, он шлёт посреднику
    // оповещение. После получения извещения посредник может
    // либо сделать что-то самостоятельно, либо перенаправить
    // запрос другому компоненту.
    method notify(sender, event) is
        if (sender == loginOrRegisterChkBx and event == "check")
            if (loginOrRegisterChkBx.checked)
                title = "Log in"
                // 1. Показать компоненты формы входа.
                // 2. Скрыть компоненты формы регистрации.
            else
                title = "Register"
                // 1. Показать компоненты формы регистрации.
                // 2. Скрыть компоненты формы входа.

        if (sender == okBtn && event == "click")
            if (loginOrRegister.checked)
                // Попробовать найти пользователя с данными из
                // формы логина.
                if (!found)
                    // Показать ошибку над формой логина.
            else
                // 1. Создать пользовательский аккаунт с данными
                // из формы регистрации.
                // 2. Авторизировать этого пользователя.
                // ...

                
// Классы компонентов общаются с посредниками через их общий
// интерфейс. Благодаря этому одни и те же компоненты можно
// использовать в разных посредниках.
class Component is
    field dialog: Mediator

    constructor Component(dialog) is
        this.dialog = dialog

    method click() is
        dialog.notify(this, "click")

    method keypress() is
        dialog.notify(this, "keypress")                   


// Конкретные компоненты не связаны между собой напрямую. У них
// есть только один канал общения — через отправку уведомлений
// посреднику.        

class Button extends Component is
    // ...

class Textbox extends Component is
    // ...

class Checkbox extends Component is
    method check() is
        dialog.notify(this, "check")
    // ...
