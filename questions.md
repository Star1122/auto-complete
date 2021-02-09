## What is the difference between Component and PureComponent? give an example where it might break my app.
Component will be re-rendered everytime when its parent component is rendered but PureComponent is only rendered when its state and props are changed, regardless of its parent is re-rendered or not.

## Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

## Describe 3 ways to pass information from a component to its PARENT.
1. Parent can pass props method to children. That method will accept a parameter and set it in the parent's state. Now child can invoke that method with its state.
2. Use react context.
3. Use 3rd party libraries like redux.

## Give 2 ways to prevent components from re-rendering.
1. Return false from shouldComponentUpdate
2. Use React.Memo (or useMemo hook)

## What is a fragment and why do we need it? Give an example where it might break my app.
React Fragment is a component that can group multiple components in order to use inside the render method but it does not take place inside the DOM when it is rendered.
Using React Fragment could bring confusion in CSS styling.

## Give 3 examples of the HOC pattern.


## What's the difference in handling exceptions in promises, callbacks and async...await.
In Promise/Callbacks, exceptions are caught from .catch callback.
In async/await, exception are caught from try...catch statement.

## How many arguments does setState take and why is it async.
setState takes 2 parameters - first is the object to replace relevant state value, second is the callback which is invoked after the state is updated.
setState is async because it re-renders the component. If it is synchronous, component will be unresponsive until the state is updated.

## List the steps needed to migrate a Class to Function Component.
Update the state object using useState hook.
Update all life cycle methods with useEffect hook.
Move the content from render function to return statement.

## List a few ways styles can be used with components.
Use inline style.
Use styled component.
Use css-in-js.

## How to render an HTML string coming from the server.
We can use dangerouslySetInnerHTML attribute.