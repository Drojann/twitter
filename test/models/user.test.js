const User = require('../../app/models/user')

describe("Unit test for user class", () => {
    test('create an User object', () => {

      const user = new User(1,"Drojann","Alejandro","bio")

      expect(user.id).toBe(1)
      expect(user.username).toBe("Drojann")
      expect(user.name).toBe("Alejandro")
      expect(user.bio).toBe("bio")
      expect(user.dateCreated).not.toBeUndefined()
      expect(user.lastUpdated).not.toBeUndefined()
    });

    test('create an User object', () => {

      const user = new User(1,"Drojann","Alejandro","bio")

      expect(user.getUsername).toBe("Drojann")
      expect(user.getBio).toBe("bio")
      expect(user.dateCreated).not.toBeUndefined()
      expect(user.lastUpdated).not.toBeUndefined()
  });

    test('Add getters', () => {

      const user = new User(1,"Drojann","Alejandro","bio")

      expect(user.getUsername).toBe("Drojann")
      expect(user.getBio).toBe("bio")
      expect(user.dateCreated).not.toBeUndefined()
      expect(user.lastUpdated).not.toBeUndefined()
  });

    test('Add setters', () => {

      const user = new User(1,"Drojann","Alejandro","bio")

      user.setUsername = "Drojann"
      expect(user.username).toBe("Drojann")

      user.setBio = "New bio"
      expect(user.bio).toBe("New bio")


      
});
})    