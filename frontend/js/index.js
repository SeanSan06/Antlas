const createEventButton = document.querySelector("#create-event-button");
createEventButton.addEventListener("click", () => {
    // Capture the input, log them, and clear the text box fields
    const eventName = document.querySelector("#event-name").value.trim();
    const userName = document.querySelector("#host-name").value.trim();
    const eventTime = document.querySelector("#event-time").value.trim();
    const eventLocation = document.querySelector("#event-location").value.trim();

    console.log("Event Created:");
    console.log("Event Name:", eventName);
    console.log("User Name:", userName);
    console.log("Time:", eventTime);
    console.log("Location:", eventLocation);

    document.querySelector("#event-name").value = "";
    document.querySelector("#host-name").value = "";
    document.querySelector("#event-time").value = "";
    document.querySelector("#event-location").value = "";
});
