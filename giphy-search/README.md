# Task One Giphy Search Engine

| Sl.No | Template Name | Live/ Code                                                                                                                         |
| ----- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 01    | Giphy Search  | [code](https://github.com/dhruvsharma1999/Deepthought-tasks/tree/main/giphy-search)/ [Live](https://giphy-gif-search.netlify.app/) |

![Giphy App](/img/giphy.png)

### Learning Outcomes and Thought process

- This was a easy task in comparison to other, but still practiced few skiils
- Created Developer Giphy API to fetch the data.
- Given to simplicity of project, I did eveything in one file and imported that to App component.

![Giphy App](/img/gifgiphymodel.png)

### Approach

- A form input to collect the user input.
- On Enter or Submit key, passing the input to API call, which is called in useEffect.
- Fetch async await function to get search Endpoint, passing the user searched as the endpoint.
- Converting the data to JSON and rendering it to screen using map method.

### Resources

- [React Router Explanation with Fetch Calls](https://www.youtube.com/watch?v=Law7wfdg_ls&list=PLfCYvVaTsn8d20NVyCJIJCEeqNVBlQh5k&index=3&t=1621s)
