# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
====================================================================
               INTERN GIT WORKFLOW & BEGINNER GUIDE
====================================================================

Welcome to the project! This guide explains how to use Git and GitHub 
for your daily work on your assigned branch.


1. WHAT IS 'origin', 'HEAD', AND BRANCHES
--------------------------------------------------------------------
What is 'origin'?
- 'origin' is the default NICKNAME (alias) Git gives to your central 
  repository URL hosted on GitHub (https://github.com/SDEAshutosh-webdev/interns.git).
- Instead of typing the long GitHub Web URL every time, Git lets you use 
  the nickname 'origin' (e.g., 'git push origin Snehal').
- To check what URL 'origin' points to, run:
    git remote -v

What is 'HEAD'?
- 'HEAD' is a pointer/bookmark in Git that represents WHERE YOU ARE 
  currently working in your project right now.
- Think of 'HEAD' like a cursor: when you run 'git checkout Snehal', 
  Git moves 'HEAD' to point to the 'Snehal' branch.

Branch Types:
- 'main': The primary branch containing production/stable code.
- 'your-branch-name' (e.g., 'rina', 'minakshi', 'Snehal'): 
  Your personal working branch living on your local computer.
- 'origin/your-branch-name': 
  The read-only copy of your branch uploaded to GitHub ('origin' = GitHub).


2. YOUR DAILY INTERN WORKFLOW
--------------------------------------------------------------------

Step 1: Switch to your assigned branch
  Command:
    git checkout <your-branch-name>
  Example:
    git checkout Snehal

Step 2: Make changes to your code in your editor (VS Code).

Step 3: Check which files you changed
  Command:
    git status

Step 4: Save (Commit) your changes locally
  Commands:
    git add .
    git commit -m "Added new feature / updated components"

Step 5: Push your branch changes to GitHub
  Command:
    git push origin <your-branch-name>
  Example:
    git push origin Snehal


3. HOW TO GET THE LATEST MAIN CODE INTO YOUR BRANCH
--------------------------------------------------------------------
Before submitting your code, make sure your branch has the latest updates from main:

  Commands:
    1. git checkout <your-branch-name>
    2. git fetch origin
    3. git merge origin/main


4. COMPLETE STEP-BY-STEP GUIDE TO CREATE A PULL REQUEST (PR)
--------------------------------------------------------------------
Do NOT merge your code directly into 'main'. Always create a Pull Request:

  Step 1: Push your latest local branch work to GitHub
    Command:
      git push origin <your-branch-name>

  Step 2: Open GitHub in your browser
    Go to: https://github.com/SDEAshutosh-webdev/interns

  Step 3: Start the Pull Request
    Option A: Click the yellow banner "Compare & pull request" at top.
    Option B: Click the "Pull requests" tab -> Green "New pull request" button.

  Step 4: Select the Branches
    - Base Branch (Target): 'main'  <--- (Where code should go)
    - Compare Branch (Source): '<your-branch-name>'  <--- (Your branch)

  Step 5: Review changes
    Scroll down to the "Files changed" tab to verify all modified code is correct.

  Step 6: Submit
    - Write a clear Title (e.g., "Added Button component").
    - Write a short Description of what was built/changed.
    - Assign your team lead as a Reviewer.
    - Click the green "Create pull request" button.


5. EXTRA USEFUL GIT COMMANDS (STASH, FETCH, LOG, DIFF)
--------------------------------------------------------------------

A. GIT STASH (Temporarily hide uncommitted work)
   Useful when you want to switch branches without committing half-done code.

   - Save uncommitted changes temporarily:
       git stash

   - Restore your stashed changes back:
       git stash pop

   - View list of stashed items:
       git stash list

B. GIT FETCH vs GIT PULL
   - git fetch origin:
       Downloads all branch info & commits from GitHub, but DOES NOT 
       modify your working code files. Safe for inspecting updates.
   
   - git pull origin <branch>:
       Downloads AND automatically merges remote changes into your 
       active local branch.

C. GIT LOG & GIT DIFF
   - See recent commits:
       git log -n 5

   - See exact line changes before committing:
       git diff


6. COMMON ACCIDENTS & HOW TO FIX THEM
--------------------------------------------------------------------

Issue A: You pulled another branch by mistake into your branch
  Fix: Reset your branch back to GitHub's clean copy:
    git reset --hard origin/<your-branch-name>

Issue B: Forgot which branch you are on
  Fix:
    git branch
    (The branch marked with an asterisk * is your current active branch)


