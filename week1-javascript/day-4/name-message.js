/* 
.name
The type of error.
Examples
"TypeError"
"ReferenceError"
"SyntaxError"
"ValidationError" (custom)
Why it matters
Lets you classify errors
Useful for conditional handling (e.g., retry vs fail fast)


.message
What it tells you
A human-readable explanation of what went wrong.
Examples
"Cannot read properties of undefined"
"User must be 18+"
"x is not defined"

.stack
Why it matters
Shown to developers (logs)
Sometimes sanitized and shown to users

What it tells you
The execution path that led to the error.
Includes
Function names
File names
Line numbers
Call order (top → bottom)

Real-world idea
“How did the app reach this failure point?”


Practical debugging example (conceptual)
.name → tells what kind of error
.message → tells what exactly failed
.stack → tells where and how it failed
*/