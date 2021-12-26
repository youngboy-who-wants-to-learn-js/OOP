Snapshot method diagram:
![](./memento.png)

// Класс создателя должен иметь специальный метод, который
// сохраняет состояние создателя в новом объекте-снимке.
class Editor is
    private field text, curX, curY, selectionWidth

    method setText(text) is
        this.text = text

    method setCursor(x, y) is
        this.curX = x
        this.curY = y

    method setSelectionWidth(width) is
        this.selectionWidth = width

    method createSnapshot():Snapshot is
        // Снимок — неизменяемый объект, поэтому Создатель
        // передаёт все своё состояние через параметры
        // конструктора.
        return new Snapshot(this, text, curX, curY, selectionWidth)

// Снимок хранит прошлое состояние редактора.
class Snapshot is
    private field editor: Editor
    private field text, curX, curY, selectionWidth

    constructor Snapshot(editor, text, curX, curY, selectionWidth) is
        this.editor = editor
        this.text = text
        this.curX = x
        this.curY = y
        this.selectionWidth = selectionWidth

    // В нужный момент владелец снимка может восстановить
    // состояние редактора.
    method restore() is
        editor.setText(text)
        editor.setCursor(curX, curY)
        editor.setSelectionWidth(selectionWidth)        


// Опекуном может выступать класс команд (см. паттерн Команда).
// В этом случае команда сохраняет снимок состояния объекта-
// получателя, перед тем как передать ему своё действие. А в
// случае отмены команда вернёт объект в прежнее состояние.
class Command is
    private field backup: Snapshot

    method makeBackup() is
        backup = editor.createSnapshot()

    method undo() is
        if (backup != null)
            backup.restore()
    // ...        