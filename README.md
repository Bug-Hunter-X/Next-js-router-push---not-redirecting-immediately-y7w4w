# Next.js router.push() immediate redirection issue

This repository demonstrates a subtle bug in Next.js where `router.push()` doesn't redirect immediately when other logic follows within the same function.  The redirection occurs, but subsequent code executes before the navigation, leading to unexpected behavior.

## The Problem
The `bug.js` file shows a scenario where clicking the button is intended to redirect to '/my-route'. However, code after `router.push()` runs before the redirection, resulting in undesired side effects.

## Solution
The `bugSolution.js` file presents a solution using `router.push()`'s callback function. This ensures that subsequent operations occur only after the redirection is complete.

## How to reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button and observe the behavior.

This repository serves as a clear example of a common yet easily overlooked issue in Next.js development. The solution showcases the proper usage of the callback to avoid such problems.