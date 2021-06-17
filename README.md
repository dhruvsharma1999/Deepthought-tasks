# Deepthought Technical Assessment

## Notes to Recruiters

> Being an aspiring Front-end engineer, I focus both on the funcationality and asthetics i.e User Interface of the website, weather it's a small project or a big because I belive both are important for an excellent webapps.

> Also, I belive Documentation of your work is as important as the work, hence I am documenting all my projects to make it efficient and well structures, hence I request requiters to please reade all the ReadME file, to better understand my approach towards the projects.

---

### The things I will be including in this repository are:

1. Repo of all the 3 tasks:

   1. Giphy Gif Search Engine
   1. Grossries Basket App
   1. Step Wizrd App

2. Live Links to All the Projects.
3. My Learning Outcomes from All three Projects.
4. Resource that came in Handy.
5. Conclusion.

## Task One Giphy Search Engine

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

## Task Two Basket App

| Sl.No | Template Name | Live/ Code                                                                                                                           |
| ----- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 01    | Basket App    | [code](https://github.com/dhruvsharma1999/Deepthought-tasks/tree/main/basket-app)/ [Live](https://basket-grossries-app.netlify.app/) |

![Giphy App](/img/grossries.png)

### Learning Outcomes and Thought process

- I have already implemented this task, while I was learning react few months back, hence it was a brush for me, this was the most complex task out of all.
- useReducer is always a very confusing topic, but this project include the usage of this hook, I was able to understanf useReducer at a practical level.
- React portals never came in handy in any of my recent projects, hence it was good learning opporunity.
- Dues to time limit, I was not able to use useContextAPI for passing all the props, This can be a **further improvement point** for this project.
- I used module.css files, for having style sheet in coordination to the Component files.

### Approach

- Components are divided into Cart, Grossries, Layout, UI, I will start with basic.
- UI Component contains basic UI elements which are used in many places of the app.
- Layout Component contains the stick Header and cart component.
- Cart Component contains the Cart, to show the items put in cart by the user and present the total amount.
- Grossries, apart from static list of Grossries, main functionality of Grossries Components is to add the item in cart and increment the amount (X) of same Item.

### Resources

- [React Hooks Playlist](https://www.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A)
- [React Portals Article](https://medium.com/hackernoon/using-a-react-16-portal-to-do-something-cool-2a2d627b0202)
- [Course For understanding concepts in deapth](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## Task Three Step Wizard

| Sl.No | Template Name    | Live/ Code                                                                                                                                  |
| ----- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 01    | Step Wizard Form | [code](https://github.com/dhruvsharma1999/Deepthought-tasks/tree/main/step-wiz)/ [Live](https://simple-wizard-step-form-react.netlify.app/) |

![Giphy App](/img/wizard.png)

### Learning Outcomes and Thought process

- This is the task, I did with my own approach with using react router.
- I did not use NPM wizard package because I wanted to implement it in router, as I was a good opportunity to brush up the react router skills.
- The only thing I was not able to acheive, because of time duration is form validation, this can be noted as **improvement point** for this project.
- I intend to add this functionality in upcoming days to this project.
- I brushed up some basic routing skills with the help of this project.

### Approach

- Very straight forward approach, the code is very messy, because I first tried to use many packages, but in the end decide to do it on my own.
- I have simple 5 form pages, 1 about page.
- The next button renders the next form component and previous renders the lst form component, the routing works in syncronous manner.

### Resources

- [React Router Explanation with Fetch Calls](https://www.youtube.com/watch?v=Law7wfdg_ls&list=PLfCYvVaTsn8d20NVyCJIJCEeqNVBlQh5k&index=3&t=1621s)

## Task Four

**How do you make sure that the user remains authenticated on page refresh while using Context API State Management?**

> First approach is to use JSON Web Tokens (JWT) on front end that queries the server for a JWT in the local storage of your browser (local storage, session storage, cookies). This reasonable secure approach from a front end side.

```javascript
localStoage.setItem(LoginState, Token);
```

## Task Five

**Given the code defined above, can you identify two problems?**

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    // set the default internal state
    this.state = {
      clicks: 0,
    };
  }
  componentDidMount() {
    this.refs.myComponentDiv.addEventListener("click", this.clickHandler);
  }
  componentWillUnmount() {
    this.refs.myComponentDiv.removeEventListener("click", this.clickHandler);
  }
  clickHandler() {
    this.setState({
      clicks: this.clicks + 1,
    });
  }
  render() {
    let children = this.props.children;
    return (
      <div className="my-component" ref="myComponentDiv">
        <h2>My Component ({this.state.clicks} clicks})</h2>
        <h3>{this.props.headerText}</h3>
        {children}
      </div>
    );
  }
}
```

> 1. **this** Must call super constructor in derived class before accessing 'this' or returning from derived constructor.
> 2. The clickHandler event is never called to increment the click counter.
