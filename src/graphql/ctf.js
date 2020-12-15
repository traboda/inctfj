

export const statusFetchQuery = `
{
  frontendmanagement{
    status
    details
  }
}`;

export const SubmitFlagMutation = `
mutation ($flag: String!){
  flag_submit(input: $flag)
}`;

export const myQuery = `{
  me{
    username
    score
    solved
    {
      challenge
      {
        ID
      }
    }
  }
}`;

export const challengesQuery = `{
  challenges: challenge
  {
    ID
    name
    description
    categories: category
    solves
    points: value
    description
    tags
    file
  }
}`;