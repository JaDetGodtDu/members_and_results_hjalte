function construct(list, container, itemRenderer) {
  const ListRenderer = {
    render() {
      const table = container.querySelector("tbody");
      table.innerHTML = "";
      for (const item of list) {
        const html = itemRenderer.render(item)
        table.insertAdjacentHTML("beforeend", html);
      }
    },
  };
  return ListRenderer;
}

export { construct };
