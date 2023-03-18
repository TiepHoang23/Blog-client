const { localStorage } = global.window;

const auth = {
  login(data) {
    const { _id,
      dateOfBirth,
      firstName,
      lastName,
      gender,
      height,
      weight,
      role,
      isProfileCompleted,
      address } = data;

      localStorage.userId = _id;
      localStorage.firstName = firstName;
      localStorage.lastName = lastName;
      localStorage.height = height;
      localStorage.weight = weight
      localStorage.birthday = dateOfBirth;
      localStorage.isProfileCompleted = isProfileCompleted;  
      localStorage.address = address,
      localStorage.role = role

  },


  userId(){
    return localStorage.id
  },

  userProfile() {
    return localStorage.Profile;
  },
  logout() {
    localStorage.clear();
  },
};

export default auth;