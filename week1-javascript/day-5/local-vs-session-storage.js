/* 
localStorage.setItem("theme", "dark");
sessionStorage.setItem("step", "2");
localStorage and sessionStorage are both browser storage mechanisms used to store key–value data on the client side, but they differ mainly in lifetime and scope. Data stored in localStorage persists even after the browser or tab is closed and is shared across all tabs of the same origin, making it suitable for long-term data like user preferences or themes. In contrast, sessionStorage stores data only for the duration of a single browser tab; the data is cleared automatically when the tab is closed and is not shared with other tabs, which makes it ideal for temporary data such as form steps, filters, or short-lived session states.
*/