const UserService = require('./../../app/services/UserService')

describe("Test for user service", () => {
    test('1. create a new User using using the UserService', () => {

      const user = UserService.create(1,"Drojann","Alejandro")

      expect(user.id).toBe(1)
      expect(user.username).toBe("Drojann")
      expect(user.name).toBe("Alejandro")
      expect(user.bio).not.toBeUndefined()
    });

    test('2. Get all user data in a list', () => {

        const user = UserService.create(1,"Drojann","Alejandro")
        const userInfoInList = UserService.getInfo(user)
  
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("Drojann")
        expect(userInfoInList[2]).toBe("Alejandro")
        expect(userInfoInList[3]).toBe("Sin Bio")
    });

    test('3. Update username', () => {

        const user = UserService.create(1,"Drojann","Alejandro")  
        UserService.updateUserUsername(user, "Alex")
        expect(user.username).toBe("Alex")
    });

    test('4. Given a list of users give me the list of usernames', () => {

        const user1 = UserService.create(1,"Drojann","Alejandro")
        const user2 = UserService.create(2,"Drojann0","Alejandro")  
        const user3 = UserService.create(3,"Drojan","Alejandro")  
        const usernames = UserService.getAllUsernames([user1,user2,user3])  
        expect(usernames).toContain("Drojann")
        expect(usernames).toContain("Drojann0")
        expect(usernames).toContain("Drojan")
    });
})     