# slot-lifecycle-repro

This repo is made to highlight the execution order of stencil lifecycle methods. In particular, slots.

Throughout the repo blocking code has been added to simulate long-running tasks within specific hooks. These seem to impact when the hooks are called and thus the order of rendering. More testing is needed to get a better understanding of what is happening and why. 

## Current Output

!["Current Output"]('./readme-assets/currentOutput.png')

