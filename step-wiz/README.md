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
