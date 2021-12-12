Iterator method diagram:
![](./iterator.png)

// Общий интерфейс коллекций должен определить фабричный метод
// для производства итератора. Можно определить сразу несколько
// методов, чтобы дать пользователям различные варианты обхода
// одной и той же коллекции.
interface SocialNetwork is
    method createFriendsIterator(profileId):ProfileIterator
    method createCoworkersIterator(profileId):ProfileIterator

// Конкретная коллекция знает, объекты каких итераторов нужно
// создавать.
class Facebook implements SocialNetwork is
    // ...Основной код коллекции...

    // Код получения нужного итератора.
    method createFriendsIterator(profileId) is
        return new FacebookIterator(this, profileId, "friends")
    method createCoworkersIterator(profileId) is
        return new FacebookIterator(this, profileId, "coworkers")    

// Общий интерфейс итераторов.
interface ProfileIterator is
    method getNext():Profile
    method hasMore():bool       

// Конкретный итератор.
class FacebookIterator implements ProfileIterator is
    // Итератору нужна ссылка на коллекцию, которую он обходит.
    private field facebook: Facebook
    private field profileId, type: string

    // Но каждый итератор обходит коллекцию, независимо от
    // остальных, поэтому он содержит информацию о текущей
    // позиции обхода.
    private field currentPosition
    private field cache: array of Profile

    constructor FacebookIterator(facebook, profileId, type) is
        this.facebook = facebook
        this.profileId = profileId
        this.type = type

    private method lazyInit() is
        if (cache == null)
            cache = facebook.socialGraphRequest(profileId, type)

    // Итератор реализует методы базового интерфейса по-своему.
    method getNext() is
        if (hasMore())
            currentPosition++
            return cache[currentPosition]

    method hasMore() is
        lazyInit()
        return currentPosition < cache.length    


// Вот ещё полезная тактика: мы можем передавать объект
// итератора вместо коллекции в клиентские классы. При таком
// подходе клиентский код не будет иметь доступа к коллекциям, а
// значит, его не будут волновать подробности их реализаций. Ему
// будет доступен только общий интерфейс итераторов.
class SocialSpammer is
    method send(iterator: ProfileIterator, message: string) is
        while (iterator.hasMore())
            profile = iterator.getNext()
            System.sendEmail(profile.getEmail(), message)


// Класс приложение конфигурирует классы, как захочет.
class Application is
    field network: SocialNetwork
    field spammer: SocialSpammer

    method config() is
        if working with Facebook
            this.network = new Facebook()
        if working with LinkedIn
            this.network = new LinkedIn()
        this.spammer = new SocialSpammer()

    method sendSpamToFriends(profile) is
        iterator = network.createFriendsIterator(profile.getId())
        spammer.send(iterator, "Very important message")

    method sendSpamToCoworkers(profile) is
        iterator = network.createCoworkersIterator(profile.getId())
        spammer.send(iterator, "Very important message")        