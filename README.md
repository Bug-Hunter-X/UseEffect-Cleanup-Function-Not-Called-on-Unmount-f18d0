# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common issue with React's `useEffect` hook where the cleanup function isn't called when the component unmounts. This can lead to memory leaks or unexpected side effects.

## Bug Description

The `useEffect` hook is used to perform side effects in a functional component.  The issue is that under certain conditions the cleanup function inside `useEffect` might not execute during unmount.  This will be demonstrated in the example code. 

## Solution

The solution often involves careful review of how the component is mounted and unmounted, particularly looking at parent components and conditional rendering.  The provided solution adds a check to ensure that the cleanup function executes correctly.  Additional logging is added to track component lifecycle and verify the cleanup execution.