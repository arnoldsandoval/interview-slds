# SLDS Test Exercise

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A simple one screen shopping list component bootstrapped with Create React App.

## Requirements

Complete instructions can be found in the [SLDS test instructions prompt](prompt/slds-test-instructions.md). A summary of the deliverables follows:

> - A url with your working solution.
> - A short document highlighting your approach (see Discussion below).
> - A zip file with the source code of your project.
> - A stand-alone component that can be found in an app with other components. It may be used in a variety of contexts, for all users, so it should be adaptable to display in different UI regions. The region widths can range from 320px to 1024px.

## Discussion

### 1. What were your priorities in implementing this design?

- Create an inclusive experience. One that doesnt treat `a11y` as an after thought.
- Create a mini design system that is self contaned in a directory acting as a pseudo "package" called `aui` (pronounced "oowee", short for arnie ui).
- Implement `prettier`, `eslint` with `standard` and `eslint-plugin-jsx-a11y`.
- Use React's new-ish [hooks](https://reactjs.org/docs/hooks-intro.html) and [context](https://reactjs.org/docs/context.html) APIs. I have not yet used these React features, but I figured this would be a good project to get my feet wet with it!
- **No media queries 😱**: In order to utilize the component in a varity of contexts (parent container sizes) this component makes use of [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).\*
- Create a `WidthProvider` to allow the user to quickly toggle the container size so that they can see `ResizeObserver` do its magic.

**\*⚠️ Note:** This project uses `resize-observer-polyfill` and is best viewed in Chrome.

### 2. Is there a piece you really wish you had gotten to, but ran out of time?

#### A. Futher implementation of aria attributes & semantic tags, more thorough screen reader testing

I took care to implement aria-tags where apropriate. I would have liked to have implemented `aria-live`, but didnt want to degrade the experience. I understand it's purpose at a high level, but have no personal experience with it (yet).

#### B. Improved outline, focus and hover styles

I would have liked to have been more thoughtful about different states. In the currently implementation I do a catch-all `outline`, while I believe this is a fine solution I would have liked to have done something a little nicer, perhaps with transitions.

#### C. ResizeObserver higher-order component

I was really excited about finally using `ResizeObserver`. I considered implementing a higher-order component that could be used with hooks to dispatch resize actions. From a performance perspective it is recommended that you use one ResizeObserver, this pattern would help with that. I havent given this a ton of thought beyond whats written here, but in a larger-scale application it does seem like something worth exploring.

### 3. What were your concerns for supporting all users with this particular design?

My concerns were primarily surrounding accessibility and performance.

From the start of the exercise I did a quick check for color contrast concerns, and planned my approach for how to handle the HTML structure of the ShoppingList information.

I wanted to be sure that the tabular data in the `ShoppingList` was clearly represented in that way to screen readers. I moved away from using the HTML table tag because while it is tabular data, in different contexts it feels and reads more like a list. Another factor in the decision to not use the `table` tag was time, tables provide default styling which I felt would slow me down.

I was also concerned about performance with ResizeObserver's polyfill but quickly determined that it would be a fine solution to the container query problem. To validate this approach, I wrote a [quick prototype](https://codepen.io/arnoldsandoval/pen/VNBEjE). I am quite happy with how it turned out!

## Thank you

If you read this whole thing, thank you! 🌟
