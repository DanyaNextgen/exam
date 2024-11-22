export function todos() {
    const div = document.createElement("div"),
        text_div = document.createElement("div"),
        checkbox = document.createElement("input"),
        title = document.createElement("p"),
        text = document.createElement("p"),
        day = document.createElement("p");

    div.classList.add("todos_item")
    text_div.classList.add("text_item")
    checkbox.type = "checkbox"
    title.classList.add("title")
    text.classList.add("text")
    day.classList.add("day")

    text_div.append(title, text, day)
    div.append(checkbox, text_div)
    return div
}