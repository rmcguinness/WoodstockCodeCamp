# Ryan's Journal

*2023 May 3*

Today I worked with the team in the project manager role and complete a story in the backlog for creating initial project.
The commands for creating the project for React using Vite are as follows:

```shell
# Make a directory of the WCC projects
mkdir -p ~/Projects/wcc

# Change to that directory
cd ~/Projects/wcc

# Clone the existing repository
git clone git@github.com:rmcguinness/WoodstockCodeCamp.git

# Create and use the branch
git checkout -b project_setup

# Go into that directory and create a base site using the vite template:
npm create vite@latest

# Directory .
# Remove all files - Y
# Select React
# Select JavaScript

# Commit the changes to the branch
git commit -a

# Push the changes to GitHub with the new branch
git --set-upstream origin project_setup

# Open GitHub and create a Pull Request
google-chrome https://www.github.com

# Open Visual Studio Code and start editing
code .
```

