# Answers

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a frontend library for JavaScript, the problem it solves is the production of large scale applications. React allows constant retrieval of (potentially) consistently changing data without having to reload a page, while still allowing the developer to implement vanilla JavaScript into the app.

- [ ] What does it mean to _think_ in react?

To think in react is to attempt to think like an app, you want to visualize the data being returned to you, and use said data to mockup the rest of the application based on how that data is represented.

- [ ] Describe state.

State is where our data is coming from, and it 'lives' within a component.

- [ ] Describe props.

Props are properties that get passed to a component, much like parameters to a function.

- [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is something that alters things outside of the direct scope of the function thats being called. To sync an effect to state or prop changes, you pass a dependency array as the second argument in the use effect hook.
