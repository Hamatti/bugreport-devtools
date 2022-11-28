# Reproduce steps for a possible bug in Firefox dev tools

Here is a small example extension, that when installed (at least temporarily, haven't tried with a signed extension) and toolbar icon is clicked, increases the value of "example" key in `browser.storage.local` by one and prints the old and new value to console.

## The problem & repro steps

1. Load the extension to a Firefox instance (I tested with 107.0).
2. Go to [about:debugging](about:debugging#/runtime/this-firefox) and select Inspect for the new extension, named "Example for storage.local"
3. Go to Storage tab and select this extension's storage.
4. Click on the extension button a few times in the browser.
5. Click the Refresh icon

**What should happen?**

I'd expect the storage to be updated to display the current value.

**What happens?**

Nothing, it does not refresh.

Closing the Developer Tools and reopening it will update the value correctly.