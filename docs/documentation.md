# Project Overview
+ Goal: Visualize the process of how compilers convert source code into IR and assembly.

# UI design
+ Main Area: 1 header, 1 text box for displaying original code, 1 text box for displaying syntax, 1 text box for displaying target code.
+ State Panel: A panel for each compiler stage (Idle, Generating IR, Generating RISC-V)
+ Control Panel: A panel for controlling the process (e.g. Start compilation, reset, etc.).

# Conventions

## Commit 

### Commit Often, But with Meaning
+ **Small, Frequent** Commits: Aim to commit changes frequently but keep them small and focused. Each commit should represent a single, logical change or addition to the project (e.g., adding a feature, fixing a bug, or refactoring code).
+ **Avoid Huge** Commits: Large commits that contain multiple unrelated changes are harder to understand and review. Break them into smaller, meaningful commits.

### Write Descriptive Commit Messages
+ **Start with an Imperative Verb**: The commit message should describe what the commit does, not what it did. For example:
> "Add function to handle file input" (good)

> "Added function to handle file input" (less ideal)

### Be Concise but Informative
+ The message should give a clear idea of what the commit changes. If more detail is needed, use a brief headline (50-72 characters) followed by an optional body for explanation.


## HTML

### HTML Code Structure

#### In the `<head>` Section
+ Place Scripts that don't interact with DOM elements directly.
+ This can cause the page to load slower, as the browser waits for the script to load before rendering the page.
+ For DOM-dependent scripts: Place them just before the closing `</body>` tag. This ensures that all the HTML elements are loaded before the script runs.

## JavaScript

### Naming Conventions

#### Functions
+ Use verbs to clearly indicate what the function does. For example, loadCompilerData (loads data), visualizeAST (visualizes the AST).
+ Keep function names consistent and descriptive. Functions that perform similar tasks (e.g., visualizing different stages) should follow similar naming patterns like visualizeIR, visualizeAssembly.

#### Variables
+ Use camelCase for variables (e.g., sourceData, irData).
+ Name variables meaningfully. For example, astData for data representing the AST or svgContainer for an SVG element.

#### Files
+ Use file names that reflect the responsibility of the file/module. For example, dataLoader.js is for data management, visualization.js is for rendering the visual elements, and main.js is the entry point that coordinates everything.


### DOM
+ When using `querySelector`, `[]` selects all elements that have the specified attribute, regardless of the value.
+ Without `[]`, the selector refers to an element name.