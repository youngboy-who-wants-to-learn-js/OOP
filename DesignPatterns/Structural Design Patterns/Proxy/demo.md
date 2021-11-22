Proxy method diagram:
![](./proxy.png)

Интерфейс удалённого сервиса.
interface ThirdPartyYouTubeLib is
    method listVideos()
    method getVideoInfo(id)
    method downloadVideo(id)

Конкретная реализация сервиса. Методы этого класса
запрашивают у YouTube различную информацию. Скорость запроса
зависит не только от качества интернет-канала пользователя,
но и от состояния самого YouTube. Значит, чем больше будет
вызовов к сервису, тем менее отзывчивой станет программа.
class ThirdPartyYouTubeClass implements ThirdPartyYouTubeLib is
    method listVideos() is
        // Получить список видеороликов с помощью API YouTube.

    method getVideoInfo(id) is
        // Получить детальную информацию о каком-то видеоролике.

    method downloadVideo(id) is
        // Скачать видео с YouTube.    

С другой стороны, можно кешировать запросы к YouTube и не
повторять их какое-то время, пока кеш не устареет. Но внести
этот код напрямую в сервисный класс нельзя, так как он
находится в сторонней библиотеке. Поэтому мы поместим логику
кеширования в отдельный класс-обёртку. Он будет делегировать
запросы к сервисному объекту, только если нужно
непосредственно выслать запрос.

class CachedYouTubeClass implements ThirdPartyYouTubeLib is
    private field service: ThirdPartyYouTubeLib
    private field listCache, videoCache
    field needReset

    constructor CachedYouTubeClass(service: ThirdPartyYouTubeLib) is
        this.service = service

    method listVideos() is
        if (listCache == null || needReset)
            listCache = service.listVideos()
        return listCache

    method getVideoInfo(id) is
        if (videoCache == null || needReset)
            videoCache = service.getVideoInfo(id)
        return videoCache

    method downloadVideo(id) is
        if (!downloadExists(id) || needReset)
            service.downloadVideo(id)

Класс GUI, который использует сервисный объект. Вместо
реального сервиса, мы подсунем ему объект-заместитель. Клиент
ничего не заметит, так как заместитель имеет тот же
интерфейс, что и сервис.

class YouTubeManager is
    protected field service: ThirdPartyYouTubeLib

    constructor YouTubeManager(service: ThirdPartyYouTubeLib) is
        this.service = service

    method renderVideoPage(id) is
        info = service.getVideoInfo(id)
        // Отобразить страницу видеоролика.

    method renderListPanel() is
        list = service.listVideos()
        // Отобразить список превьюшек видеороликов.

    method reactOnUserInput() is
        renderVideoPage()
        renderListPanel()

Конфигурационная часть приложения создаёт и передаёт клиентам
объект заместителя.
class Application is
    method init() is
        YouTubeService = new ThirdPartyYouTubeClass()
        YouTubeProxy = new CachedYouTubeClass(YouTubeService)
        manager = new YouTubeManager(YouTubeProxy)
        manager.reactOnUserInput()        
