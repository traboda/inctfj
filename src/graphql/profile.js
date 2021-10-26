
export const queryMe = `
{
  me
  {
    username
    fullname
    email
    age
    gender
    institution
    contact
    place
    district
    state
  }
}`;

export const updateProfileMutation = `
mutation updateProfile($input: useredit){
  updateUser(input: $input)
}`;